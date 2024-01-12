// ottengo la NodeList di tutti gli elementi figlio che hanno un padre con  id "padre"


 // versione mia //  
    
/*padre.addEventListener("click", function (e) {
    padre.style.backgroundColor = "blue";
    });

document.querySelectorAll(".figlio").forEach(function (figlio) {
figlio.addEventListener("click", function (e) {
    e.stopPropagation();
    figlio.style.backgroundColor = "salmon";
    });
});   */





 // versione prof // 
const main = document.getElementById('padre');
main.addEventListener('click', function (e) {
    e.target.style.backgroundColor = 'violet'; // => ha lo stesso effeto di e.stopPropagation();
   
})

document.querySelectorAll(".figlio") = figli;
figli.forEach(div =>  {
div.addEventListener("click", function (e) {
  
    div.target.style.backgroundColor = "salmon";
    });

});

