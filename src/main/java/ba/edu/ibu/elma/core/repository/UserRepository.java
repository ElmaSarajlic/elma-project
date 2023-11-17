package ba.edu.ibu.elma.core.repository;

import ba.edu.ibu.elma.core.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends MongoRepository<User,String> {
    Optional<User> findByUsernameAndPassword(String username, String password);
    Optional<User> findFirstByEmailLike(String emailPattern);

}