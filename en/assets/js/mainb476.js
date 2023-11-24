jQuery(function ($) {






	/*
	DOM LoadFinish Event
	*/
	$(window).ready(function () {



		//console.log('DOM Load Finish');



		$('#loading').addClass('active');



	});






	/*
	Resource UNLoadFinish Event
	*/
	$(window).on('unload', function () {



		//console.log('unload');



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
		ローディング完了処理
		*/
		function fnc_loadfinish(){

			if($.url().param('loading')=='none'){

				console.log('ローディングなし');
				$('#loading').remove();
				fnc_initialize();
				fnc_scloll_initialize();

			} else {

				//画面固定＆スクロール操作ロック準備
				function fnc_setpreventDefault(event) {event.preventDefault();}
				$('html,body').css({'overflow':'hidden'});

				//CSSの演出が終わるまで待ってから実行
				setTimeout(function(){

					//ローディングパネルを削除
					$('#loading').addClass('remove');

					//基本処理一式実行
					fnc_initialize();

					//一時的に操作をロック
					document.addEventListener('touchmove', fnc_setpreventDefault, { passive: false });

					//画面位置を最上部に
					$('html,body').animate({scrollTop:($('html').offset().top)}, 0, 'easeOutExpo').promise().done(function(){
						$('#loading.remove').on('webkitTransitionEnd MozTransitionEnd mozTransitionEnd msTransitionEnd oTransitionEnd transitionEnd transitionend', function() {
							//ロック解除
							console.log('loading done');
							document.removeEventListener('touchmove', fnc_setpreventDefault, { passive: false });
							$('html,body').css({'overflow':''});
							//演出系イベントトリガー登録
							fnc_scloll_initialize();
							//CSSイベントアンバインド
							$(this).off('webkitTransitionEnd MozTransitionEnd mozTransitionEnd msTransitionEnd oTransitionEnd transitionEnd transitionend');
						});
					});
				}, 1200);

			}

		}
		fnc_loadfinish();



		/*
		初期化
		*/
		/*通常処理一式*/
		function fnc_initialize(){
			if($('#top').length){
				//トップページ専用処理
				if (window.innerWidth < 769) {
					console.log('SP');
					fnc_top_pv();
					fnc_top_pickupbanner();
					fnc_top_charainfo();
					fnc_gnav();
					fnc_gnav_viewadjust();
				} else {
					console.log('PC');
					fnc_toproopmovie();
					fnc_top_pv();
					fnc_top_pickupbanner();
					fnc_top_charainfo();
				}
			} else {
				//汎用処理
				if (window.innerWidth < 769) {
					console.log('SP');
					fnc_gnav();
					fnc_gnav_viewadjust();
					fnc_voceplay();
				} else {
					console.log('PC');
					fnc_voceplay();
				}
			}
		}
		/*スクロールトリガー初期化*/
		function fnc_scloll_initialize(){
			if (window.innerWidth < 769) {
				console.log('SP');
			} else {
				console.log('PC');
				fnc_waypoints_jwp();
				fnc_waypoints_liner();
			}
		}



		/*
		汎用：Gnav
		*/
		function fnc_gnav(){
			$('#gnavi .toggle .menu').on('touchstart click',function(event){

				event.preventDefault();

				$(this).parent().parent('section').toggleClass('active'); //
				$('section#gnavi nav').stop(true,false).slideToggle(300);

			});
		}
		function fnc_gnav_viewadjust(){
			$('.toggle').addClass('adjust');
			$('#grandwrapper').prepend('<p class="gnav_viewadjust"></p>');
			$('.gnav_viewadjust').css({
				"z-index":"999",
				"position":"absolute",
				"top":"150px",
				"background-color":"transparent",
				"width":"100%",
				"height":"1px"
			})
			$('.video-box,.gnav_viewadjust').waypoint({
				handler: function(direction) {
					if(direction === "down"){
						// 下スクロール時の処理
						$('.toggle').removeClass('adjust');
					} else {
						// 上スクロール時の処理
						$('.toggle').addClass('adjust');
					}
				},
				offset: "0%"
			})
		}



		/*
		汎用：演出のためのjwpでのactive付与
		jwp_targetのclassが付与された要素が画面内に入ったらjwp_targetを削除
		*/
		function fnc_waypoints_jwp(){
			$('.jwp_target').waypoint({handler: function (direction) {
					$(this.element).removeClass('jwp_target');
					$(this.element).addClass('anime_active');
				},
				offset: "65%"
			})
		}



		/*
		汎用：ライナー演出
		ef_linerのclassが付与された要素が画面内に入ったら黒帯で隠して黒帯が消えたらコンテンツを表示
		*/
		function fnc_waypoints_liner(){
			$('.ef_liner').waypoint({handler: function (direction) {
					//開始
					$(this.element).addClass('run');
					//終了処理開始用のcssコールバックイベント登録
					$('.ef_liner.run').on('webkitTransitionEnd MozTransitionEnd mozTransitionEnd msTransitionEnd oTransitionEnd transitionEnd transitionend', function() {
						//終了演出用class付与
						$(this).addClass('end');
						//アンバインド
						$(this).off('webkitTransitionEnd MozTransitionEnd mozTransitionEnd msTransitionEnd oTransitionEnd transitionEnd transitionend');
					});
				},
				offset: "65%"
			})
		}



		/*
		トップ：ピックアップバナー（plugin:Slick）
		*/
		function fnc_top_pickupbanner(){
			$('.slick_body').slick({
				dots							: false,
				autoplay					: true,
				pauseOnHover			: true,
				arrows						: true,
				appendArrows			: $('.slick_ui'),
				prevArrow					: '<li>PREV</li>',
				nextArrow					: '<li>NEXT</li>'
			});
		}



		/*
		トップ：ループムービー
		*/
		function fnc_toproopmovie(){
			$('.video-box').append('<video src="assets/movie/index_background_movie.mp4" autoplay playsinline muted loop>');
		}



		/*
		トップ：PVエリア
		*/
		function fnc_top_pv(){
			$('#movie a').magnificPopup({
				type: 'iframe',
				preloader: false,
				closeBtnInside:false
			});
		}



		/*
		トップ：キャラ紹介エリア
		*/
		function fnc_top_charainfo(){
			$('#character .ui li').on('touchstart click', function () {

				event.preventDefault();

				//既存アクティブを解除
				$(this).removeClass('active');
				$(this).siblings().removeClass('active');

				//対象のclass名を取得
				var t = $(this).attr('class');

				//クリックした対象をアクティブに
				$(this).addClass('active');

				//メインパネルの対象をアクティブに
				$(this).parent().siblings('.box_chara').find('div').removeClass('active');
				$(this).parent().siblings('.box_chara').find(('.'+t)).addClass('active');

				$('html,body').animate({scrollTop:($('.box_chara').offset().top)}, 300, 'easeOutExpo');

			})
		}



		/*
		キャラクターページ：サムネイルアクティブ付与
		*/
		if (window.innerWidth < 769) {
			$('.chara_item .thumb h3,.chara_item .thumb h4').on('touchstart click', function () {

				event.preventDefault();

				var t = $(this).parent().parent('.chara_item');

				t.siblings().removeClass('active');
				t.addClass('active');

				setTimeout(function(){
					var pos = t.offset().top;
					console.log(pos);
					$('html, body').animate({scrollTop: pos}, 300, 'easeOutExpo');
				},600);

			})
		} else {
			$('.chara_item .thumb').on('touchstart click', function () {

				event.preventDefault();

				var t = $(this).parent('.chara_item');

				t.siblings().removeClass('active');
				t.addClass('active');

				setTimeout(function(){
					var pos = t.offset().top;
					console.log(pos);
					$('html, body').animate({scrollTop: pos}, 300, 'easeOutExpo');
				},600);

			})
		}

		$('.ss a').magnificPopup({
			type: 'image',
			closeOnContentClick: true,
			closeBtnInside: false,
			fixedContentPos: true,
			mainClass: 'mfp-no-margins mfp-with-zoom',
			image: {
				verticalFit: true
			},
			zoom: {
				enabled: true,
				duration: 300
			}
		});



		/*
		キャラクターページ：ボイス再生
		*/
		function fnc_voceplay(){

			var cc = '?v7'

			if($('.samplevoice').length){

				/*
				音声インスタンスを作成
				*/
				var ins_sv = [
					new Howl({src:['../assets/sound/prof_chara1_voice1.mp3'+cc],volume:0.5}),
					new Howl({src:['../assets/sound/prof_chara1_voice2.mp3'+cc],volume:0.5}),
					new Howl({src:['../assets/sound/prof_chara1_voice3.mp3'+cc],volume:0.5}),
					new Howl({src:['../assets/sound/prof_chara1_voice4.mp3'+cc],volume:0.5}),
					new Howl({src:['../assets/sound/prof_chara2_voice1.mp3'+cc],volume:0.5}),
					new Howl({src:['../assets/sound/prof_chara2_voice2.mp3'+cc],volume:0.5}),
					new Howl({src:['../assets/sound/prof_chara2_voice3.mp3'+cc],volume:0.5}),
					new Howl({src:['../assets/sound/prof_chara2_voice4.mp3'+cc],volume:0.5}),
					new Howl({src:['../assets/sound/prof_chara3_voice1.mp3'+cc],volume:0.5}),
					new Howl({src:['../assets/sound/prof_chara3_voice2.mp3'+cc],volume:0.5}),
					new Howl({src:['../assets/sound/prof_chara3_voice3.mp3'+cc],volume:0.5}),
					new Howl({src:['../assets/sound/prof_chara3_voice4.mp3'+cc],volume:0.5}),
					new Howl({src:['../assets/sound/prof_chara4_voice1.mp3'+cc],volume:0.5}),
					new Howl({src:['../assets/sound/prof_chara4_voice2.mp3'+cc],volume:0.5}),
					new Howl({src:['../assets/sound/prof_chara5_voice1.mp3'+cc],volume:0.5}),
					new Howl({src:['../assets/sound/prof_chara5_voice2.mp3'+cc],volume:0.5}),
					new Howl({src:['../assets/sound/prof_chara5_voice3.mp3'+cc],volume:0.5}),
					new Howl({src:['../assets/sound/prof_chara5_voice4.mp3'+cc],volume:0.5}),
					new Howl({src:['../assets/sound/prof_chara6_voice1.mp3'+cc],volume:0.5}),
					new Howl({src:['../assets/sound/prof_chara6_voice2.mp3'+cc],volume:0.5}),
					new Howl({src:['../assets/sound/prof_chara6_voice3.mp3'+cc],volume:0.5}),
					new Howl({src:['../assets/sound/prof_chara6_voice4.mp3'+cc],volume:0.5}),
					new Howl({src:['../assets/sound/prof_chara7_voice1.mp3'+cc],volume:0.5}),
					new Howl({src:['../assets/sound/prof_chara7_voice2.mp3'+cc],volume:0.5}),
					new Howl({src:['../assets/sound/prof_chara7_voice3.mp3'+cc],volume:0.5}),
					new Howl({src:['../assets/sound/prof_chara7_voice4.mp3'+cc],volume:0.5}),
					new Howl({src:['../assets/sound/prof_chara8_voice1.mp3'+cc],volume:0.5}),
					new Howl({src:['../assets/sound/prof_chara8_voice2.mp3'+cc],volume:0.5}),
					new Howl({src:['../assets/sound/prof_chara8_voice3.mp3'+cc],volume:0.5}),
					new Howl({src:['../assets/sound/prof_chara8_voice4.mp3'+cc],volume:0.5})
				];

				/*
				再生ボタンイベント
				*/
				var cv;
				$('.samplevoice .play').on('touchend click',function(event){

					event.preventDefault();

					//キャラ名取得
					var t = $(this).data('samplevoice');

					//再生中ステータスチェック
					var ss = [];
					for(var i=0; i<ins_sv.length; i++){
						ss[i] = ins_sv[i].playing();
					}

					console.log('再生対象：'+t,'直前再生ボイス：'+cv,'再生中判定：'+ss.includes(true))

					if(ss.includes(true)&&(t==cv)){

						//すべてのボイスを停止
						for(var i=0; i<ins_sv.length; i++){ins_sv[i].stop();}

					} else {

						//すべてのボイスを停止
						for(var i=0; i<ins_sv.length; i++){ins_sv[i].stop();}
						//分岐
						switch(t){

							//クロエ
							case 'chloe1' :
							ins_sv[0].play();
							break;

							case 'chloe2' :
							ins_sv[1].play();
							break;

							case 'chloe3' :
							ins_sv[2].play();
							break;

							case 'chloe4' :
							ins_sv[3].play();
							break;

							//コーコ
							case 'coco1' :
							ins_sv[4].play();
							break;

							case 'coco2' :
							ins_sv[5].play();
							break;

							case 'coco3' :
							ins_sv[6].play();
							break;

							case 'coco4' :
							ins_sv[7].play();
							break;

							//コーコ
							case 'noa1' :
							ins_sv[8].play();
							break;

							case 'noa2' :
							ins_sv[9].play();
							break;

							case 'noa3' :
							ins_sv[10].play();
							break;

							case 'noa4' :
							ins_sv[11].play();
							break;

							//アニマ
							case 'anima1' :
							ins_sv[12].play();
							break;

							case 'anima2' :
							ins_sv[13].play();
							break;

							//ヤマト
							case 'yamato1' :
							ins_sv[14].play();
							break;

							case 'yamato2' :
							ins_sv[15].play();
							break;

							case 'yamato3' :
							ins_sv[16].play();
							break;

							case 'yamato4' :
							ins_sv[17].play();
							break;

							//アオバ
							case 'aoba1' :
							ins_sv[18].play();
							break;

							case 'aoba2' :
							ins_sv[19].play();
							break;

							case 'aoba3' :
							ins_sv[20].play();
							break;

							case 'aoba4' :
							ins_sv[21].play();
							break;

							//ジュリィ
							case 'julie1' :
							ins_sv[22].play();
							break;

							case 'julie2' :
							ins_sv[23].play();
							break;

							case 'julie3' :
							ins_sv[24].play();
							break;

							case 'julie4' :
							ins_sv[25].play();
							break;

							//デイター
							case 'deiter1' :
							ins_sv[26].play();
							break;

							case 'deiter2' :
							ins_sv[27].play();
							break;

							case 'deiter3' :
							ins_sv[28].play();
							break;

							case 'deiter4' :
							ins_sv[29].play();
							break;

						}

					}

					//再生対象を保存・上書き
					cv = t;

				});

			}

		}



		/*
		OPTOUT
		*/
		if($('#optout').length){


			console.log('optout start');


			var lsAgreeState = localStorage.getItem('ls_cookie_optin'); //UserState
			var trackingID = 'UA-108809306-6'; //TrackingID


			//GASet
			if(lsAgreeState == '0') {
				//拒否判定
				window['ga-disable-'+trackingID] = true; //GA無効化
			} else if(lsAgreeState == '1') {
				//許可判定
				window['ga-disable-'+trackingID] = false; //GA有効化
			} else {
				//判定なし判定ウィンドウ表示
				window['ga-disable-'+trackingID] = true; //GA無効化
				$('#optout').addClass('view'); //ウィンドウ表示
			}


			//選択イベント
			$('.optoutsend li').on('touchstart click', function(){
				event.preventDefault();
				switch ($(this).attr('class')) {
					case 'agree':
						console.log('同意');
						localStorage.setItem('ls_cookie_optin','1'); //同意
						break;
					case 'disagree':
						console.log('同意しない');
						localStorage.setItem('ls_cookie_optin','0'); //同意
						break;
				}
				$('#optout').removeClass('view');
			})


			$('#outoutreset').on('touchstart click', function(){

				event.preventDefault();

				localStorage.removeItem('ls_cookie_optin');
				location.reload();

			})


		}



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
		special_fankit_popup
		*/
		$(function(){
  			$('.dl').magnificPopup({
				delegate:'a',
    			type:'image'
  			});
		});



	});






});
