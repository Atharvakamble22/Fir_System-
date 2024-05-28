package com.userrepo;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;
import com.user.User;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}
