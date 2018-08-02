package com.couponsystem.WebService;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.couponsystem.entities.Coupon;
import com.couponsystem.enums.CouponType;
import com.couponsystem.exceptions.CompanyExistException;
import com.couponsystem.exceptions.CompanyNotExistException;
import com.couponsystem.exceptions.CouponExistException;
import com.couponsystem.exceptions.CouponNotExistException;
import com.couponsystem.exceptions.CouponsNotExistException;
import com.couponsystem.facades.CompanyFacade;
import com.couponsystem.facades.CouponSystem;
import com.couponsystem.repo.CouponRepo;


@RestController
@CrossOrigin("*")
public class CompanyWS {
	
	@Autowired
	private CompanyFacade companyFacade;
	@Autowired CouponSystem cs;
	@Autowired CouponRepo cr;
	
	private CompanyFacade getFacade(HttpServletRequest req)
		{
			CompanyFacade cf = (CompanyFacade) req.getSession().getAttribute("companyFacade");
			return cf;
		}
	
	@RequestMapping(value = "/companyApi/createCoupon", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public void createCoupon (HttpServletRequest req, @RequestBody Coupon coupon) throws CompanyNotExistException, CouponExistException, CompanyExistException 
		{
			getFacade(req).createCoupon(coupon);
		}
	
	@RequestMapping(value = "/companyApi/removeCoupon/{id}", method = RequestMethod.DELETE)
	public void removeCoupon (HttpServletRequest req, @PathVariable ("id") int couponId) throws CouponNotExistException, CompanyNotExistException 
		{
			CompanyFacade cf = getFacade(req);
			cf.removeCoupon(couponId);
		}
	
	@RequestMapping(value = "/companyApi/updateCoupon", method = RequestMethod.PUT)
	public void updateCoupon (HttpServletRequest req, @RequestBody Coupon coupon) throws CompanyNotExistException, CouponNotExistException
		{
			CompanyFacade cf = getFacade(req);
			cf.updateCoupon(coupon.getEndDate(), coupon.getPrice(), coupon.getId());
		}
	
	@RequestMapping(value = "/companyApi/getCoupon/{id}", method = RequestMethod.GET)
	public Coupon getCoupon (HttpServletRequest req, @PathVariable("id") int couponId) throws CompanyNotExistException, CouponNotExistException 
		{
			CompanyFacade cf = getFacade(req);
			return cf.getCoupon(couponId);
		}
	
	@RequestMapping(value = "/companyApi/getAllCoupons", method = RequestMethod.GET)
	public ArrayList<Coupon> allCoupons(HttpServletRequest req) throws CompanyNotExistException, CouponsNotExistException 
		{
			CompanyFacade cf = getFacade(req);
			return cf.getAllCoupons();
		}
	
	@RequestMapping(value = "/companyApi/getAllCouponsByType/{type}", method = RequestMethod.GET)
	public ArrayList<Coupon> getAllCouponsByType (HttpServletRequest req, @PathVariable ("type") CouponType typeText) throws CompanyNotExistException, CouponsNotExistException
		{
			CompanyFacade cf = getFacade(req);
			return (ArrayList<Coupon>) cf.getCompanyCouponsByType(typeText);
		}
	
	@RequestMapping(value = "/companyApi/getCouponsLaserThenPrice/{price}", method = RequestMethod.GET)
	public ArrayList<Coupon> getCouponsLaserThenPrice (HttpServletRequest req, @PathVariable ("price") double price) throws CompanyNotExistException, CouponsNotExistException 
		{
			CompanyFacade cf = getFacade(req);
			return (ArrayList<Coupon>) cf.getCouponsLaserThenPrice(price);
		}
	
	@RequestMapping(value="companyApi/getCouponsUpToGivenDate/{date}",  method = RequestMethod.GET)
	public ArrayList<Coupon> getCouponsUpToGivenDate (HttpServletRequest req, @PathVariable ("date") String endDate) throws CompanyNotExistException, CouponsNotExistException, ParseException
		{
			DateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
			Date date = formatter.parse(endDate);
			CompanyFacade cf = getFacade(req);
			return (ArrayList<Coupon>) cf.getCouponsByGivenEndDate(date);
		}
		
//	@RequestMapping(value = "/companyApi/createCoupon", method = RequestMethod.POST)
//	public void createCoupon (@RequestBody Coupon coupon) {
//		companyFacade.fakeLogin(1);
//		try {
//			companyFacade.createCoupon(coupon);
//		} catch (CompanyNotExistException | CouponExistException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//	}
//	
//	@RequestMapping(value = "/companyApi/removeCoupon/{id}", method = RequestMethod.DELETE)
//	public void removeCoupon (@PathVariable ("id") int couponId) {
//		companyFacade.fakeLogin(1);
//		try {
//			companyFacade.removeCoupon(couponId);
//		} catch (CouponNotExistException | CompanyNotExistException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//	}
//	
//	@RequestMapping(value = "/companyApi/updateCoupon", method = RequestMethod.PUT)
//	public void updateCoupon (@RequestBody Coupon coupon) {
//		companyFacade.fakeLogin(1);
//		try {
//			companyFacade.updateCoupon(coupon.getEndDate(), coupon.getPrice(), coupon.getId());
//		} catch (CouponNotExistException | CompanyNotExistException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//	}
//
//	@RequestMapping(value = "/companyApi/getCoupon/{id}", method = RequestMethod.GET)
//	public Coupon getCoupon (@PathVariable("id") int couponId) {
//		companyFacade.fakeLogin(1);
//		Coupon coupon = null;
//			try {
//				coupon	= companyFacade.getCoupon(couponId);
//			} catch (CompanyNotExistException | CouponNotExistException e) {
//				// TODO Auto-generated catch block
//				e.printStackTrace();
//			}
//			return coupon;
//	}
//
//	@RequestMapping(value = "/companyApi/getAllCoupons", method = RequestMethod.GET)
//	public ArrayList<Coupon> allCoupons() {
//		ArrayList<Coupon> couponsList = null;
//		companyFacade.fakeLogin(1);
//			try {
//				couponsList = companyFacade.getCompanyCoupons();
//			} catch (CompanyNotExistException | CouponsNotExistException e) {
//				// TODO Auto-generated catch block
//				e.printStackTrace();
//			}
//			return couponsList;
//	}
//
//	@RequestMapping(value = "/companyApi/getAllCouponsByType/{type}", method = RequestMethod.GET)
//	public ArrayList<Coupon> getAllCouponsByType (@PathVariable ("type") String typeText) {
//		ArrayList<Coupon> couponsListByType = null;
//		companyFacade.fakeLogin(1);
//			try {
//				CouponType type = CouponType.valueOf(typeText);
//				couponsListByType = companyFacade.getCompanyCouponsByType(type);
//			} catch (CompanyNotExistException | CouponsNotExistException e) {
//				// TODO Auto-generated catch block
//				e.printStackTrace();
//			}
//			return couponsListByType;
//	}
//	
//	@RequestMapping(value = "/companyApi/getCouponsLaserThenPrice/{price}", method = RequestMethod.GET)
//	public ArrayList<Coupon> getCouponsLaserThenPrice (@PathVariable ("price") double price) {
//		ArrayList<Coupon> CouponsLaserThenPrice = null;
//		companyFacade.fakeLogin(1);
//		try {
//			CouponsLaserThenPrice = companyFacade.getCouponsLaserThenPrice(price);
//		}catch(CompanyNotExistException | CouponsNotExistException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//		System.out.println("1");
//		return CouponsLaserThenPrice;
//	}
//	
//	@RequestMapping(value="companyApi/getCouponsUpToGivenDate/{date}",  method = RequestMethod.GET)
//	public ArrayList<Coupon> getCouponsUpToGivenDate (@PathVariable ("date") Date endDate) {
//		ArrayList<Coupon> CouponsUpToGivenDate = null;
//		companyFacade.fakeLogin(1);
//		try {
//			CouponsUpToGivenDate = companyFacade.getCouponsByGivenEndDate(endDate, companyFacade.getLoginCompany().getId());
//		}catch(CompanyNotExistException | CouponsNotExistException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//		return CouponsUpToGivenDate;
//	}
}
