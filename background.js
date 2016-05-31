var go = function() {
  
  /*TODO:
  2) styling. 'Don't' needs a color scheme.
  3) maybe a don't toast notification onclick of disabled button.
  4) good button icon
  5) randomized array of messages similar to "Don't"
  */
  
  
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
      
      //This works on secondary purchase links ('Compare to similar items', 'Other sellers on Amazon')
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
    
    //This disables the button/links in the main action panel
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
        
        var para = document.createElement("h2");
        var node = document.createTextNode("Don't.");
        para.appendChild(node);
        parentActionPanel.appendChild(para);
        var cssString = "font-weight: 900; font-size: xx-large; text-align: right; margin-right: 20%";
        para.style.cssText = cssString;
        
     //This disables the inputs in the 'Add to cart and Save!' box.   
     var input = document.getElementById('but_addToCartId');
     input.value = "Don't";
     input.title = "Don't";
     input.disabled = true;
   }
  
//Etsy code:
  
  if(url.indexOf('etsy.com') > -1) {
    for (var i = 0; i < etsyClasses.length; i++) {
      try{
        console.log("etsyClasses is: ", typeof(etsyClasses[i]), etsyClasses[i]);
        var thing = document.getElementsByClassName(etsyClasses[i])[0];
        console.log(thing);
        thing.disabled = true;
        thing.style.disabled = true;
        thing.childNodes[0].data = "Don't";
      }catch (e){
        console.log(e);
        continue;
      }
    }
  }
  
  console.log("Just don't.")
  };
  
   setTimeout(go, 500);
  
