var i = 0;
var a = 0;
var b = 0;
var txt_one = "HI, I'M GIULIO."; /* The text */
var txt_two = "Don't mind me, I'm just a guy/astronaut who started a course on how to build a website from scratch and now he's trying to apply what he has learnt."; /* The text */
var txt_three = "By the way, if you are interested in learning something more about me don't be afraid to scroll down!"; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

document.addEventListener('DOMContentLoaded', typeWriter_one);

function typeWriter_one() {
  if (i < txt_one.length) {
    document.getElementById("par_one").innerHTML += txt_one.charAt(i);
    i++;
    setTimeout(typeWriter_one, speed);
  }  else {
    typeWriter_two();
  }
}

function typeWriter_two() {
  if (a < txt_two.length) {
    document.getElementById("par_two").innerHTML += txt_two.charAt(a);
    a++;
    setTimeout(typeWriter_two, speed);
  }  else {
    typeWriter_three();
  }
}

function typeWriter_three() {
  if (b < txt_three.length) {
    document.getElementById("par_three").innerHTML += txt_three.charAt(b);
    b++;
    setTimeout(typeWriter_three, speed);
  }
}
