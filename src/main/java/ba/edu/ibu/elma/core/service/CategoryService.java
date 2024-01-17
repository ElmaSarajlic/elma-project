package ba.edu.ibu.elma.core.service;

import ba.edu.ibu.elma.core.exceptions.repository.ResourceNotFoundException;
import ba.edu.ibu.elma.core.model.Category;
import ba.edu.ibu.elma.core.model.Subcategory;
import ba.edu.ibu.elma.core.repository.CategoryRepository;
import ba.edu.ibu.elma.core.repository.SubcategoryRepository;
import ba.edu.ibu.elma.rest.dto.CategoryDTO;
import ba.edu.ibu.elma.rest.dto.CategoryRequestDTO;
import ba.edu.ibu.elma.rest.dto.SubcategoryDTO;
import ba.edu.ibu.elma.rest.dto.SubcategoryRequestDTO;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CategoryService {

    private final CategoryRepository categoryRepository;
    private final SubcategoryRepository subcategoryRepository;
    private final SubcategoryService subcategoryService;

    public CategoryService(CategoryRepository categoryRepository, SubcategoryRepository subcategoryRepository, SubcategoryService subcategoryService) {
        this.categoryRepository = categoryRepository;
        this.subcategoryRepository = subcategoryRepository;
        this.subcategoryService = subcategoryService;
    }

    public List<CategoryDTO> getAllCategories() {
        List<Category> categories = categoryRepository.findAll();
        return categories.stream()
                .map(this::convertToCategoryDTO)
                .collect(Collectors.toList());
    }

    private CategoryDTO convertToCategoryDTO(Category category) {
        List<SubcategoryDTO> subcategoryDTOs = category.getSubcategories().stream()
                .map(SubcategoryDTO::new) // Assuming you have a suitable constructor in SubcategoryDTO
                .collect(Collectors.toList());

        return new CategoryDTO(category.getId(), category.getName(), subcategoryDTOs);
    }



    public CategoryDTO getCategoryById(String categoryId) {
        Optional<Category> category = categoryRepository.findById(categoryId);
        if (category.isEmpty()) {
            throw new ResourceNotFoundException("The category with the given ID does not exist.");
        }
        return new CategoryDTO(category.get());
    }

    public CategoryDTO createCategory(CategoryRequestDTO categoryRequestDTO) {
        Category category = categoryRepository.save(categoryRequestDTO.toEntity());
        return new CategoryDTO(category);
    }

    public CategoryDTO updateCategory(String categoryId, CategoryRequestDTO categoryRequestDTO) {
        Optional<Category> existingCategory = categoryRepository.findById(categoryId);
        if (existingCategory.isEmpty()) {
            throw new ResourceNotFoundException("The category with the given ID does not exist.");
        }
        Category updatedCategory = categoryRequestDTO.toEntity();
        updatedCategory.setId(existingCategory.get().getId());
        updatedCategory = categoryRepository.save(updatedCategory);
        return new CategoryDTO(updatedCategory);
    }


    public void deleteCategory(String categoryId) {
        Optional<Category> category = categoryRepository.findById(categoryId);
        if (category.isEmpty()) {
            throw new ResourceNotFoundException("The category with the given ID does not exist.");
        }
        categoryRepository.delete(category.get());
    }

    public Category addSubcategoryToCategory(String categoryId, Subcategory subcategory) {
        Category category = categoryRepository.findById(categoryId)
                .orElseThrow(() -> new RuntimeException("Category not found"));

        if (category.getSubcategories() == null) {
            category.setSubcategories(new ArrayList<>());
        }
        category.getSubcategories().add(subcategory);
        String name = subcategory.getName();
        SubcategoryRequestDTO subcategoryRequestDTO = new SubcategoryRequestDTO();
        subcategoryRequestDTO.setName(name);
        subcategoryService.createSubcategory(subcategoryRequestDTO);

        return categoryRepository.save(category);
    }

    public void deleteSubcategoryFromCategory(String categoryId, String subcategoryId) {
        // Find the category containing the subcategory
        Category category = categoryRepository.findById(categoryId)
                .orElseThrow(() -> new RuntimeException("Category not found"));

        // Check if category has subcategories and remove the one with the given ID
        boolean removed = category.getSubcategories().removeIf(subcategory -> subcategory.getId().equals(subcategoryId));

        // If a subcategory was removed, save the updated category
        if (removed) {
            categoryRepository.save(category);
        } else {
            throw new RuntimeException("Subcategory not found in category");
        }
    }
}


