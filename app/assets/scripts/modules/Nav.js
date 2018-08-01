import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';


class Nav {
	 
 	constructor() {
 		this.navItems = $('.mainNav a, #arrow-link');
		this.navList = $('.mainNav__ul');
		this.menu = $('.menu-bar');
		this.naviToggle();
		this.smoothing();
 	}
	 
	smoothing() {
		
		this.navItems.smoothScroll({
			/*offset: -90,*/
			speed: 1000
			
		});
	}
	
	naviToggle() {
		var that = this;
		this.menu.click(function() {			that.navList.toggleClass('mainNav__ul--active');
		that.menu.toggleClass('menu-bar--close');
		
		});
	}
	 
 }

export default Nav;
