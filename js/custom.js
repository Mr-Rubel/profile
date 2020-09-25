  var typed = new Typed('.animate', {
    strings: [
    "professional web designer",
    "professional web developer",
    "singer",
    "Entrepreneur",
    ],
    typeSpeed: 60,
    startDelay: 300,
    backSpeed: 60,
    backDelay: 700,
    loop: true,
    showCursor: true,
	 cursorChar: '|',
  });

  $(document).ready(function(){
    $('#bar1').barfiller();
    $('#bar2').barfiller();
    $('#bar3').barfiller();
    $('#bar4').barfiller();

    // mixitup area start
    $(".all").click(function(){
    	$(".category-1, .category-2, .category-3, .category-4, .category-5, .category-6").fadeIn(1000);
    });

    $(".psd").click(function(){
    	$(".category-1, .category-3").fadeIn(1000);
    	$(".category-2, .category-3.category-4,.category-5").fadeOut(1000);
    });

    $(".wp").click(function(){
    	$(".category-1,.category-2, .category-3").fadeIn(1000);
    	$(".category-4, .category-5.category-6").fadeOut(1000);
    });
    $(".ele").click(function(){
    	$(".category-1, .category-5").fadeIn(1000);
    	$(".category-2,.category-3,.category-4,.category-6").fadeOut(1000);
    });
    $(".eco").click(function(){
    	$(".category-4, .category-5.category-6").fadeIn(1000);
    	$(".category-1, .category-2.category-3").fadeOut(1000);
    });
    // mixitup area end

// topbar icon area start
    $(window).scroll(function(){
  		var topbtn = $(this).scrollTop();

  		if(topbtn<400){
  			$(".icon-top").fadeOut(200);
  		}else{
  			$(".icon-top").fadeIn(500);			
  		}
  	});

// topbar icon area end

  	 $(window).scroll(function(){
  		var topbtn = $(this).scrollTop();

  		if(topbtn<100){
  			$(".header-menu").addClass("bgct"); 
  			$(".header-menu").removeClass("bgc"); 
  		}
  		else{
  			$(".header-menu").removeClass("bgct"); 
  			$(".header-menu").addClass("bgc"); 			
  		}
  	});


    $(".icon-top").click(function(){
  		$("html, body").animate({scrollTop:0},1000);

  		$(".icon-top").hide();
	});

	$(".navbar-nav li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
	});

	// smooth scroll area start
	$("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });
	// smooth scroll area end
});