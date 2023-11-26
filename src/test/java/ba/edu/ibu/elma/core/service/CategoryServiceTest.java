package ba.edu.ibu.elma.core.service;
import ba.edu.ibu.elma.core.exceptions.repository.ResourceNotFoundException;
import ba.edu.ibu.elma.core.model.Category;
import ba.edu.ibu.elma.core.repository.CategoryRepository;
import ba.edu.ibu.elma.rest.dto.CategoryDTO;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class CategoryServiceTest {

    @Mock
    private CategoryRepository categoryRepository;

    @InjectMocks
    private CategoryService categoryService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void getAllCategories() {
        // Arrange
        Category category1 = new Category("1", "Category 1");
        Category category2 = new Category("2", "Category 2");
        List<Category> categories = Arrays.asList(category1, category2);

        when(categoryRepository.findAll()).thenReturn(categories);

        List<CategoryDTO> result = categoryService.getAllCategories();

        assertEquals(2, result.size());
        assertEquals("1", result.get(0).getId());
        assertEquals("Category 1", result.get(0).getName());
        assertEquals("2", result.get(1).getId());
        assertEquals("Category 2", result.get(1).getName());

        verify(categoryRepository, times(1)).findAll();
    }

    @Test
    void deleteCategory() {
        String categoryId = "1";
        Category category = new Category(categoryId, "Category 1");

        when(categoryRepository.findById(categoryId)).thenReturn(Optional.of(category));

        categoryService.deleteCategory(categoryId);

        verify(categoryRepository, times(1)).delete(any());
    }

    @Test
    void deleteCategory_NotFound() {
        String categoryId = "1";

        when(categoryRepository.findById(categoryId)).thenReturn(Optional.empty());

        assertThrows(ResourceNotFoundException.class, () -> categoryService.deleteCategory(categoryId));

        verify(categoryRepository, never()).delete(any());
    }
}
