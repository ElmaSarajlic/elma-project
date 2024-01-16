package ba.edu.ibu.elma.rest.dto;
import ba.edu.ibu.elma.core.model.Ad;

import java.util.Date;

public class AdRequestDTO {
    private String title;
    private String description;
    private String subcategory;
    private String contact;

    public AdRequestDTO() { }

    public AdRequestDTO(Ad ad) {
        this.title = ad.getTitle();
        this.description = ad.getDescription();
        this.subcategory = ad.getSubcategory();
        this.contact = ad.getContact();
    }

    public Ad toEntity() {
        Ad ad = new Ad();
        ad.setTitle(title);
        ad.setDescription(description);
        ad.setCreationDate(new Date());
        ad.setSubcategory(subcategory);
        ad.setContact(contact);
        return ad;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getSubcategory() {
        return subcategory;
    }

    public void setSubcategory(String subcategory) {
        this.subcategory = subcategory;
    }
    public String getContact(){
        return contact;
    }
    public void setContact(String contact){
        this.contact = contact;
    }
}
