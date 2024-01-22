import ba.edu.ibu.elma.core.exceptions.repository.ResourceNotFoundException;
import ba.edu.ibu.elma.core.model.Category;
import ba.edu.ibu.elma.core.model.Subcategory;
import ba.edu.ibu.elma.core.repository.CategoryRepository;
import ba.edu.ibu.elma.core.repository.SubcategoryRepository;
import ba.edu.ibu.elma.core.service.CategoryService;
import ba.edu.ibu.elma.core.service.SubcategoryService;
import ba.edu.ibu.elma.rest.dto.CategoryDTO;
import ba.edu.ibu.elma.rest.dto.SubcategoryDTO;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@SpringBootTest
class CategoryServiceTest {

    @Mock
    private CategoryRepository categoryRepository;

    @Mock
    private SubcategoryRepository subcategoryRepository;

    @Mock
    private SubcategoryService subcategoryService;

    @InjectMocks
    private CategoryService categoryService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void getAllCategories() {
        // Arrange
        Subcategory subcategory1 = new Subcategory("Sub1", "Subcategory 1", "1");
        Subcategory subcategory2 = new Subcategory("Sub2", "Subcategory 2", "2");
        Category category1 = new Category("1", "Category 1", Collections.singletonList(subcategory1));
        Category category2 = new Category("2", "Category 2", Collections.singletonList(subcategory2));
        List<Category> categories = Arrays.asList(category1, category2);

        when(categoryRepository.findAll()).thenReturn(categories);

        // Act
        List<CategoryDTO> result = categoryService.getAllCategories();

        // Assert
        assertEquals(2, result.size());
        assertEquals("1", result.get(0).getId());
        assertEquals("Category 1", result.get(0).getName());
        assertEquals(1, result.get(0).getSubcategories().size());
        assertEquals("Subcategory 1", result.get(0).getSubcategories().get(0).getName());

        verify(categoryRepository, times(1)).findAll();
    }

    @Test
    void deleteCategory() {
        // Arrange
        String categoryId = "1";
        Subcategory subcategory = new Subcategory("Sub1", "Subcategory 1", categoryId);
        Category category = new Category(categoryId, "Category 1", Collections.singletonList(subcategory));

        when(categoryRepository.findById(categoryId)).thenReturn(Optional.of(category));

        // Act
        categoryService.deleteCategory(categoryId);

        // Assert
        verify(categoryRepository, times(1)).delete(category);
    }

    @Test
    void deleteCategory_NotFound() {
        // Arrange
        String categoryId = "1";
        when(categoryRepository.findById(categoryId)).thenReturn(Optional.empty());

        // Act & Assert
        assertThrows(ResourceNotFoundException.class, () -> categoryService.deleteCategory(categoryId));
        verify(categoryRepository, never()).delete(any());
    }

    // Additional tests can be added for createCategory, updateCategory, addSubcategoryToCategory, etc.
    // ...
}
