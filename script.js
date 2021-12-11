var $ = (x) => document.querySelector(x);
var $$ = (x) => document.querySelectorAll(x);

var item = $$(".item");
var wrap = $('.wrap');

let count = 0;
Array.from(item).forEach((x) => {
    x.dataset.id = count++;
});
var tictac = 'x';
var resh2 = $('.resh2');
var redLine = $('.redLine');
wrap.addEventListener('click', (e) =>{
    if(e.target.className == 'item'){
        for(var i = 0; i < Array.from(item).length; i++){
            if (item[e.target.dataset.id].textContent.length !== 0) {
            }else{
                item[e.target.dataset.id].textContent = tictac;
                if (tictac == "x") {
                  tictac = "o";
                } else if (tictac == "o") {
                  tictac = "x";
                }
            }
        }
        var itemInd = x => item[x].textContent;
        if(itemInd(1).length != 0){
            if (itemInd(0) === itemInd(1) && itemInd(1) === itemInd(2)) {
                redLine.classList.add('t25');
                redLine.style.opacity = 1;
              if(tictac == 'x'){
                  resh2.textContent = 'Result: O win!';
              }else{
                resh2.textContent = 'Result: X win!';
              }
              tictac = "";
              return;
            }
        }
        if(itemInd(4).length != 0){
            if (itemInd(3) === itemInd(4) && itemInd(4) === itemInd(5)) {
              redLine.classList.add("t50");
              redLine.style.opacity = 1;
              if (tictac == "x") {
                resh2.textContent = 'Result: O win!';
              } else {
                resh2.textContent = 'Result: X win!';
              }
              tictac = "";
              return;
            }
            if (itemInd(6) === itemInd(4) && itemInd(4) === itemInd(2)) {
              redLine.classList.add("t50");
              redLine.style.opacity = 1;
              redLine.classList.add('tr-45');
              if (tictac == "x") {
                resh2.textContent = 'Result: O win!';
              } else {
            resh2.textContent = 'Result: X win!';
              }
              tictac = "";
              return;
            }
            if (itemInd(8) === itemInd(4) && itemInd(4) === itemInd(0)) {
              redLine.classList.add("tr45");
              redLine.classList.add("t50");
              redLine.style.opacity = 1;
              if (tictac == "x") {
                resh2.textContent = 'Result: O win!';
              } else {
                resh2.textContent = 'Result: X win!';
              }
              tictac = "";
              return;
            }
            if (itemInd(1) === itemInd(4) && itemInd(4) === itemInd(7)) {
              redLine.classList.add('tr90');
              redLine.classList.add("t50");
              redLine.style.opacity = 1;
              if (tictac == "x") {
                resh2.textContent = 'Result: O win!';
              } else {
                resh2.textContent = 'Result: X win!';
              }
              tictac = "";
              return;
            }
        }
        if(itemInd(3).length != 0){
            if (itemInd(0) === itemInd(3) && itemInd(3) === itemInd(6)) {
              redLine.classList.add("t50");
              redLine.style.opacity = 1;
              redLine.classList.add("tr90");
              redLine.classList.add('l3');
              if (tictac == "x") {
                resh2.textContent = 'Result: O win!';
              } else {
            resh2.textContent = 'Result: X win!';
              }
              tictac = "";
              return;
            }
        }
        if (itemInd(5).length != 0) {
          if (itemInd(2) === itemInd(5) && itemInd(5) === itemInd(8)) {
            redLine.classList.add("t50");
            redLine.style.opacity = 1;
            redLine.classList.add("tr90");
            redLine.classList.add('r3');
            if (tictac == "x") {
              resh2.textContent = 'Result: O win!';
            } else {
        resh2.textContent = 'Result: X win!';
            }
            tictac = "";
            return;
          }
        }
        if (itemInd(7).length != 0) {
          if (itemInd(6) === itemInd(7) && itemInd(7) === itemInd(8)) {
            redLine.classList.add("t78");
            redLine.style.opacity = 1;
            if (tictac == "x") {
              resh2.textContent = 'Result: O win!';
            } else {
        resh2.textContent = 'Result: X win!';
            }
            tictac = "";
            return;
          }
        }
    }
});
var undo = $('.undo');
undo.addEventListener('click', () => {
    tictac = 'x';
    Array.from(item).forEach((x) => {
        x.textContent = '';
    });
    redLine.style.opacity = 0;
    redLine.classList.remove('tr-45');
    redLine.classList.remove('tr45');
    redLine.classList.remove('tr90');
    redLine.classList.remove('l3')
    redLine.classList.remove('r3');
    redLine.classList.remove('t50');
    redLine.classList.remove('t78');
    redLine.classList.remove("t25");
    undo.classList.toggle('rotate');
    resh2.textContent = 'Result:'
});