package ba.edu.ibu.elma.core.service;

import ba.edu.ibu.elma.core.model.Ad;
import ba.edu.ibu.elma.core.repository.AdRepository;
import ba.edu.ibu.elma.rest.dto.AdDTO;
import ba.edu.ibu.elma.rest.dto.AdRequestDTO;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentMatchers;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.Date;
import java.util.Optional;

@AutoConfigureMockMvc
@SpringBootTest
public class AdServiceTest {

    @MockBean
    AdRepository adRepository;

    @Autowired
    AdService adService;

    @Test
    public void shouldReturnAdWhenCreated() {
        Ad ad = new Ad();
        ad.setTitle("Sample Ad");
        ad.setDescription("Sample Description");
        ad.setCategory("Sample Category");

        Mockito.when(adRepository.save(ArgumentMatchers.any(Ad.class))).thenReturn(ad);

        AdDTO savedAd = adService.createAd(new AdRequestDTO(ad));
        Assertions.assertThat(savedAd.getTitle()).isEqualTo(ad.getTitle());
        Assertions.assertThat(savedAd.getDescription()).isNotNull();
        Assertions.assertThat(savedAd.getCategory()).isEqualTo(ad.getCategory());
        System.out.println(savedAd.getId());
    }

    @Test
    public void shouldReturnAdById() {
        Ad ad = new Ad();
        ad.setId("someMongoId");
        ad.setTitle("Sample Ad");
        ad.setDescription("Sample Description");
        ad.setCategory("Sample Category");

        Mockito.when(adRepository.findById("someMongoId")).thenReturn(Optional.of(ad));

        AdDTO foundAd = adService.getAdById("someMongoId");
        Assertions.assertThat(foundAd.getTitle()).isEqualTo("Sample Ad");
        Assertions.assertThat(foundAd.getDescription()).isEqualTo("Sample Description");
        Assertions.assertThat(foundAd.getCategory()).isEqualTo("Sample Category");
    }
}

