package ba.edu.ibu.elma.rest.controllers;

import ba.edu.ibu.elma.core.model.Ad;
import ba.edu.ibu.elma.core.service.AdService;
import ba.edu.ibu.elma.core.service.JwtService;
import ba.edu.ibu.elma.core.service.UserService;
import ba.edu.ibu.elma.rest.configuration.SecurityConfiguration;
import ba.edu.ibu.elma.rest.dto.AdDTO;
import com.jayway.jsonpath.JsonPath;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Import;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@AutoConfigureMockMvc
@WebMvcTest(AdController.class)
@Import(SecurityConfiguration.class)
public class AdControllerTest {

    @Autowired
    MockMvc mockMvc;

    @MockBean
    AdService adService;

    @MockBean
    UserService userService;

    @MockBean
    JwtService jwtService;

    @MockBean
    AuthenticationProvider authenticationProvider;

    @Test
    void shouldReturnAllAds() throws Exception {
        Ad ad = new Ad();
        ad.setId("someId");
        ad.setTitle("Title1");
        ad.setDescription("Some description");
        ad.setCategory("Category 1");

        AdDTO adDTO = new AdDTO(ad);

        Mockito.when(adService.getAllAds()).thenReturn(List.of(adDTO));

        MvcResult result = mockMvc.perform(
                MockMvcRequestBuilders
                        .get("/api/ads/")
                        .contentType(MediaType.APPLICATION_JSON)
        ).andReturn();

        String response = result.getResponse().getContentAsString();
        assertEquals(1, (Integer) JsonPath.read(response, "$.length()"));
        assertEquals("Title1", JsonPath.read(response, "$.[0].title"));
        assertEquals("someId", JsonPath.read(response, "$.[0].id"));
        assertEquals("Some description", JsonPath.read(response, "$.[0].description"));
        assertEquals("Category 1", JsonPath.read(response, "$.[0].category"));

    }
}