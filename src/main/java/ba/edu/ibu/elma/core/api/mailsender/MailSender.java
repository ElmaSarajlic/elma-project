package ba.edu.ibu.elma.core.api.mailsender;
import ba.edu.ibu.elma.core.model.User;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface MailSender {

    public String send(List<User> users, String message);
}