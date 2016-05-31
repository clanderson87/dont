var go = function() {
  
  console.log("background.js is live!")
  
  var amzIds = [];//add any Amazon purchase-like button element names to this array
  var ebayIds = ['binBtn_btn', 'isCartBtn_btn', 'shGetRates', 'cfmBtn_btn', 'but_addToCartId']; //add any eBay purchase-like button ID names to this array.
  var etsyClasses = ['btn-transaction'] //add any Etsy purchase-like button class names to this array.
  var url = window.location.href;
  
  console.log("url is: ", url)
  
//Amazon code
  
  if (url.indexOf('amazon.com') > -1) {
    try {
      //This works on the main buy box
      var btns = document.getElementsByClassName('a-button-input');
      for (var i = 0; i < btns.length; i++) {
        var elm = btns[i];
        elm.disabled = true;
      }
      
      //this works on secondary purchase links ('Compare to similar items', 'Other sellers on Amazon')
      var links = document.getElementsByTagName('a');
      for (var i = 0; i < links.length; i++) {
        var elm = links[i];
        if(elm.id.indexOf('a-autoid') > -1 || elm.id.indexOf('comparison_add') > -1){
          elm.href = "javascript:;";
          elm.innerHTML = "Don't";
        }
      }
    } catch(e){
      console.log(e.message);
    }
  }
 
//eBay code:
  
  if(url.indexOf('ebay.com') > -1) {
    
    //this needs work
    
    //Event listener isn't firing: 
    /*var thing = document.getElementsByClassName('actPanel')[0];
    console.log(thing);
    thing.addEventListener('onmouseover', function() {
      console.log("eventListener is firing");
      thing.display = "none";
    })*/
    
    
    for (var i = 0; i < ebayIds.length; i++) {
      var parentBuyItNow = document.getElementsByClassName('u-flL');
        console.log("parentBuyItNow is: ", parentBuyItNow);
        parentBuyItNow.className = "dont";
        
        var parentAddToCart = document.getElementsByClassName('u-cb');
        console.log("parentAddToCart is: ", parentAddToCart);
        parentAddToCart[12].children[2].className = "dont";
        
      try{
        var thing = document.getElementById(ebayIds[i]);
        //console.log(thing);
        thing.href = "javascript:;";
        thing.id = "dont";
        thing.onclick = "return false";
        thing.style.disabled = "disabled";
        thing.innerText = "Don't";
        thing.className = "dont";
        thing.disabled = "disabled";
        thing.onmouseover = function(){
          console.log("evL is firing");
          //this is firing
          thing.remove();
        }
      }catch (e){
        console.log(e);
        continue;
      }
    }
  }
  
//Etsy code:
  
  if(url.indexOf('etsy.com') > -1) {
    for (var i = 0; i < etsyClasses.length; i++) {
      try{
        console.log("etsyClasses is: ", typeof(etsyClasses[i]), etsyClasses[i]);
        var thing = document.getElementsByClassName(etsyClasses[i]);
        console.log(thing);
        thing[0].disabled = true;
        thing[0].style.disabled = true;
        thing[0].childNodes[0].data = "Don't";
      }catch (e){
        console.log(e);
        continue;
      }
    }
  }
  
  console.log("Just don't.")

  };
  
   setTimeout(go, 1000);
  
