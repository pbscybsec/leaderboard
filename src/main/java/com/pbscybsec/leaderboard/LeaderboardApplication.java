package com.pbscybsec.leaderboard;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@org.springframework.data.mongodb.repository.config.EnableMongoRepositories
@EntityScan(basePackages = {"com.pbscybsec.leaderboard"})
public class LeaderboardApplication {

    public static void main(String[] args) {
        SpringApplication.run(LeaderboardApplication.class, args);
    }

}
