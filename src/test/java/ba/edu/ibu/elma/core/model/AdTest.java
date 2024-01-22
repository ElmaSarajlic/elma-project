package ba.edu.ibu.elma.core.model;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Date;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
public class AdTest {

    @Test
    public void testAdConstructor() {
        // Provided values
        String id = "someId";
        String title = "someTitle";
        String description = "someDescription";
        Date creationDate = new Date();
        String subcategory = "2"; // Assuming this should be a String, not an integer
        String contact = "someContact"; // Provide an actual contact value
        String imgUrl = "someImageUrl"; // Provide an actual image URL value

        // Create an instance of Ad with the correct constructor parameters
        Ad ad = new Ad(id, title, imgUrl, subcategory, contact, description, creationDate);

        // Assert statements to check if the values are correctly set
        assertEquals(id, ad.getId());
        assertEquals(title, ad.getTitle());
        assertEquals(description, ad.getDescription());
        assertEquals(creationDate, ad.getCreationDate());
        assertEquals(subcategory, ad.getSubcategory());
        assertEquals(contact, ad.getContact());
        assertEquals(imgUrl, ad.getImgUrl());
    }

    @Test
    public void testAdGettersAndSetters() {
        Ad ad = new Ad();

        // Provided values
        String id = "someId";
        String title = "someTitle";
        String description = "someDescription";
        String subcategory = "2"; // Again, assuming this should be a String
        String contact = "someContact";
        String imgUrl = "someImageUrl";
        Date creationDate = new Date();

        // Using setters to set values
        ad.setId(id);
        ad.setTitle(title);
        ad.setDescription(description);
        ad.setCreationDate(creationDate);
        ad.setSubcategory(subcategory);
        ad.setContact(contact);
        ad.setImgUrl(imgUrl);

        // Assert statements to check getters
        assertEquals(id, ad.getId());
        assertEquals(title, ad.getTitle());
        assertEquals(description, ad.getDescription());
        assertEquals(creationDate, ad.getCreationDate());
        assertEquals(subcategory, ad.getSubcategory());
        assertEquals(contact, ad.getContact());
        assertEquals(imgUrl, ad.getImgUrl());
    }

}
