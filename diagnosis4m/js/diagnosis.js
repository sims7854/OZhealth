
        window.onload = function(){
			function receive_get_data(param) {
                var result = null, tmp = [];
                var items = window.location.search.substring(1).split("&");
                for (var i = 0; i < items.length; i++) {
                    tmp = items[i].split("=");
                    if (tmp[0] === param) result = decodeURIComponent(tmp[1]);
                }
                return result;
            }
            /* 성별-수분 */
            var water = receive_get_data("Q2")
            if (water == 0.8) {
                var q2 = 10
            }
            if (water == 1) {
                var q2 = 5
            }
            /* 점수반전-수분 */
            var q5 = (5 / receive_get_data("Q5")) -1
            var q6 = (5 / receive_get_data("Q6")) -1
            var q7 = (5 / receive_get_data("Q7")) -1
            var q8 = (5 / receive_get_data("Q8")) -1
            var q9 = (5 / receive_get_data("Q9")) -1
            /* 피부타입-민감성 */
            var sensitive = receive_get_data("Q4")
            if (sensitive == 1) {
                var sq = 20
            }
            if (sensitive != 1) {
                var sq = 5
            }
            
            /* 모공크기 점수 */
            var input = receive_get_data("Q1")*2 + receive_get_data("Q2")*5 + receive_get_data("Q3")*1 + receive_get_data("Q4")*1 +
                        receive_get_data("Q5")*1 + receive_get_data("Q6")*1 + receive_get_data("Q7")*1 + receive_get_data("Q8")*1 + 
                        receive_get_data("Q9")*1 + receive_get_data("Q10")*0 + receive_get_data("Q11")*0 + receive_get_data("Q12")*6 + 
                        receive_get_data("Q13")*2 + receive_get_data("Q14")*2 + receive_get_data("Q15")*0+ receive_get_data("Q16")*0 ;

            /* 피부톤 점수 */
            var input2 = receive_get_data("Q1")*3 + receive_get_data("Q2")*5 + receive_get_data("Q3")*1 + receive_get_data("Q4")*1 +
                        receive_get_data("Q5")*1 + receive_get_data("Q6")*1 + receive_get_data("Q7")*3 + receive_get_data("Q8")*3 + 
                        receive_get_data("Q9")*3 + receive_get_data("Q10")*0 + receive_get_data("Q11")*0 + receive_get_data("Q12")*3 + 
                        receive_get_data("Q13")*0 + receive_get_data("Q14")*0 + receive_get_data("Q15")*0+ receive_get_data("Q16")*0 ;
            /* 주름 점수 */
            var input3 = receive_get_data("Q1")*1 + receive_get_data("Q2")*5 + receive_get_data("Q3")*3 + receive_get_data("Q4")*1 +
                        receive_get_data("Q5")*1 + receive_get_data("Q6")*0 + receive_get_data("Q7")*2 + receive_get_data("Q8")*2 + 
                        receive_get_data("Q9")*2 + receive_get_data("Q10")*0 + receive_get_data("Q11")*0 + receive_get_data("Q12")*0 + 
                        receive_get_data("Q13")*0 + receive_get_data("Q14")*0 + receive_get_data("Q15")*0+ receive_get_data("Q16")*7 ;
            /* 색소침착 점수 */
            var input4 = receive_get_data("Q1")*1 + receive_get_data("Q2")*5 + receive_get_data("Q3")*1 + receive_get_data("Q4")*1 +
                        receive_get_data("Q5")*2 + receive_get_data("Q6")*2 + receive_get_data("Q7")*5 + receive_get_data("Q8")*4 + 
                        receive_get_data("Q9")*1 + receive_get_data("Q10")*0 + receive_get_data("Q11")*0 + receive_get_data("Q12")*0 + 
                        receive_get_data("Q13")*0 + receive_get_data("Q14")*2 + receive_get_data("Q15")*0+ receive_get_data("Q16")*0 ;
            /* 피지분비 점수 */
            var input5 = receive_get_data("Q1")*2 + receive_get_data("Q2")*5 + receive_get_data("Q3")*1 + receive_get_data("Q4")*1 +
                        receive_get_data("Q5")*1 + receive_get_data("Q6")*1 + receive_get_data("Q7")*1 + receive_get_data("Q8")*1 + 
                        receive_get_data("Q9")*1 + receive_get_data("Q10")*0 + receive_get_data("Q11")*0 + receive_get_data("Q12")*4 + 
                        receive_get_data("Q13")*2 + receive_get_data("Q14")*4 + receive_get_data("Q15")*0+ receive_get_data("Q16")*0 ;
            /* 민감성 점수 */
            var input6 = receive_get_data("Q1")*1 + receive_get_data("Q2")*5 + receive_get_data("Q3")*1 + sq +
                        receive_get_data("Q5")*1 + receive_get_data("Q6")*1 + receive_get_data("Q7")*1 + receive_get_data("Q8")*1 + 
                        receive_get_data("Q9")*1 + receive_get_data("Q10")*0 + receive_get_data("Q11")*0 + receive_get_data("Q12")*0 + 
                        receive_get_data("Q13")*0 + receive_get_data("Q14")*0 + receive_get_data("Q15")*8+ receive_get_data("Q16")*0 ;
            /* 수분 점수 */
            var input7 = 6 - receive_get_data("Q1") + q2 + 6 - receive_get_data("Q3") + receive_get_data("Q4")*3 +
                        q5 + q6 + q7 + q8 + 
                        q9 + receive_get_data("Q10")*4 + receive_get_data("Q11")*4 + receive_get_data("Q12")*0 + 
                        receive_get_data("Q13")*0 + receive_get_data("Q14")*0 + receive_get_data("Q15")*0+ receive_get_data("Q16")*0 ;
            /* 유분 점수 */
            var input8 = receive_get_data("Q1")*1 + receive_get_data("Q2")*5 + receive_get_data("Q3")*1 + receive_get_data("Q4")*2 +
                        receive_get_data("Q5")*1 + receive_get_data("Q6")*1 + receive_get_data("Q7")*1 + receive_get_data("Q8")*1 + 
                        receive_get_data("Q9")*1 + receive_get_data("Q10")*0 + receive_get_data("Q11")*0 + receive_get_data("Q12")*4 + 
                        receive_get_data("Q13")*6 + receive_get_data("Q14")*0 + receive_get_data("Q15")*0+ receive_get_data("Q16")*0 ;
            
			/* 모공크기 좌표 */
            if (input <= 100) {
                var po1 = 70
                var po2 = (100 - input) * 0.70
                var po = (po1 + " " + po2 + " ")
            }
            
            /* 피부톤 좌표 */
            if (input2 <= 100) {
                var st1 = (input2 * 0.60621778) + 70
                var st2 = ((100 - input2) * 0.35) + 35
                var st = (st1 + " " + st2 + " ")
            }
            
            /* 주름 좌표 */
            if (input3 <= 100) {
                var wr1 = (input3 * 0.60621778) + 70
                var wr2 = ((input3) * 0.35) + 70
                var wr = (wr1 + " " + wr2 + " ")
            }
            
            /* 색소침착 좌표 */
            if (input4 <= 100) {
                var pi1 = 70
                var pi2 = ((input4) * 0.70) +70
                var pi = (pi1 + " " + pi2 + " ")
            }
          
            /* 피지분비 좌표 */
            if (input5 <= 100) {
                var ss1 = 70 - (input5 * 0.60621778)
                var ss2 = ((input5) * 0.35) + 70
                var ss = (ss1 + " " + ss2 + " ")
            }

            /* 민감성 좌표 */
            if (input6 <= 100) {
                var se1 = 70 - (input6 * 0.60621778)
                var se2 = ((100 - input6) * 0.35) + 35
                var se = (se1 + " " + se2 + " ")
            }
           
            if (input != null) {
                var polygon = po + st + wr + pi + ss + se          
            }
            var PolyAni = anime({
		        targets: '#morphing .polymorph',
		        points: [
		        	{ value: polygon },

		        ],
		        easing: 'easeInOutExpo',
		        duration: 1500,
		        loop: false,
		        autoplay: true
            });
            var dotAni = anime({
		        targets: '#morphing .dot',
		        cx: po1,
                cy: po2,
		        easing: 'easeInOutExpo',
		        duration: 1500,
		        loop: false,
		        autoplay: true
            });
            var dotAni2 = anime({
		        targets: '#morphing .dot2',
		        cx: st1,
                cy: st2,
		        easing: 'easeInOutExpo',
		        duration: 1500,
		        loop: false,
		        autoplay: true
            });
            var dotAni3 = anime({
		        targets: '#morphing .dot3',
		        cx: wr1,
                cy: wr2,
		        easing: 'easeInOutExpo',
		        duration: 1500,
		        loop: false,
		        autoplay: true
            });
            var dotAni4 = anime({
		        targets: '#morphing .dot4',
		        cx: pi1,
                cy: pi2,
		        easing: 'easeInOutExpo',
		        duration: 1500,
		        loop: false,
		        autoplay: true
            });
            var dotAni5 = anime({
		        targets: '#morphing .dot5',
		        cx: ss1,
                cy: ss2,
		        easing: 'easeInOutExpo',
		        duration: 1500,
		        loop: false,
		        autoplay: true
            });
            var dotAni6 = anime({
		        targets: '#morphing .dot6',
		        cx: se1,
                cy: se2,
		        easing: 'easeInOutExpo',
		        duration: 1500,
		        loop: false,
		        autoplay: true
            });   
            var WatAni = anime({
                targets: '.list1 .water',
                height: input7*0.84,
                duration: 1500,
                easing: 'easeInOutExpo',
                autoplay: true
            });
            var OilAni = anime({
                targets: '.list2 .oil',
                height: input8*0.84,
                duration: 1500,
                easing: 'easeInOutExpo',
                autoplay: true
            });
            var myObject = { prop: '0%' }
              var ResultAni = anime({
                targets: myObject,
                prop: input,
                easing: 'linear',
                autoplay: true,
                round: 1,
                update: function() {
                    var el = document.querySelector('#po span');
                        el.innerHTML = JSON.stringify(myObject).replace(/\"/gi, "").replace(/\{/gi, "").replace(/\}/gi, "").replace(/prop:/gi, "");
                }
                
              });
              var Resultbar = anime({
                targets: '#po .bar',
                width: input*2,
                duration: 1500,
                easing: 'easeInOutExpo',
                autoplay: true
            });
              var myObject2 = { prop: '0%' }
              var ResultAni2 = anime({
                targets: myObject2,
                prop: input2,
                easing: 'linear',
                autoplay: true,
                round: 1,
                update: function() {
                    var el = document.querySelector('#st span');
                        el.innerHTML = JSON.stringify(myObject2).replace(/\"/gi, "").replace(/\{/gi, "").replace(/\}/gi, "").replace(/prop:/gi, "");
                }
                
              });
              var Resultbar2 = anime({
                targets: '#st .bar',
                width: input2*2,
                duration: 1500,
                easing: 'easeInOutExpo',
                autoplay: true
            });
              var myObject3 = { prop: '0%' }
              var ResultAni3 = anime({
                targets: myObject3,
                prop: input3,
                easing: 'linear',
                autoplay: true,
                round: 1,
                update: function() {
                    var el = document.querySelector('#wr span');
                        el.innerHTML = JSON.stringify(myObject3).replace(/\"/gi, "").replace(/\{/gi, "").replace(/\}/gi, "").replace(/prop:/gi, "");
                }
                
              });
              var Resultbar3 = anime({
                targets: '#wr .bar',
                width: input3*2,
                duration: 1500,
                easing: 'easeInOutExpo',
                autoplay: true
            });
              var myObject4 = { prop: '0%' }
              var ResultAni4 = anime({
                targets: myObject4,
                prop: input4,
                easing: 'linear',
                autoplay: true,
                round: 1,
                update: function() {
                    var el = document.querySelector('#pi span');
                        el.innerHTML = JSON.stringify(myObject4).replace(/\"/gi, "").replace(/\{/gi, "").replace(/\}/gi, "").replace(/prop:/gi, "");
                }
                
              });
              var Resultbar4 = anime({
                targets: '#pi .bar',
                width: input4*2,
                duration: 1500,
                easing: 'easeInOutExpo',
                autoplay: true
            });
              var myObject5 = { prop: '0%' }
              var ResultAni5 = anime({
                targets: myObject5,
                prop: input5,
                easing: 'linear',
                autoplay: true,
                round: 1,
                update: function() {
                    var el = document.querySelector('#ss span');
                        el.innerHTML = JSON.stringify(myObject5).replace(/\"/gi, "").replace(/\{/gi, "").replace(/\}/gi, "").replace(/prop:/gi, "");
                }
                
              });
              var Resultbar5 = anime({
                targets: '#ss .bar',
                width: input5*2,
                duration: 1500,
                easing: 'easeInOutExpo',
                autoplay: true
            });
              var myObject6 = { prop: '0%' }
              var ResultAni6 = anime({
                targets: myObject6,
                prop: input6,
                easing: 'linear',
                autoplay: true,
                round: 1,
                update: function() {
                    var el = document.querySelector('#se span');
                        el.innerHTML = JSON.stringify(myObject6).replace(/\"/gi, "").replace(/\{/gi, "").replace(/\}/gi, "").replace(/prop:/gi, "");
                }
              });
              var Resultbar6 = anime({
                targets: '#se .bar',
                width: input6*2,
                duration: 1500,
                easing: 'easeInOutExpo',
                autoplay: true
            });
              var myObject7 = { prop: '0%' }
              var ResultAni7 = anime({
                targets: myObject7,
                prop: input7,
                easing: 'linear',
                autoplay: true,
                round: 1,
                update: function() {
                    var el = document.querySelector('.list1 span');
                        el.innerHTML = JSON.stringify(myObject7).replace(/\"/gi, "").replace(/\{/gi, "").replace(/\}/gi, "").replace(/prop:/gi, "");
                }
              });

              var myObject8 = { prop: '0%' }
              var ResultAni8 = anime({
                targets: myObject8,
                prop: input8,
                easing: 'linear',
                autoplay: true,
                round: 1,
                update: function() {
                    var el = document.querySelector('.list2 span');
                        el.innerHTML = JSON.stringify(myObject8).replace(/\"/gi, "").replace(/\{/gi, "").replace(/\}/gi, "").replace(/prop:/gi, "");
                }
              });
              
               /* 상품 추천 */
               recommendurl1 = "http://skin-skin13.victoriabeautykr.cafe24.com/4dskins/recommend.html";
               recommendurl2 = "?product_no=25&sActionType=basket&cate_no=158";
               recommend1 = "&recommend1=14" ;
               recommend2 = "&recommend2=13" ;
               recommend3 = "&recommend3=12" ;
               recommend4 = "&recommend4=11" ;
               recommend5 = "&recommend5=10" ;
               recommend6 = "&recommend6=9" ;
               recommendurl = recommendurl1 + recommendurl2 + recommend1 + recommend2 + recommend3 + recommend4 + recommend5 + recommend6

		}
        
              
