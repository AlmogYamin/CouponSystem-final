package com.couponsystem.facades;

import java.util.ArrayList;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.couponsystem.dbdao.CompanyDBDAO;
import com.couponsystem.dbdao.CouponDBDAO;
import com.couponsystem.entities.Company;
import com.couponsystem.entities.Coupon;
import com.couponsystem.enums.ClientType;
import com.couponsystem.enums.CouponType;
import com.couponsystem.exceptions.CompanyExistException;
import com.couponsystem.exceptions.CompanyNotExistException;
import com.couponsystem.exceptions.CouponExistException;
import com.couponsystem.exceptions.CouponNotExistException;
import com.couponsystem.exceptions.CouponsNotExistException;
import com.couponsystem.repo.CompanyRepo;

import lombok.Getter;
import lombok.ToString;

/***
 * CompanyFacade for managing Coupons
 * 
 * @author מיתר
 *
 */
@ToString
@Component
@Scope("prototype")
public class CompanyFacade implements CouponClientFacade {

	// Object's attribute
	@Getter
	private Company loginCompany;

	// DBDAO+REPO
	@Autowired
	CouponDBDAO couponDBDAO;
	@Autowired
	CompanyDBDAO companyDBDAO;
	@Autowired
	CompanyRepo companyRepo;

	//variables 
	private Company compLoggedIn;
	public Date startDate = new Date();
	public Date endDate = new Date();
	public int LoggedInId;
	
	
	public Company getCompLoggedIn() {
		return compLoggedIn;
	}
	
	/**
	 * company login if successful sends a facade
	 * @param compName
	 * @param password
	 * @param clinetType
	 * 
	 */
	@Override
	public CouponClientFacade login(String compName, String password, ClientType clinetType) {
		try {
			if(companyDBDAO.login(compName, password) == true){
				compLoggedIn = companyRepo.findByCompName(compName);
				LoggedInId = compLoggedIn.getId();
				return this;
			}
			else 
			System.out.println("login failed please try again");
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	return null;
	}

	/***
	 * Creating Coupon
	 * @param coupon
	 * @throws CompanyNotExistException
	 * @throws CouponExistException
	 * @throws CompanyExistException 
	 */
	public void createCoupon(Coupon coupon) throws CompanyNotExistException, CouponExistException
		{
			couponDBDAO.createCoupon(coupon, LoggedInId);
		}
	
	/***
	 * Removing Company's Coupon
	 * @param coupon
	 * @throws CompanyNotExistException
	 * @throws CouponNotExistException
	 */
	public void removeCoupon(int couponId) throws CouponNotExistException, CompanyNotExistException 
		{
			couponDBDAO.removeCoupon(couponId, compLoggedIn.getId());
		}	

	/***
	 * Update Coupon set endDate & Price by couponId & companyId
	 * @param endDate
	 * @param price
	 * @param couponId
	 * @param companyId
	 * @throws CompanyNotExistException
	 * @throws CouponNotExistException
	 */
	public void updateCoupon(Date endDate, double price, int couponId)
			throws CompanyNotExistException, CouponNotExistException
		{
			couponDBDAO.updateCoupon(endDate, price, couponId, compLoggedIn.getId());
		}
	
	/***
	 * Get Company's Coupon
	 * @param couponId
	 * @return
	 * @throws CompanyNotExistException
	 * @throws CouponNotExistException
	 */
	public Coupon getCoupon(int couponId) throws CompanyNotExistException, CouponNotExistException 
		{
			return couponDBDAO.getCoupon(couponId);
		}
	
	/***
	 * Get all Coupons
	 * @return
	 * @throws CompanyNotExistException
	 * @throws CouponsNotExistException
	 */
	public ArrayList<Coupon> getAllCoupons() throws CompanyNotExistException, CouponsNotExistException 
		{
			return companyDBDAO.getAllCoupons(this.LoggedInId);
		}
	
	/**
	 * Get all Company's coupons by type
	 * @param type
	 * @return
	 * @throws CompanyNotExistException
	 * @throws CouponsNotExistException
	 */
	public ArrayList<Coupon> getCompanyCouponsByType(CouponType type)
			throws CompanyNotExistException, CouponsNotExistException 
		{
		 	return companyDBDAO.getCouponsByType(this.LoggedInId, type);
		}
	
	/***
	 * Get all Coupons lesser then given Price
	 * 
	 * @param CouponPrice
	 * @return
	 * @throws CompanyNotExistException
	 * @throws CouponsNotExistException
	 */
	public ArrayList<Coupon> getCouponsLaserThenPrice(double price)
			throws CompanyNotExistException, CouponsNotExistException 
		{
			return companyDBDAO.getCompanyCouponsByPrice(this.LoggedInId, price);	
		}
	
	/**
	 * Get all Coupons up until Given endDate 
	 * @param endDate
	 * @return
	 * @throws CompanyNotExistException
	 * @throws CouponsNotExistException
	 */
	public ArrayList<Coupon> getCouponsByGivenEndDate(Date endDate) throws CompanyNotExistException, CouponsNotExistException 
		{
		 	return companyDBDAO.getCouponsByGivenEndDate(endDate, this.LoggedInId);
		}
	
	
	
	
	//old method
	
//	/*
//	 * fake login to connect for a fake company to test
//	 */
//	public void fakeLogin(int id) {
//		try {
//			this.loginCompany = compdb.getCompany(id);
//		} catch (CompanyNotExistException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//			System.out.println(loginCompany);
//		}
//	}
//	/***
//	 * Login method for Company
//	 */
//	@Override
//	public CompanyFacade login(String name, String password, ClientType type) {
//		// Checking type first
//		if (!type.equals(ClientType.COMPANY)) {
//			return null;
//		}
//		// Checking name & password
//		if (!compdb.login(name, password)) {
//			return null;
//		}
//
//		// Success
//		loginCompany = compdb.getCompanyByNameAndPassword(name, password);
//		return this;
//	}
//
//	/***
//	 * Creating Coupon
//	 * 
//	 * @param coupon
//	 * @throws CompanyNotExistException
//	 * @throws CouponExistException
//	 */
//	public void createCoupon(Coupon coupon) throws CompanyNotExistException, CouponExistException {
//		// Checking Company
//		if (loginCompany == null) {
//			throw new CompanyNotExistException("Please login first");
//		}
//		// Checking Coupon
//		Coupon check = coupdb.getCouponByTitleAndCompany(coupon.getTitle(), loginCompany.getId());
//		if (check != null) {
//			throw new CouponExistException("Coupon " + coupon.getTitle() + " already exist");
//		}
//
//		// Success - creating Coupon
//		coupdb.createCoupon(coupon, loginCompany.getId());
//	}
//
//	/***
//	 * Removing Company's Coupon
//	 * 
//	 * @param coupon
//	 * @throws CompanyNotExistException
//	 * @throws CouponNotExistException
//	 */
//	public void removeCoupon(int couponId) throws CouponNotExistException, CompanyNotExistException {
//		// Checking Company
//		if (loginCompany == null) {
//			throw new CompanyNotExistException("Please login first");
//		}
//		// Checking Coupon
//		Coupon check = coupdb.getCompanyCoupon(couponId, loginCompany.getId());
//		if (check == null) {
//			throw new CouponNotExistException("Coupon " + couponId + " dose not exist ");
//		}
//
//		// Success - remove Coupon
//		coupdb.removeCoupon(couponId, loginCompany.getId());
//	}
//
//	/***
//	 * Update Coupon set endDate & Price by couponId & companyId
//	 * 
//	 * @param endDate
//	 * @param price
//	 * @param couponId
//	 * @param companyId
//	 * @throws CompanyNotExistException
//	 * @throws CouponNotExistException
//	 */
//	public void updateCoupon(Date endDate, double price, int couponId)
//			throws CompanyNotExistException, CouponNotExistException {
//		// Checking Company
//		if (loginCompany == null) {
//			throw new CompanyNotExistException("Please login first");
//		}
//		// Checking Coupon
//		Coupon check = coupdb.getCompanyCoupon(couponId, loginCompany.getId());
//		if (check == null) {
//			throw new CouponNotExistException("Coupon " + couponId + " dose not exist ");
//		}
//
//		// Success - update Coupon set endDate and price
//		coupdb.updateCoupon(endDate, price, couponId, loginCompany.getId());
//	}
//
//	/***
//	 * Get Company's Coupon
//	 * 
//	 * @param couponId
//	 * @return
//	 * @throws CompanyNotExistException
//	 * @throws CouponNotExistException
//	 */
//	public Coupon getCoupon(int couponId) throws CompanyNotExistException, CouponNotExistException {
//		// Checking Company
//		if (loginCompany == null) {
//			throw new CompanyNotExistException("Please login first");
//		}
//		// Checking Coupon
//		Coupon check = coupdb.getCompanyCoupon(couponId, loginCompany.getId());
//		if (check == null) {
//			throw new CouponNotExistException("Coupon " + couponId + " dose not exist ");
//		}
//		// Success - get Coupon
//		return check;
//	}
//
//	/***
//	 * Get all Coupons
//	 * 
//	 * @return
//	 * @throws CompanyNotExistException
//	 * @throws CouponsNotExistException
//	 */
//	public ArrayList<Coupon> getAllCoupons() throws CompanyNotExistException, CouponsNotExistException {
//		// Checking Company
//		if (loginCompany == null) {
//			throw new CompanyNotExistException("Please login first");
//		}
//		// Checking ArrayList not null
//		ArrayList<Coupon> allCoupons = coupdb.getAllCoupons();
//		if (allCoupons == null) {
//			throw new CouponsNotExistException("Coupons ArrayList = null");
//		}
//		// Success - get all Coupons
//		return allCoupons;
//	}
//
//	/**
//	 * Get all Company's Coupons
//	 * 
//	 * @return
//	 * @throws CompanyNotExistException
//	 * @throws CouponsNotExistException
//	 */
//	public ArrayList<Coupon> getCompanyCoupons() throws CompanyNotExistException, CouponsNotExistException {
//		// Checking Company
//		if (loginCompany == null) {
//			throw new CompanyNotExistException("Please login first");
//		}
//		// Checking ArrayList not null
//		ArrayList<Coupon> companyCoupons = compdb.getAllCoupons(loginCompany.getId());
//		if (companyCoupons == null) {
//			throw new CouponsNotExistException("Coupons ArrayList = null");
//		}
//		// Success - get all company's coupons
//		return companyCoupons;
//	}
//
//	/***
//	 * Get all Coupons by type
//	 * 
//	 * @param couponType
//	 * @return
//	 * @throws CompanyNotExistException
//	 * @throws CouponsNotExistException
//	 */
//	public ArrayList<Coupon> getCouponsByType(CouponType couponType)
//			throws CompanyNotExistException, CouponsNotExistException {
//		// Checking Company
//		if (loginCompany == null) {
//			throw new CompanyNotExistException("Please login first");
//		}
//		// Checking ArrayList not null
//		ArrayList<Coupon> couponsByType = coupdb.getCouponsByType(couponType);
//		if (couponsByType == null) {
//			throw new CouponsNotExistException("Coupons ArrayList = null");
//		}
//		// Success - get all Coupons
//		return couponsByType;
//	}
//
//	/**
//	 * Get all Company's coupons by type
//	 * 
//	 * @param type
//	 * @return
//	 * @throws CompanyNotExistException
//	 * @throws CouponsNotExistException
//	 */
//	public ArrayList<Coupon> getCompanyCouponsByType(CouponType type)
//			throws CompanyNotExistException, CouponsNotExistException {
//		// Checking Company
//		if (loginCompany == null) {
//			throw new CompanyNotExistException("Please login first");
//		}
//		// Checking ArrayList not null
//		ArrayList<Coupon> companyCoupons = compdb.getCouponsByType(loginCompany.getId(), type);
//		if (companyCoupons == null) {
//			throw new CouponsNotExistException("Coupons ArrayList = null");
//		}
//		// Success - get all company's coupons
//		return companyCoupons;
//	}
//
//	/***
//	 * Get all Coupons lesser then given Price
//	 * 
//	 * @param CouponPrice
//	 * @return
//	 * @throws CompanyNotExistException
//	 * @throws CouponsNotExistException
//	 */
//	public ArrayList<Coupon> getCouponsLaserThenPrice(double price)
//			throws CompanyNotExistException, CouponsNotExistException {
//		// Checking Company
//		if (loginCompany == null) {
//			throw new CompanyNotExistException("Please login first");
//		}
//		// Checking ArrayList not null
//		ArrayList<Coupon> couponsLaserThenPrice = compdb.getCompanyCouponsByPrice(loginCompany.getId(), price);
//		if (couponsLaserThenPrice == null) {
//			throw new CouponsNotExistException("Coupons ArrayList = null");
//		}
//		// Success - get coupons
//		return couponsLaserThenPrice;
//	}
//
//	/**
//	 * Get all Coupons up until Given endDate 
//	 * @param endDate
//	 * @return
//	 * @throws CompanyNotExistException
//	 * @throws CouponsNotExistException
//	 */
//	public ArrayList<Coupon> getCouponsByGivenEndDate(Date endDate) throws CompanyNotExistException, CouponsNotExistException {
//		// Checking Company
//		if (loginCompany == null) {
//			throw new CompanyNotExistException("Please login first");
//		}
//		// Checking ArrayList not null
//		ArrayList<Coupon> couponsUpGivenEndDate = compdb.getCouponsByGivenEndDate(endDate, loginCompany.getId());
//		if(couponsUpGivenEndDate == null) {
//			throw new CouponsNotExistException("Coupons ArrayList = null");
//		}
//		//Success - get coupons
//		return couponsUpGivenEndDate;
//	}
}
