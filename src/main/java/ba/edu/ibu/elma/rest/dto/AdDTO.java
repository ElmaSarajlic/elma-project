package ba.edu.ibu.elma.rest.dto;
import java.util.Date;
import ba.edu.ibu.elma.core.model.Ad;
import ba.edu.ibu.elma.core.service.AdService;

public class AdDTO {

    private String id;
    private String title;
    private String description;
    private Date creationDate;
    private String subcategory;
    private String contact;

    public AdDTO(Ad ad) {
        this.id = ad.getId();
        this.title = ad.getTitle();
        this.description = ad.getDescription();
        this.contact = ad.getContact();
        this.creationDate = ad.getCreationDate();
        this.subcategory = ad.getSubcategory();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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

    public void setDescription(String description) { this.description = description;}

    public Date getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }

    public String getSubcategory(){
        return subcategory;
    }
    public void setSubcategory(String subcategory){
        this.subcategory = subcategory;
    }

    public String getContact(){
        return contact;
    }
    public void setContact(String contact){
        this.contact = contact;
    }
}

