package com.ycyw.demo.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import com.ycyw.demo.model.User;

public interface UserRepository extends CrudRepository<User, Long> {

    Optional<User> findByEmail(String email);

}
