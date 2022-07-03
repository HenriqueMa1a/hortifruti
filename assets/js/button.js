let history = document.querySelector('.detailsContainer__box--history');
let awards = document.querySelector('.detailsContainer__box--awards');
let values = document.querySelector('.detailsContainer__box--values');
let button =  document.querySelector('button');
function otherClass(c) {
    if (c == 1) {
       history.setAttribute("class", "details__click");
    } else if (c == 2) {
            awards.setAttribute("class", "details__click");
        } else if (c == 3) {
                values.setAttribute("class", "details__click");
            }
    
}


function remove(c) {
   if (c == 1) {
      history.setAttribute("class","detailsContainer__box");
   } else if (c == 2) {
           awards.setAttribute("class","detailsContainer__box");
       } else if (c == 3) {
               values.setAttribute("class", "detailsContainer__box");
           } 
}


