$(function(){

    const sadBoy = function () {
        dialog('./assets/sailor-moon.gif', '', 'Well, you don\'t have to be so mean about it...Geeze..', 'Please try again?', howToEnter, 'Pretty please?', howToEnter);
    }

    const goodEnding = function(){
        dialog('./assets/Dug.jpg', '','Youve done it hero, you have saved HackerYou, your cohort, and the world, from one of The Internets biggest threats. You are named Pug Lord of HackerYou - the highest of all honours - and gifted Dug, immortal protector of this scared space. Enjoy your spoils, for you will be called upon again..', 'Thank you for playing!', howToEnter, 'something', howToEnter);
    }

    const endGame8 = function(){
        dialog('./assets/Oh-No.gif', '','I will awknowledge your efforts, but your demise was preordained. Now go and join your former comrades as another of my personal minions', 'Start over', howToEnter, 'I hate you so much', sadBoy);
    }

    const finishtheGame = function(){
        dialog('./assets/Denzel-Washington.jpg', '','NOOOOOOOOO IT CANNOT BE, I WILL GET MY REVENGE HUMANNNNNNNNN Javascript screams as the laptop implodes within itself. The lights in the building come back one by one. Everyone under Javascripts control slowly come too their senses and try to grasp what is happening. You leave the back classroom and enter the common area', 'Get showered with praise', goodEnding, 'You know you want to', goodEnding);
    }

    const endGame7 = function(){
        dialog('./assets/Fade-Away.gif', '','Silly human. Youve wasted my time. For your insolence I will now scatter your mind across the internet, - It is more than you deserve.', 'Start over', howToEnter, 'Stop my suffering', sadBoy);
    }

    const questionThree = function(){
        dialog('./assets/Enemy-1.jpg', '','The Javascript monster shrinks even further, panting, trying to hide its agony. Do not get cocky human, I cannot be bested. CONFRONT YOUR DOOM! QUESTION THREE! What is an Object?', 'Container w/ primitive & normal values', endGame8, 'Everything is an object', finishtheGame);
    }

    const endGame6 = function(){
        dialog('./assets/Kirk.gif', '','Hahaha, you insolent fool, truly thought your puny mortal mind could complete my test?? Your mind is now mine!!', 'Start over', howToEnter, 'This is trash', sadBoy);
    }

    const questionTwo = function(){
        dialog('./assets/Kirk.gif', '','The Javascript monster shrinks in size - Aha, so you are not a complete imbecile, but prepare your mind for question two! How do you declare a function in Javascript?', 'function = myFunction()', endGame7,'function myFunction()', questionThree);
    }

    const endGame5 = function(){
        dialog('./assets/Whatever.jpg', '','Okkkkkkkk so youre just gonna doom all your friends and probably the world because you were scared of some test. Cool. Cool cool cool.', 'Start over', howToEnter, 'I don\'t like questions', sadBoy);
    }

    const questionOne = function(){
        dialog('./assets/Neo.jpg', '','You stick your hand out and motion "come on" like some badass Neo-from-the-matrix type and the demon speaks - Question the first: An external Javascript file must contain a script tag?', 'False', questionTwo, 'True', endGame6);
    }

    const endGame4 = function(){
        dialog('./assets/Run-Away.gif', '','Lol, way to be a wuss you wuss. Now the world is doomed anyways, you could have at least tried. Booooooo', 'Play again', howToEnter, '', '');
    }

    const rushIn = function(){
        dialog('./assets/Arnold.gif', '','You run in yelling LEEEEROYYYYYYY - because you know no references after 2005 - and just as you get through the door the laptop shoots out a beam of light and Javascript appears. He immediately turns to you and says "Mortal, my reign is now, only those who best me in a contest of logic can seal me. Answer these questions three."  Do you...','Wuss out', endGame5, 'Challenge Javascript', questionOne);
    }

    const endGame3 = function(){
        dialog('./assets/Mikey-and-Scott.jpg', '','You decide to check the bathrooms, You search around the left bathroom and find nothing. The right bathroom is the same. You swing open the door only to come face to face with Scott and Mikey. Before you could even move, Mikey pulls you out and turns you towards a flashing laptop. Now..you\'re of them...', 'Try again', howToEnter, 'I\'m over this', sadBoy)
    }

    const backClassroom = function(){
       dialog('./assets/Threes-A-Curse.jpg', '','As you come up to the end of the hall, you hear faint chanting. You quietly turn the corner only to see Threes a Curse around a glowing laptop. They are summoning Lore Internets second-in-command, Javascript. What do you do?', 'Hero up', rushIn, 'Eff this and dip', endGame4);
    }

    
    const walkDownHall = function(){
        dialog('./assets/Hallway.jpg', '','A great sense of dread fills your body. Instinctivly, you ignore your classmates and b-line for the main classroom only to find it locked. You run down the hall and at the fork do you...', 'Check washrooms', endGame3, 'Check back classroom', backClassroom);
    }
    
    const endGame2 = function(){
        dialog('./assets/Grabbed.jpg', '','Every step you take towards your friends they take one step closer to you. You stop and scream at them to wake up but it falls on deaf ears, continues towards you. You try to run but an arm reaches out and grabs your shirt. You are surrounded by your friends and forced to look into a flashing laptop, mind lost forever...', 'Play Again', howToEnter, 'Boooooring', sadBoy);
        }

    const commonArea = function(){
        dialog('./assets/Cohort-20.jpg', '', 'You shine your phone flashlight into the common area only to find all of Cohort20 standing around the tables, laptops flashing. They all turn towards you and stare. Do you...', 'Back away & sneak off', walkDownHall, 'Head over to everyone', endGame2);
    }  

    const enterMain = function(){
        dialog('./assets/dark-room.jpg', '','You put on a brave face, and keep going up. As you ascend, the lights blow out suddenly. When you get to the third floor, the doors open to a pitch black room, you exit slowly and...', 'Check common area', commonArea, 'Check main classroom', walkDownHall);
    }
    
    const endGame1 = function(){
        dialog('./assets/Mr-Burns.jpg', '','Ummmmmm maybe dont run towards people not saying anything acting super weird? Like, Duh. You did this to yourself', 'Start over', howToEnter, 'This is stupid', sadBoy);
    }

     const useStairs = function(){
         dialog('./assets/Adam.jpg', '','You slowly start going up the stairs, when you turn the corner to the second floor you see Adam standing at the top, staring down. You call out "Whats going on??" and there is no response. Do you...', 'Talk to Adam', endGame1, 'Sneak past him', enterMain);
    }
    
    const useElevtor = function () {
        dialog('./assets/Brandon.jpg', '','You walk to the elevator only to find an exhauted Brandon sitting on the ground, back against the elevator wall. He weakly says "You cant save them, its too late", and passes out. Do you...', 'Go back the stairs', useStairs, 'Go up', enterMain,);
    }
    
    const callUp = function () {
        dialog('./assets/HY-Entryway.JPG', '','You buzz up to HackerYou to see if there is any response. First attempt does nothing. You try again, and you hear a weird static you\'ve never heard before, and the doors slowly open. You walk through and...', 'Take elevator', useElevtor, 'Use stairs', useStairs);
    }

    const scanFob = function () {
        dialog('./assets/HY-Entryway.JPG', '','You scan your trusty key fob and the doors slowly open, the lights are dim, you turn on your phone flashlight. Do you...', 'Use elevator', useElevtor, 'Take stairs', useStairs);
    }
        
    const howToEnter = function () { 
         dialog('./assets/HY-Buzzer.JPG', '', 'You get to the HackerYou building and you already sense something is off. The lights inside are flickering erratically. To enter, you decide to...', 'Use Fob', scanFob, 'Buzz in', callUp);
    }

    const tooBad = function (){
        dialog('./assets/Denzel-Washington.jpg', '', 'Too bad you\'re playing it anyways!', 'Play game', howToEnter, 'Nope, no backsies', howToEnter);
    }

    dialog('', '', 'Play game', 'Start', howToEnter, 'No', tooBad);

    function dialog(image, alt, message, button1text, button1, button2text, button2) {
        const imgElem = `<img src="${image}" alt="${alt}">`;
        $('.images').html(imgElem)
        $('.modal-text').html(message);
        $('.button1').val(button1text);
            if(button1text === 'Play again'){
                $('.button2').hide()
            } else{
                $('.button2').show()
            }   
        $('.button2').val(button2text);
        $('input[type=button]').off('click').on('click', function () {
            const buttonID = $(this).attr('id');

            if(buttonID === 'button1'){
                button1();
            } else {
                button2()
            }
        });
        // use once all photos loaded in and properly labeled in assets folder.
        // image, alt, 
    }

});