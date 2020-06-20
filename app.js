let clicked = false;
addEventListener("keydown",(event)=>{
    if(event.keyCode == 13)
    clicked = true;
})

let i = 0;
let all = Array.prototype
               .filter
               .call(document.querySelector(".all").children, ele=> ele.tagName != "BR");
//wenn sich die einleitung ändert, wichtig!!!: index dementsprechend ändern
all[11] = document.getElementById("übersetzung3");
all[12] = document.getElementById("übersetzung1");
all[13] = document.getElementById("übersetzung2");

function ever(){
    requestAnimationFrame(ever);
    
    if(clicked && i < all.length){

    if(all[i].className.startsWith("erstens"))
     all[i].classList.add('horizTranslate');
    
    if(all[i]== document.getElementById("einleitung"))    
    all[i].classList.add("horizp")
        
    if(all[i].classList.contains("überschrift")){
    typeEffect(all[i],70);
    if(i !=0)
    all[i].scrollIntoView();
    scrollBy(0, -37);    
    }        
     
    if(all[i].classList.contains("longtext")){
    all[i].scrollIntoView();
    scrollBy(0, -17);  
    }
        
    if(all[i] == document.getElementById("vergleich") || all[i] == document.getElementById("vergleich2") || all[i].classList.contains("zeig")){
        all[i].scrollIntoView();
    }    
    
    if(all[i] == document.getElementById("compvgl")){
       document.body.style.backgroundColor = "#d6d6c2";
    }    
     
    //das passiert bei allen Elementen.
    all[i].classList.add("fade-in");
    all[i].style.visibility = "visible"; 
    i++;
    }
    
    clicked = false;
}
ever();


function typeEffect(element, speed) {
	var text = element.innerHTML;
	element.innerHTML = "";
	
	var j = 0;
	var timer = setInterval(function() {
    if (j < text.length) {
      element.append(text.charAt(j));
      j++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}