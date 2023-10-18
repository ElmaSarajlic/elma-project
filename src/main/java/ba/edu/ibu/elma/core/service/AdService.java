package ba.edu.ibu.elma.core.service;
import ba.edu.ibu.elma.core.model.Ad;
import ba.edu.ibu.elma.core.repository.AdRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Service
public class AdService {
    private final AdRepository adRepository;

    /**
     * Dependency injection.
     * We do not need to use "bookRepository = new BookRepository()" anywhere in the code.
     */
    public AdService(AdRepository bookRepository) {
        this.adRepository = bookRepository;
    }

    public List<Ad> findAll() {
        return adRepository.findAll();
    }

    public Ad findById(@PathVariable int id) {
        return adRepository.findById(id);
    }
}
