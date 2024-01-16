package ba.edu.ibu.elma.core.service;

import ba.edu.ibu.elma.core.exceptions.repository.ResourceNotFoundException;
import ba.edu.ibu.elma.core.model.Ad;
import ba.edu.ibu.elma.core.repository.AdRepository;
import ba.edu.ibu.elma.rest.dto.AdDTO;
import ba.edu.ibu.elma.rest.dto.AdRequestDTO;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class AdService {

    private final AdRepository adRepository;
    private final NotificationService notificationService;

    public AdService(AdRepository adRepository, NotificationService notificationService) {
        this.adRepository = adRepository;
        this.notificationService = notificationService;
    }

    public List<AdDTO> getAllAds() {
        List<Ad> ads = adRepository.findAll();
        return ads.stream()
                .map(AdDTO::new)
                .collect(Collectors.toList());
    }

    public AdDTO getAdById(String adId) {
        Optional<Ad> ad = adRepository.findById(adId);
        if (ad.isEmpty()) {
            throw new ResourceNotFoundException("The ad with the given ID does not exist.");
        }
        return new AdDTO(ad.get());
    }

    public AdDTO createAd(AdRequestDTO adRequestDTO) throws Exception {
        Ad ad = adRepository.save(adRequestDTO.toEntity());
        try {
            notificationService.broadcastMessage("New add added: " + ad.getTitle());
        } catch (Exception e) {
            throw new Exception("Failed to broadcast message for new ad", e);
        }

        return new AdDTO(ad);
    }

    public AdDTO updateAd(String adId, AdRequestDTO adRequestDTO) {
        Optional<Ad> existingAd = adRepository.findById(adId);
        if (existingAd.isEmpty()) {
            throw new ResourceNotFoundException("The ad with the given ID does not exist.");
        }
        Ad updatedAd = adRequestDTO.toEntity();
        updatedAd.setId(existingAd.get().getId());
        updatedAd = adRepository.save(updatedAd);
        return new AdDTO(updatedAd);
    }

    public void deleteAd(String adId) {
        Optional<Ad> ad = adRepository.findById(adId);
        ad.ifPresent(adRepository::delete);
    }

    public List<AdDTO> getAdsBySubcategory(String adSubcategory) {
        List<Ad> ads = adRepository.findBySubcategory(adSubcategory);

        if (ads.isEmpty()) {
            throw new ResourceNotFoundException("Ads with the given subcategory do not exist.");
        }

        // Convert the list of Ad objects to a list of AdDTO objects
        return ads.stream()
                .map(AdDTO::new)
                .collect(Collectors.toList());
    }


}

