package com.couponsystem.facades;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.couponsystem.facades.AdminFacade;
import com.couponsystem.facades.CompanyFacade;

import com.couponsystem.enums.ClientType;
import com.couponsystem.repo.CouponRepo;

@Component
@Scope("singleton")
public class CouponSystem {

	@Autowired
	AdminFacade adminFacade; 
	@Autowired
	private ApplicationContext ctx;
//	@Autowired
//	FacadeFactory factory;
	@Autowired
	CouponRepo coupRepo;

	// Object's members
	private boolean running;
	
	private Thread thread;
	
	/***
	 * Login method for facades
	 * @param name
	 * @param password
	 * @param type
	 * @return CouponClientFacade
	 */
	public CouponClientFacade login(String name , String password , ClientType type){
		switch (type) {
		case ADMIN:
			return adminFacade.login(name, password, type);
		case COMPANY:	
			return ctx.getBean(CompanyFacade.class).login(name, password, type);
		case CUSTOMER:
			return ctx.getBean(CustomerFacade.class).login(name, password, type);
		}
		return null;
				
	}
	
	
	
	
	public synchronized void start()
	{
		if(running) return;
		running = true;
		
		thread = new Thread(new Runnable() {
			
			@Override
			public void run() {

				while(running) {
					//this will delete expired coupon, will run every 24 hours
					coupRepo.removeExpiredCoupon(new Date(System.currentTimeMillis()));
					try {
						Thread.sleep(86400000);
					} catch (InterruptedException e) {
						e.printStackTrace();
					}
				}
				
			}
		});
		
		thread.start();
	}
	
	
	/**
	 * Shut down System
	 */
	public synchronized void shutDown()
	{
		if(!running) return;
		
		running = false;

	}
	
	

}