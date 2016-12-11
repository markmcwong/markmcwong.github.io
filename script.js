TweenMax.set([".monitorBottom"], {
	transformOrigin: "50% 100%"
})

TweenMax.set([".monitorStand"], {
	transformOrigin: "50% 0%"
})

TweenMax.set([".monitorLogo, .monitorScreen"], {
	transformOrigin: "50% 50%"
})

TweenMax.set(".logo path", {
	opacity: 0
})

var desktop = new TimelineMax({
	delay: 1,
	yoyo: false,
	paused: false
})
desktop.timeScale(0)
desktop.to(".overlay", 0, {
  	css: { zIndex: 1	}
  })
  .from(".logo path", 0, {
	css: {
		stroke: "rgb(255, 255, 255)",
		opacity: 0
	}
  })
	.from(".monitorBottom", 1, {
		scaleY: 0,
		ease: Power1.easeOut
	})
	.from(".monitorStand", 1, {
		y: -70,
		ease: Power1.easeOut
	}, "-=1")
	.from(".monitorStandShadow", 0.5, {
		alpha: 0,
		ease: Power1.easeIn
	}, "-=0.5")
	.from(".monitorEdge", 1, {
		y: 330
	}, "-=0.25")
	.from(".monitorScreen", 2, {
		y: 330,
		ease: Power1.easeOut
	}, "-=1")
	.from(".monitorLogo", 1, {
		scale: 0,
		ease: Back.easeOut.config(2)
	})
	.to(".logo path", 0, {
		css:{opacity: 0.5}
	})
	.call(show, ["#m3", 0])
	.call(show, ["#m2", 300])
	.call(show, ["#m1", 700])
	.call(show, ["#ma", 0])
	.call(show, ["#mb", 300])
	.call(show, ["#mc", 700])
	.call(show, ["#middle", 1500])
	.call(show, ["#cross", 2000])
	/*
	.from("#name", 1, {
		alpha: 0,
		ease: Power1.easeOut
	}, "-=1")
	.staggerTo("#name", 1, {
		alpha: 0,
	}, 0.1)
	.staggerTo(".front-page__content__paths", 1, {
		alpha: 0,
		delay: 2
	}, 0.1)*/
	.pause()
	.to(".monitorScreen", 1, {
		delay: 4,
		y: 330,
		ease: Power1.easeIn
	}, "-=1")
	.to(".monitorEdge", 1, {
		y: 330,
		ease: Power1.easeIn
	}, "-=0.75")
	.to(".monitorBottom", 1, {
		scaleX: 0.69,
		y: -23
	})
	.to(".monitorBottom", 1, {
		scaleY: 0.45,
		alpha: 1
	}, "-=1")
	.set(".monitorBottom", {
		alpha: 0
	})
	.to(".monitorLogo", 0.5, {
		scale: 0,
		ease: Back.easeIn
	}, "-=1")
	.to(".monitorStand", 1, {
		//scaleY:0
		y: 360
	}, "-=1.5")
	.to(".monitorStandShadow", 0.5, {
		alpha: 0
	}, "-=1.5")
  .to(".overlay", 0, {
  	css: { zIndex: 0	}
  })

TweenMax.to(desktop, 2, {
	timeScale: 3
})
TweenMax.set("svg", {
	visibility: "visible"
})

// JavaScript File//First the variables our app is going to use need to be declared
function show(target, time) {
	$(target).velocity({
		strokeRed: 0,
		strokeGreen: 0,
		strokeBlue: 0,
	}, {
		duration: 1000,
		delay: time
	})
}
$(document).ready(function() {
		$("#grow").toggle(false);
    $(".rating").rating({initialRating: 5, maxRating: 5, minRating: 5});
    $('#fullpage').fullpage({
        menu: '#menu',
        anchors: ['home', 'profile', 'experience', 'education', 'skillset'],
        keyboardScrolling: true,
        sectionSelector: '.vertical-scrolling',
        controlArrows: false,
        scrollOverflow: true,
				lazyLoading: true,
        afterRender: function(){
					if (/Mobi/.test(navigator.userAgent) !== true) {
						$('#popup').popup('toggle')
						animate(".popup", "swing");
						$("nav").css("opacity", 0)
					}else{
						$("nav").css("opacity", 1)
					}
          desktop.play()
          desktop.addPause("4.0")
        },
        onLeave: function(index, nextIndex, direction){
					if(direction == "down"){
						$('#popup').popup('hide')
					}
					if(index == 1 && direction == "down"){
						$("nav").css("opacity", 1)
						$(".overlay").css("z-index", -1)
					}
          if(nextIndex == 2 && direction == "down"){
						desktop.play(4.5)
						$(".logo").css("opacity", 0)
					}else{
						$(".overlay").css("opacity", 0)
					}
					if(nextIndex == 1 && direction == "up"){
						$(".overlay").css("z-index", 1)
						$(".overlay").css("opacity", 1)
						$(".logo").css("opacity", 1)
						desktop.restart()
						desktop.play()
						desktop.addPause("4.0")
					}
					if(nextIndex == 1 || nextIndex == 3 || nextIndex == 5){
						$("nav a").addClass("blue")
						$("nav a").removeClass("white")
						$("nav").removeClass("background-blue")
						$("nav").addClass("background-white")
					}else if(nextIndex == 2 || nextIndex == 4){
						$("nav a").addClass("white")
						$("nav a").removeClass("blue")
						$("nav").addClass("background-blue")
						$("nav").removeClass("background-white")
					}
        }
    });
});

$('#others-button').click(function() {
	$("#grow").toggle();
	animate(".measuringWrapper","fadeInLeft")
});

function animate(element_ID, animation) {
		console.log("added");
		$(element_ID).addClass(animation);
		var wait = window.setTimeout( function(){
				$(element_ID).removeClass(animation)}, 1250
		);
}

function hover(element,animation){
	$(element).hover(function(){
		animate(this, animation);
	})
}
hover("h4","bounce");
hover("img", "flip animated");

var toggle = false;
$("#trigger").on('click', function() {
    if (toggle) {
        $('nav').width("200px");
        document.getElementById("fullpage").style.zIndex = "1000 !important";
        document.getElementById("fullpage").style.marginLeft = "200px";
        document.getElementById("trigger").style.marginLeft = "220px";
				$(".overlay").css("marginLeft","50%");
    } else {
        $('nav').width("0px");
        document.getElementById("fullpage").style.zIndex = "0";
        document.getElementById("fullpage").style.marginLeft = "0px";
        document.getElementById("trigger").style.marginLeft = "20px";
				$(".overlay").css("marginLeft","0px");
    }
    toggle = !toggle;
});
