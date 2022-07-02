let button1 = document.querySelector('.detailsContainer__box--history');
let button2 = document.querySelector('.detailsContainer__box--awards');
let button3 = document.querySelector('.detailsContainer__box--values');
let button =  document.querySelector('button');
function otherClass(c) {

    if (c == 1) {
       button1.setAttribute("class", "details__click");
    } else if (c == 2) {
            button2.setAttribute("class", "details__click");
        } else if (c == 3) {
                button3.setAttribute("class", "details__click");
            }
    
}


function remove(c) {
   if (c == 1) {
      button1.setAttribute("class","detailsContainer__box");
   } else if (c == 2) {
           button2.setAttribute("class","detailsContainer__box");
       } else if (c == 3) {
               button3.setAttribute("class", "detailsContainer__box");
           } 
}


