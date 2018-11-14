$(function(){

    
    const useElevtor = function () {
        dialog('You walk to the elevator only to find an exhauted Brandon sitting on the ground, back against the elevator wall. He weakly says "You cant save them, its too late", and passes out. Do you...', enterMain, useStairs);
    }
    
    const callUp = function () {
    dialog('You buzz up to HackerYou to see if there is any response. First attempt does nothing. You try again, and this time you get a weird static youve never heard before, and the doors slowly open. You walk through and...', useElevtor, useStairs);
    }

    const scanFob = function () {
        dialog('You scan your trusty key fob and the doors slowly open, the lights are dim, you turn on your phone flashlight. Do you...', useElevtor, useStairs);
    }
        
    const howToEnter = function () { 
         dialog('You get to the HackerYou building and you already sense something is off.The lights inside are flickerinerratically.To enter, you decide to...', scanFob, callUp);
    }
    
    const enterBuilding = function () { 
        dialog('You havent heard from your Cohort project partners for days. Concerned, you head over to HackerYou to see if you can get some answers', howToEnter, howToEnter);
    }


    function dialog(message, button1, button2) {
        $('.title').html(message);
        $('#button1').on('click', function () {
            button1(message);
        });
        $('#button2').on('click', function () {
            button2(message)
        });
    }

 dialog('Play game', enterBuilding, enterBuilding);

//turn off event handlet

});