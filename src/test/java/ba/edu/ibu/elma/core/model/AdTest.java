package ba.edu.ibu.elma.core.model;


import org.junit.jupiter.api.Test;

import java.util.Date;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class AdTest {

        @Test
        public void testAdConstructor() {
            String id = "someId";
            String title = "someTitle";
            String category = "someCategory";
            String description = "someDescription";
            Date creationDate = new Date();

            Ad ad = new Ad(id, title, category, description, creationDate);

            assertEquals(id, ad.getId());
            assertEquals(title, ad.getTitle());
            assertEquals(category, ad.getCategory());
            assertEquals(description, ad.getDescription());
            assertEquals(creationDate, ad.getCreationDate());
        }

        @Test
        public void testAdGettersAndSetters() {
            Ad ad = new Ad();

            String id = "someId";
            String title = "someTitle";
            String description = "someDescription";
            String category = "someCategory";
            Date creationDate = new Date();

            ad.setId(id);
            ad.setTitle(title);
            ad.setDescription(description);
            ad.setCategory(category);
            ad.setCreationDate(creationDate);

            assertEquals(id, ad.getId());
            assertEquals(title, ad.getTitle());
            assertEquals(description, ad.getDescription());
            assertEquals(category, ad.getCategory());
            assertEquals(creationDate, ad.getCreationDate());
        }

    }

