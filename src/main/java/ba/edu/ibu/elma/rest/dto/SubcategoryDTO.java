package ba.edu.ibu.elma.rest.dto;
import ba.edu.ibu.elma.core.model.Subcategory;

public class SubcategoryDTO {
    private String id;
    private String name;

    public SubcategoryDTO(Subcategory subcategory) {
        this.id = subcategory.getId();
        this.name = subcategory.getName();
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

