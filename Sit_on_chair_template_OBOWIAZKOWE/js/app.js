document. addEventListener("DOMContentLoaded", function(){
  //Zadanie 1
   var submenu = document.getElementsByClassName("sub_nav");
   var link = document.getElementsByClassName("sub");
    link[0].addEventListener("mouseover",function(){
            submenu[0].style.display = "block";           
   });
  link[0].addEventListener("mouseout",function(){
            submenu[0].style.display = "none";           
   });
  
  //Zadanie 2
   var stripes = document.getElementsByClassName("stripe");
  stripes[0].addEventListener("mouseover",function(){
        stripes[0].style.display = "none";   
    });   
  
   stripes[1].addEventListener("mouseover",function(){
        stripes[1].style.display = "none";   
    });                       
  
// Zadanie 3
var prev = document.getElementsByClassName("prev"); 
var next = document.getElementsByClassName("next"); 
var img = 1;
  
showSlides(img);
  
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("logo2");
  
  if (n > slides.length) {
      img = 1
      } 
  if (n < 1) {
      img = slides.length
      }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  slides[img-1].style.display = "block"; 
} 
   prev[0].addEventListener("click",function(){
            showSlides(img += -1);           
   });
   next[0].addEventListener("click",function(){
        showSlides(img += 1); 
    });
  
  
//Kalkulator kosztów zakupu
  var lists = document.querySelectorAll(".list_panel");
  for (var i = 0; i < lists.length; i++){
  var chairs = lists[0].children;
  
    console.log(chairs[i]);
  var colors = lists[1].children;  
    console.log(colors[i]);
  }  
  
  
  
  
 // Zmiana kolorów boxów z cennikiem 
  
   var box = document.querySelectorAll(".box");
  var join = document.querySelectorAll(".join");
  
    join[0].addEventListener("mouseover",function(){
            box[0].classList.toggle("boxover");
     });
  join[1].addEventListener("mouseover",function(){
            box[1].classList.toggle("boxover");
     });
  join[2].addEventListener("mouseover",function(){
            box[2].classList.toggle("boxover");
     });
  
});