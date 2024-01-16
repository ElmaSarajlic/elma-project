package ba.edu.ibu.elma.core.model;

import org.springframework.data.annotation.Id;


public class Subcategory {
    @Id
    private String id;
    private String name;
    private String categoryId; // This will store the ID of the Category



    public Subcategory(){}

    public Subcategory(String id, String name) {
        this.id = id;
        this.name = name;
        this.categoryId = categoryId; // Set the categoryId when creating a Subcategory
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;

    }
    public String getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(String categoryId) {
        this.categoryId = categoryId;
    }

}
