package ba.edu.ibu.elma.core.service;

import ba.edu.ibu.elma.core.exceptions.repository.ResourceNotFoundException;
import ba.edu.ibu.elma.core.model.Category;
import ba.edu.ibu.elma.core.repository.CategoryRepository;
import ba.edu.ibu.elma.rest.dto.CategoryDTO;
import ba.edu.ibu.elma.rest.dto.CategoryRequestDTO;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CategoryService {

    private final CategoryRepository categoryRepository;

    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public List<CategoryDTO> getAllCategories() {
        List<Category> categories = categoryRepository.findAll();
        return categories.stream()
                .map(CategoryDTO::new)
                .collect(Collectors.toList());
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
    }

