package ba.edu.ibu.elma.core.model;

import org.springframework.data.annotation.Id;

public class Subcategory {
    @Id
    private String id;
    private String name;

    public Subcategory(){}

    public Subcategory(String id, String name) {
        this.id = id;
        this.name = name;
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

}
