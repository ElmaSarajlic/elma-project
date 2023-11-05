package ba.edu.ibu.elma.core.repository;

import ba.edu.ibu.elma.core.model.Category;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface CategoryRepository extends MongoRepository<Category,String> {

}
