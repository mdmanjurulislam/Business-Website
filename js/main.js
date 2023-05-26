$(function(){
    // back to top button start
    $(window).scroll(function() {
      let scrolling = $(this).scrollTop();
      if (scrolling > 300) {
        $("#backtotop").addClass('show');
      } else {
        $("#backtotop").removeClass('show');
      }
    });
    $("#backtotop").click(function(){
      $('html,body').animate({
        scrollTop:0
      })
    })
    // back to top button end

    // sticky nav start
    $(window).scroll(function(){
      let navScroll = $(this).scrollTop();
      if(navScroll > 0){
        $(".stickyNav").addClass("sticky-nav");
      }else{
        $(".stickyNav").removeClass("sticky-nav")
      }
    })
    // sticky nav end

    // banner slider start
    $('.banner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:(".bn-slider-left"),
        nextArrow:(".bn-slider-right"),
        dots:true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed:1500
      });
    // banner slider end

    // work tabs start
    $(".tabs li").click(function(){
      if(! $(this).hasClass("active")){
        let tabId=$(this).data("toggle");
        $(".tab-content").hide();
        $("#"+ tabId).fadeIn();
        $(".tabs li").removeClass("active");
        $(this).addClass("active");
      }
    })
    // work tabs end

    // testimonial slider start
    $('.testimonial-slider').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      dots:true,
      autoplay: true,
      autoplaySpeed: 2000,
      speed:1500,
      arrows:false,
    });
  // testimonial slider end

  // preloader start
  $(window).on("load",function(){
    $("#preloader").delay(200).fadeOut(1000);
  })
  // preloader end

  // typed js start
  $(".typed").typed({
		strings: ["Developers.", "Designers.", "People."],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: false,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
  // typed js end

  // wow effect start
  new WOW().init();
  // wow effect end

  // work 2 tabs start
  var mixer = mixitup('.work2-tabs');
  // work 2 tabs end
})