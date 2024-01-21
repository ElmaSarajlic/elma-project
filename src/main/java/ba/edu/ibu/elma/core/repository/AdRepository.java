package ba.edu.ibu.elma.core.repository;

import ba.edu.ibu.elma.core.model.Ad;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface AdRepository extends MongoRepository<Ad,String> {
    List<Ad> findBySubcategory(String category);

}