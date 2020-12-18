import { Component, HostListener, OnInit } from '@angular/core';
// import { } from '@types/googlemaps';
import * as $ from 'jquery/dist/jquery.min.js';
import { Router } from '@angular/router';
import { cartService } from 'app/services/sharedService';
import { LoginService } from 'app/services/loginService';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	host: { '(window:resize)': 'onResize()', '(window:scroll)': 'scrollChange($event)', '(document:click)': 'winClick($event)' },
})

export class headerComponent implements OnInit {
	public mobNav: boolean;
	public mobHam: boolean;
	public navVer: number;
	public moblightBox: boolean;
	// public map: google.maps.Map;
	public selectedCity: string = 'Chennai';
	public searchedOffer = 'Search Here';
	constructor(private router: Router, public cartData: cartService, public loginService: LoginService) {
		// navigator.geolocation.getCurrentPosition((position) => {
		// 	this.selectedCity = 'Location';
		// }, () => {
		// 	this.selectedCity = 'Location';
		// });
		this.cartData.setSelectedCity(this.selectedCity);
		this.onResize();
	}
	ngOnInit() {
		// let _self = this;
		// google.maps.event.addDomListener(window, 'load', function () {
		// 	let input: any = document.getElementsByClassName('locationSearch');
		// 	let options: Object = {
		// 		types: ['(regions)'],
		// 		componentRestrictions: {
		// 			country: 'IN'
		// 		}
		// 	};
		// 	let autocomplete = new google.maps.places.Autocomplete(input[0], options);
		// 	google.maps.event.addListener(autocomplete, 'place_changed', (event, args) => {
		// 		let element: any = document.getElementsByClassName('locationSearch')[0];
		// 		_self.selectedCity = element.value.split(', ')[0];
		// 		let model: any = document.getElementsByClassName('close')[0];
		// 		model.click();
		// 	});
		// });
	}
	//resize screen
	onResize() {
		let getWinSize: Number = window.innerWidth;
		if (768 >= getWinSize) {
			this.mobNav = false;
			this.mobHam = true;
		}
		else {
			this.mobNav = true;
			this.mobHam = false;
			if (document.getElementsByClassName('lightBox').length > 0) {
				this.humClick();
			}
		}

	}
	//vertical scroll
	scrollChange(event) {
		let getNavScr: any = document.getElementsByClassName('navTopFix')[0];
		if (window.scrollY >= (getNavScr.offsetHeight - 20)) {
			getNavScr.classList.add('navTopFixMob');
			$('#scroll').fadeIn();
		}
		else if (getNavScr.classList.contains('navTopFixMob')) {
			getNavScr.classList.remove('navTopFixMob');
			$('#scroll').fadeOut();
		}
	}

	humClick() {
		if (768 >= window.innerWidth) {
			let humAni: any = document.getElementsByClassName('hamburger')[0];
			let changeNav: any = document.getElementById('changeNav');
			if (changeNav.classList.contains("visibility-none")) {
				changeNav.classList.toggle('visibility-none');
			} else {
				setTimeout(() => {
					changeNav.classList.toggle('visibility-none');
				}, 500);
			}
			humAni.classList.toggle('changeAni');
			changeNav.classList.toggle('navMobSlide');
		}
	}

	logoutClick() {
		this.loginService.isLogin ? this.router.navigate(['/home']) : this.router.navigate(['/login']);
		this.loginService.clearUser();
		this.humClick();
	}

	changeLocation(event, location){
		this.selectedCity = location;
		this.cartData.setSelectedCity(location);
		document.getElementsByClassName('active').length > 0 ? document.getElementsByClassName('active')[0].classList.remove('active') : '';
		event.target.classList.add('active');
	}
	changeLocationDropdown(location){
		this.selectedCity = location;
		this.cartData.setSelectedCity(location);
		(<any>document.querySelector('#myModal .close')).click();
	}

	@HostListener('document:click', ['$event.target'])
	public onClick(targetElement: HTMLElement): void {
		if (document.getElementsByClassName('navMobSlide').length > 0 && !document.getElementsByClassName('navTab')[0].contains(targetElement)) {
			this.humClick();
			return;
		}
		if (targetElement.className == 'scroll-icon') {
			$('html, body').animate({ scrollTop: 0 }, 500);
			event.preventDefault();
			return;
		}
	}
}
