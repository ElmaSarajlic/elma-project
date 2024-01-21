package ba.edu.ibu.elma.rest.controllers;

import ba.edu.ibu.elma.core.model.User;
import ba.edu.ibu.elma.core.service.AuthService;
import ba.edu.ibu.elma.core.service.UserService;
import ba.edu.ibu.elma.rest.dto.PasswordRequestDTO;
import ba.edu.ibu.elma.rest.dto.UserDTO;
import ba.edu.ibu.elma.rest.dto.UserRequestDTO;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@SecurityRequirement(name = "JWT Security")
public class UserController {

    private final UserService userService;
    private final AuthService authService;


    public UserController(UserService userService,  AuthService authService) {
        this.userService = userService;
        this.authService = authService;
    }


    @RequestMapping(method = RequestMethod.GET, path = "/")
    @PreAuthorize("hasAnyAuthority( 'REGISTERED', 'ADMIN')")
    public ResponseEntity<List<UserDTO>> getUsers() {
        return ResponseEntity.ok(userService.getUsers());
    }



    @RequestMapping(method = RequestMethod.GET, path = "/{id}")
    @PreAuthorize("hasAnyAuthority('REGISTERED', 'ADMIN')")
    public ResponseEntity<UserDTO> getUserById(@PathVariable String id) {
        return ResponseEntity.ok(userService.getUserById(id));
    }

    @PreAuthorize("hasAuthority( 'REGISTERED', 'ADMIN')")
    @RequestMapping(method = RequestMethod.PUT, path = "/{id}")
    public ResponseEntity<UserDTO> updateUser(@PathVariable String id, @RequestBody UserRequestDTO user) {
        return ResponseEntity.ok(userService.updateUser(id, user));
    }

    @RequestMapping(method = RequestMethod.DELETE, path = "/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Void> deleteUser(@PathVariable String id) {
        userService.deleteUser(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @RequestMapping(method = RequestMethod.GET, path = "/filter")
    @PreAuthorize("hasAnyAuthority('REGISTERED', 'ADMIN')")
    public ResponseEntity<UserDTO> filterUser(@RequestParam String email) {
        return ResponseEntity.ok(userService.filterByEmail(email));
    }


    @RequestMapping(method = RequestMethod.PUT, path = "/password/{id}")
    public ResponseEntity<String> updatePassword(@PathVariable String id, @RequestBody PasswordRequestDTO passwordUpdateRequest) {
        try {
            authService.updateUserPassword(id, passwordUpdateRequest);
            return new ResponseEntity<>("Password updated successfully", HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}