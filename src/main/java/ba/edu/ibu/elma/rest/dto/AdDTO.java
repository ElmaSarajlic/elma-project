package ba.edu.ibu.elma.rest.dto;
import java.util.Date;
import ba.edu.ibu.elma.core.model.Ad;
import ba.edu.ibu.elma.core.service.AdService;

public class AdDTO {

    private String id;
    private String title;
    private String description;
    private Date creationDate;

    public AdDTO(Ad ad) {
        this.id = ad.getId();
        this.title = ad.getTitle();
        this.description = ad.getDescription();
        this.creationDate = ad.getCreationDate();
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
}

