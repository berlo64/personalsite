var i = 0;
var a = 0;
var b = 0;
var txt_one = 'Hi, my name is Giulio, and I am very pleased to welcome you to my personal site.'; /* The text */
var txt_two = 'As you will discover, everything around here is about me. Now, I know what you are thinking, "Who the hell is this guy? And what has he done in his life worth of my time?"'; /* The text */
var txt_three = 'The answer my friend is blowing in the wind, or maybe is only one click from you, who knows...'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

document.addEventListener('DOMContentLoaded', typeWriter_one);

function typeWriter_one() {
  if (i < txt_one.length) {
    document.getElementById("par_one").innerHTML += txt_one.charAt(i);
    i++;
    setTimeout(typeWriter_one, speed);
  } else {
    typeWriter_two();
  }
}

function typeWriter_two() {
  if (a < txt_two.length) {
    document.getElementById("par_two").innerHTML += txt_two.charAt(a);
    a++;
    setTimeout(typeWriter_two, speed);
  } else {
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
