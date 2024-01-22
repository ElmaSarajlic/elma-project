package ba.edu.ibu.elma.core.model;

import ba.edu.ibu.elma.core.model.enums.UserType;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.Collection;
import java.util.Date;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
public class UserTest {
    @Test
    public void testUserGettersAndSetters() {
        User user = new User();

        String id = "someId";
        UserType userType = UserType.GUEST;
        String email = "user@example.com";
        String username = "someUsername";
        String password = "somePassword";
        Date creationDate = new Date();

        user.setId(id);
        user.setUserType(userType);
        user.setEmail(email);
        user.setUsername(username);
        user.setPassword(password);
        user.setCreationDate(creationDate);

        assertEquals(id, user.getId());
        assertEquals(userType, user.getUserType());
        assertEquals(email, user.getEmail());
        assertEquals(username, user.getUsername());
        assertEquals(password, user.getPassword());
        assertEquals(creationDate, user.getCreationDate());
    }

    @Test
    public void testUserDetailsInterfaceMethods() {
        User user = new User();

        assertTrue(user.isAccountNonExpired());
        assertTrue(user.isAccountNonLocked());
        assertTrue(user.isCredentialsNonExpired());
        assertTrue(user.isEnabled());
    }

    @Test
    public void testGetAuthorities() {
        User user = new User();
        user.setUserType(UserType.ADMIN);

        Collection<? extends GrantedAuthority> authorities = user.getAuthorities();

        assertEquals(1, authorities.size());
        assertTrue(authorities.contains(new SimpleGrantedAuthority(UserType.ADMIN.name())));
    }
}
