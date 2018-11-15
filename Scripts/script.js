$(function(){

    const goodEnding = function(){
        dialog('Youve done it hero, you have saved HackerYou, your cohort, and the world, from one of The Internets biggest threats. You are named Pug Lord of HackerYou - the highest of all honours - and gifted Dug, immortal protector of this scared space. Enjoy your spoils, for you will be called upon again..', 'Thank you for playing!', enterBuilding, 'something', enterBuilding);
    }

    const endGame8 = function(){
        dialog('I will awknowledge your efforts, but your demise was preordained. Now go and join your former comrades as another of my personal minions', 'Play again', enterBuilding, 'I hate you so much', enterBuilding);
    }

    const finishtheGame = function(){
        dialog('NOOOOOOOOO IT CANNOT BE, I WILL GET MY REVENGE HUMANNNNNNNNN Javascript screams as the laptop implodes within itself. The lights in the building come back one by one. Everyone under Javascripts control slowly come too their senses and try to grasp what is happening. You leave the back classroom and enter the common area', 'Get showered with praise', goodEnding, 'something', goodEnding);
    }

    const endGame7 = function(){
        dialog('Silly human. Youve wasted my time. For your insolence I will now scatter your mind across the internet, forever forcing you to create -something annoying in Javascript that constantly fails- It is more than you deserve.', 'Play again', enterBuilding, 'Stop my suffering', enterBuilding);
    }

    const questionThree = function(){
        dialog('The Javascript monster shrinks even further, panting, trying to hide its agony. Do not get cocky human, I cannot be bested. CONFRONT YOUR DOOM! QUESTION THREE! What is an Object?', 'Everything is an object', finishtheGame, 'Container with primitive and normal values', endGame8);
    }

    const endGame6 = function(){
        dialog('Hahaha, you insolent fool, truly thought your puny mortal mind could complete my test?? Youre mind is now mine!!', 'Play again', enterBuilding, 'This is trash', enterBuilding);
    }

    const questionTwo = function(){
        dialog('The Javascript monster shrinks in size - Aha, so you are not a complete imbecile, but prepare your mind for question two! How do you declarex a function in Javascript?', 'function myFunction()',questionThree, 'function = myFunction()', endGame7);
    }

    const endGame5 = function(){
        dialog('Okkkkkkkk so youre just gonna doom all your friends and probably the world because you were scared of some test. Cool. Cool cool cool.', 'Play again', enterBuilding, 'I don\'t like questions', enterBuilding);
    }

    const questionOne = function(){
        dialog('You stick your hand out and motion "come on" like some badass Neo-from-the-matrix type and the demon speaks - Question the first: An external Javascript file must contain a script tag?', 'False', questionTwo, 'True', endGame6);
    }

    const endGame4 = function(){
        dialog('Lol, way to be a wuss you wuss. Now the world is doomed anyways, you could have at least tried. Booooooo', 'Play again', enterBuilding, 'This game sucks', enterBuilding);
    }

    const rushIn = function(){
        dialog('You run in yelling LEEEEROYYYYYYY - because you know no references after 2005 - and just as you get through the door the laptop shoots out a beam of light and Javascript appears. He immediately turns to you and says "Mortal, my reign is now, only those who best me in a contest of logic can seal me. Answer these questions three." Do you...', 'Challenge Javascript', questionOne, 'Wuss out',endGame5);
    }

    const endGame3 = function(){
        dialog('You decide to check the bathrooms, not sure if it is because of paranoia or adreneline. You search around the left bathroom and find nothing.  The right bathroom has the same result. You swing open the door only to come face to face with Scott and Mikey. Before you could even move again, Mikey pulls you out of the bathroom and turns you towards the flashing laptop. Now..youre of them...', 'Play again', enterBuilding, 'I\'m over this', enterBuilding)
    }

    const backClassroom = function(){
       dialog('As you come up to the end of the hall, you hear faint chanting. You quietly turn the corner only to see Threes a Curse around a glowing laptop. They are summoning Lore Internets second-in-command, Javascript. What do you do?', 'Hero up', rushIn, 'Eff this and dip', endGame4);
    }

    
    const walkDownHall = function(){
        dialog('A great sense of dread fills your body. Instinctivly, you ignore your classmates and b-line for the main classroom only to find it locked. You run down the hall and at the fork do you...', 'Check the back classroom', backClassroom, 'Check the washrooms', endGame3);
    }
    
    const endGame2 = function(){
        dialog('Every step you take towards your friends they take one step closer to you. You stop and scream at them to wake up but it falls on deaf ears, continues towards you. You try to run but an arm reaches out and grabs your shirt. You are surrounded by your friends and forced to look into a flashing laptop, mind lost forever...', 'Play Again', enterBuilding, 'Boooooring', enterBuilding);
        }

    const commonArea = function(){
        dialog('You shine your phone flashlight into the common area only to find all of Cohort20 standing around the tables, laptops flashing. They all turn towards you and stare. Do you...', 'Back away and sneak off', walkDownHall, 'Head over to everyone', endGame2);
    }  

    const enterMain = function(){
        dialog('You put on a brave face, and keep going up. As you ascend, the lights blow out suddenly. When you get to the third floor, the doors open to a pitch black room, you exit slowly and...', 'Go to the common area', commonArea, 'Check the main classroom', walkDownHall);
    }
    
    const endGame1 = function(){
        dialog('Ummmmmm maybe dont run towards people not saying anything acting super weird? Like, Duh. You did this to yourself', 'Start over',enterBuilding, 'This is stupid', enterBuilding);
    }

     const useStairs = function(){
        dialog('You slowly start going up the stairs, when you turn the corner to the second floor you see Adam standing at the top, staring down. You call out "Whats going on??" and there is no response. Do you...', 'Sneak past him', enterMain, 'Talk to Adam', endGame1);
    }
    
    const useElevtor = function () {
        dialog('You walk to the elevator only to find an exhauted Brandon sitting on the ground, back against the elevator wall. He weakly says "You cant save them, its too late", and passes out. Do you...', 'Go up', enterMain, 'Go back to the stairs', useStairs);
    }
    
    const callUp = function () {
        dialog('You buzz up to HackerYou to see if there is any response. First attempt does nothing. You try again, and you hear a weird static you\'ve never heard before, and the doors slowly open. You walk through and...', 'Take elevator', useElevtor, 'Use the stairs', useStairs);
    }

    const scanFob = function () {
        dialog('You scan your trusty key fob and the doors slowly open, the lights are dim, you turn on your phone flashlight. Do you...', 'Use elevator', useElevtor, 'Take the stairs', useStairs);
    }
        
    const howToEnter = function () { 
         dialog('You get to the HackerYou building and you already sense something is off.The lights inside are flickering erratically. To enter, you decide to...', 'Use Fob', scanFob, 'Buzz in', callUp);
    }
    
    const enterBuilding = function () { 
        dialog('You havent heard from your Cohort project partners for days. Concerned, you head over to HackerYou to see if you can get some answers', 'Head over', howToEnter, 'I don\'t feel like it', howToEnter);
    }

    dialog('Play game', 'Start', enterBuilding, 'No', enterBuilding);

    function dialog(message, button1text, button1, button2text, button2) {
        // const imgElem = `<img src="${image}" alt="${alt}">`;
        // $('.images').html(imgElem)
        $('.title').html(message);
        $('.button1').val(button1text);
        $('.button2').val(button2text);
        $('input[type=button]').off('click').on('click', function () {
            const buttonID = $(this).attr('id');

            if(buttonID === 'button1'){
                console.log('hello')
                button1();
            } else {
                button2()
            }
        });
        // use once all photos loaded in and properly labeled in assets folder.
        // image, alt, 

        // $('.button2').on('click', function () {
        //     button2();
        //     $('.button2').off('click');  
        //     console.log("button 2 clicked")

        // });
    }


//turn off event handlet

});