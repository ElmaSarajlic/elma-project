package ba.edu.ibu.elma.core.model;

import org.springframework.data.annotation.Id;

import java.util.Date;

public class Category {
    @Id
    private String id;
    private String name;

    public Category(){}

    public Category(String id, String name) {
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
