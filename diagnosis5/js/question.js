
window.onload = function(){
    document.querySelector('.start-btn').onclick = function(){
        $(".intro").addClass('moving-l');
        $(".intro").fadeOut(500);
        $(".progress").addClass('moving-p-i');
        $(".question1").delay(1000).fadeIn(500);
    }
    page = 0
    $('path, label, .next-btn').on('click', function(){
        page = page +1
        var ani3 = anime({
            targets: '.progress .progress-bar .progress-bar-2',
            width: page*50,
            duration: 1000,
            easing: 'easeInOutExpo',
            autoplay: true
        });
        if (page==1) {
            $(".question1").removeClass('moving-r');
            $(".question1").addClass('moving-l');
            $(".question1").fadeOut(500);
            $(".prev-btn").fadeIn(500);
            $(".cir1").addClass('cir-a');
            $(".chk1").addClass('chk-a');
            $(".Q2").addClass('moving-r');
            $(".Q2").removeClass('moving-l');
            $(".Q2").delay(500).fadeIn(500);	
        };
        if (page==2) {
            $(".Q2").removeClass('moving-r');
            $(".Q2").addClass('moving-l');
            $(".Q2").fadeOut(500);
            //$(".next-btn").delay(100).fadeIn(100);
            $(".Q3").addClass('moving-r');
            $(".Q3").removeClass('moving-l');
            $(".Q3").delay(500).fadeIn(500);	
        };
        if (page==3) {
            $(".Q3").removeClass('moving-r');
            $(".Q3").addClass('moving-l');
            $(".Q3").fadeOut(500);
            //$(".next-btn").fadeOut(500);
            $(".Q4").addClass('moving-r');
            $(".Q4").removeClass('moving-l');
            $(".Q4").delay(500).fadeIn(500);	
        };
        if (page==4) {
            $(".Q4").removeClass('moving-r');
            $(".Q4").addClass('moving-l');
            $(".Q4").fadeOut(500);
            $(".Q5").addClass('moving-r');
            $(".Q5").removeClass('moving-l');
            $(".Q5").delay(500).fadeIn(500);	
        };
        if (page==5) {
            $(".Q5").removeClass('moving-r');
            $(".Q5").addClass('moving-l');
            $(".Q5").fadeOut(500);
            $(".cir2").addClass('cir-a');
            $(".chk2").addClass('chk-a');
            $(".Q6").addClass('moving-r');
            $(".Q6").removeClass('moving-l');
            $(".Q6").delay(500).fadeIn(500);	
        };
        if (page==6) {
            $(".Q6").removeClass('moving-r');
            $(".Q6").addClass('moving-l');
            $(".Q6").fadeOut(500);
            $(".Q7").addClass('moving-r');
            $(".Q7").removeClass('moving-l');
            $(".Q7").delay(500).fadeIn(500);	
        };
        if (page==7) {
            $(".Q7").removeClass('moving-r');
            $(".Q7").addClass('moving-l');
            $(".Q7").fadeOut(500);
            $(".Q8").addClass('moving-r');
            $(".Q8").removeClass('moving-l');
            $(".Q8").delay(500).fadeIn(500);	
        };
        if (page==8) {
            $(".Q8").removeClass('moving-r');
            $(".Q8").addClass('moving-l');
            $(".Q8").fadeOut(500);
            $(".Q9").addClass('moving-r');
            $(".Q9").removeClass('moving-l');
            $(".Q9").delay(500).fadeIn(500);	
        };
        if (page==9) {
            $(".Q9").removeClass('moving-r');
            $(".Q9").addClass('moving-l');
            $(".Q9").fadeOut(500);
            $(".cir3").addClass('cir-a');
            $(".chk3").addClass('chk-a');
            $(".Q10").addClass('moving-r');
            $(".Q10").removeClass('moving-l');
            $(".Q10").delay(500).fadeIn(500);	
        };
        if (page==10) {
            $(".Q10").removeClass('moving-r');
            $(".Q10").addClass('moving-l');
            $(".Q10").fadeOut(500);
            $(".Q11").addClass('moving-r');
            $(".Q11").removeClass('moving-l');
            $(".Q11").delay(500).fadeIn(500);	
        };
        if (page==11) {
            $(".Q11").removeClass('moving-r');
            $(".Q11").addClass('moving-l');
            $(".Q11").fadeOut(500);
            $(".Q12").addClass('moving-r');
            $(".Q12").removeClass('moving-l');
            $(".Q12").delay(500).fadeIn(500);	
        };
        if (page==12) {
            $(".Q12").removeClass('moving-r');
            $(".Q12").addClass('moving-l');
            $(".Q12").fadeOut(500);
            $(".Q13").addClass('moving-r');
            $(".Q13").removeClass('moving-l');
            $(".Q13").delay(500).fadeIn(500);	
        };
        if (page==13) {
            $(".Q13").removeClass('moving-r');
            $(".Q13").addClass('moving-l');
            $(".Q13").fadeOut(500);
            $(".cir4").addClass('cir-a');
            $(".chk4").addClass('chk-a');
            $(".Q14").addClass('moving-r');
            $(".Q14").removeClass('moving-l');
            $(".Q14").delay(500).fadeIn(500);	
        };
        if (page==14) {
            $(".Q14").removeClass('moving-r');
            $(".Q14").addClass('moving-l');
            $(".Q14").fadeOut(500);
            $(".Q15").addClass('moving-r');
            $(".Q15").removeClass('moving-l');
            $(".Q15").delay(500).fadeIn(500);	
        };
        if (page==15) {
            $(".Q15").removeClass('moving-r');
            $(".Q15").addClass('moving-l');
            $(".Q15").fadeOut(500);
            $(".Q16").addClass('moving-r');
            $(".Q16").removeClass('moving-l');
            $(".Q16").delay(500).fadeIn(500);	
        };
        if (page==16) {
            $(".Q16").removeClass('moving-r');
            $(".Q16").addClass('moving-l');
            $(".Q16").fadeOut(500);
            $(".cir5").addClass('cir-b');
            $(".chk5").addClass('chk-b');
            $(".Q17").addClass('moving-r');
            $(".Q17").removeClass('moving-l');
            $(".Q17").delay(500).fadeIn(500);	
        };
    });
    document.querySelector('.prev-btn').onclick = function(){
        page = page -1
        var ani3 = anime({
            targets: '.progress .progress-bar .progress-bar-2',
            width: page*50,
            duration: 1000,
            easing: 'easeInOutExpo',
            autoplay: true
        });
        if (page==0) {
            $(".Q2").removeClass('moving-r');
            $(".Q2").addClass('moving-l');
            $(".Q2").fadeOut(500);
            $(".prev-btn").fadeOut(500);
            $(".question1").removeClass('moving-l');
            $(".question1").addClass('moving-r');
            $(".question1").delay(500).fadeIn(500);	
        };
        if (page==1) {
            $(".Q3").removeClass('moving-r');
            $(".Q3").addClass('moving-l');
            $(".Q3").fadeOut(500);
            $(".Q2").removeClass('moving-l');
            $(".Q2").addClass('moving-r');
            $(".Q2").delay(500).fadeIn(500);	
        };
        if (page==2) {
            $(".Q4").removeClass('moving-r');
            $(".Q4").addClass('moving-l');
            $(".Q4").fadeOut(500);
            //$(".next-btn").fadeIn(100);
            $(".Q3").removeClass('moving-l');
            $(".Q3").addClass('moving-r');
            $(".Q3").delay(500).fadeIn(500);	
        };
        if (page==3) {
            $(".Q5").removeClass('moving-r');
            $(".Q5").addClass('moving-l');
            $(".Q5").fadeOut(500);
            $(".Q4").removeClass('moving-l');
            $(".Q4").addClass('moving-r');
            $(".Q4").delay(500).fadeIn(500);	
        };
        if (page==4) {
            $(".Q6").removeClass('moving-r');
            $(".Q6").addClass('moving-l');
            $(".Q6").fadeOut(500);
            $(".Q5").removeClass('moving-l');
            $(".Q5").addClass('moving-r');
            $(".Q5").delay(500).fadeIn(500);	
        };
        if (page==5) {
            $(".Q7").removeClass('moving-r');
            $(".Q7").addClass('moving-l');
            $(".Q7").fadeOut(500);
            $(".Q6").removeClass('moving-l');
            $(".Q6").addClass('moving-r');
            $(".Q6").delay(500).fadeIn(500);	
        };
        if (page==6) {
            $(".Q8").removeClass('moving-r');
            $(".Q8").addClass('moving-l');
            $(".Q8").fadeOut(500);
            $(".Q7").removeClass('moving-l');
            $(".Q7").addClass('moving-r');
            $(".Q7").delay(500).fadeIn(500);	
        };
        if (page==7) {
            $(".Q9").removeClass('moving-r');
            $(".Q9").addClass('moving-l');
            $(".Q9").fadeOut(500);
            $(".Q8").removeClass('moving-l');
            $(".Q8").addClass('moving-r');
            $(".Q8").delay(500).fadeIn(500);	
        };
        if (page==8) {
            $(".Q10").removeClass('moving-r');
            $(".Q10").addClass('moving-l');
            $(".Q10").fadeOut(500);
            $(".Q9").removeClass('moving-l');
            $(".Q9").addClass('moving-r');
            $(".Q9").delay(500).fadeIn(500);	
        };
        if (page==9) {
            $(".Q11").removeClass('moving-r');
            $(".Q11").addClass('moving-l');
            $(".Q11").fadeOut(500);
            $(".Q10").removeClass('moving-l');
            $(".Q10").addClass('moving-r');
            $(".Q10").delay(500).fadeIn(500);	
        };
        if (page==10) {
            $(".Q12").removeClass('moving-r');
            $(".Q12").addClass('moving-l');
            $(".Q12").fadeOut(500);
            $(".Q11").removeClass('moving-l');
            $(".Q11").addClass('moving-r');
            $(".Q11").delay(500).fadeIn(500);	
        };
        if (page==11) {
            $(".Q13").removeClass('moving-r');
            $(".Q13").addClass('moving-l');
            $(".Q13").fadeOut(500);
            $(".Q12").removeClass('moving-l');
            $(".Q12").addClass('moving-r');
            $(".Q12").delay(500).fadeIn(500);	
        };
        if (page==12) {
            $(".Q14").removeClass('moving-r');
            $(".Q14").addClass('moving-l');
            $(".Q14").fadeOut(500);
            $(".Q13").removeClass('moving-l');
            $(".Q13").addClass('moving-r');
            $(".Q13").delay(500).fadeIn(500);	
        };
        if (page==13) {
            $(".Q15").removeClass('moving-r');
            $(".Q15").addClass('moving-l');
            $(".Q15").fadeOut(500);
            $(".Q14").removeClass('moving-l');
            $(".Q14").addClass('moving-r');
            $(".Q14").delay(500).fadeIn(500);	
        };
        if (page==14) {
            $(".Q16").removeClass('moving-r');
            $(".Q16").addClass('moving-l');
            $(".Q16").fadeOut(500);
            $(".Q15").removeClass('moving-l');
            $(".Q15").addClass('moving-r');
            $(".Q15").delay(500).fadeIn(500);	
        };
        if (page==15) {
            $(".Q17").removeClass('moving-r');
            $(".Q17").addClass('moving-l');
            $(".Q17").fadeOut(500);
            //$(".next-btn").fadeIn(100);
            $(".Q16").removeClass('moving-l');
            $(".Q16").addClass('moving-r');
            $(".Q16").delay(500).fadeIn(500);	
        };
    };
};



