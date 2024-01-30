package ba.edu.ibu.elma.rest.dto;

import ba.edu.ibu.elma.core.model.User;
import ba.edu.ibu.elma.core.model.enums.UserType;

import java.util.Date;


public class UserRequestDTO {
    private UserType userType;
    private String email;
    private String username;
    private String password;
    private String imgUrl;

    public UserRequestDTO() { }


    public UserRequestDTO(User user) {
        this.userType = user.getUserType();
        this.email = user.getEmail();
        this.username = user.getUsername();
        this.password = user.getPassword();
        this.imgUrl = user.getImgUrl();
    }

    public User toEntity() {
        User user = new User();
        user.setUserType(userType);
        user.setEmail(email);
        user.setUsername(username);
        user.setPassword(password);
        user.setCreationDate(new Date());
        user.setImgUrl(imgUrl);
        return user;
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

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getImgUrl(){
        return imgUrl;
    }

    public void setImgUrl(String imgUrl){
        this.imgUrl = imgUrl;
    }
}
