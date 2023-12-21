package ba.edu.ibu.elma.rest.controllers;

import ba.edu.ibu.elma.core.service.AuthService;
import ba.edu.ibu.elma.rest.dto.LoginDTO;
import ba.edu.ibu.elma.rest.dto.LoginRequestDTO;
import ba.edu.ibu.elma.rest.dto.UserDTO;
import ba.edu.ibu.elma.rest.dto.UserRequestDTO;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/auth")
@SecurityRequirement(name = "JWT Security")
public class AuthController {
    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @RequestMapping(method = RequestMethod.POST, path = "/register")
    public ResponseEntity<UserDTO> register(@RequestBody UserRequestDTO user) {
        return ResponseEntity.ok(authService.signUp(user));
    }

    @RequestMapping(method = RequestMethod.POST, path = "/login")
    public ResponseEntity<LoginDTO> login(@RequestBody LoginRequestDTO loginRequest) {
        return ResponseEntity.ok(authService.signIn(loginRequest));
    }
}