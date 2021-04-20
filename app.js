function createParagraph () {
    var wordOne = document.getElementById("adj1").value;
    var wordTwo = document.getElementById("adj2").value;
    var wordThree = document.getElementById("noun1").value;
    var wordFour = document.getElementById("noun2").value;
    var wordFive = document.getElementById("nouns1").value;
    var wordSix = document.getElementById("game").value;
    var wordSeven = document.getElementById("nouns2").value;
    var wordEight = document.getElementById("verb1").value;
    var wordNine = document.getElementById("verb2").value;
    var wordTen = document.getElementById("nouns3").value;
    var wordEleven = document.getElementById("verb3").value;
    var wordTwelve = document.getElementById("noun3").value;
    var wordThirteen = document.getElementById("plant").value;
    var wordFourteen = document.getElementById("body").value;
    var wordFifteen = document.getElementById("place").value;
    var wordSixteen = document.getElementById("verb4").value;
    var wordSeventeen = document.getElementById("adj3").value;
    var wordEighteen = document.getElementById("num").value;
    var wordNineteen = document.getElementById("nouns4").value;


    var paragraph = '<p> A vacation is when you take a trip to some ' + '<span style="color:#F686BD; font-weight: bolder;">' + wordOne + '</span>' + ' place with your ' + '<span style="color:#F686BD; font-weight: bolder;">' + wordTwo + '</span>' + ' family. Usually you go to some place that is near a/an ' + '<span style="color:#F686BD; font-weight: bolder;">' + wordThree + '</span>' + ' or up a/an ' + '<span style="color:#F686BD; font-weight: bolder;">' + wordFour + '</span>' + '. A good vacation place is one where you can ride ' + '<span style="color:#F686BD; font-weight: bolder;">' + wordFive + '</span>' + ' or play ' + '<span style="color:#F686BD; font-weight: bolder;">' + wordSix + '</span>' + ' or go hunting for ' + '<span style="color:#F686BD; font-weight: bolder;">' + wordSeven + '</span>' + '. I like to spend my time ' + '<span style="color:#F686BD; font-weight: bolder;">' + wordEight + '</span>' + ' or ' + '<span style="color:#F686BD; font-weight: bolder;">' + wordNine + '</span>' + '. When parents go on a vacation, they spend their time eating three ' + '<span style="color:#F686BD; font-weight: bolder;">' + wordTen + '</span>' + ' a day, and fathers play golf, and mothers sit around ' + '<span style="color:#F686BD; font-weight: bolder;">' + wordEleven + '</span>' + '. Last summer, my little brother fell in a/an ' + '<span style="color:#F686BD; font-weight: bolder;">' + wordTwelve + '</span>' + 'and got poison ' + '<span style="color:#F686BD; font-weight: bolder;">' + wordThirteen + '</span>' + ' all over his ' + '<span style="color:#F686BD; font-weight: bolder;">' + wordFourteen + '</span>' + '. My family is going to go to (the) ' + '<span style="color:#F686BD; font-weight: bolder;">' + wordFifteen + '</span>' + ', and I will practice ' + '<span style="color:#F686BD; font-weight: bolder;">' + wordSixteen + '</span>' + '. Parents need vacations more than kids because parents are always very ' + '<span style="color:#F686BD; font-weight: bolder;">' + wordSeventeen + '</span>' + ' and because they have to work ' + '<span style="color:#F686BD; font-weight: bolder;">' + wordEighteen + '</span>' + ' hours every day all year making enough ' + '<span style="color:#F686BD; font-weight: bolder;">' + wordNineteen + '</span>' + ' to pay for the vacation.</p>';

    document.getElementById('answer').innerHTML = paragraph;

}