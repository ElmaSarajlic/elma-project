package ba.edu.ibu.elma.core.service;

import ba.edu.ibu.elma.core.exceptions.repository.ResourceNotFoundException;
import ba.edu.ibu.elma.core.model.Ad;
import ba.edu.ibu.elma.core.repository.AdRepository;
import ba.edu.ibu.elma.rest.dto.AdDTO;
import ba.edu.ibu.elma.rest.dto.AdRequestDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class AdService {

    private final AdRepository adRepository;

    public AdService(AdRepository adRepository) {
        this.adRepository = adRepository;
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

    public AdDTO createAd(AdRequestDTO adRequestDTO) {
        Ad ad = adRepository.save(adRequestDTO.toEntity());
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

    public List<AdDTO> getAdsByCategory(String adCategory) {
        List<Ad> ads = adRepository.findByCategory(adCategory);

        if (ads.isEmpty()) {
            throw new ResourceNotFoundException("Ads with the given category do not exist.");
        }

        // Convert the list of Ad objects to a list of AdDTO objects
        return ads.stream()
                .map(AdDTO::new)
                .collect(Collectors.toList());
    }


}

