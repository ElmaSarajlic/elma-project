package ba.edu.ibu.elma.rest.controllers;
import ba.edu.ibu.elma.core.model.Ad;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ba.edu.ibu.elma.core.service.AdService;

import java.util.List;

@RestController
@RequestMapping("api/books")
public class AdController {
    private final AdService adService;

    public AdController(AdService adService) {
        this.adService = adService;
    }

    @GetMapping
    public List<Ad> findAll() {
        return adService.findAll();
    }

    @GetMapping("/{id}")
    public Ad findById(@PathVariable int id) {
        return adService.findById(id);
    }
}