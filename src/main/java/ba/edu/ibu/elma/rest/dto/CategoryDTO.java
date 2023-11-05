package ba.edu.ibu.elma.rest.dto;

import ba.edu.ibu.elma.core.model.Category;

public class CategoryDTO {
    private String id;
    private String name;

    public CategoryDTO(Category category) {
        this.id = category.getId();
        this.name = category.getName();
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
