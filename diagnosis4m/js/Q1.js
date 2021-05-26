    $('.asia').mouseenter(function(){
        $('.asia').css('fill','#868EB0');
    });
    $('.asia').mouseleave(function(){
        $('.asia').css('fill','#BEC8DE');
    });
    $('.asia').on('click', function(){
        $('#Q1_1').prop('checked', true);
        $('#Q1_1').attr('checked', true);
        if ($("input:radio[id='Q1_1']").is(":checked") == true){
        $('.asia').addClass('active');
        $('.africa').removeClass('active');
        $('.australia').removeClass('active');
        $('.europe').removeClass('active');
        $('.nothamerica').removeClass('active');
        $('.southamerica').removeClass('active');
        $('.southeast').removeClass('active');
        $('.middleeast').removeClass('active');
        }
    });
    $('.africa').mouseenter(function(){
        $('.africa').css('fill','#868EB0');
    });
    $('.africa').mouseleave(function(){
        $('.africa').css('fill','#BEC8DE');
    });
    $('.africa').on('click', function(){
        $('#Q1_2').prop('checked', true);
        $('#Q1_2').attr('checked', true);
        if ($("input:radio[id='Q1_2']").is(":checked") == true){
        $('.asia').removeClass('active');
        $('.africa').addClass('active');
        $('.australia').removeClass('active');
        $('.europe').removeClass('active');
        $('.nothamerica').removeClass('active');
        $('.southamerica').removeClass('active');
        $('.southeast').removeClass('active');
        $('.middleeast').removeClass('active');
        }
    });
    $('.australia').mouseenter(function(){
        $('.australia').css('fill','#868EB0');
    });
    $('.australia').mouseleave(function(){
        $('.australia').css('fill','#BEC8DE');
    });
    $('.australia').on('click', function(){
        $('#Q1_3').prop('checked', true);
        $('#Q1_3').attr('checked', true);
        if ($("input:radio[id='Q1_3']").is(":checked") == true){
        $('.asia').removeClass('active');
        $('.australia').addClass('active');
        $('.africa').removeClass('active');
        $('.europe').removeClass('active');
        $('.nothamerica').removeClass('active');
        $('.southamerica').removeClass('active');
        $('.southeast').removeClass('active');
        $('.middleeast').removeClass('active');
        }
    });
    $('.europe').mouseenter(function(){
        $('.europe').css('fill','#868EB0');
    });
    $('.europe').mouseleave(function(){
        $('.europe').css('fill','#BEC8DE');
    });
    $('.europe').on('click', function(){
        $('#Q1_4').prop('checked', true);
        $('#Q1_4').attr('checked', true);
        if ($("input:radio[id='Q1_4']").is(":checked") == true){
        $('.asia').removeClass('active');
        $('.australia').removeClass('active');
        $('.africa').removeClass('active');
        $('.europe').addClass('active');
        $('.nothamerica').removeClass('active');
        $('.southamerica').removeClass('active');
        $('.southeast').removeClass('active');
        $('.middleeast').removeClass('active');
        }
    });
    $('.nothamerica').mouseenter(function(){
        $('.nothamerica').css('fill','#868EB0');
    });
    $('.nothamerica').mouseleave(function(){
        $('.nothamerica').css('fill','#BEC8DE');
    });
    $('.nothamerica').on('click', function(){
        $('#Q1_5').prop('checked', true);
        $('#Q1_5').attr('checked', true);
        if ($("input:radio[id='Q1_5']").is(":checked") == true){
        $('.asia').removeClass('active');
        $('.australia').removeClass('active');
        $('.africa').removeClass('active');
        $('.europe').removeClass('active');
        $('.nothamerica').addClass('active');
        $('.southamerica').removeClass('active');
        $('.southeast').removeClass('active');
        $('.middleeast').removeClass('active');
        }
    });
    $('.southamerica').mouseenter(function(){
        $('.southamerica').css('fill','#868EB0');
    });
    $('.southamerica').mouseleave(function(){
        $('.southamerica').css('fill','#BEC8DE');
    });
    $('.southamerica').on('click', function(){
        $('#Q1_6').prop('checked', true);
        $('#Q1_6').attr('checked', true);
        if ($("input:radio[id='Q1_6']").is(":checked") == true){
        $('.asia').removeClass('active');
        $('.australia').removeClass('active');
        $('.africa').removeClass('active');
        $('.europe').removeClass('active');
        $('.nothamerica').removeClass('active');
        $('.southamerica').addClass('active');
        $('.southeast').removeClass('active');
        $('.middleeast').removeClass('active');
        }
    });
    $('.southeast').mouseenter(function(){
        $('.southeast').css('fill','#868EB0');
    });
    $('.southeast').mouseleave(function(){
        $('.southeast').css('fill','#BEC8DE');
    });
    $('.southeast').on('click', function(){
        $('#Q1_7').prop('checked', true);
        $('#Q1_7').attr('checked', true);
        if ($("input:radio[id='Q1_7']").is(":checked") == true){
        $('.asia').removeClass('active');
        $('.australia').removeClass('active');
        $('.africa').removeClass('active');
        $('.europe').removeClass('active');
        $('.nothamerica').removeClass('active');
        $('.southamerica').removeClass('active');
        $('.southeast').addClass('active');
        $('.middleeast').removeClass('active');
        }
    });
    $('.middleeast').mouseenter(function(){
        $('.middleeast').css('fill','#868EB0');
    });
    $('.middleeast').mouseleave(function(){
        $('.middleeast').css('fill','#BEC8DE');
    });
    $('.middleeast').on('click', function(){
        $('#Q1_8').prop('checked', true);
        $('#Q1_8').attr('checked', true);
        if ($("input:radio[id='Q1_8']").is(":checked") == true){
        $('.asia').removeClass('active');
        $('.australia').removeClass('active');
        $('.africa').removeClass('active');
        $('.europe').removeClass('active');
        $('.nothamerica').removeClass('active');
        $('.southamerica').removeClass('active');
        $('.southeast').removeClass('active');
        $('.middleeast').addClass('active');
        }
    });
