package ba.edu.ibu.elma.core.service;

import ba.edu.ibu.elma.core.exceptions.repository.ResourceNotFoundException;
import ba.edu.ibu.elma.core.model.Subcategory;
import ba.edu.ibu.elma.core.repository.SubcategoryRepository;
import ba.edu.ibu.elma.rest.dto.SubcategoryDTO;
import ba.edu.ibu.elma.rest.dto.SubcategoryRequestDTO;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class SubcategoryService {

    private final SubcategoryRepository subcategoryRepository;

    public SubcategoryService(SubcategoryRepository subcategoryRepository) {
        this.subcategoryRepository = subcategoryRepository;
    }

    public List<SubcategoryDTO> getAllSubcategories() {
        List<Subcategory> subcategories = subcategoryRepository.findAll();
        return subcategories.stream()
                .map(SubcategoryDTO::new)
                .collect(Collectors.toList());
    }

    public SubcategoryDTO getSubcategoryById(String subcategoryId) { // Changed
        Optional<Subcategory> subcategory = subcategoryRepository.findById(subcategoryId); // Changed
        if (subcategory.isEmpty()) {
            throw new ResourceNotFoundException("The subcategory with the given ID does not exist."); // Changed
        }
        return new SubcategoryDTO(subcategory.get()); // Changed
    }

    public SubcategoryDTO createSubcategory(SubcategoryRequestDTO subcategoryRequestDTO) {
        Subcategory subcategory = subcategoryRepository.save(subcategoryRequestDTO.toEntity());
        return new SubcategoryDTO(subcategory); // Changed
    }

    public SubcategoryDTO updateSubcategory(String subcategoryId, SubcategoryRequestDTO subcategoryRequestDTO) { // Changed
        Optional<Subcategory> existingSubcategory = subcategoryRepository.findById(subcategoryId); // Changed
        if (existingSubcategory.isEmpty()) {
            throw new ResourceNotFoundException("The subcategory with the given ID does not exist."); // Changed
        }
        Subcategory updatedSubcategory = subcategoryRequestDTO.toEntity();
        updatedSubcategory.setId(existingSubcategory.get().getId());
        updatedSubcategory = subcategoryRepository.save(updatedSubcategory);
        return new SubcategoryDTO(updatedSubcategory);
    }

    public void deleteSubcategory(String subcategoryId) { // Changed
        Optional<Subcategory> subcategory = subcategoryRepository.findById(subcategoryId); // Changed
        if (subcategory.isEmpty()) {
            throw new ResourceNotFoundException("The subcategory with the given ID does not exist."); // Changed
        }
        subcategoryRepository.delete(subcategory.get()); // Changed
    }
}
