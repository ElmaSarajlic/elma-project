package ba.edu.ibu.elma.core.service;

import ba.edu.ibu.elma.core.exceptions.repository.ResourceNotFoundException;
import ba.edu.ibu.elma.core.model.Ad;
import ba.edu.ibu.elma.core.repository.AdRepository;
import ba.edu.ibu.elma.rest.dto.AdDTO;
import ba.edu.ibu.elma.rest.dto.AdRequestDTO;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentMatchers;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.Date;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertThrows;

@SpringBootTest
public class AdServiceTest {

    @MockBean
    AdRepository adRepository;

    @MockBean
    NotificationService notificationService;

    @Autowired
    AdService adService;

    @Test
    public void shouldReturnAdWhenCreated() throws Exception {
        // Given
        AdRequestDTO adRequestDTO = new AdRequestDTO(); // Initialize with proper values
        // ... set values on adRequestDTO as necessary
        Ad ad = new Ad("1", "Sample Ad", "ImageURL", "Subcategory", "Contact", "Sample Description", new Date());

        Mockito.when(adRepository.save(ArgumentMatchers.any(Ad.class))).thenReturn(ad);
        Mockito.doNothing().when(notificationService).broadcastMessage(ArgumentMatchers.anyString());

        // When
        AdDTO savedAd = adService.createAd(adRequestDTO);

        // Then
        assertThat(savedAd.getTitle()).isEqualTo(ad.getTitle());
        assertThat(savedAd.getDescription()).isEqualTo(ad.getDescription());
    }

    @Test
    public void shouldReturnAdById() {
        // Given
        String id = "someMongoId";
        Ad ad = new Ad(id, "Sample Ad", "ImageURL", "Subcategory", "Contact", "Sample Description", new Date());

        Mockito.when(adRepository.findById(id)).thenReturn(Optional.of(ad));

        // When
        AdDTO foundAd = adService.getAdById(id);

        // Then
        assertThat(foundAd.getId()).isEqualTo(id);
        assertThat(foundAd.getTitle()).isEqualTo(ad.getTitle());
        assertThat(foundAd.getDescription()).isEqualTo(ad.getDescription());
    }

    @Test
    public void shouldThrowExceptionWhenAdNotFound() {
        // Given
        String id = "nonExistentId";
        Mockito.when(adRepository.findById(id)).thenReturn(Optional.empty());

        // When & Then
        assertThrows(ResourceNotFoundException.class, () -> {
            adService.getAdById(id);
        });
    }

    // Additional tests can be added for updateAd, deleteAd, getAdsBySubcategory, etc.
    // ...
}
