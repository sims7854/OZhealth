function age() {
    $(".Q3").fadeOut(100);
    $(".next-btn").fadeOut(100);
    $(".Q4").delay(100).fadeIn(100);
    page = 3 
    var ani3 = anime({
        targets: '.progress .progress-bar',
        width: page*80,
        duration: 500,
        easing: 'easeInOutExpo',
        autoplay: true
    });
}
window.onload = function(){
    document.querySelector('.start-btn').onclick = function(){
        $(".intro").fadeOut(100);
        $(".progress").delay(100).fadeIn(100);
        $(".Q1").delay(100).fadeIn(100);
    }
    page = 0
    $('path, label, .next-btn').on('click', function(){
        page = page +1
        var ani3 = anime({
            targets: '.progress .progress-bar',
            width: page*20,
            duration: 500,
            easing: 'easeInOutExpo',
            autoplay: true
        });
        if (page==1) {
            $(".Q1").fadeOut(100);
            $(".prev-btn").fadeIn(100);
            $(".Q2").delay(100).fadeIn(100);	
        };
        if (page==2) {
            $(".Q2").fadeOut(100);
            //$(".next-btn").delay(100).fadeIn(100);
            $(".Q3").delay(100).fadeIn(100);	
        };
        if (page==3) {
            $(".Q3").fadeOut(100);
            $(".next-btn").fadeOut(100);
            $(".Q4").delay(100).fadeIn(100);	
        };
        if (page==4) {
            $(".Q4").fadeOut(100);
            $(".Q5").delay(100).fadeIn(100);	
        };
        if (page==5) {
            $(".Q5").fadeOut(100);
            $(".Q6").delay(100).fadeIn(100);	
        };
        if (page==6) {
            $(".Q6").fadeOut(100);
            $(".Q7").delay(100).fadeIn(100);	
        };
        if (page==7) {
            $(".Q7").fadeOut(100);
            $(".Q8").delay(100).fadeIn(100);	
        };
        if (page==8) {
            $(".Q8").fadeOut(100);
            $(".Q9").delay(100).fadeIn(100);	
        };
        if (page==9) {
            $(".Q9").fadeOut(100);
            $(".Q10").delay(100).fadeIn(100);	
        };
        if (page==10) {
            $(".Q10").fadeOut(100);
            $(".Q11").delay(100).fadeIn(100);	
        };
        if (page==11) {
            $(".Q11").fadeOut(100);
            $(".Q12").delay(100).fadeIn(100);	
        };
        if (page==12) {
            $(".Q12").fadeOut(100);
            $(".Q13").delay(100).fadeIn(100);	
        };
        if (page==13) {
            $(".Q13").fadeOut(100);
            $(".Q14").delay(100).fadeIn(100);	
        };
        if (page==14) {
            $(".Q14").fadeOut(100);
            $(".Q15").delay(100).fadeIn(100);	
        };
        if (page==15) {
            $(".Q15").fadeOut(100);
            $(".Q16").delay(100).fadeIn(100);	
        };
        if (page==16) {
            $(".Q16").fadeOut(100);
            $(".progress").fadeOut(100);
            $(".prev-btn").fadeOut(100);
            $(".Q17").delay(100).fadeIn(100);	
        };
    });
    document.querySelector('.prev-btn').onclick = function(){
        page = page -1
        var ani3 = anime({
            targets: '.progress .progress-bar',
            width: page*20,
            duration: 500,
            easing: 'easeInOutExpo',
            autoplay: true
        });
        if (page==0) {
            $(".Q2").fadeOut(100);
            $(".prev-btn").fadeOut(100);
            $(".Q1").delay(100).fadeIn(100);	
        };
        if (page==1) {
            $(".Q3").fadeOut(100);
            $(".Q2").delay(100).fadeIn(100);	
        };
        if (page==2) {
            $(".Q4").fadeOut(100);
            //$(".next-btn").fadeIn(100);
            $(".Q3").delay(100).fadeIn(100);	
        };
        if (page==3) {
            $(".Q5").fadeOut(100);
            $(".Q4").delay(100).fadeIn(100);	
        };
        if (page==4) {
            $(".Q6").fadeOut(100);
            $(".Q5").delay(100).fadeIn(100);	
        };
        if (page==5) {
            $(".Q7").fadeOut(100);
            $(".Q6").delay(100).fadeIn(100);	
        };
        if (page==6) {
            $(".Q8").fadeOut(100);
            $(".Q7").delay(100).fadeIn(100);	
        };
        if (page==7) {
            $(".Q9").fadeOut(100);
            $(".Q8").delay(100).fadeIn(100);	
        };
        if (page==8) {
            $(".Q10").fadeOut(100);
            $(".Q9").delay(100).fadeIn(100);	
        };
        if (page==9) {
            $(".Q11").fadeOut(100);
            $(".Q10").delay(100).fadeIn(100);	
        };
        if (page==10) {
            $(".Q12").fadeOut(100);
            $(".Q11").delay(100).fadeIn(100);	
        };
        if (page==11) {
            $(".Q13").fadeOut(100);
            $(".Q12").delay(100).fadeIn(100);	
        };
        if (page==12) {
            $(".Q14").fadeOut(100);
            $(".Q13").delay(100).fadeIn(100);	
        };
        if (page==13) {
            $(".Q15").fadeOut(100);
            $(".Q14").delay(100).fadeIn(100);	
        };
        if (page==14) {
            $(".Q16").fadeOut(100);
            $(".Q15").delay(100).fadeIn(100);	
        };
        if (page==15) {
            $(".Q17").fadeOut(100);
            //$(".next-btn").fadeIn(100);
            $(".progress").delay(100).fadeIn(100);
            $(".Q16").delay(100).fadeIn(100);	
        };
    };
};
$(function() { $("input:text").keydown(function(evt) { if (evt.keyCode == 13) return false; }); });

