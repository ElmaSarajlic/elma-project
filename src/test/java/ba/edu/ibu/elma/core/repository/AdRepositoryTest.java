package ba.edu.ibu.elma.core.repository;

import ba.edu.ibu.elma.core.model.Ad;
import ba.edu.ibu.elma.core.service.AdService;
import ba.edu.ibu.elma.rest.dto.AdDTO;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;


@SpringBootTest
public class AdRepositoryTest {

    @Autowired
    private AdService adService;

    @Autowired
    private AdRepository adRepository;

    @Test
    public void testGetAllAds() {
        // Given
        Ad ad1 = new Ad("1", "Title 1", "Category 1", "someDescription", null);
        Ad ad2 = new Ad("2", "Title 2", "Category 2", "someDescription", null);
        adRepository.saveAll(List.of(ad1, ad2));

        // When
        List<AdDTO> result = adService.getAllAds();

        // Then
        assertEquals(2, result.size());
        assertEquals("Title 1", result.get(0).getTitle());
        assertEquals("Title 2", result.get(1).getTitle());
    }
}