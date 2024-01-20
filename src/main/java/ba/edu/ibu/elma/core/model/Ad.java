package ba.edu.ibu.elma.core.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.Date;


@Document
public class Ad {
    @Id
    private String id;
    private String title;
    private String description;
    private Date creationDate;
    private String subcategory;
    private String category;
    private String contact;
    private String imgUrl;

    public Ad(){}

    public Ad(String id, String title, String imgUrl, String subcategory, String category, String contact,  String description, Date creationDate) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.category = category;
        this.subcategory = subcategory;
        this.contact = contact;
        this.creationDate = creationDate;
        this.imgUrl = imgUrl;
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

    public void setDescription(String description) {
        this.description = description;
    }


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

    public String getImgUrl(){
        return imgUrl;
    }

    public void setImgUrl(String imgUrl){
        this.imgUrl = imgUrl;
    }



}