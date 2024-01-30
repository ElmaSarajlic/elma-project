package ba.edu.ibu.elma.rest.dto;

import ba.edu.ibu.elma.core.model.Ad;
import ba.edu.ibu.elma.core.model.User;
import ba.edu.ibu.elma.core.model.enums.UserType;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class UserDTO {
    private String id;
    private String username;
    private UserType userType;
    private String email;
    private Date creationDate;
    private String imgUrl;


    public UserDTO(User user) {
        this.id = user.getId();
        this.username = user.getUsername();
        this.userType = user.getUserType();
        this.email = user.getEmail();
        this.creationDate = user.getCreationDate();
        this.imgUrl = user.getImgUrl();

    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public UserType getUserType() {
        return userType;
    }

    public void setUserType(UserType userType) {
        this.userType = userType;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) { this.email = email;}

    public Date getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }

    public String getImgUrl(){
        return imgUrl;
    }

    public void setImgUrl(String imgUrl){
        this.imgUrl = imgUrl;
    }


}
