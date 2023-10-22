 "use strict";
import $ from 'jquery';
import {one, two, sayHi} from './main';

$(document).ready(function() {
    $('.list-item:first').hover(function() {
        $(this).toggleClass('active');
    });
});

$('.list-item:eq(2)').on('click', function() {
    $('.image:even').fadeToggle('slow');
});

$('.list-item:eq(4)').on('click', function() {
    $('.image:odd').animate({
        opacity: 'toggle',
        height: 'toggle',
    },3000);
});

function* generator() {
    yield 'I';
    yield 'g';
    yield 'o';
    yield 'r';
    yield 'o';
    yield 'k';
  }
  
  const str = generator();
  
  console.log(str.next());
  console.log(str.next());
  console.log(str.next());
  console.log(str.next());
  console.log(str.next());
  console.log(str.next());
  console.log(str.next());

const btn = document.querySelector('#four'),
      elem = document.querySelectorAll('.image');

let imageAnimation;

btn.addEventListener('click', () => {
    console.log('click');
    if (!imageAnimation) {
        imageAnimation = elem[0].animate([
            {transform: 'translateY(0) rotate(0deg)',
             filter: 'opacity(100%)',
            },
            {transform: 'translateY(100px) rotate(180deg)',
             filter: 'opacity(50%)',
            },
            {transform: 'translateY(-100px) rotate(270deg)',
             filter: 'opacity(75%)',
            },
            {transform: 'translateY(0) rotate(360deg)',
             filter: 'opacity(100%)',
            },
        ], {
            duration: 3000,
            iterations: Infinity,
        });
    } else if (imageAnimation.playState === 'paused') {
        imageAnimation.play();
    } else {
        imageAnimation.pause();
    }
});