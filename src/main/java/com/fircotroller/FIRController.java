package com.fircotroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fir.FIR;
import com.firrepo.FIRRepository;

@RestController
@RequestMapping("/api/fir")
@CrossOrigin("http://localhost:4200")
public class FIRController {
    @Autowired
    private FIRRepository firRepository;

    @PostMapping("/addFIR")
    public FIR addFIR(@RequestBody FIR fir) {
        return firRepository.save(fir);
    }

    @GetMapping("/findAll")
    public List<FIR> findAllFIRs() {
        return firRepository.findAll();
    }

    @GetMapping("/findById/{id}")
    public ResponseEntity<FIR> findFIRById(@PathVariable Long id) {
        FIR fir = firRepository.findById(id).orElse(null);
        if (fir != null) {
            return ResponseEntity.ok(fir);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/deleteByFirNumber/{firNumber}")
    public FIR deleteFIRByFirNumber(@PathVariable String firNumber) {
        FIR fir = firRepository.findByFirNumber(firNumber).orElse(null);
        if (fir != null) {
            firRepository.delete(fir);
            return fir;
        }
        return null; 
    }
}
