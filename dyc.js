
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        handleclick(this.innerHTML);
        buttonAnimation(this.innerHTML);

        /* 2nd METHOD :- yahan pe (this.dataset.key) ka bhi use kr skte the bas HTML button tag mein 
        ek aur attribute add krna hoga that will be like this :- data-key="p" and so 
        to all the buttons.

        3rd METHOD :- give a parameter inside function(event) and the just call the 
        handleclick function like this :- handleclick(event.target.dataset.key);

        4th METHOD :- handleclick(this.classList[0]); */

    });
    document.addEventListener("keypress", function (event) {
        handleclick(event.key);
        buttonAnimation(event.key);
    });
}

function handleclick(key) {
    /*var index = Array.from(document.querySelectorAll(".drum")).indexOf(this);
        var audio = new Audio("audio"+(index+1)+".mp3");
        audio.play();*/

    switch (key) {
        case "p":
            var p = new Audio("audio1.mp3");
            p.play();
            break;
        case "i":
            var i = new Audio("audio2.mp3");
            i.play();
            break;
        case "m":
            var m = new Audio("audio3.mp3");
            m.play();
            break;
        case "o":
            var o = new Audio("audio4.mp3");
            o.play();
            break;
        case "s":
            var s = new Audio("audio5.mp3");
            s.play();
            break;
        case "a":
            var a = new Audio("audio6.mp3");
            a.play();
            break;
        case "n":
            var n = new Audio("audio7.mp3");
            n.play();
            break;

        default:
            alert("wrong keypressed");
            break;
    }

}
function buttonAnimation(key){
    document.querySelector("."+key).classList.add("pressed");
    setTimeout(function (){
        document.querySelector("."+key).classList.remove("pressed");
    } , 100);
}
