package com.couponsystem.WebService;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.couponsystem.entities.Coupon;
import com.couponsystem.enums.CouponType;
import com.couponsystem.exceptions.CompanyNotExistException;
import com.couponsystem.exceptions.CouponExistException;
import com.couponsystem.exceptions.CouponNotExistException;
import com.couponsystem.exceptions.CouponsNotExistException;
import com.couponsystem.exceptions.CustomerNotExistException;
import com.couponsystem.exceptions.ExpiredDateException;
import com.couponsystem.exceptions.IllegalAmountException;
import com.couponsystem.facades.CompanyFacade;
import com.couponsystem.facades.CouponSystem;
import com.couponsystem.facades.CustomerFacade;
import com.couponsystem.repo.CouponRepo;


@RestController
@CrossOrigin("*")
public class CustomerWS {

	@Autowired CouponRepo couponRepo;
	@Autowired CouponSystem cs;
	
	private CustomerFacade getFacade(HttpServletRequest req)
	{
		CustomerFacade cf = (CustomerFacade) req.getSession().getAttribute("customerFacade");
		System.out.println(cf.toString());
		return cf;
	}
	
//	http://localhost:8080/customerApi/purchaseCoupon/1
	@RequestMapping(value = "/customerApi/purchaseCoupon/{id}", method = RequestMethod.GET)
	public void purchaseCoupon (HttpServletRequest req,@PathVariable ("id") int couponId) throws CouponNotExistException, CustomerNotExistException, CouponExistException, IllegalAmountException, ExpiredDateException
	{
		getFacade(req).purchaseCoupon(couponId);
	}
	
	@RequestMapping(value = "/customerApi/getAllPurchesedCoupons" , method = RequestMethod.GET)
	public ArrayList<Coupon> getAllCoupons(HttpServletRequest req) throws CustomerNotExistException, CouponsNotExistException
	{
		CustomerFacade cuf = getFacade(req);
		return cuf.getAllPurchesedCoupons();
	}
	
	@RequestMapping(value = "/customerApi/getAllPurchesedCouponsByType/{type}", method = RequestMethod.GET)
	public ArrayList<Coupon> getAllPurchesedCouponsByType (HttpServletRequest req, @PathVariable ("type") CouponType typeText) 
	{
		CustomerFacade cuf = getFacade(req);
		return cuf.getAllPurchesCouponsByType(typeText);
	}
	
	@RequestMapping(value = "/customerApi/getAllPurchesedCouponsByPrice/{price}", method = RequestMethod.GET)
	public ArrayList<Coupon> getAllPurchesedCouponsByPrice (HttpServletRequest req, @PathVariable ("price") double price) throws CustomerNotExistException, CouponsNotExistException 
	{
		return getFacade(req).getCouponsByPrice(price);
	}
	
	@RequestMapping(value="customerApi/getCouponsUpToGivenDate/{date}",  method = RequestMethod.GET)
	public ArrayList<Coupon> getCouponsUpToGivenDate (HttpServletRequest req, @PathVariable ("date") String endDate) throws ParseException, CouponsNotExistException, CustomerNotExistException 
		{
			DateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
			Date date = formatter.parse(endDate);
			CustomerFacade cuf = getFacade(req);
			return (ArrayList<Coupon>) cuf.getCouponsByGivenEndDate(date);
		}

	
	
	//old method
	
	
//	@RequestMapping(value = "/customerApi/purchaseCoupon/{id}" , method = RequestMethod.GET) 
//	public void purchaseCoupon (@PathVariable ("id") int couponId) {
//		customerFacade.fakeLogin(1);
//		try {
//			customerFacade.purchaseCoupon(couponId);
//		} catch (CustomerNotExistException | CouponNotExistException | CouponExistException | IllegalAmountException
//				| ExpiredDateException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//	}
//	
//	@RequestMapping(value = "/customerApi/getAllPurchesedCoupons" , method = RequestMethod.GET)
//	public ArrayList<Coupon> getAllCoupons() {
//		customerFacade.fakeLogin(1);
//		ArrayList<Coupon> listOfCustomerCoupons = null;
//		try {
//			listOfCustomerCoupons =	customerFacade.getAllPurchesedCoupons();
//		} catch (CustomerNotExistException | CouponsNotExistException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//		return listOfCustomerCoupons; 
//	}
//	
//	@RequestMapping(value = "/customerApi/getAllPurchesedCouponsByType/{type}", method = RequestMethod.GET)
//	public ArrayList<Coupon> getAllPurchesedCouponsByType (@PathVariable ("type") String typeText) {
//		customerFacade.fakeLogin(1);
//		ArrayList<Coupon> couponsListByType = null;
//		try {
//			CouponType type = CouponType.valueOf(typeText);
//			couponsListByType =	customerFacade.getAllPurchesCouponsByType(type);
//		} catch (CouponsNotExistException | CustomerNotExistException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//			}
//		return couponsListByType;
//	}
//	
//	@RequestMapping(value = "/customerApi/getAllPurchesedCouponsByPrice/{price}", method = RequestMethod.GET)
//	public ArrayList<Coupon> getAllPurchesedCouponsByPrice (@PathVariable ("price") double price) {
//		customerFacade.fakeLogin(1);
//		ArrayList<Coupon> couponsListByPrice = null;
//		try {
//			couponsListByPrice = customerFacade.getCouponsByPrice(price);
//		} catch (CustomerNotExistException | CouponsNotExistException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//		return couponsListByPrice;
//	}
}
