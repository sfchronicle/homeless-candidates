require("./lib/social"); //Do not delete


var names = ['kamala harris','loretta sanchez','mike honda','ro khanna','nancy skinner','sandré r. swanson','jane kim','scott wiener','catharine b. baker','cheryl cook-kallio','andy thornley','brian j. larkin','david e. lee','jason jungreis','jonathan lyens','marjan philhour','richie greenberg','samuel kwong','sandra lee fewer','sherman r. d’silva','aaron peskin','tim donnelly','london breed','dean preston','norman yee','ben matranga','joel engardio','john farrell','mike young','hillary ronen','iswari espana','joshua arce','melissa san miguel','ahsha safai','berta hernandez','francisco herrera','kim alvarenga','magdalena de guzman','dan kalb','kevin m. corbett','lynette gibson mcelhaney','noni session','noel gallo','viola gonzales','larry reid','marcie hodge','nehanda imara','rebecca kaplan','bruce quan','francis “matt” hummel','nancy sidebotham','peggy moore','zachary runningwolf','naomi d. pete','ben gould','bernt wahl','guy “mike” lee','jesse arreguín','kriss worthington','laurie capitelli','cheryl davila','darryl moore','nanci armstrong-temple','al g. murray','ben bartlett','deborah matthews','mark coplan','sophie hahn','stephen murphy','susan wengraf','fred dodsworth','isabelle gaston'];

$("#search").autocomplete({
    source: names,
    minLength: 2,
    autoFocus: true,
    select: function(event, ui) {
        
        var input = ui.item.value;
        var originalEvent = event;

        $('.candidate').hide();
        $('.thumbnail').hide();
        $(".candidate[name='" + input + "']").show();
        console.log(input);

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
    $(".candidate[name='" + showface + "']").show();
});

$('#showall').click(function(){
    $(".candidate").hide(); 
    $('.thumbnail').show();         
});