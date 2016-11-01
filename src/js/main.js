require("./lib/social"); //Do not delete


var names = ['Kamala Harris','Loretta Sanchez','Mike Honda','Ro Khanna','Nancy Skinner','Sandré R. Swanson','Jane Kim','Scott Wiener','Catharine B. Baker','Cheryl Cook-Kallio','Andy Thornley','Brian J. Larkin','David E. Lee','Jason Jungreis','Jonathan Lyens','Marjan Philhour','Richie Greenberg','Samuel Kwong','Sandra Lee Fewer','Sherman R. D’silva','Aaron Peskin','Tim Donnelly','London Breed','Dean Preston','Norman Yee','Ben Matranga','Joel Engardio','John Farrell','Mike Young','Hillary Ronen','Iswari Espana','Joshua Arce','Melissa San Miguel','Ahsha Safai','Berta Hernandez','Francisco Herrera','Kim Alvarenga','Magdalena De Guzman','Dan Kalb','Kevin M. Corbett','Lynette Gibson Mcelhaney','Noni Session','Noel Gallo','Viola Gonzales','Larry Reid','Marcie Hodge','Nehanda Imara','Rebecca Kaplan','Bruce Quan','Francis “Matt” Hummel','Nancy Sidebotham','Peggy Moore','Zachary Runningwolf','Naomi D. Pete','Ben Gould','Bernt Wahl','Guy “Mike” Lee','Jesse Arreguín','Kriss Worthington','Laurie Capitelli','Cheryl Davila','Darryl Moore','Nanci Armstrong-Temple','Al G. Murray','Ben Bartlett','Deborah Matthews','Mark Coplan','Sophie Hahn','Stephen Murphy','Susan Wengraf','Fred Dodsworth','Isabelle Gaston'];

$("#search").autocomplete({
    source: names,
    minLength: 2,
    autoFocus: true,
    select: function(event, ui) {
        
        var input = ui.item.value;
        var originalEvent = event;

        $('.candidate').hide();
        $('#mosaic').hide();
        $(".candidate[name='" + input + "']").show();
        $("html, body").animate({ scrollTop: $(".candidate[name='" + input + "']").offset().top - 55}, 55);
        

        while (originalEvent) {
            if (originalEvent.keyCode == 13)
                originalEvent.stopPropagation();
                
            if (originalEvent == event.originalEvent)
                break;

            originalEvent = event.originalEvent;

        }
    }
});

$("#btm-search").autocomplete({
    source: names,
    minLength: 2,
    autoFocus: true,
    select: function(event, ui) {
        
        var input = ui.item.value;
        var originalEvent = event;

        $('.candidate').hide();
        $('#mosaic').hide();
        $(".candidate[name='" + input + "']").show();
        $("html, body").animate({ scrollTop: $(".candidate[name='" + input + "']").offset().top - 55}, 55);
        

        while (originalEvent) {
            if (originalEvent.keyCode == 13)
                originalEvent.stopPropagation();
                
            if (originalEvent == event.originalEvent)
                break;

            originalEvent = event.originalEvent;

        }
    }
});


$('.thumbnail').click(function(){
    var showface = $(this).attr('data-name');
    $('.thumbnail').hide();
    $('.note').hide();
    $('.candidate').addClass('navSelected');
    $(".candidate[name='" + showface + "']").show();
    $("#race-select").val($("#race-select option:first").val());
    $("html, body").animate({ scrollTop: $(".candidate[name='" + showface + "']").offset().top - 55}, 55);
});

$('#showall').click(function(){
    $(".candidate").hide(); 
    $('#mosaic').show(); 
    $('.thumbnail').show();
    $('#mosaic').css({'max-width':'none', 'margin': '0'});
    $("#race-select").val($("#race-select option:first").val());
    if ($(window).width() < 480) {
        $('.thumbnail').css({'-webkit-flex': '0 0 20%','-ms-flex' : '0 0 20%', 'flex' : '0 0 20%'});
    }
    else {
       $('.thumbnail').css({'-webkit-flex': '0 0 9%','-ms-flex' : '0 0 9%', 'flex' : '0 0 9%'});
    }
});

$('.btm-showall').click(function(){
    $(".candidate").hide(); 
    $('#mosaic').show(); 
    $('.thumbnail').show();
    $('#mosaic').css({'max-width':'none', 'margin': '0'});
    $("#race-select").val($("#race-select option:first").val());
    if ($(window).width() < 480) {
        $('.thumbnail').css({'-webkit-flex': '0 0 20%','-ms-flex' : '0 0 20%', 'flex' : '0 0 20%'});
    }
    else {
       $('.thumbnail').css({'-webkit-flex': '0 0 9%','-ms-flex' : '0 0 9%', 'flex' : '0 0 9%'});
    }
    $('html, body').animate({ scrollTop: $('#mosaic').offset().top - 150}, 65);
});

$('#race-select').on('change', function() {
    var race = this.value;

    $(".candidate").hide();
    $('.thumbnail').hide();
    $('.' + race ).show();
    $('.note').hide(); 
    $('#mosaic').css({'max-width':'300px', 'margin': '0 auto'});
    $('.thumbnail').css({'-webkit-flex': '0 0 50%','-ms-flex' : '0 0 50%', 'flex' : '0 0 50%'});
});


$('#btm-race-select').on('change', function() {
    var race = this.value;

    $(".candidate").hide();
    $('.thumbnail').hide();
    $('.' + race ).show();
    $('.note').hide(); 
    $('#mosaic').css({'max-width':'500px', 'margin': '0 auto'});
    $('.thumbnail').css({'-webkit-flex': '0 0 25%','-ms-flex' : '0 0 25%', 'flex' : '0 0 25%'});
});
