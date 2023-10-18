package ba.edu.ibu.elma.core.model;

public class Ad {
    private int id;
    private String title;
    private String description;
    private int dateOfPublishing;


    public Ad(int id, String title, String description, int dateOfPublishing) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.dateOfPublishing = dateOfPublishing;

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
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

    public int getDateOfPublishing() {
        return dateOfPublishing;
    }

    public void setDateOfPublishing(int dateOfPublishing) {
        this.dateOfPublishing = dateOfPublishing;
    }



}
