package ba.edu.ibu.elma.core.service;

import ba.edu.ibu.elma.core.exceptions.repository.ResourceNotFoundException;
import ba.edu.ibu.elma.core.model.User;
import ba.edu.ibu.elma.core.repository.UserRepository;
import ba.edu.ibu.elma.rest.dto.LoginDTO;
import ba.edu.ibu.elma.rest.dto.LoginRequestDTO;
import ba.edu.ibu.elma.rest.dto.UserDTO;
import ba.edu.ibu.elma.rest.dto.UserRequestDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
@Service
public class AuthService {
    private final UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private AuthenticationManager authenticationManager;

    public AuthService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UserDTO signUp(UserRequestDTO userRequestDTO) {
        // check if user already exists with the given email
        userRepository.findByEmail(userRequestDTO.getEmail())
                .ifPresent(u -> {
                    throw new IllegalStateException("Email already in use");
                });

        // create new user if not

        userRequestDTO.setPassword(
                passwordEncoder.encode(userRequestDTO.getPassword()));
        User user = userRepository.save(userRequestDTO.toEntity());

        return new UserDTO(user);
    }

    public LoginDTO signIn(LoginRequestDTO loginRequestDTO) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequestDTO.getEmail(), loginRequestDTO.getPassword())
        );
        User user = userRepository.findByEmail(loginRequestDTO.getEmail())
                .orElseThrow(() -> new ResourceNotFoundException("This user does not exist."));

        String jwt = jwtService.generateToken(user, user.getId()); // passing the user ID

        return new LoginDTO(jwt);
    }
}
