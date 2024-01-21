package ba.edu.ibu.elma.rest.controllers;
import ba.edu.ibu.elma.core.service.AdService;
import ba.edu.ibu.elma.rest.dto.AdDTO;
import ba.edu.ibu.elma.rest.dto.AdRequestDTO;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/ads")
@SecurityRequirement(name = "JWT Security")
public class AdController {

    @Autowired
    private AdService adService;

    public AdController(AdService adService) {
        this.adService = adService;
    }

    @RequestMapping(method = RequestMethod.POST, path = "/")
    @PreAuthorize("hasAnyAuthority('REGISTERED', 'ADMIN')")
    public ResponseEntity<AdDTO> createAd(@RequestBody AdRequestDTO adRequestDTO) throws Exception {
        AdDTO createdAd = adService.createAd(adRequestDTO);
        return new ResponseEntity<>(createdAd, HttpStatus.CREATED);
    }

    @RequestMapping(method = RequestMethod.GET, path = "/")
    public ResponseEntity<List<AdDTO>> getAllAds() {
        List<AdDTO> ads = adService.getAllAds();
        return new ResponseEntity<>(ads, HttpStatus.OK);
    }

    @RequestMapping( method = RequestMethod.GET, path = "/{adId}")
    @PreAuthorize("hasAnyAuthority('ADMIN', 'REGISTERED')")
    public ResponseEntity<AdDTO> getAdById(@PathVariable String adId) {
        AdDTO ad = adService.getAdById(adId);
        if (ad != null) {
            return new ResponseEntity<>(ad, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @RequestMapping(value = "/{adId}", method = RequestMethod.PUT)
    @PreAuthorize("hasAnyAuthority('REGISTERED', 'ADMIN')")
    public ResponseEntity<AdDTO> updateAd(@PathVariable String adId, @RequestBody AdRequestDTO adRequestDTO) {
        AdDTO updatedAd = adService.updateAd(adId, adRequestDTO);
        if (updatedAd != null) {
            return new ResponseEntity<>(updatedAd, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @RequestMapping(value = "/{adId}", method = RequestMethod.DELETE)
    @PreAuthorize("hasAnyAuthority('REGISTERED', 'ADMIN')")
    public ResponseEntity<Void> deleteAd(@PathVariable String adId) {
        adService.deleteAd(adId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @RequestMapping(value = "/subcategory/{adSubcategory}", method = RequestMethod.GET)
    public ResponseEntity<List<AdDTO>> getAdsBySubcategory(@PathVariable String adSubcategory) {
        List<AdDTO> ads = adService.getAdsBySubcategory(adSubcategory);
        if (!ads.isEmpty()) {
            return new ResponseEntity<>(ads, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}