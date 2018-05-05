import $ from 'jquery'; 

class Nav {
	 
 	constructor() {
 		this.nav = $('.nav');
		this.makeNavBar();
 	}
	 
	makeNavBar() {
		
		let that = this;
		$(window).scroll(function() {
			if ($(document).scrollTop() > 300) {
				console.log('work');
				that.nav.addClass('nav--onscroll');
				console.log(that);
			} else {
				that.nav.removeClass('nav--onscroll');
			}
		});
	}
	 
 }

export default Nav;
