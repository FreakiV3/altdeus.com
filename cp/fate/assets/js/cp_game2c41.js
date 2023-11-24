jQuery(function ($) {






	/*
	DOM LoadFinish Event
	*/
	$(window).ready(function () {



		console.log('DOM Load Finish');



		/*
		Loading
		*/
		$('#transition').addClass('active');



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
		dummyJSON
		*/
		var noa_json = {
			"gauge_current":"90000",
			"gauge_gole":"90000",
			"noasquestion":[
				{
					"q":"さあ出題だぞ！晩ごはんはお米にするかパンにするか…。おかずはノアちゃんの大好きなイチゴだ！さあ選ぶがいい！",
					"a":"お米",
					"aa":"すばらしい決断だな！やはりお米は力だからな！",
					"b":"パン",
					"ba":"イチゴサンドで優勝だな！パンでお腹がパンパンだ！",
					"flag":1
				},
				{
					"q":"さあ出題だぞ！目玉焼きには醤油をソース、どっちをかける！？さあ選ぶがいい！",
					"a":"醤油",
					"aa":"ご飯と一緒に食べるならやはり醤油だな！",
					"b":"ソース",
					"ba":"パンと一緒に食べるならやはりソースだな！",
					"flag":1
				},
				{
					"q":"忘年会シーズンだな！乾杯するならビールとハイボールどっちでする？さあ選ぶがいい！",
					"a":"ビール",
					"aa":"やはり乾杯といったらビールだな！のどごしが最高だ！",
					"b":"ハイボール",
					"ba":"今の流行りは完全にハイボールだな！すっきり飲めて乾杯に最適だ！",
					"flag":1
				},
				{
					"q":"今日はガッツリ肉を食うぞ！焼肉かすき焼きか、なやむな〜！さあ選ぶがいい！",
					"a":"焼肉",
					"aa":"やはり肉と言ったら焼肉だな！焼いてる時間も最高だ！",
					"b":"すき焼き",
					"ba":"この時期はすき焼きに限るな！あまじょっぱいタレと肉の相性は最高だ！",
					"flag":1
				},
				{
					"q":"ノアちゃんはイチゴが大好きだぞ！みんなそのままと練乳、どっちの食べ方が好きだ？",
					"a":"そのまま！",
					"aa":"それな！やっぱりイチゴ本来の甘さを味わいたいよな！",
					"b":"練乳もいいな",
					"ba":"そう来たかー！練乳とマッチした甘酸っぱさが、たまらないよな！",
					"flag":1
				},
				{
					"q":"休日に友達と遊びにいくなら原宿と秋葉原のどっちに行きたい？ノアちゃんもつれてけよな！",
					"a":"原宿",
					"aa":"つねに若者のかわいいがそこにある！楽しくて賑やかな場所だよな！",
					"b":"秋葉原",
					"ba":"クールジャパンの発信地。クリエイティブな場所だよな！ノアちゃんも大好きだぞ！",
					"flag":2
				},
				{
					"q":"ノアちゃんとスポーツをしよう！サッカーと野球。どっちにしようか悩むな！",
					"a":"サッカー",
					"aa":"よし！じゃあノアちゃんが蹴る方をやるぞ！あってるか…？",
					"b":"野球",
					"ba":"キャッチボールしてみたかったんだ！嬉しいぞ！",
					"flag":3
				},
				{
					"q":"プロ野球と甲子園、見ていてどっちが白熱する？教えてくれ！",
					"a":"プロ野球",
					"aa":"プロの能力やプレーは見ていて熱くなるよな！",
					"b":"甲子園",
					"ba":"高校球児のひたむきな姿は見ていて熱くなるよな！青春だよなっ",
					"flag":3
				},
				{
					"q":"屋内スポーツって良いよな！バスケとバレーのどっちが好きか教えてくれ！",
					"a":"バスケ",
					"aa":"目まぐるしく動く試合に派手なスリーポイント！熱いよな！",
					"b":"バレー",
					"ba":"サーブにスマッシュにブロックに、技が光るし見応えあるよな！",
					"flag":3
				},
				{
					"q":"冬はウィンタースポーツも盛り上がるよな！華麗なフィギュア、目が離せないスキージャンプ！どっちを見ようか悩むな！",
					"a":"フィギュア",
					"aa":"氷上で優雅に踊り舞う姿はまるで歌姫だよな！あれは最高だ！",
					"b":"スキージャンプ",
					"ba":"スリルも迫力もあって着地の瞬間まで目を離せないよな！",
					"flag":3
				},
				{
					"q":"コンピューターゲームがしたいぞ！RPGと格闘ゲーム、どっちのゲームが好きか教えてくれ！",
					"a":"RPG",
					"aa":"壮大な物語をクリアしていく快感はたまらないよな！",
					"b":"格闘ゲーム",
					"ba":"一瞬一瞬の駆け引き、緊張あって最高だよな！",
					"flag":4
				},
				{
					"q":"VRゲームなら部屋にいながらなんでもできる！未来都市に行ったり、巨大なマシンを操作したりも自由自在だ！どんな体験がしてみたい？",
					"a":"未来都市",
					"aa":"輝くネオン、飛び交う情報、雑踏に立つだけでもワクワクしそうだよな！",
					"b":"マシン操作",
					"ba":"巨大マシンを操作して敵をやっつける！ロマンだよな！ノアちゃんもサポートするぞ！",
					"flag":4
				},
				{
					"q":"一緒にゲームして遊びたいぞ！対戦と協力プレイどっちにしようか？",
					"a":"対戦ゲーム",
					"aa":"よし！！絶対に負けないからな！",
					"b":"協力ゲーム",
					"ba":"分かった！君の活躍をノアちゃんがサポートするからな！！",
					"flag":4
				},
				{
					"q":"今日はレトロゲームと最新のゲーム、どっちのゲームをして遊ぼうか！",
					"a":"レトロゲーム",
					"aa":"音楽もグラフィックも、古いからこその趣があって良いよな！賛成だ！",
					"b":"最新ゲーム",
					"ba":"大迫力の音響に高精細なグラフィック！やっぱりその手で遊んでこそだよな！",
					"flag":4
				},
				{
					"q":"アルトデウスの舞台は未来の渋谷！渋谷ですることといえば買い物？それともグルメを楽しむ？…",
					"a":"買い物でしょ",
					"aa":"マルイ、紀伊国屋、MAGNET by SHIBUYA109…目移りしてしまうな！",
					"b":"グルメでしょ",
					"ba":"間違いないな！ノアちゃんもお腹が減ってきたぞ…",
					"flag":5
				},
				{
					"q":"買い物のときは、もちろんショッピングバッグ持参だよな！？",
					"a":"当然でしょ！",
					"aa":"くうー！そんな君をノアちゃんは好きだぞ！",
					"b":"…明日からな",
					"ba":"そっか！ノアちゃんもかわいいバッグ持ってくるから見せあいっこしような！",
					"flag":5
				},
				{
					"q":"買い物に行くのか？！スーパー？もしかして…花屋か！？どこに行くんだ？",
					"a":"スーパー",
					"aa":"じゃあイチゴも買ってきてくれないか？！イチゴはノアちゃんの大好物だからな！",
					"b":"花屋",
					"ba":"そっか！君がノアちゃんにどんな花を持ってきてくれるのか、楽しみに待ってるぞ！",
					"flag":5
				},
				{
					"q":"大切な人にプレゼントを送ろう！デパートかいつでも便利な通販、どっちで買うのが良いかな？",
					"a":"デパート",
					"aa":"実際に見て触れて選ぶ！流石の選択だ！",
					"b":"通販",
					"ba":"調べればオススメも評判もたくさん出てくるからな！良い判断だ！",
					"flag":5
				},
				{
					"q":"思考実験だぞ！トロッコの進路の片方に1人、もう片方には100人。オマエの手元には切り替えスイッチがある。さあどうする？",
					"a":"多い方を救う",
					"aa":"多く…つまり全てを救いたいその意思。見事だな！",
					"b":"両方救う",
					"ba":"彗眼だな！近年この問題に決着がついて全員救う方法が見つかったらしいぞ",
					"flag":6
				},
				{
					"q":"寿命の半分と引き換えに３億円をゲットできるボタンがあるぞ！オマエならどうする？",
					"a":"押す",
					"aa":"そうだよな！「今」というこの瞬間が大切だもんな！同感だ！",
					"b":"押さない",
					"ba":"オマエの力なら将来それ以上稼げるもんな！オマエの挑戦、ノアちゃんも応援するぞ！",
					"flag":6
				},
				{
					"q":"未来を読める能力と、人の心を読める能力、オマエならどっちが欲しい？",
					"a":"未来",
					"aa":"そうだな！未来が分かれば決断を誤らないからな！",
					"b":"人の心",
					"ba":"そうだな！人の心が分かればもっと人に寄り添えるからな！",
					"flag":6
				},
				{
					"q":"薄給だけど楽しい仕事と、高給だけど淡白な仕事、オマエならどっちを選ぶ？",
					"a":"薄給で楽しい",
					"aa":"そうだよな！やりたい事をやれて刺激のある日々は大切だよな！",
					"b":"高給で淡白",
					"ba":"そうだよな！生活に余裕があれば別の事にチャレンジできるもんな！",
					"flag":6
				},
				{
					"q":"もう12月で今年も終わりだな！クリスマスにお正月…2大イベントが待ってるな！好きなのはどっちだ？",
					"a":"クリスマス",
					"aa":"ケーキにサンタにプレゼント！クリスマスは最高だよな！",
					"b":"お正月",
					"ba":"おせちにお雑煮、お年玉！お正月は最高だよな！",
					"flag":6
				}
			]
		}



		/*
		FONTPlus
		*/
		function fnc_fontworks(){
			try {
				FONTPLUS.start();
			} catch(err) {
				console.log('fontplus start unloaded',err);
			}
		}



		/*
		LoadingFinish
		*/
		$('#transition').addClass('remove loadremove');



		/*
		設定用オプション準備
		*/
		var qlength = Object.keys(noa_json.noasquestion).length;
		var qid = Math.floor( Math.random() * (qlength - 0)) + 0;
		var fate_obj = {
			'qlength'				:qlength,
			'qid'						:qid,
			'currentval'		:0
		}
		var instantdata = {
			'medal'				:[],
			'complete'		:false,
			'id'					:undefined
		}



		/*
		トラッキング用
		*/
		function fnc_gatrack(arg_event,arg_category,arg_label){
			try {
				gtag('event', arg_event, {'event_category': arg_category, 'event_label': arg_label}); //トラッキング
			} catch(err) {
				console.log('undefined GA Function',err);
			}
		}



		/*
		ウェブストレージ生成＆チェック
		*/
		function fnc_wscheck(){

			var lsGameData = localStorage.getItem('ls_fategame'); //生成済みのストレージ名を収納しておく
			if(lsGameData == null) {
				//ローカルストレージが存在しなかった
				//console.log('メダルデータが存在しなかった場合の処理',lsGameData);
				//ID生成＆保存
				instantdata.id = fnc_createid(); //生成
				localStorage.setItem('ls_fategame', JSON.stringify(instantdata)); //jsonをstringに変換して保存
			} else {
				//ローカルストレージが存在した
				//console.log('メダルデータが存在した',lsGameData);
				var tempjson = JSON.parse(localStorage.getItem('ls_fategame')); //jsonに変換して取り出し
				//オプションに反映
				instantdata.medal = tempjson.medal;
				instantdata.complete = tempjson.complete;
				instantdata.id = tempjson.id;
			}

		}



		/*
		ID生成
		*/
		function fnc_createid(){
			var ss="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
			var digit=16;
			var cid = Array.from(crypto.getRandomValues(new Uint8Array(digit))).map((n)=>ss[n%ss.length]).join('');
			return cid;
		}



		/*
		ページ別初期化
		*/
		if($('#cptoppage').length) {

			/*
			《　　キャンペーントップ専用処理　　》
			*/

			//アニメーション準備
			$('.ready').addClass('action');

			//PVモーダル
			fnc_wscheck();
			fnc_movemodal();
			fnc_scloll_trigger();
			fnc_scloll_trigger_nav();
			fnc_view_medal();
			fnc_prize();
			fnc_open();
			fnc_fontworks();


		} else if($('#prombpage').length) {

			/*
			《　　出題ページ専用処理　　》
			*/

			//必須関数実行
			fnc_wscheck();
			fnc_promb_textinput();
			fnc_slidebar();
			fnc_submit();
			fnc_close();
			fnc_fontworks();

			//ローディング解除＆表示演出開始
			$('#game.promb').addClass('start_promb');
			$('#game.promb .submit button').bind("oTransitionEnd mozTransitionEnd webkitTransitionEnd transitionend", function(){
				//console.log('全アニメーション終了');
				$('#game.promb').addClass('end_promb');
			});

		} else if($('#resultpage').length) {

			/*
			《　　リザルトページ専用処理　　》
			*/

			//必須関数実行
			fnc_wscheck();
			fnc_result_textinput();
			fnc_close();
			fnc_fontworks();

			//ローディング解除＆表示演出開始
			$('#game.result').addClass('start_result');
			$('#game.result .result_share a').bind("oTransitionEnd mozTransitionEnd webkitTransitionEnd transitionend", function(){
				//console.log('全アニメーション終了');
				$('#game.result').addClass('end_result');
			});

		} else if($('#debug').length) {

			/*
			《　　デバッグページ専用処理　　》
			*/

			//必須環境実行
			fnc_wscheck();
			fnc_debug();

		}



		/*
		PVエリア
		*/
		function fnc_movemodal(){
			$('.pv a').magnificPopup({
				type: 'iframe',
				preloader: false,
				closeBtnInside:false
			});
		}



		/*
		スクロールアクション
		*/
		function fnc_scloll_trigger(){
			$('.scrollaction').waypoint(function(direction){

				//イベント着火
				if(direction == 'down'){

					//console.log('down',$(this.element));
					$(this.element).addClass('action');

				} else {

					//console.log('up',$(this.element));

				}

			},{offset : '50%'});
		}



		/*
		スクロールアクション：固定ナビ
		*/
		function fnc_scloll_trigger_nav(){
			$('#cp_terms').waypoint(function(direction){
				//イベント着火
				if(direction == 'down'){
					$('#guidenav').addClass('remove');
				} else {
					$('#guidenav').removeClass('remove');
				}
			},{offset : '50%'});
		}



		/*
		景品レベル制御
		*/
		function fnc_prize(){

			var gauge_par = parseInt((noa_json.gauge_current/noa_json.gauge_gole)*100);

			if(gauge_par>=100){
				//console.log('全解放',gauge_par);
				$('.rank03,.rank02').addClass('active');
				$('#prize_gauge > figure img:nth-of-type(1)').attr('src','assets/images/prize_gauge_now03.png');
				$('#prize_gauge > figure img:nth-of-type(2)').attr('src','assets/images/sp_prize_gauge_now03.png');
			} else if(gauge_par>=60) {
				//console.log('2段階目解放',gauge_par);
				$('.rank02').addClass('active');
				$('#prize_gauge > figure img:nth-of-type(1)').attr('src','assets/images/prize_gauge_now02.png');
				$('#prize_gauge > figure img:nth-of-type(2)').attr('src','assets/images/sp_prize_gauge_now02.png');
			} else {
				//console.log('初期状態',gauge_par);
				gauge_par++;
				$('.rank01').addClass('active');
				$('#prize_gauge > figure img:nth-of-type(1)').attr('src','assets/images/prize_gauge_now01.png');
				$('#prize_gauge > figure img:nth-of-type(2)').attr('src','assets/images/sp_prize_gauge_now01.png');
			}

			$('.gauge_bar').css({'width':gauge_par+'%'});
			$({count: 0}).animate({count: gauge_par}, {
				duration: 600,
				easing: 'linear',
				progress: function() {
					$('.gauge_percent span').text(Math.ceil(this.count));
				}
			});

		}



		/*
		メダル所持状況反映
		*/
		function fnc_view_medal(){

			//メダル反映
			$('.collection > ul li').each(function(i,e){

				fnc_setmedal((i+1),this);

			})

			//コンプリート状態時ボタン設定
			if(instantdata.complete){
				$('.apply_doubleup a').addClass('active').attr('href','https://forms.gle/TY2CBKxjC5xpcJcFA');
			} else {
				$('.apply_doubleup a').prop('disabled', true);
			}

		}



		/*
		出題テキスト書き換え
		*/
		function fnc_promb_textinput(){
			$('.question > p').text(noa_json.noasquestion[fate_obj.qid].q);
			$('.anser_text li:nth-of-type(1) span').text(noa_json.noasquestion[fate_obj.qid].a);
			$('.anser_text li:nth-of-type(2) span').text(noa_json.noasquestion[fate_obj.qid].b);
			$('.game_footer .achieve p').text(instantdata.id);
		}



		/*
		スライダーバー処理
		*/
		function fnc_slidebar(){
			function fnc_btn_focus(arg_val){
				switch (arg_val) {
					case 1:
					case 2:
					case 3:
						$('.anser_text li').removeClass('active');
						$('.anser_text li:nth-of-type(1)').addClass('active');
						break;
					case 4:
					case 5:
					case 6:
						$('.anser_text li').removeClass('active');
						$('.anser_text li:nth-of-type(2)').addClass('active');
						break;
				}
			}
			$('#anser_pointer').on('change',function(e){
				fnc_btn_focus(parseInt(e.target.value));
				$('.submit button').addClass('active');
			})
		}



		/*
		メダルガチャ処理用
		*/
		function fnc_medal_gacha(arg_rare){

			var settable;
			var rml;
			var fl;

			//テーブル
			var gtable = {
				'ss'			:[9,10],
				'n'				:[1,2,3,4,5,6,7,8]
			}

			//メダルフィルタリング関数
			function fnc_medalfilter(){
				if(instantdata.complete){
					//console.log('コンプ済みなのでフィルタリングしない');
				} else {
					if(instantdata.medal.length!==0){
						for (var i = 0; i < instantdata.medal.length; i++) {
							//console.log(instantdata.medal[i],'フィルタ対象ナンバー');
							settable = settable.filter(function(x){return x != instantdata.medal[i]});
						}
					}
				}
			}

			//範囲内チェック関数
			function fnc_between(x, min, max) {
				return x >= min && x <= max;
			}

			//確率用乱数
			let dice;
			if(arg_rare==true){
				dice = Math.floor( Math.random() * (10 + 1 - 1)) + 1;
			} else {
				dice = Math.floor( Math.random() * (100 + 1 - 1)) + 1;
			}

			//大枠振り分け
			if(fnc_between(dice,0,10)){
				//console.log('レア',dice)
				settable = gtable.ss;
			} else {
				//console.log('通常',dice)
				settable = gtable.n;
			}

			//console.log('排出テーブル',settable)

			fnc_medalfilter(); //メダルをフィルタリング

			fl = Math.floor( Math.random() * settable.length ); //対象メダル番号設定

			//console.log('排出テーブル',settable,fl,arg_rare);

			if(settable[fl]==undefined){
				//console.log('いずれかの枠のコンプ＆フィルタによる完全リセット状態',arg_rare)
				if(arg_rare==true){
					settable = gtable.ss;
				} else {
					settable = gtable.n;
				}
				fl = Math.floor( Math.random() * settable.length );
				rml = settable[fl];
				//console.log('ガチャ振り直し',settable[rml],rml,arg_rare)
			} else {
				if(!instantdata.complete){
					//console.log('コンプしてなかったのでメダルをセーブデータに追加');
					instantdata.medal.push(settable[fl]); //獲得メダルを追加
					localStorage.setItem('ls_fategame', JSON.stringify(instantdata)); //jsonをstringに変換して保存
					//コンプリート判定チェック
					if(instantdata.medal.length==10){
						instantdata.complete = true;
						fnc_gatrack('sitegamecomplete','fatecp2020',instantdata.id) //トラッキング
						localStorage.setItem('ls_fategame', JSON.stringify(instantdata)); //jsonをstringに変換して保存
					}
				}
				rml = settable[fl]
			}

			//console.log(instantdata.medal,'追加後',rml);

			return rml;

		}



		/*
		メダル反映
		*/
		function fnc_setmedal(arg_medalnum,arg_target){

			//console.log('書き換え実行',arg_medalnum,arg_target)

			function fnc_setview(arg_num,arg_target,arg_rare,arg_name,arg_voice){
				if(instantdata.medal.includes(arg_num)){
					$(arg_target).find('h5').removeClass().addClass('medal_'+(arg_num));
					$(arg_target).find('h6').removeClass().addClass(arg_rare);
					$(arg_target).find('p em').text(arg_name);
					$(arg_target).find('p span').text(arg_voice);
				}
			}

			switch (arg_medalnum) {

				case 1:
					fnc_setview(arg_medalnum,arg_target,'rare_3','クロエ','（CV：鬼頭明里）');
					break;

				case 2:
					fnc_setview(arg_medalnum,arg_target,'rare_3','コーコ','（CV：奥野香耶）');
					break;

				case 3:
					fnc_setview(arg_medalnum,arg_target,'rare_4','ノア','（CV：花守ゆみり）');
					break;

				case 4:
					fnc_setview(arg_medalnum,arg_target,'rare_3','アニマ','（CV：石川由依）');
					break;

				case 5:
					fnc_setview(arg_medalnum,arg_target,'rare_3','ヤマト','（CV：小林裕介）');
					break;

				case 6:
					fnc_setview(arg_medalnum,arg_target,'rare_3','アオバ','（CV：荒牧慶彦）');
					break;

				case 7:
					fnc_setview(arg_medalnum,arg_target,'rare_3','ジュリィ','（CV：芹澤優）');
					break;

				case 8:
					fnc_setview(arg_medalnum,arg_target,'rare_3','デイター','（CV：速水奨）');
					break;

				case 9:
					fnc_setview(arg_medalnum,arg_target,'rare_5','アークパティ');
					break;

				case 10:
					fnc_setview(arg_medalnum,arg_target,'rare_5','プロメテオス');
					break;

				default:
					console.log('例外')
					break;

			}

		}



		/*
		決断ボタン
		*/
		function fnc_submit(){
			$('.submit button').on('click',function(){

				var temp_id = fate_obj.qid;
				var temp_val = parseInt( encodeURIComponent($('#anser_pointer').val()) );
				var temp_medal;

				if($('.anser_text li').hasClass('active')){
					//レアフラグ回答チェック
					if(temp_val==noa_json.noasquestion[fate_obj.qid].flag){
						//console.log('フラグ合致',temp_val,noa_json.noasquestion[fate_obj.qid].flag);
						temp_medal = fnc_medal_gacha(true);
					} else {
						//console.log('フラグ未',temp_val,noa_json.noasquestion[fate_obj.qid].flag);
						temp_medal = fnc_medal_gacha();
					}
					//画面遷移開始
					fnc_gatrack('sitegameplay','fatecp2020',instantdata.id) //トラッキング
					$('#transition').removeClass('remove').addClass('analyzing_start'); //フェードアウト開始
					var seturl = 'result_'+temp_medal+'.html'+'?'+'qid='+temp_id+'&medal='+temp_medal+'&val='+temp_val; //URL生成
					setTimeout(function(){
						document.location.href = seturl;
					},3000);
					//console.log( 'result_'+temp_medal+'.html'+'?'+'qid='+temp_id+'&medal='+temp_medal+'&val='+temp_val )
				}

			})
		}



		/*
		リザルトテキスト書き換え
		*/
		function fnc_result_textinput(){

			var redirect = $.url().param('qid');

			if(redirect==undefined){

				console.log('直接リンク');
				location.href = "https://altdeus.com/cp/fate/";

			} else {

				//設定用変数
				var op = {
					'id'					:parseInt( encodeURIComponent($.url().param('qid')) ),
					'medal'				:parseInt( encodeURIComponent($.url().param('medal')) ),
					'val'					:parseInt( encodeURIComponent($.url().param('val')) ),
					'anser'				:'',
					'status1'			:Math.floor( Math.random() * (100 + 1 - 30)) + 30,
					'status2'			:Math.floor( Math.random() * (100 + 1 - 30)) + 30,
					'status3'			:0,
					'shareurl'		:'https://altdeus.com/cp/fate/game/',
					'hashtags'		:'選択・決断CP,アルトデウスBC',
					'related'			:'chronos_series',
					'tweettxt'		:''
				}
				//console.log(op.id,op.medal,op.val);

				switch (op.val) {
					case 1:
					case 2:
					case 3:
						//console.log('1-3だったのでA',op.val);
						op.anser = 'aa';
						break;
					case 4:
					case 5:
					case 6:
						//console.log('4-6だったのでB',op.val);
						op.anser = 'ba';
						break;
					default:
						console.log('例外')
				}

				fnc_setmedal(op.medal,'.result_medal'); //メダル反映

				$('.result_status > div > p').text(noa_json.noasquestion[op.id][op.anser]); //回答
				$('.game_footer .achieve p').text(instantdata.id); //ID反映

				//判定
				if(noa_json.noasquestion[op.id].flag==op.val){
					//console.log('レア回答',noa_json.noasquestion[op.id].flag,op.val);
					$('#game').removeClass('rare normal').addClass('rare');
					op.status3 = 100;
				} else {
					//console.log('通常回答',noa_json.noasquestion[op.id].flag,op.val)
					$('#game').removeClass('rare normal').addClass('normal');
					op.status3 = 20+(Math.floor( Math.random() * (20 + 1 - 1)) + 1);
				}

				//URL生成
				//console.log(op.medal)
				op.shareurl = op.shareurl+'result_'+op.medal+'.html';

				//ステータス反映
				//console.log(op.status_3);
				$('.result_status > div .status_1').find('span').css({'width':op.status1+'%'});
				$('.result_status > div .status_2').find('span').css({'width':op.status2+'%'});
				$('.result_status > div .status_3').find('span').css({'width':op.status3+'%'});

				//ツイートボタン設定
				op.tweettxt = 'AIノアの質問『'+noa_json.noasquestion[op.id].q+'』に回答！メダルをGETして最新VRハードOculusQuest2が当たるキャンペーンに応募したよ！'; //質問テキスト取得
				//console.log(op.shareurl,op.hashtags,op.related,op.tweettxt); //埋め込み内容チェック
				$('.result_share a').attr('href',('https://twitter.com/share?url='+op.shareurl+'&text='+op.tweettxt+'&related='+op.related+'&hashtags='+op.hashtags)); //URL設定

			}


		}



		/*
		ミニゲーム開くボタン
		*/
		function fnc_open(){
			$('.game_start,.gameplaynow').on('click',function(){
				window.open('./game/index.html','toolbar=no,location=no,menubar=no');
			})
		}



		/*
		閉じるボタン
		*/
		function fnc_close(){
			$('.close').on('click',function(){
				window.close();
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
		デバッグ用
		*/
		function fnc_debug(){

			$('.delete').on('click',function(){
				console.log('データ削除',localStorage.getItem('ls_fategame'));
				if(confirm('消去しますか？')){
					localStorage.removeItem('ls_fategame');
					window.location.reload();
				}
			})

			$('.set_gacha_n button').on('click',function(){
				console.log('通常ガチャを回す')
				var t = fnc_medal_gacha(false);
				var ct = $('h4 span').text();
				$('h4 span').text(t+','+ct);
			})

			$('.set_gacha_r button').on('click',function(){
				console.log('レアガチャを回す')
				var t = fnc_medal_gacha(true);
				var ct = $('h4 span').text();
				$('h4 span').text(t+','+ct);
			})

			$('.id').text(instantdata.id); //ID
			$('.set_comp span').text(instantdata.complete); //ID

			$('.medal').each(function(i,e){
				if(instantdata.medal.includes(i+1)){
					//console.log('取得済み',instantdata.medal);
					$(this).find('span').addClass('active').text('GET');
				} else {
					console.log('未取得',instantdata.medal)
				}
			})

			console.log(localStorage.getItem('ls_fategame'));

		}



	});






});
