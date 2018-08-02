package com.couponsystem.WebService;

import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.couponsystem.entities.Company;
import com.couponsystem.entities.Customer;
import com.couponsystem.exceptions.CompaniesNotExistException;
import com.couponsystem.exceptions.CompanyExistException;
import com.couponsystem.exceptions.CompanyNotExistException;
import com.couponsystem.exceptions.CustomerExistException;
import com.couponsystem.exceptions.CustomerNotExistException;
import com.couponsystem.exceptions.CustomersNotExistException;
import com.couponsystem.facades.AdminFacade;
import com.couponsystem.facades.CouponSystem;
import com.couponsystem.repo.CompanyRepo;


@RestController
@CrossOrigin("*")
public class AdminWS {

	@Autowired CouponSystem cs;
	@Autowired CompanyRepo cr;
	
	@Autowired
	AdminFacade adminFacade;

	private AdminFacade getFacade(HttpServletRequest req)
	{
		AdminFacade af = (AdminFacade) req.getSession().getAttribute("adminFacade");
		return af;
		
	}
	
	/*
	 * Admin methods~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	 */
	
	@RequestMapping(value = "/adminApi/createCompany", method = RequestMethod.POST)
	public void createCompany(HttpServletRequest req, @RequestBody Company company) throws CompanyExistException
		{
			AdminFacade af = getFacade(req);
			af.createCompany(company);
		}
	
	
	@RequestMapping(value = "/adminApi/removeCompany/{id}", method = RequestMethod.DELETE)
	public void removeCompany(HttpServletRequest req, @PathVariable("id") int companyId) throws CompanyNotExistException
		{
//			Company remove = new Company();
//			remove = cr.findOne(companyId);
			AdminFacade af= getFacade(req);
			af.removeCompany(companyId);
		}
	
	
	@RequestMapping(value = "/adminApi/updateCompany", method = RequestMethod.PUT)
	public void updateCompany(HttpServletRequest req, @RequestBody Company company) throws CompanyNotExistException 
		{
			AdminFacade af = getFacade(req);
			af.updateCompany(company.getPassword(), company.getEmail(), company.getId());
		}
	
	
	@RequestMapping(value = "/adminApi/getCompany/{id}", method = RequestMethod.GET)
	public Company getCompany (HttpServletRequest req, @PathVariable("id") int companyId) throws CompanyNotExistException 
		{
			AdminFacade af = getFacade(req);
			return af.getCompany(companyId);
		}
	
	
	@RequestMapping(value = "/adminApi/getAllCompanies", method = RequestMethod.GET)
	public ArrayList<Company> getAllCompanies(HttpServletRequest req) throws CompaniesNotExistException
		{
			AdminFacade af = getFacade(req);
			return af.getAllCompanies();
		}
	
	
	/*
	 * Customer methods~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	 */
	
	@RequestMapping(value = "/adminApi/createCustomer", method = RequestMethod.POST)
	public void createCustomer (HttpServletRequest req, @RequestBody Customer customer) throws CustomerExistException 
		{
			AdminFacade af = getFacade(req);
			af.createCustomer(customer);
		}
	
	@RequestMapping(value = "/adminApi/removeCustomer/{id}" , method = RequestMethod.DELETE)
	public void removeCustomer (HttpServletRequest req, @PathVariable("id") int customerId) throws CustomerNotExistException 
		{
			AdminFacade af = getFacade(req);
			af.removeCustomer(customerId);
		}
	
	@RequestMapping(value = "/adminApi/updateCustomer", method = RequestMethod.PUT)
	public void updateCustomer(HttpServletRequest req, @RequestBody Customer customer) throws CustomerNotExistException 
		{
			AdminFacade af = getFacade(req);
			af.updateCustomer(customer.getPassword(), customer.getId());
		}
	
	@RequestMapping(value = "/adminApi/getCustomer/{id}" , method = RequestMethod.GET)
	public Customer getCustomer (HttpServletRequest req, @PathVariable("id") int customerId) throws CustomerNotExistException 
		{
		AdminFacade af =  getFacade(req);
		return af.getCustomer(customerId);
		}
	
	@RequestMapping(value = "/adminApi/getAllCustomers" , method = RequestMethod.GET)
	public ArrayList<Customer> getAllCuatomers(HttpServletRequest req) throws CustomersNotExistException
		{
		AdminFacade af = getFacade(req);
		return af.getAllCustomer();
		}
	
	/*
	 * Admin methods~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	 */
	
//	@RequestMapping(value = "/adminApi/createCompany", method = RequestMethod.POST)
//	public void createCompany(@RequestBody Company company) {
//		try {
//			adminFacade.createCompany(company);
//		} catch (CompanyExistException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//	}

//	@RequestMapping(value = "/adminApi/removeCompany/{id}", method = RequestMethod.DELETE)
//	public void removeCompany(@PathVariable("id") int companyId) {
//		try {
//			adminFacade.removeCompany(companyId);
//		} catch (CompanyNotExistException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//	}
	
//	@RequestMapping(value = "/adminApi/updateCompany", method = RequestMethod.PUT)
//	public void updateCompany(@RequestBody Company company) {
//		try {
//			adminFacade.updateCompany(company.getPassword(), company.getEmail(), company.getId());
//		} catch (CompanyNotExistException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//	}
	
//	@RequestMapping(value = "/adminApi/getCompany/{id}", method = RequestMethod.GET)
//	public Company getCompany (@PathVariable("id") int companyId) {
//		Company company = null; 
//		try {
//			company = adminFacade.getCompany(companyId);
//		} catch (CompanyNotExistException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//		return company;
//	}
	
//	@RequestMapping(value = "/adminApi/getAllCompanies", method = RequestMethod.GET)
//	public ArrayList<Company> getAllCompanies(){
//		ArrayList<Company> companyList = null;
//		try {
//			companyList = adminFacade.getAllCompanies();
//		} catch (CompaniesNotExistException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//		return companyList;
//	}
	
	/*
	 * Customer methods~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	 */
	
//	@RequestMapping(value = "/adminApi/createCustomer", method = RequestMethod.POST)
//	public void createCustomer (@RequestBody Customer customer) {
//		try {
//			adminFacade.createCustomer(customer);
//		} catch (CustomerExistException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//	}
	
//	@RequestMapping(value = "/adminApi/removeCustomer/{id}" , method = RequestMethod.DELETE)
//	public void removeCustomer (@PathVariable("id") int customerId) {
//		try {
//			adminFacade.removeCustomer(customerId);
//		} catch (CustomerNotExistException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//	}
	
//	@RequestMapping(value = "/adminApi/updateCustomer", method = RequestMethod.PUT)
//	public void updateCustomer(@RequestBody Customer customer) {
//		try {
//			adminFacade.updateCustomer(customer.getPassword(), customer.getId());
//		} catch (CustomerNotExistException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}		
//	}
//	
	
//	@RequestMapping(value = "/adminApi/getCustomer/{id}" , method = RequestMethod.GET)
//	public Customer getCustomer (@PathVariable("id") int customerId) {
//		Customer customer = null;
//		try {
//			customer = adminFacade.getCustomer(customerId);
//		} catch (CustomerNotExistException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//		return customer;
//	}
	
//	@RequestMapping(value = "/adminApi/getAllCustomers" , method = RequestMethod.GET)
//	public ArrayList<Customer> getAllCuatomers(){
//		ArrayList<Customer> customerList = null;
//		try {
//			customerList = adminFacade.getAllCustomer();
//		} catch (CustomersNotExistException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//		return customerList; 
//	}

}
