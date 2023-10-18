package ba.edu.ibu.elma.core.repository;
import ba.edu.ibu.elma.core.model.Ad;
import org.springframework.stereotype.Repository;

import java.util.Arrays;
import java.util.List;

@Repository
public class AdRepository {
    private List<Ad> Ads;

    public AdRepository() {
        this.Ads = Arrays.asList(
                new Ad(1, "posao 1", "opis 1", 2019),
                new Ad(2, "posao 2", "opis 2", 2003),
                new Ad(3, "posao 3", "opis 3", 2010)
        );
    }

    public List<Ad> findAll() {
        return Ads;
    }

    public Ad findById(int id) {
        return Ads.stream().filter(ad -> ad.getId() == id).findFirst().orElse(null);
    }
}