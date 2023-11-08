package ba.edu.ibu.elma.rest.controllers;
import ba.edu.ibu.elma.core.service.AdService;
import ba.edu.ibu.elma.rest.dto.AdDTO;
import ba.edu.ibu.elma.rest.dto.AdRequestDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ads")
public class AdController {

    @Autowired
    private AdService adService;

    public AdController(AdService adService) {
        this.adService = adService;
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<AdDTO> createRecipe(@RequestBody AdRequestDTO adRequestDTO) {
        AdDTO createdAd = adService.createAd(adRequestDTO);
        return new ResponseEntity<>(createdAd, HttpStatus.CREATED);
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<AdDTO>> getAllAds() {
        List<AdDTO> ads = adService.getAllAds();
        return new ResponseEntity<>(ads, HttpStatus.OK);
    }

    @RequestMapping(value = "/{adId}", method = RequestMethod.GET)
    public ResponseEntity<AdDTO> getAdById(@PathVariable String adId) {
        AdDTO ad = adService.getAdById(adId);
        if (ad != null) {
            return new ResponseEntity<>(ad, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @RequestMapping(value = "/{adId}", method = RequestMethod.PUT)
    public ResponseEntity<AdDTO> updateAd(@PathVariable String adId, @RequestBody AdRequestDTO adRequestDTO) {
        AdDTO updatedAd = adService.updateAd(adId, adRequestDTO);
        if (updatedAd != null) {
            return new ResponseEntity<>(updatedAd, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @RequestMapping(value = "/{adId}", method = RequestMethod.DELETE)
    public ResponseEntity<Void> deleteAd(@PathVariable String adId) {
        adService.deleteAd(adId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}