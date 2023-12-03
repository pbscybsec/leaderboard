package com.pbscybsec.leaderboard.repository;
import org.springframework.data.mongodb.repository.MongoRepository;
import com.pbscybsec.leaderboard.model.User;

import java.util.List;

public interface UserRepository extends MongoRepository<User, String> {
    List<User> findAll();

}
