"use strict";

(function() {
	$(function() {



		/*AOS*/
		AOS.init({
			offset: 100,
			once: true,
			duration: 1100,
			delay: 150
		});
		setTimeout(function() { AOS.refresh(); }, 1);


		/*SELECT2*/
		if ( $(".js-select").length )
			$(".js-select").select2({
				placeholder: "Выберите...",
				// ajax: {
				//   url: 'https://api.github.com/search/repositories',
				//   dataType: 'json'
				//   // Additional AJAX parameters go here; see the end of this chapter for the full code of this example
				// },
				allowClear: false
			});
		
		if ( $(".js-select").length )
		$(".js-select.search-hide").select2({
			minimumResultsForSearch: Infinity
		});
		/*BOOTSTRAP TOOLTIP*/
		$('[data-toggle="tooltip"]').tooltip({
			animated: true,
			placement: 'bottom',
			html: true
		});
		/*FANCYBOX*/
		if ($("[data-fancybox]").length != 0)
			$("[data-fancybox]").fancybox({
				afterShow: function(instance, current) {},
				animationEffect : "zoom",
				animationDuration : 800,
				transitionDuration : 366,
				transitionEffect: "zoom-in-out"
			});
		/*ELEVATEZOOM*/
		if ( !checkSm() && $("[data-zoom-image]:not([group])").length )
			var x = $("[data-zoom-image]:not([group])").elevateZoom({
				scrollZoom: true,
				zoomWindowFadeIn: 500,
				zoomWindowFadeOut: 500,
				lensFadeIn: 300,
				lensFadeOut: 300,
				//cursor: 'pointer', 
				tint: true,
				tintColour: '#000',
				tintOpacity: 0.5,
				//zoomType        : "lens",
				//lensShape : "round",
				//lensSize    : 200,
				imageCrossfade: true,
				easing: true
			});


		//MIN-MENU
		$("#min-menu").mmenu({
			extensions: [
				"pagedim-black", // wrapper-bg black
				//"theme-dark",
				"theme-white",
				//"fullscreen",
				//"listview-50",
				//"fx-panels-slide-up",
				//"fx-listitems-drop",
				"border-offset",
				"position-front",
				"position-right"
			],
			navbar: {
				title: "Меню"
			},
			navbars: [{
					height: 0,
					content: [
						// '<div class="close-btn close-content bar">' +
						// '<a  href="#page" ><span class="icon-bar"></span><span class="icon-bar"></span></a>' +
						// '</div>'
					]
				},
				{
					content: ["prev", "title"]
				}
			]
		}, {});

		/*FLIKITY*/
		function flickityPrevNext(className, classPrevNext) {
			var carouselWrapper = $(className);
			for (var i = 0; i < carouselWrapper.length; i++) {
				var crs = $(carouselWrapper[i]);
				var carousel = crs.find(".carousel-items");
				var carouselPrevNext = $(classPrevNext).length ? $(classPrevNext) : crs.find(".carousel-prev-next");
				var btnNext = carouselPrevNext.find(".next");
				var btnPrev = carouselPrevNext.find(".prev");
				var flkty = carousel.data("flickity");
				var selected;
				var that = this;
				btnNext.on("click", carousel, function(e) {
					e.data.flickity("next", true);
				});

				btnPrev.on("click", carousel, function(e) {
					e.data.flickity("previous", true);
				});
				// carousel.on("select.flickity-"+i, function() {
				//   console.log(this);
				//   selected = $(flkty.selectedElement);
				//   selected
				//     .siblings()
				//     .addBack()
				//     .removeClass("is-next is-prev");
				//   selected.next().addClass("is-next");
				//   selected.prev().addClass("is-prev");
				// });
			}
			return carousel;
		}
		function flickityCounter( carouselСounterСontent, counterElements ){
			try{
				counterElements =         $(counterElements);
				carouselСounterСontent =  $(carouselСounterСontent);
				var currentIndex = counterElements.siblings(".is-selected").index()+1;
				var total = counterElements.length;
				carouselСounterСontent.find(".carousel-counter-total").text( total );
				carouselСounterСontent.find(".carousel-counter-current").text( currentIndex );
			}catch(e){
				console.error(e);
			}
		}

		var arrowStyle = {
		  x0: 10,
		  x1: 75, y1: 50,
		  x2: 75, y2: 35,
		  x3: 75
		};

		/*bnr-carousel*/
		if( $(".bnr-carousel .carousel-items").length ){
			$(".bnr-carousel .carousel-items").flickity({
				imagesLoaded: true,
				autoPlay: 5000,
				pauseAutoPlayOnHover: true,
				arrowShape: arrowStyle,
				initialIndex: 0,
				friction: 1,
				selectedAttraction: 1,
				prevNextButtons: false,
				draggable: false,
				wrapAround: true,
				pageDots: true,
				contain: false,
				percentPosition: true,
				cellSelector: 'figure',
				cellAlign: "center"
			});
			flickityPrevNext(".bnr-carousel");
		}





		/*short-news-carousel*/
		if( $(".short-partners-carousel .carousel-items figure").length )
			$(".short-partners-carousel .carousel-items").flickity({
				imagesLoaded: true,
				autoPlay: 2500,
				pauseAutoPlayOnHover: true,
				arrowShape: arrowStyle,
				initialIndex: 0,
				//friction: 1,
				//selectedAttraction: 1,
				prevNextButtons: true,
				draggable: checkSm(),
				wrapAround: false,
				pageDots: false,
				contain: false,
				percentPosition: true,
				cellSelector: 'figure',
				cellAlign: "center"
			});
		




		
		$('.button-carousel-nav').on('click', 'li', function() {
			var that = $(this);
			var selector = that.attr('data-selector');
			that.addClass("is-selected");
			that.siblings().removeClass("is-selected");
		});








		window.carouselArticle = function() {
			if ($(".carousel-article").length >= 0) {
				var carouselMain = $(".carousel-article .carousel-main"),
					carouselNav = $(".carousel-article .carousel-nav");

				for (var i = 0; i < carouselMain.length; i++) {
					var crs = $(carouselMain)
						.eq(i)
						.flickity({
							imagesLoaded: true,
							prevNextButtons: false,
							cellAlign: "center",
							bgLazyLoad: 1,
							//friction: 1,
							//selectedAttraction: 1,
							initialIndex: 1,
							draggable: !checkSm(),
							contain: true,
							pageDots: false
						});
					var flkty = crs.data("flickity");

					$(carouselNav).eq(i).flickity({
						imagesLoaded: true,
						initialIndex: 1,
						asNavFor: $(carouselMain)[i],
						prevNextButtons: false,
						draggable: true,
						percentPosition: true,
						//wrapAround: true,
						cellAlign: "center",
						adaptiveHeight: true,
						//contain: true,
						pageDots: false
					});
				}
			}
		};
		carouselArticle();














		function onLoaded() {
			/*MASONRY*/
			if ($(".grid-img").length != 0) {
				var $grid = $(".grid-img").masonry({
					itemSelector: ".grid-img-item",
					columnWidth: ".grid-img-sizer",
					percentPosition: true
				});
			}

		}





		//SCROLL
		var minMenu = $(".header-scroll") || null;
		var headerRange = false;
		$(window).on("scroll", function(e) {

			//Адаптация хедера при скролинге
			if ($(window).scrollTop() > 170 && headerRange == false) {

				headerRange = true;
				if (minMenu) minMenu.addClass("scrolled").addClass("down");

			} else if ($(window).scrollTop() < 170 && headerRange == true) {
				headerRange = !true;
				if (minMenu) minMenu.removeClass("scrolled");
			} //.originalEvent.wheelDelta

		});


		$(window).on("mousewheel", function(event) {
			if (!headerRange) return;
			if (event.originalEvent.wheelDelta >= 0) {
				minMenu.removeClass("up");
			} else {
				minMenu.addClass("up");
			}
		});



	 $("form").on("keyup", ".field-void", function(){
			if(this.value != '')
				this.setAttribute('filled', '');
			else
				this.removeAttribute('filled');
	 }) 
	 
	 
	 














		//Preloader
		window.preLoader = {

			preImg: function(img) {
				var images = img || document.images,
					imagesTotalCount = images.length,
					imagesLoadedCount = 0,
					preloadPercent = $(".percent").text("0 %");

				if (imagesTotalCount == 0) {
					preOnload();
					$(preloadPercent).text("100 %");
				}

				for (var i = 0; i < imagesTotalCount; i++) {
					var image_clone = new Image();
					image_clone.onload = image_loaded;
					image_clone.onerror = image_loaded;
					image_clone.src = images[i].src;
				}

				function preOnload() {
					onLoaded();
				}

				function image_loaded() {
					imagesLoadedCount++;

					var per = (100 / imagesTotalCount * imagesLoadedCount) << 0;

					setTimeout(function() {
						//console.log(per);
						$(preloadPercent).text(per + "%");
					}, 1);

					if (imagesLoadedCount >= imagesTotalCount) preOnload();
				}
			}
		};
		preLoader.preImg();



















	});
})(jQuery);

var isWebkit = /Webkit/i.test(navigator.userAgent),
		isChrome = /Chrome/i.test(navigator.userAgent),
		isMac = /Mac/i.test(navigator.userAgent),
		isMobile = !!("ontouchstart" in window),
		isAndroid = /Android/i.test(navigator.userAgent);

// COMMON FUNCTION

setTimeout(function() {
	//jQuery FUNCITON
	$.fn.onResized = function() {
		onResized(function() {
			this;
		});
		return this;
	};
}, 10);




function checkSm() {
	return $(document).width() <= 991;
}

function checkMd() {
	return $(document).width() < 1199 && !checkSm();
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomIntFloat(min, max) {
	return Math.random() * (max - min) + min;
}

function onResized(f) {
	if (typeof f === "function") f();
	$(window).on("resize", function(e) {
		if (typeof f === "function") f();
	});
	return this;
}

function scrolledDiv(el) {
	try {
		var docViewTop = $(window).scrollTop(),
			docViewBottom = docViewTop + $(window).height(),
			elTop = $(el).offset().top,
			elBottom = elTop + $(el).height() / 1.8;
	} catch (err) {
		console.error();
	}

	return elBottom <= docViewBottom && elTop >= docViewTop;
}

function roundFix( num, cnt ){
	num = num+""
	cnt = cnt + (/./.test(num) || null ? 1 : 0);
	return num.substring( 0,  cnt)*1
}

function intSpace( int, replaceType ){
		var cnt = 0;
		var newInt = "";
		int = int*1;
		replaceType = replaceType || " ";
		if( typeof int === NaN )
			return;
		var arrInt = (int+"").match(/([0-9])/gim).reverse();
		for (var i = 0; i < arrInt.length; i++) {
			cnt++;
			newInt = arrInt[i]+newInt
			if(cnt === 3){
				newInt = replaceType+newInt;
				cnt = 0;
			}
		}
		return newInt;
}