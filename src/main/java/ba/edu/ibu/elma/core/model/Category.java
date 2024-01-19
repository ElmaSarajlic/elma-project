package ba.edu.ibu.elma.core.model;

import org.springframework.data.annotation.Id;

import java.util.Date;
import java.util.List;

public class Category {
    @Id
    private String id;
    private String name;
    private List<Subcategory> subcategories;

    public Category(){}

    public Category(String id, String name, List<Subcategory> subcategories) {
        this.id = id;
        this.name = name;
        this.subcategories = subcategories;
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

    public List<Subcategory> getSubcategories() {
        return subcategories;
    }

    public void setSubcategories(List<Subcategory> subcategories) {
        this.subcategories = subcategories;

        if (subcategories != null) {
            subcategories.forEach(subcategory -> {
                // Process each subcategory here
            });
        }
    }
}
