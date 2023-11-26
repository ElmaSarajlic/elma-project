package ba.edu.ibu.elma.core.model;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class CategoryTest {
    @Test
    public void testCategoryGettersAndSetters() {
        Category category = new Category();

        String id = "someId";
        String name = "someName";

        category.setId(id);
        category.setName(name);

        assertEquals(id, category.getId());
        assertEquals(name, category.getName());
    }

}
