package ba.edu.ibu.elma.rest.controllers;

import ba.edu.ibu.elma.core.service.CategoryService;
import ba.edu.ibu.elma.rest.dto.CategoryDTO;
import ba.edu.ibu.elma.rest.dto.CategoryRequestDTO;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/categories")
@SecurityRequirement(name = "JWT Security")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @RequestMapping(method = RequestMethod.POST)
    @PreAuthorize("hasAnyAuthority( 'ADMIN')")
    public ResponseEntity<CategoryDTO> createCategory(@RequestBody CategoryRequestDTO categoryRequestDTO) {
        CategoryDTO createdCategory = categoryService.createCategory(categoryRequestDTO);
        return new ResponseEntity<>(createdCategory, HttpStatus.CREATED);
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<CategoryDTO>> getAllCategories() {
        List<CategoryDTO> categories = categoryService.getAllCategories();
        return new ResponseEntity<>(categories, HttpStatus.OK);
    }

    @RequestMapping(value = "/{categoryId}", method = RequestMethod.GET)
    @PreAuthorize("hasAnyAuthority('ADMIN')")
    public ResponseEntity<CategoryDTO> getCategoryById(@PathVariable String categoryId) {
        CategoryDTO category = categoryService.getCategoryById(categoryId);
        if (category != null) {
            return new ResponseEntity<>(category, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @RequestMapping(value = "/{categoryId}", method = RequestMethod.PUT)
    @PreAuthorize("hasAnyAuthority('ADMIN')")
    public ResponseEntity<CategoryDTO> updateCategory(@PathVariable String categoryId, @RequestBody CategoryRequestDTO categoryRequestDTO) {
        CategoryDTO updatedCategory = categoryService.updateCategory(categoryId, categoryRequestDTO);
        if (updatedCategory != null) {
            return new ResponseEntity<>(updatedCategory, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @RequestMapping(value = "/{categoryId}", method = RequestMethod.DELETE)
    @PreAuthorize("hasAnyAuthority('ADMIN')")
    public ResponseEntity<Void> deleteCategory(@PathVariable String categoryId) {
        categoryService.deleteCategory(categoryId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

