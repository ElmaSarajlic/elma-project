package ba.edu.ibu.elma.core.service;

import ba.edu.ibu.elma.core.api.mailsender.MailSender;
import ba.edu.ibu.elma.core.exceptions.repository.ResourceNotFoundException;
import ba.edu.ibu.elma.core.model.User;
import ba.edu.ibu.elma.core.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

import ba.edu.ibu.elma.core.model.enums.UserType;
import ba.edu.ibu.elma.rest.dto.UserDTO;
import ba.edu.ibu.elma.rest.dto.UserRequestDTO;

import java.util.stream.Collectors;

@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    private MailSender mailgunSender;

    @Autowired
    private MailSender sendgridSender;
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<UserDTO> getAllUsers() {
        List<User> users = userRepository.findAll();
        return users
                .stream()
                .map(UserDTO::new)
                .collect(Collectors.toList());
    }

    public UserDTO register(UserRequestDTO payload) {
        User user = userRepository.save(payload.toEntity());

        return new UserDTO(user);
    }

    public UserDTO login(String username, String password) {
        User user = userRepository.findByUsernameAndPassword(username, password)
                .orElseThrow(() -> new IllegalArgumentException("Invalid username or password"));
        return new UserDTO(user);
    }

    public UserDTO getUserById(String id) {
        Optional<User> user = userRepository.findById(id);
        if (user.isEmpty()) {
            throw new ResourceNotFoundException("The user with the given ID does not exist.");
        }
        return new UserDTO(user.get());
    }

    public UserDTO updateUser(String id, UserRequestDTO payload) {
        Optional<User> existingUser = userRepository.findById(id);
        if (existingUser.isEmpty()) {
            throw new ResourceNotFoundException("The user with the given ID does not exist.");
        }
        User updatedUser = payload.toEntity();
        updatedUser.setId(existingUser.get().getId());
        userRepository.save(updatedUser);
        return new UserDTO(updatedUser);
    }

    public void deleteUser(String id) {
        Optional<User> user = userRepository.findById(id);
        user.ifPresent(userRepository::delete);
    }

    public void updateType(String id, UserType type) {
        Optional<User> userOpt = userRepository.findById(id);
        if (userOpt.isEmpty()) {
            throw new ResourceNotFoundException("The user with the given ID does not exist.");
        }
        User user = userOpt.get();
        user.setUserType(type);
        userRepository.save(user);
    }

    public UserDTO filterByEmail(String email) {
        Optional<User> user = userRepository.findFirstByEmailLike(email);

        return user.map(UserDTO::new).orElse(null);
    }
}