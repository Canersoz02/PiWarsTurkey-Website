
$(document).ready(function() {
	/* Countdown */
	var countDown = function() {
		var today = new Date();
		var eventDate = new Date("March 23,2019 08:40:00");

		var currentTime = today.getTime();
		var eventTime = eventDate.getTime();

		var remTime = eventTime - currentTime;

		var sec = Math.floor(remTime / 1000);
		var min = Math.floor(sec / 60);
		var hrs = Math.floor(min / 60);
		var days = Math.floor(hrs / 24);

		hrs = hrs % 24;
		min %= 60;
		sec %= 60;
		hrs = (hrs < 10) ? "0" + hrs : hrs;
		min = (min < 10) ? "0" + min : min;
		sec = (sec < 10) ? "0" + sec : sec;

		$("#countdown").find("#days").html(days);
		$("#countdown").find("#hours").html(hrs);
		$("#countdown").find("#minutes").html(min);
		$("#countdown").find("#seconds").html(sec);

		setTimeout(countDown, 1000);
	}
	countDown();
	

	/* Breakpoints for Responsive Design */
	breakpoints({
		xlarge : ['1281px', '1800px'],
		large : ['981px', '1280px'],
		medium : ['737px', '980px'],
		small : ['481px', '736px'],
		xsmall : [null, '480px'],
	});

	/* Touch? */
	if(browser.mobile) {
		// Turn on touch mode.
		$("body").addClass('is-touch');
		
		// Height fix (mostly for iOS).
		window.setTimeout(function() {
			$(window).scrollTop($(window).scrollTop() + 1);
		}, 0);
	}
});
