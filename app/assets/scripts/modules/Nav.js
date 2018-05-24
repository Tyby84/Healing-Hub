import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';


class Nav {
	 
 	constructor() {
 		this.navItems = $('.nav a, #arrow-link');
		this.smoothing();
 	}
	 
	smoothing() {
		
		this.navItems.smoothScroll({
			/*offset: -90,*/
			speed: 1000
			
		});
	}
	 
 }

export default Nav;
