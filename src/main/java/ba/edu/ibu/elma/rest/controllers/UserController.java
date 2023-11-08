package ba.edu.ibu.elma.rest.controllers;

import ba.edu.ibu.elma.core.model.enums.UserType;
import ba.edu.ibu.elma.core.service.UserService;
import ba.edu.ibu.elma.rest.dto.UserDTO;
import ba.edu.ibu.elma.rest.dto.UserRequestDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/users")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @RequestMapping(path = "/regitgister", method = RequestMethod.POST)
    public ResponseEntity<UserDTO> register(@RequestBody UserRequestDTO userRequestDTO) {
        return ResponseEntity.ok(userService.register(userRequestDTO));
    }

    @RequestMapping(path = "/login", method = RequestMethod.POST)
    public ResponseEntity<UserDTO> login(@RequestParam String username, @RequestParam String password) {
        return ResponseEntity.ok(userService.login(username, password));
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<UserDTO>> getAllUsers() {
        return ResponseEntity.ok(userService.getAllUsers());
    }

    @RequestMapping(path = "/{userId}", method = RequestMethod.GET)
    public ResponseEntity<UserDTO> getUserById(@PathVariable String userId) {
        return ResponseEntity.ok(userService.getUserById(userId));
    }

    @RequestMapping(path = "/{userId}", method = RequestMethod.PUT)
    public ResponseEntity<UserDTO> updateUser(@PathVariable String userId, @RequestBody UserRequestDTO userRequestDTO) {
        return ResponseEntity.ok(userService.updateUser(userId, userRequestDTO));
    }

    @RequestMapping(path = "/{userId}", method = RequestMethod.DELETE)
    public ResponseEntity<Void> deleteUser(@PathVariable String userId) {
        userService.deleteUser(userId);
        return ResponseEntity.noContent().build();
    }

    @RequestMapping(method = RequestMethod.GET, path = "/filter")
    public ResponseEntity<UserDTO> filterUser(@RequestParam String email) {
        return ResponseEntity.ok(userService.filterByEmail(email));
    }

    @RequestMapping(value = "/{userId}/type", method = RequestMethod.PUT)
    public ResponseEntity<Void> updateType(@PathVariable String userId, @RequestParam UserType type) {
        userService.updateType(userId, type);
        return ResponseEntity.noContent().build();
    }
}

