package com.firrepo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fir.FIR;

@Repository
public interface FIRRepository extends JpaRepository<FIR, Long> {
	Optional<FIR> findByFirNumber(String firNumber);
}

