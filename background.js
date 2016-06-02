var go = function() {
  
  var url = window.location.href;
  var dontStrings = ["Don't", "Nope", "Sorry", "Nuh-uh", "Can't", "You don't need it", "Yeah... no", "Too bad", "STAHP", "Tough", "Buzz off", "We don't want your money", "Bye, Felicia", "NO!", "Get bent"]
  var rN = function() {
    return Math.ceil(Math.random() * (dontStrings.length - 1));
  }
  
//Amazon code
  
  if (url.indexOf('amazon.com') > -1) {
    try {
      
      //this kills the annoying image hover pics
      var ul = document.getElementsByClassName('a-nostyle a-button-list')[0];
      ul.remove();
      
      //This kills the buttons in the main buy box
      var btns = document.getElementsByClassName('a-button-input');
      for (var i = 0; i < btns.length; i++) {
        var elm = btns[i];
        elm.nextSibling.childNodes[0].data = dontStrings[rN()];
        elm.disabled = true;
      }
      try{
        //this kills the weird span in the 'Review Subscription' button
        document.getElementById('rcx-subscribe-submit-button-announce').childNodes[1].childNodes[0].data = "";
      } catch (e){
        console.log("SubscriptionError is: ", e)
      }
      //this kills the buttons that actually aren't buttons, but links.
      var links = document.getElementsByTagName('a');
      for (var i = 0; i < links.length; i++) {
        var elm = links[i];
        if(elm.id.indexOf('a-autoid') > -1 || elm.id.indexOf('comparison_add') > -1){
          elm.href = "javascript:;";
          elm.innerHTML = dontStrings[rN()];
        }
      }
    } catch(e){
      console.log("Amazon error is: ", e);
    }
  }

//eBay code:
  
  if(url.indexOf('ebay.com') > -1) {
    /*try{*/
      //This disables the button/links in the main action panel
      try{
        var parentActionPanel = document.getElementsByClassName('actPanel')[0];
        parentActionPanel.className = "dont";
        for (var i = 0; i < parentActionPanel.children.length; i++) {
          var childNode = parentActionPanel.children[i];
          var gcNodes = childNode.children;
          for (var j = 0; j < gcNodes.length; j++) {
            var gcNode = gcNodes[j];
            gcNode.remove();
          }
        }
        
        
        //this creates the text where the buy buttons were.
        var para = document.createElement("h2");
        var node = document.createTextNode(dontStrings[rN()]);
        para.appendChild(node);
        parentActionPanel.appendChild(para);
        var cssString = "font-weight: 900; font-size: xx-large; text-align: right; margin-right: 20%";
        para.style.cssText = cssString;
      }catch(e){
        console.log("actionPanelError is: ", e)
      }
      
      try{
        var galleryContainer = document.getElementById('coll_gallery_container');
        galleryContainer.remove();
        var para = document.createElement("div");
        var node = document.createTextNode(dontStrings[rN()]);
        para.appendChild(node);
        var cssString = "font-weight: 900; font-size: xx-large; text-align: center;";
        setTimeout(function(){
          var throbber = document.getElementById('throbber').appendChild(para);
          para.style.cssText = cssString;
        }, 500); 
      }catch(e){
        console.log("sumCartError is: ", e);
      }
      
      try{
        //This disables the inputs in the 'Add to cart and Save!' box.   
        var input = document.getElementById('but_addToCartId');
        input.value = dontStrings[rN()];
        input.title = dontStrings[rN()];
        input.disabled = true;
      } catch (e){
        console.log("but_addToCartId error is: ", e);
      }
    /*} catch (generalError){
      console.log(generalError);
    }*/
  }
  
//Etsy code:
  
  if(url.indexOf('etsy.com') > -1) {
    var etsyClasses = ['btn-transaction', 'btn-transaction small']   
    var etsyKill = function(button){
      button.disabled = true;
      button.style.disabled = true;
    }

    //this kills the primary button on an etsy page.
    try {
      var bigBuyButton = document.getElementsByClassName(etsyClasses[0])[0];
      etsyKill(bigBuyButton);
      bigBuyButton.childNodes[0].data = dontStrings[rN()];
    } catch (e) {
      console.log("bigBuyButton error is: ", e);
    } 
    
    //this kills any smaller, secondary buttons on an etsy page.
    try{
      var littleButtons = document.getElementsByClassName(etsyClasses[1]);
          for (var i = 0; i < littleButtons.length; i++) {
            var lilBtn = littleButtons[i];
            etsyKill(lilBtn);
            lilBtn.value = dontStrings[rN()];
          }
     } catch(e) {
         console.log("lilBtn error is: ", e);
     }
  }
  console.log("Just don't.")
};
  
setTimeout(go, 500);