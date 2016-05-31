var go = function() {
  
  /*TODO:
  2) styling. 'Don't' needs a color scheme.
  3) maybe a don't toast notification onclick of disabled button.
  4) good button icon
  5) randomized array of messages similar to "Don't"
  */
  var url = window.location.href;
  var dontStrings = ["Don't", "Nope", "Sorry", "Nuh-uh", "Can't", "You don't need it", "Yeah... no", "Too bad", "STAHP", "Tough", "Buzz off", "We don't want your money", "Bye, Felicia", "NO!", "Get bent"]
  var rN = function() {
    return Math.ceil(Math.random() * (dontStrings.length - 1));
  }
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
          elm.innerHTML = dontStrings[rN()];
        }
      }
    } catch(e){
      console.log(e.message);
    }
  }
 
//eBay code:
  
  if(url.indexOf('ebay.com') > -1) {
    try{
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
        var node = document.createTextNode(dontStrings[rN()]);
        para.appendChild(node);
        parentActionPanel.appendChild(para);
        var cssString = "font-weight: 900; font-size: xx-large; text-align: right; margin-right: 20%";
        para.style.cssText = cssString;
        
     //This disables the inputs in the 'Add to cart and Save!' box.   
     var input = document.getElementById('but_addToCartId');
     input.value = dontStrings[rN()];
     input.title = dontStrings[rN()];
     input.disabled = true;
    } catch (e){
      console.log(e);
    }
   }
  
//Etsy code:
  
  if(url.indexOf('etsy.com') > -1) {
    var etsyClasses = ['btn-transaction'] //add any Etsy purchase-like button class names to this array.
    for (var i = 0; i < etsyClasses.length; i++) {
      try{
        var thing = document.getElementsByClassName(etsyClasses[i])[0];
        thing.disabled = true;
        thing.style.disabled = true;
        thing.childNodes[0].data = dontStrings[rN()];
      }catch (e){
        console.log(e);
        continue;
      }
    }
  }
  
  console.log("Just don't.")
  };
  
   setTimeout(go, 500);
  
