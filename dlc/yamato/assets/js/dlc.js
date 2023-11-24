jQuery(function ($) {






	/*
	DOM LoadFinish Event
	*/
	$(window).ready(function () {



		console.log('DOM Load Finish');



	});






	/*
	Resource UNLoadFinish Event
	*/
	$(window).on('unload', function () {



		console.log('unload');



	});



	/*
	Resource LoadFinish Event
	*/
	$(window).on('load', function () {



		console.log('Resource Load Finish');



		/*
		FONTPlus
		*/
		try {
			FONTPLUS.start();
		} catch(err) {
			console.log('fontplus start unloaded',err);
		}



		/*
		初期化
		*/
		function fnc_initialize(){
			if (window.innerWidth < 769) {
				console.log('SP');
			} else {
				console.log('PC');
				fnc_roopmovie();
			}
		}
		fnc_initialize();



		/*
		SmoothScroll
		*/
		$(function () {
			$('a[href^="#"]').on('touchstart click', function () {
				//EnvetAdjust
				event.preventDefault();
				//OptionSet
				let sso = {
					speed: 800,
					href: $(this).attr('href'),
					target: {},
					offset: 100,
					position: 0
				}
				//TargetCheck&Run!
				if ($(sso.href).length) {
					//TargetPositionSet
					sso.target = $(sso.href == '#' || sso.href == '' ? 'html' : sso.href);
					sso.position = sso.target.offset().top;
					//OverPositionOptimize
					let oh = $(document).outerHeight() - $(window).outerHeight();
					if (sso.position > oh) {
						sso.position = oh;
					} else {
						sso.position = sso.position - sso.offset;
					}
					//Scroll
					$('html, body').animate({
						scrollTop: sso.position
					}, sso.speed, 'easeOutExpo');
					return false;
				}
			});
		});



		/*
		ResizeEvent
		*/
		var resizflagtimer;
		window.addEventListener('resize', function () {

			clearTimeout(resizflagtimer);

			resizflagtimer = setTimeout(function () {

				/*
				resizedone
				*/
				//console.log('resizeDone'+window.innerWidth);
				if (window.innerWidth < 769) {
					//console.log('SP resize Done');
				} else {}

			}, 500);

		});



		/*
		KV：ループムービー
		*/
		function fnc_roopmovie(){
			$('.video-box').append('<video src="assets/movie/pv.mp4" autoplay playsinline muted loop>');
		}



		/*
		PVエリア
		*/
		$('.movie a').magnificPopup({
			type: 'iframe',
			preloader: false,
			closeBtnInside:false
		});




	});






});
