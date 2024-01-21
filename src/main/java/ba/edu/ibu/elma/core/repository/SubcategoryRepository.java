package ba.edu.ibu.elma.core.repository;

import ba.edu.ibu.elma.core.model.Subcategory;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SubcategoryRepository extends MongoRepository<Subcategory, String> {
    // Additional custom methods (if any)
}