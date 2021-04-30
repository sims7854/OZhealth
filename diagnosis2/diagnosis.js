
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
            /* 성별 수분 */
            var water = receive_get_data("Q2")
            if (water == 0.8) {
                var q2 = 15
            }
            if (water == 1) {
                var q2 = 5
            } 
            /* 나이 */
            var age = receive_get_data("Q3")
            if (age <= 60) {
                var q3 = 4 
            }
            if (age <= 40) {
                var q3 = 3 
            }
            if (age <= 20) {
                var q3 = 2 
            }
            if (age <= 10) {
                var q3 = 1 
            }
            if (age > 60) {
                var q3 = 5
            }
            /* 민감성 */
            var sensitive = receive_get_data("Q2")
            if (sensitive == 1) {
                var sq = 20
            }
            if (sensitive != 1) {
                var sq = 5
            }
            
            /* 모공크기 점수 */
            var input = receive_get_data("Q1")*2 + receive_get_data("Q2")*5 + q3*1 + receive_get_data("Q4")*1 +
                        receive_get_data("Q5")*1 + receive_get_data("Q6")*1 + receive_get_data("Q7")*1 + receive_get_data("Q8")*1 + 
                        receive_get_data("Q9")*1 + receive_get_data("Q10")*0 + receive_get_data("Q11")*0 + receive_get_data("Q12")*6 + 
                        receive_get_data("Q13")*2 + receive_get_data("Q14")*2 + receive_get_data("Q15")*0+ receive_get_data("Q16")*0 ;

            /* 피부톤 점수 */
            var input2 = receive_get_data("Q1")*3 + receive_get_data("Q2")*5 + q3*1 + receive_get_data("Q4")*1 +
                        receive_get_data("Q5")*1 + receive_get_data("Q6")*1 + receive_get_data("Q7")*3 + receive_get_data("Q8")*3 + 
                        receive_get_data("Q9")*3 + receive_get_data("Q10")*0 + receive_get_data("Q11")*0 + receive_get_data("Q12")*3 + 
                        receive_get_data("Q13")*0 + receive_get_data("Q14")*0 + receive_get_data("Q15")*0+ receive_get_data("Q16")*0 ;
            /* 주름 점수 */
            var input3 = receive_get_data("Q1")*1 + receive_get_data("Q2")*5 + q3*3 + receive_get_data("Q4")*1 +
                        receive_get_data("Q5")*1 + receive_get_data("Q6")*0 + receive_get_data("Q7")*2 + receive_get_data("Q8")*2 + 
                        receive_get_data("Q9")*2 + receive_get_data("Q10")*0 + receive_get_data("Q11")*0 + receive_get_data("Q12")*0 + 
                        receive_get_data("Q13")*0 + receive_get_data("Q14")*0 + receive_get_data("Q15")*0+ receive_get_data("Q16")*7 ;
            /* 색소침착 점수 */
            var input4 = receive_get_data("Q1")*1 + receive_get_data("Q2")*5 + q3*1 + receive_get_data("Q4")*1 +
                        receive_get_data("Q5")*2 + receive_get_data("Q6")*2 + receive_get_data("Q7")*5 + receive_get_data("Q8")*4 + 
                        receive_get_data("Q9")*1 + receive_get_data("Q10")*0 + receive_get_data("Q11")*0 + receive_get_data("Q12")*0 + 
                        receive_get_data("Q13")*0 + receive_get_data("Q14")*2 + receive_get_data("Q15")*0+ receive_get_data("Q16")*0 ;
            /* 피지분비 점수 */
            var input5 = receive_get_data("Q1")*2 + receive_get_data("Q2")*5 + q3*1 + receive_get_data("Q4")*1 +
                        receive_get_data("Q5")*1 + receive_get_data("Q6")*1 + receive_get_data("Q7")*1 + receive_get_data("Q8")*1 + 
                        receive_get_data("Q9")*1 + receive_get_data("Q10")*0 + receive_get_data("Q11")*0 + receive_get_data("Q12")*4 + 
                        receive_get_data("Q13")*2 + receive_get_data("Q14")*4 + receive_get_data("Q15")*0+ receive_get_data("Q16")*0 ;
            /* 민감성 점수 */
            var input6 = receive_get_data("Q1")*1 + sq + q3*3 + receive_get_data("Q4")*1 +
                        receive_get_data("Q5")*1 + receive_get_data("Q6")*0 + receive_get_data("Q7")*2 + receive_get_data("Q8")*2 + 
                        receive_get_data("Q9")*2 + receive_get_data("Q10")*0 + receive_get_data("Q11")*0 + receive_get_data("Q12")*0 + 
                        receive_get_data("Q13")*0 + receive_get_data("Q14")*0 + receive_get_data("Q15")*8+ receive_get_data("Q16")*0 ;
            /* 수분 점수 */
            var input7 = receive_get_data("Q1")*1 + q2 - q3*3 + receive_get_data("Q4")*3 +
                        receive_get_data("Q5")*3 - receive_get_data("Q6")*1 - receive_get_data("Q7")*2 + receive_get_data("Q8")*3 - 
                        receive_get_data("Q9")*1 + receive_get_data("Q10")*6 + receive_get_data("Q11")*6 + receive_get_data("Q12")*0 + 
                        receive_get_data("Q13")*0 + receive_get_data("Q14")*0 + receive_get_data("Q15")*0+ receive_get_data("Q16")*0 ;
            var wat = input7 / 2 ;
            /* 유분 점수 */
            var input8 = receive_get_data("Q1")*1 + receive_get_data("Q2")*5 + q3*3 + receive_get_data("Q4")*2 -
                        receive_get_data("Q5")*1 + receive_get_data("Q6")*1 + receive_get_data("Q7")*1 - receive_get_data("Q8")*1 + 
                        receive_get_data("Q9")*1 + receive_get_data("Q10")*4 + receive_get_data("Q11")*0 + receive_get_data("Q12")*4 + 
                        receive_get_data("Q13")*3 + receive_get_data("Q14")*0 + receive_get_data("Q15")*0+ receive_get_data("Q16")*0 ;
            
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
				document.getElementById("text").innerHTML =
                    "모공크기 : " + input + "<br>" + "피부톤 : " + input2 + "<br>" + "주름 : " + input3 + "<br>" + "색소침착 : " + input4 + "<br>" + "피지분비 : " + input5 + "<br>" + "민감성 : " + input6 + "<br>" + "수분 : " + wat + "<br>" + "유분 : " + input8 + "<br>" + polygon   ;                   
			}
            var ani1 = anime({
		        targets: '#morphing .polymorph',
		        points: [
		        	{ value: polygon },

		        ],
		        easing: 'easeInOutExpo',
		        duration: 2000,
		        loop: false,
		        autoplay: true
            });   
            var ani2 = anime({
                targets: '.list1 .water',
                width: wat*2,
                duration: 2000,
                easing: 'easeInOutExpo',
                autoplay: true
            });
            var ani3 = anime({
                targets: '.list2 .oil',
                width: input8*2,
                duration: 2000,
                easing: 'easeInOutExpo',
                autoplay: true
            });
            
		}
        
              
