package ba.edu.ibu.elma.rest.controllers;

import ba.edu.ibu.elma.core.model.Ad;
import ba.edu.ibu.elma.core.service.AdService;
import ba.edu.ibu.elma.rest.dto.AdDTO;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.util.Date;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import com.jayway.jsonpath.JsonPath;

@AutoConfigureMockMvc(addFilters = false)
@WebMvcTest(AdController.class)
public class AdControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private AdService adService;

    @Test
    void shouldReturnAllAds() throws Exception {
        // Create an Ad instance with sample data
        Ad ad = new Ad();
        ad.setId("someId");
        ad.setTitle("Title1");
        ad.setDescription("Some description");
        ad.setCreationDate(new Date()); // Use current date or a specific date as needed
        ad.setSubcategory("Subcategory");
        ad.setContact("Contact details");
        ad.setImgUrl("Image URL");

        // Create an AdDTO instance using the Ad object
        AdDTO adDTO = new AdDTO(ad);

        // Mock the behavior of adService to return a list containing our sample AdDTO
        Mockito.when(adService.getAllAds()).thenReturn(List.of(adDTO));

        // Perform the mock MVC request and capture the result
        MvcResult result = mockMvc.perform(
                MockMvcRequestBuilders
                        .get("/api/ads/")
                        .contentType(MediaType.APPLICATION_JSON)
        ).andReturn();

        // Assert the response as expected
        String response = result.getResponse().getContentAsString();
        assertEquals(1, JsonPath.parse(response).<Integer>read("$.length()"));
        assertEquals("Title1", JsonPath.parse(response).<String>read("$.[0].title"));
        assertEquals("someId", JsonPath.parse(response).<String>read("$.[0].id"));
        assertEquals("Some description", JsonPath.parse(response).<String>read("$.[0].description"));
        // You can add more assertions here for 'subcategory', 'contact', 'imgUrl', etc.
    }

    }
