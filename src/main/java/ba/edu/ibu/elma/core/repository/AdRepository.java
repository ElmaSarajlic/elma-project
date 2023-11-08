package ba.edu.ibu.elma.core.repository;

import ba.edu.ibu.elma.core.model.Ad;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface AdRepository extends MongoRepository<Ad,String> {

}