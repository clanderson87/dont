var go = function() {
  
  console.log("background.js is live!!")
  
  var amzIds = ['add-to-cart-button', 'oneClickBuyButton', 'submit.rcx-subscribe'];//add any Amazon purchase-like button element names to this array
  var ebayIds = ['binBtn_btn', 'isCartBtn_btn', 'shGetRates', 'cfmBtn_btn', 'but_addToCartId']; //add any eBay purchase-like button ID names to this array.
  var etsyClasses = ['btn-transaction'] //add any Etsy purchase-like button class names to this array.
  var url = window.location.href;
  
  console.log("url is: ", url)
  
  if (url.indexOf('amazon.com') > -1) {
    
    //This works on the buy box
    var btns = document.getElementsByClassName('a-button-input');
    console.log(btns);
    for (var i = 0; i < btns.length; i++) {
      var element = btns[i];
      element.disabled = true;
    }
    
    /*
    var linkParents = document.getElementsByClassName('a-button-inner');
    console.log(linkParents);
        
    var linkChildren = document.getElementsByClassName('a-button-text');
    console.log("linkChildren is: ", linkChildren);
    */
    
    
    /*for (var i = 0; i < amzIds.length; i++) {
      if (i = 3) {
        try {
          document.getElementsByName(amzIds[i]).style.disabled = true;
        } catch (error) {
          console.log(error);
          continue;
        }
      }
      try{
        document.getElementById(amzIds[i]).style.disabled = true;
      }catch (e){
        console.log(e);
        continue;
      }
    }*/
  }
 
//eBay code:
  
  if(url.indexOf('ebay.com') > -1) {
    
    
    
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
  
   setTimeout(go, 3500);
  
