function $(sel) { return document.querySelector(sel); }

var idassommarvisa = $('#idassommarvisa');
var SVGDocument = null;
var SVGRoot = null;
var pauseButton = null;
var playButton = null;
var startState = 0;
var isPaused = false;

var resume = 0;
var notState = 1;

function loadfunc() {
    document.getElementById('pausButton').style.display = 'none';
}


function Pause() {
    idassommarvisa.pause();
    isPaused = true;
    document.getElementById('playButton').style.display = 'block';
    document.getElementById('pausButton').style.display = 'none';
}

function Play() {
    if (startState == 0) {
        startState = 1;
        resumePlaying();

    } else {
        resumePlaying();
        isPaused = false;
    }

    document.getElementById('playButton').style.display = 'none';
    document.getElementById('pausButton').style.display = 'block';

}

function Stop() {
    idassommarvisa.pause();
    idassommarvisa.currentTime = 0;
    document.getElementById('playButton').style.display = 'block';
    document.getElementById('pausButton').style.display = 'none';
    document.getElementById('not1').style.fill = '#000000';
    document.getElementById('not2').style.fill = '#000000';
    document.getElementById('not3').style.fill = '#000000';
    document.getElementById('not4').style.fill = '#000000';
    document.getElementById('not5').style.fill = '#000000';
    document.getElementById('not6').style.fill = '#000000';
    document.getElementById('not7').style.fill = '#000000';
    document.getElementById('not8').style.fill = '#000000';
    document.getElementById('not9').style.fill = '#000000';
    document.getElementById('not10').style.fill = '#000000';
    document.getElementById('not11').style.fill = '#000000';
    document.getElementById('not12').style.fill = '#000000';
    document.getElementById('not13').style.fill = '#000000';
    document.getElementById('not14').style.fill = '#000000';

    document.getElementById('ord1').style.fill = '#000000';
    document.getElementById('ord2').style.fill = '#000000';
    document.getElementById('ord3').style.fill = '#000000';
    document.getElementById('ord4').style.fill = '#000000';
    document.getElementById('ord5').style.fill = '#000000';
    document.getElementById('ord6').style.fill = '#000000';
    document.getElementById('ord7').style.fill = '#000000';
    document.getElementById('ord8').style.fill = '#000000';
    document.getElementById('ord9').style.fill = '#000000';
    document.getElementById('ord10').style.fill = '#000000';
    document.getElementById('ord11').style.fill = '#000000';
    document.getElementById('ord12').style.fill = '#000000';
    document.getElementById('ord13').style.fill = '#000000';
    document.getElementById('ord14').style.fill = '#000000';
    document.getElementById('ord15').style.fill = '#000000';
    document.getElementById('ord16').style.fill = '#000000';
    document.getElementById('ord17').style.fill = '#000000';
    document.getElementById('ord18').style.fill = '#000000';

    startState = 0;
    notState = 1;
    isPaused = true;
}



function resumePlaying() {

    if (notState == 1) {
        idassommarvisa.currentTime = 0;
        setTimeout(function () {
            playNot1();
            playOrd1();
        }, 100);
    } else if (notState == 2) {
        idassommarvisa.currentTime = 0.59;
        setTimeout(function () {
            playNot2();
            playOrd2();
        }, 100);
    } else if (notState == 3) {
        idassommarvisa.currentTime = 1.19;
        setTimeout(function () {
            playNot3();
            playOrd3();
        }, 100);
    } else if (notState == 4) {
        idassommarvisa.currentTime = 1.79;
        setTimeout(function () {
            playNot4();
            playOrd5();
        }, 100);
    } else if (notState == 5) {
        idassommarvisa.currentTime = 2.39;
        setTimeout(function () {
            playNot5();
            playOrd6();
        }, 100);
    } else if (notState == 6) {
        idassommarvisa.currentTime = 2.98;
        setTimeout(function () {
            playNot6();
            playOrd8();
        }, 100);
    } else if (notState == 7) {
        idassommarvisa.currentTime = 3.58;
        setTimeout(function () {
            playNot7();
            playOrd9();
        }, 100);
    } else if (notState == 8) {
        idassommarvisa.currentTime = 4.19;
        setTimeout(function () {
            playNot8();
            playOrd10();
        }, 100);
    } else if (notState == 9) {
        idassommarvisa.currentTime = 5.09;
        setTimeout(function () {
            playNot9();
            playOrd11();
        }, 100);
    } else if (notState == 10) {
        idassommarvisa.currentTime = 5.39;
        setTimeout(function () {
            playNot10();
            playOrd12();
        }, 100);
    } else if (notState == 11) {
        idassommarvisa.currentTime = 5.99;
        setTimeout(function () {
            playNot11();
            playOrd13();
        }, 100);
    } else if (notState == 12) {
        idassommarvisa.currentTime = 6.59;
        setTimeout(function () {
            playNot12();
            playOrd15();
        }, 100);
    } else if (notState == 13) {
        idassommarvisa.currentTime = 7.19;
        setTimeout(function () {
            playNot13();
            playOrd16();
        }, 100);
    } else if (notState == 14) {
        idassommarvisa.currentTime = 7.79;
        setTimeout(function () {
            playNot14();
            playOrd18();
        }, 100);
    }

    idassommarvisa.play();

}






function playNot1() {
    if (isPaused == false) {
        document.getElementById('not1').style.fill = '#cd4a04';
        setTimeout(function () { 
            if (isPaused == false)
            document.getElementById('not1').style.fill = '#000000' 
        }, 600);
        setTimeout(function () { playNot2() }, 600);
        notState = 1;
    }
}

function playNot2() {
    if (isPaused == false) {
        document.getElementById('not2').style.fill = '#cd4a04';
        setTimeout(function () { 
            if (isPaused == false)
            document.getElementById('not2').style.fill = '#000000' }, 600);
        setTimeout(function () { playNot3() }, 600);
        notState = 2;
    }
}

function playNot3() {
    if (isPaused == false) {
        document.getElementById('not3').style.fill = '#cd4a04';
        setTimeout(function () { 
            if (isPaused == false)
            document.getElementById('not3').style.fill = '#000000' }, 600);
        setTimeout(function () { playNot4() }, 600);
        notState = 3;
    }
}

function playNot4() {
    if (isPaused == false) {
        document.getElementById('not4').style.fill = '#cd4a04';
        setTimeout(function () { 
            if (isPaused == false)
            document.getElementById('not4').style.fill = '#000000' }, 600);
        setTimeout(function () { playNot5() }, 600);
        notState = 4;
    }
}

function playNot5() {
    if (isPaused == false) {
        document.getElementById('not5').style.fill = '#cd4a04';
        setTimeout(function () { 
            if (isPaused == false)
            document.getElementById('not5').style.fill = '#000000' }, 600);
        setTimeout(function () { playNot6() }, 600);
        notState = 5;
    }
}

function playNot6() {
    if (isPaused == false) {
        document.getElementById('not6').style.fill = '#cd4a04';
        setTimeout(function () { 
            if (isPaused == false)
            document.getElementById('not6').style.fill = '#000000' }, 600);
        setTimeout(function () { playNot7() }, 600);
        notState = 6;
    }
}

function playNot7() {
    if (isPaused == false) {
        document.getElementById('not7').style.fill = '#cd4a04';
        setTimeout(function () { 
            if (isPaused == false)
            document.getElementById('not7').style.fill = '#000000' }, 600);
        setTimeout(function () { playNot8() }, 600);
        notState = 7;
    }
}

function playNot8() {
    if (isPaused == false) {
        document.getElementById('not8').style.fill = '#cd4a04';
        setTimeout(function () { 
            if (isPaused == false)
            document.getElementById('not8').style.fill = '#000000' }, 700);
        setTimeout(function () { playNot9() }, 700);
        notState = 8;
    }
}

function playNot9() {
    if (isPaused == false) {
        document.getElementById('not9').style.fill = '#cd4a04';
        setTimeout(function () { 
            if (isPaused == false)
            document.getElementById('not9').style.fill = '#000000' }, 450);
        setTimeout(function () { playNot10() }, 450);
        notState = 9;
    }
}

function playNot10() {
    if (isPaused == false) {
        document.getElementById('not10').style.fill = '#cd4a04';
        setTimeout(function () { 
            if (isPaused == false)
            document.getElementById('not10').style.fill = '#000000' }, 600);
        setTimeout(function () { playNot11() }, 600);
        notState = 10;
    }
}

function playNot11() {
    if (isPaused == false) {
        document.getElementById('not11').style.fill = '#cd4a04';
        setTimeout(function () { 
            if (isPaused == false)
            document.getElementById('not11').style.fill = '#000000' }, 600);
        setTimeout(function () { playNot12() }, 600);
        notState = 11;
    }
}

function playNot12() {
    if (isPaused == false) {
        document.getElementById('not12').style.fill = '#cd4a04';
        setTimeout(function () { 
            if (isPaused == false)
            document.getElementById('not12').style.fill = '#000000' }, 600);
        setTimeout(function () { playNot13() }, 600);
        notState = 12;
    }
}

function playNot13() {
    if (isPaused == false) {
        document.getElementById('not13').style.fill = '#cd4a04';
        setTimeout(function () { 
            if (isPaused == false)
            document.getElementById('not13').style.fill = '#000000' }, 600);
        setTimeout(function () { playNot14() }, 600);
        notState = 13;
    }
}

function playNot14() {
    if (isPaused == false) {
        document.getElementById('not14').style.fill = '#cd4a04';
        setTimeout(function () { 
            if (isPaused == false)
            document.getElementById('not14').style.fill = '#000000' }, 700);
        setTimeout(function () { finishedPlaying() }, 300);
        notState = 14;
    }
}

function finishedPlaying() {
    startState = 0;
    notState = 1;
    isPaused = false;
    document.getElementById('playButton').style.display = 'block';
    document.getElementById('pausButton').style.display = 'none';
}






function playOrd1() {
    if (isPaused == false) {
        document.getElementById('ord1').style.fill = '#cd4a04';
        setTimeout(function () { 
            if (isPaused == false)
            document.getElementById('ord1').style.fill = '#000000' }, 600);
        setTimeout(function () { playOrd2() }, 600);
    }
}

function playOrd2() {
    if (isPaused == false) {
        document.getElementById('ord2').style.fill = '#cd4a04';
        setTimeout(function () { 
            if (isPaused == false)
            document.getElementById('ord2').style.fill = '#000000' }, 600);
        setTimeout(function () { playOrd3() }, 600);
    }
}

function playOrd3() {
    if (isPaused == false) {
        document.getElementById('ord3').style.fill = '#cd4a04';
        setTimeout(function () { 
            if (isPaused == false)
            document.getElementById('ord3').style.fill = '#000000' }, 300);
        setTimeout(function () { playOrd4() }, 300);
    }
}

function playOrd4() {
    if (isPaused == false) {
        document.getElementById('ord4').style.fill = '#cd4a04';
        setTimeout(function () { 
            document.getElementById('ord4').style.fill = '#000000';
            if (isPaused  == true)
            document.getElementById('ord3').style.fill = '#cd4a04'; }, 300);     
        setTimeout(function () { playOrd5() }, 300);
    }
}

function playOrd5() {
    if (isPaused == false) {
        document.getElementById('ord5').style.fill = '#cd4a04';
        setTimeout(function () { 
            if (isPaused == false)
            document.getElementById('ord5').style.fill = '#000000' }, 600);
        setTimeout(function () { playOrd6() }, 600);
    }
}

function playOrd6() {
    if (isPaused == false) {
        document.getElementById('ord6').style.fill = '#cd4a04';
        setTimeout(function () { 
            if (isPaused == false)
            document.getElementById('ord6').style.fill = '#000000' }, 300);
        setTimeout(function () { playOrd7() }, 300);
    }
}

function playOrd7() {
    if (isPaused == false) {
        document.getElementById('ord7').style.fill = '#cd4a04';
        setTimeout(function () { 
            document.getElementById('ord7').style.fill = '#000000';
            if (isPaused  == true)
            document.getElementById('ord6').style.fill = '#cd4a04'; }, 300); 
        setTimeout(function () { playOrd8() }, 300);
    }
}

function playOrd8() {
    if (isPaused == false) {
        document.getElementById('ord8').style.fill = '#cd4a04';
        setTimeout(function () { 
            if (isPaused == false)
            document.getElementById('ord8').style.fill = '#000000' }, 600);
        setTimeout(function () { playOrd9() }, 600);
    }
}

function playOrd9() {
    if (isPaused == false) {
        document.getElementById('ord9').style.fill = '#cd4a04';
        setTimeout(function () { 
            if (isPaused == false)
            document.getElementById('ord9').style.fill = '#000000' }, 600);
        setTimeout(function () { playOrd10() }, 600);
    }
}

function playOrd10() {
    if (isPaused == false) {
        document.getElementById('ord10').style.fill = '#cd4a04';
        setTimeout(function () { 
            if (isPaused == false)
            document.getElementById('ord10').style.fill = '#000000' }, 700);
        setTimeout(function () { playOrd11() }, 700);
    }
}

function playOrd11() {
    if (isPaused == false) {
        document.getElementById('ord11').style.fill = '#cd4a04';
        setTimeout(function () { 
            if (isPaused == false)
            document.getElementById('ord11').style.fill = '#000000' }, 450);
        setTimeout(function () { playOrd12() }, 450);
    }
}

function playOrd12() {
    if (isPaused == false) {
        document.getElementById('ord12').style.fill = '#cd4a04';
        setTimeout(function () { 
            if (isPaused == false)
            document.getElementById('ord12').style.fill = '#000000' }, 600);
        setTimeout(function () { playOrd13() }, 600);
    }
}

function playOrd13() {
    if (isPaused == false) {
        document.getElementById('ord13').style.fill = '#cd4a04';
        setTimeout(function () { 
            if (isPaused == false)
            document.getElementById('ord13').style.fill = '#000000' }, 300);
        setTimeout(function () { playOrd14() }, 300);
    }
}

function playOrd14() {
    if (isPaused == false) {
        document.getElementById('ord14').style.fill = '#cd4a04';
        setTimeout(function () { 
            document.getElementById('ord14').style.fill = '#000000';
            if (isPaused  == true)
            document.getElementById('ord13').style.fill = '#cd4a04'; }, 300); 
        setTimeout(function () { playOrd15() }, 300);
    }
}

function playOrd15() {
    if (isPaused == false) {
        document.getElementById('ord15').style.fill = '#cd4a04';
        setTimeout(function () { 
            if (isPaused == false)
            document.getElementById('ord15').style.fill = '#000000' }, 600);
        setTimeout(function () { playOrd16() }, 600);
    }
}

function playOrd16() {
    if (isPaused == false) {
        document.getElementById('ord16').style.fill = '#cd4a04';
        setTimeout(function () { 
            if (isPaused == false)
            document.getElementById('ord16').style.fill = '#000000' }, 300);
        setTimeout(function () { playOrd17() }, 300);
    }
}

function playOrd17() {
    if (isPaused == false) {
        document.getElementById('ord17').style.fill = '#cd4a04';
        setTimeout(function () { 
            document.getElementById('ord17').style.fill = '#000000';
            if (isPaused  == true)
            document.getElementById('ord16').style.fill = '#cd4a04'; }, 300); 
        setTimeout(function () { playOrd18() }, 300);
    }
}

function playOrd18() {
    if (isPaused == false) {
        document.getElementById('ord18').style.fill = '#cd4a04';
        setTimeout(function () { 
            if (isPaused == false)
            document.getElementById('ord18').style.fill = '#000000' }, 700);
    }
}