package com.couponsystem.facades;

import java.util.ArrayList;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.couponsystem.dbdao.CouponDBDAO;
import com.couponsystem.dbdao.CustomerDBDAO;
import com.couponsystem.entities.Coupon;
import com.couponsystem.entities.Customer;
import com.couponsystem.enums.ClientType;
import com.couponsystem.enums.CouponType;
import com.couponsystem.exceptions.CouponExistException;
import com.couponsystem.exceptions.CouponNotExistException;
import com.couponsystem.exceptions.CouponsNotExistException;
import com.couponsystem.exceptions.CustomerNotExistException;
import com.couponsystem.exceptions.ExpiredDateException;
import com.couponsystem.exceptions.IllegalAmountException;
import com.couponsystem.repo.CustomerRepo;

import lombok.Getter;
import lombok.ToString;

@ToString
@Component
@Scope("prototype")
public class CustomerFacade implements CouponClientFacade {

	

	// DBDAO + REPO
	@Autowired
	CustomerDBDAO customerDBDAO;
	@Autowired
	CouponDBDAO couponDBDAO;
	@Autowired
	CustomerRepo customerRepo;
	
//	variables
	private Customer custLoggedIn;
	public int LoggedInId;

	public Customer getCustomerLoggedIn() {
			return custLoggedIn;
		}
		
		
		/**
		 * Customer login if successful sends a facade
		 * @param name
		 * @param password
		 * @param clinetType
		 * 
		 */
		@Override
		public CouponClientFacade login(String custName, String password, ClientType clinetType) {
			if(customerDBDAO.login(custName, password) == true){
				custLoggedIn = customerRepo.findByCustName(custName);
				System.err.println(custLoggedIn.toString());
				LoggedInId = custLoggedIn.getId();
				System.err.println("facade working");
				return this;
			}	
			else
				System.out.println("login failed please try again");
			return null;
		}
		/**
		 * purchase Coupon for a Customer
		 * @param couponId
		 * @throws CouponNotExistException
		 * @throws CustomerNotExistException
		 * @throws CouponExistException
		 * @throws IllegalAmountException
		 * @throws ExpiredDateException
		 */
		public void purchaseCoupon(int couponId) throws CouponNotExistException, 
		CustomerNotExistException ,CouponExistException, IllegalAmountException,
		ExpiredDateException
		{
			Coupon customerCoupon = customerDBDAO.getCustomerCoupon(couponId, LoggedInId);
			if (customerCoupon != null) {
				throw new CouponExistException("Customer already has the coupon");
			}else {
			customerDBDAO.purchaseCoupon(LoggedInId, couponId);}
		}
		
		/**
		 * Getting a single Coupon that Customer holds
		 * @param couponId
		 * @return
		 * @throws CustomerNotExistException
		 * @throws CouponNotExistException
		 */
		public Coupon getPurchasedCoupon(int couponId) throws CustomerNotExistException, CouponNotExistException 
		{
			return customerDBDAO.getCustomerCoupon(couponId, custLoggedIn.getId());
		}
		
		/**
		 * Get All purchased Coupons
		 * @return
		 * @throws CustomerNotExistException
		 * @throws CouponsNotExistException
		 */
		public ArrayList<Coupon> getAllPurchesedCoupons() throws CustomerNotExistException, CouponsNotExistException 
		{
			return customerDBDAO.getAllCoupons(custLoggedIn.getId());
		}
		
		/**
		 * Get all Customer's purchased Coupons by type
		 * @param type
		 * @return
		 * @throws CouponsNotExistException
		 * @throws CustomerNotExistException
		 */
		public ArrayList<Coupon> getAllPurchesCouponsByType(CouponType type)
		{
			return couponDBDAO.getCouponsByTypeAndCustomerid(type, custLoggedIn.getId());
		}
		
		/**
		 * Getting all Customer's purchased Coupons by their Price
		 * @param price
		 * @return
		 * @throws CustomerNotExistException
		 * @throws CouponsNotExistException
		 */
		public ArrayList<Coupon> getCouponsByPrice(double price) throws CustomerNotExistException, CouponsNotExistException
		{
			return customerDBDAO.getCouponsByPrice(custLoggedIn.getId(), price);
		}

		
		/**
		 * Getting all Customer's purchased Coupons by their Date
		 * @param date
		 * @return
		 * @throws CouponsNotExistException
		 * @throws CustomerNotExistException
		 */
		public ArrayList<Coupon> getCouponsByGivenEndDate(Date Enddate) throws CouponsNotExistException, CustomerNotExistException{
			return customerDBDAO.getCouponsByDate(custLoggedIn.getId(), Enddate);
		}
		
		
//	/*
//	 * fake login to connect for a fake customer to test
//	 */
//	public void fakeLogin(int id) {
//		try {
//			this.loginCustomer = custdb.getCustomer(id);
//		} catch (CustomerNotExistException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//	}
//	/**
//	 * Login method for Customer
//	 */
//	@Override
//	public CustomerFacade login(String name, String password, ClientType type) {
//		// Checking type first
//		if (!type.equals(ClientType.CUSTOMER)) {
//			return null;
//		}
//		// Checking name & password
//		if (!custdb.login(name, password)) {
//			return null;
//		}
//
//		// Success
//		loginCustomer = custdb.getCustomerByNameAndPassword(name, password);
//		return this;
//	}
//
//	/***
//	 * Purchase Coupon as long as Amount>0 and Date isn't expired
//	 * 
//	 * @param couponId
//	 * @throws CustomerNotExistException
//	 * @throws CouponNotExistException
//	 * @throws CouponExistException
//	 * @throws IllegalAmountException
//	 * @throws ExpiredDateException
//	 */
//	public void purchaseCoupon(int couponId) throws CustomerNotExistException, CouponNotExistException,
//			CouponExistException, IllegalAmountException, ExpiredDateException {
//		// Checking Customer first
//		if (loginCustomer == null) {
//			throw new CustomerNotExistException("Customer not exist");
//		}
//		// Checking Coupon is not exist
//		Coupon couponCheck = coupdb.getCoupon(couponId);
//		if (couponCheck == null) {
//			throw new CouponNotExistException("Coupon with +" + couponId + "does not exist");
//		}
//		// Checking if Customer hold this Coupon
//		Coupon customerCoupon = custdb.getCustomerCoupon(couponId, loginCustomer.getId());
//		if (customerCoupon != null) {
//			throw new CouponExistException("Customer already has the coupon");
//		}
//		// Checking amount
//		if (couponCheck.getAmount() < 0) {
//			throw new IllegalAmountException("Cant purchase Coupon - Amount lower then 0");
//		}
//		// Checking expired date
//		if (couponCheck.getEndDate().before(new Date(System.currentTimeMillis()))) {
//			throw new ExpiredDateException("Coupon's end date expired");
//		}
//
//		// Success - purchasing Coupon
//		custdb.purchaseCoupon(loginCustomer.getId(), couponId);
//	}
//
//	/**
//	 * Getting a single Coupon that Customer holds
//	 * 
//	 * @param couponId
//	 * @return
//	 * @throws CustomerNotExistException
//	 * @throws CouponNotExistException
//	 */
//	public Coupon getPurchasedCoupon(int couponId) throws CustomerNotExistException, CouponNotExistException {
//		// Checking Customer first
//		if (loginCustomer == null) {
//			throw new CustomerNotExistException("Customer not exist");
//		}
//		// Checking Coupon
//		Coupon coupon = custdb.getCustomerCoupon(couponId, loginCustomer.getId());
//		if (coupon == null) {
//			throw new CouponNotExistException("Coupon with +" + couponId + "does not exist");
//		}
//		return coupon;
//	}
//
//	/**
//	 * Get All purchased Coupons
//	 * 
//	 * @return
//	 * @throws CustomerNotExistException
//	 * @throws CouponsNotExistException
//	 */
//	public ArrayList<Coupon> getAllPurchesedCoupons() throws CustomerNotExistException, CouponsNotExistException {
//		// Checking Customer first
//		if (loginCustomer == null) {
//			throw new CustomerNotExistException("Customer not exist");
//		}
//
//		ArrayList<Coupon> customerCoupons = custdb.getAllCoupons(loginCustomer.getId());
//
//		// checking ArrayList
//		if (customerCoupons == null) {
//			throw new CouponsNotExistException("Coupons does not exist");
//		}
//		// Success
//		return customerCoupons;
//	}
//
//	/**
//	 * Get all Customer's purchased Coupons by type
//	 * 
//	 * @param type
//	 * @return
//	 * @throws CouponsNotExistException
//	 * @throws CustomerNotExistException
//	 */
//	public ArrayList<Coupon> getAllPurchesCouponsByType(CouponType type)
//			throws CouponsNotExistException, CustomerNotExistException {
//		// Checking Customer first
//		if (loginCustomer == null) {
//			throw new CustomerNotExistException("Customer does not exist");
//		}
//		
//		ArrayList<Coupon> customerCoupons = coupdb.getCouponsByTypeAndCustomerid(type, loginCustomer.getId());
//		// checking ArrayList
//		if (customerCoupons == null) {
//			throw new CouponsNotExistException("Coupons does not exist for this Customer");
//		}
//		// Success
//		return customerCoupons;
//	}
//	
//	/**
//	 * Getting all Customer's purchased Coupons by their Price
//	 * @param price
//	 * @return
//	 * @throws CustomerNotExistException
//	 * @throws CouponsNotExistException
//	 */
//	public ArrayList<Coupon> getCouponsByPrice(double price)
//			throws CustomerNotExistException, CouponsNotExistException{
//		// Checking Customer
//		if (loginCustomer == null) {
//			throw new CustomerNotExistException("Customer does not login please relogin");
//		}
//
//		ArrayList<Coupon> customerCoupons = custdb.getCouponsByPrice(loginCustomer.getId(), price);
//		// Checking array list
//		if (customerCoupons == null) {
//			throw new CouponsNotExistException("Coupons does not exist yet");
//		}
//		// Success providing Coupons
//		return customerCoupons;
//		}
}
