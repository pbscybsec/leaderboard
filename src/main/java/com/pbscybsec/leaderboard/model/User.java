package com.pbscybsec.leaderboard.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
public class User {
    @Id
    private String _id;
    private String firstName;
    private String lastName;
    private int impressions;

    // Constructors

    public User() {
        // Default constructor
    }

    public User(String firstName, String lastName, int impressions) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.impressions = impressions;
    }

    // Getter and Setter methods

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public int getImpressions() {
        return impressions;
    }

    public void setImpressions(int impressions) {
        this.impressions = impressions;
    }
}
