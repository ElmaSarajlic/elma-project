package ba.edu.ibu.elma.core.repository;

import ba.edu.ibu.elma.core.model.Ad;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Date;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
public class AdRepositoryTest {

    @Autowired
    private AdRepository adRepository;

    @Test
    public void testGetAllAds() {
        // Given
        Date creationDate = new Date();
        Ad ad1 = new Ad("1", "Title 1", "ImageURL1", "Subcategory1", "Contact1", "Description1", creationDate);
        Ad ad2 = new Ad("2", "Title 2", "ImageURL2", "Subcategory2", "Contact2", "Description2", creationDate);
        adRepository.saveAll(List.of(ad1, ad2));

        // When
        List<Ad> result = adRepository.findAll();

        // Then
        assertEquals(2, result.size());
        assertEquals("Title 1", result.get(0).getTitle());
        assertEquals("Title 2", result.get(1).getTitle());
    }
}
