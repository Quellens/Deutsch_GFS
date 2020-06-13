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
all[8] = document.getElementById("übersetzung3");
all[9] = document.getElementById("übersetzung1");
all[10] = document.getElementById("übersetzung2");

//https://widmannschule.de/index.php/service-oben-1/docman-download-oben-1/neueste-dateien1/129-visualisieren-wichtiger-denn-je/file.html

function ever(){
    requestAnimationFrame(ever);
    
    if(clicked && i < all.length){

    if(all[i] ==  document.getElementById("erstens1") || all[i] ==  document.getElementById("erstens2") || all[i] ==  document.getElementById("erstens3"))
     all[i].classList.add('horizTranslate');
    
    if(all[i].classList.contains("überschrift")){
    typeEffect(all[i],70);
    if(i !=0)
    all[i].scrollIntoView();
    scrollBy(0, -37);    
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
	
	var i = 0;
	var timer = setInterval(function() {
    if (i < text.length) {
      element.append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}