package com.fir;

import java.time.LocalDate;
import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "firs") 
public class FIR {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String district;
    private String policeStation;
    private String act;
    private String firNumber;
    private LocalDateTime dateAndTimeOfFIR;
    private String generalDiaryReferenceNumber;
    private String typeOfInformation;
    private String placeOfOccurrence;
    private String complainantFullName;
    private LocalDate complainantDOB;
    private String complainantNationality;
    private String complainantAadhaarNumber;
    private String complainantOccupation;
    private String complainantMobileNumber;
    private String complainantAddress;
    private String suspectName;
    private String enquiryOfficerName;
    private String enquiryOfficerRank;
    
    
	public FIR() {
		super();
	}

	public FIR(Long id, String district, String policeStation, String act, String firNumber,
			LocalDateTime dateAndTimeOfFIR, String generalDiaryReferenceNumber, String typeOfInformation,
			String placeOfOccurrence, String complainantFullName, LocalDate complainantDOB,
			String complainantNationality, String complainantAadhaarNumber, String complainantOccupation,
			String complainantMobileNumber, String complainantAddress, String suspectName, String enquiryOfficerName,
			String enquiryOfficerRank) {
		super();
		this.id = id;
		this.district = district;
		this.policeStation = policeStation;
		this.act = act;
		this.firNumber = firNumber;
		this.dateAndTimeOfFIR = dateAndTimeOfFIR;
		this.generalDiaryReferenceNumber = generalDiaryReferenceNumber;
		this.typeOfInformation = typeOfInformation;
		this.placeOfOccurrence = placeOfOccurrence;
		this.complainantFullName = complainantFullName;
		this.complainantDOB = complainantDOB;
		this.complainantNationality = complainantNationality;
		this.complainantAadhaarNumber = complainantAadhaarNumber;
		this.complainantOccupation = complainantOccupation;
		this.complainantMobileNumber = complainantMobileNumber;
		this.complainantAddress = complainantAddress;
		this.suspectName = suspectName;
		this.enquiryOfficerName = enquiryOfficerName;
		this.enquiryOfficerRank = enquiryOfficerRank;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDistrict() {
		return district;
	}

	public void setDistrict(String district) {
		this.district = district;
	}

	public String getPoliceStation() {
		return policeStation;
	}

	public void setPoliceStation(String policeStation) {
		this.policeStation = policeStation;
	}

	public String getAct() {
		return act;
	}

	public void setAct(String act) {
		this.act = act;
	}

	public String getFirNumber() {
		return firNumber;
	}

	public void setFirNumber(String firNumber) {
		this.firNumber = firNumber;
	}

	public LocalDateTime getDateAndTimeOfFIR() {
		return dateAndTimeOfFIR;
	}

	public void setDateAndTimeOfFIR(LocalDateTime dateAndTimeOfFIR) {
		this.dateAndTimeOfFIR = dateAndTimeOfFIR;
	}

	public String getGeneralDiaryReferenceNumber() {
		return generalDiaryReferenceNumber;
	}

	public void setGeneralDiaryReferenceNumber(String generalDiaryReferenceNumber) {
		this.generalDiaryReferenceNumber = generalDiaryReferenceNumber;
	}

	public String getTypeOfInformation() {
		return typeOfInformation;
	}

	public void setTypeOfInformation(String typeOfInformation) {
		this.typeOfInformation = typeOfInformation;
	}

	public String getPlaceOfOccurrence() {
		return placeOfOccurrence;
	}

	public void setPlaceOfOccurrence(String placeOfOccurrence) {
		this.placeOfOccurrence = placeOfOccurrence;
	}

	public String getComplainantFullName() {
		return complainantFullName;
	}

	public void setComplainantFullName(String complainantFullName) {
		this.complainantFullName = complainantFullName;
	}

	public LocalDate getComplainantDOB() {
		return complainantDOB;
	}

	public void setComplainantDOB(LocalDate complainantDOB) {
		this.complainantDOB = complainantDOB;
	}

	public String getComplainantNationality() {
		return complainantNationality;
	}

	public void setComplainantNationality(String complainantNationality) {
		this.complainantNationality = complainantNationality;
	}

	public String getComplainantAadhaarNumber() {
		return complainantAadhaarNumber;
	}

	public void setComplainantAadhaarNumber(String complainantAadhaarNumber) {
		this.complainantAadhaarNumber = complainantAadhaarNumber;
	}

	public String getComplainantOccupation() {
		return complainantOccupation;
	}

	public void setComplainantOccupation(String complainantOccupation) {
		this.complainantOccupation = complainantOccupation;
	}

	public String getComplainantMobileNumber() {
		return complainantMobileNumber;
	}

	public void setComplainantMobileNumber(String complainantMobileNumber) {
		this.complainantMobileNumber = complainantMobileNumber;
	}

	public String getComplainantAddress() {
		return complainantAddress;
	}

	public void setComplainantAddress(String complainantAddress) {
		this.complainantAddress = complainantAddress;
	}

	public String getSuspectName() {
		return suspectName;
	}

	public void setSuspectName(String suspectName) {
		this.suspectName = suspectName;
	}

	public String getEnquiryOfficerName() {
		return enquiryOfficerName;
	}

	public void setEnquiryOfficerName(String enquiryOfficerName) {
		this.enquiryOfficerName = enquiryOfficerName;
	}

	public String getEnquiryOfficerRank() {
		return enquiryOfficerRank;
	}

	public void setEnquiryOfficerRank(String enquiryOfficerRank) {
		this.enquiryOfficerRank = enquiryOfficerRank;
	}

    
}
