package ba.edu.ibu.elma.rest.dto;

import ba.edu.ibu.elma.core.model.Subcategory;

public class SubcategoryRequestDTO {
    private String id;
    private String name;


    public SubcategoryRequestDTO() { }

    public SubcategoryRequestDTO(Subcategory subcategory) {
        this.name = subcategory.getName();

    }

    public Subcategory toEntity() {
        Subcategory subcategory = new Subcategory();
        subcategory.setId(id);
        subcategory.setName(name);
        return subcategory;
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

