document.addEventListener('DOMContentLoaded', function() {
  
  var amzNames = ['submit.add-to-cart', 'submit.one-click-order.x', 'submit.rcx-subscribe'];//add any Amazon purchase-like button element names to this array
  var ebayIds = ['binBtn_btn', 'isCartBtn_btn', 'shGetRates']; //add any eBay purchase-like button ID names to this array.
  var etsyClasses = ['btn-transaction'] //add any Etsy purchase-like button class names to this array.
  var idArray = amzNames.concat(ebayIds, etsyClasses); 
  //if you add anynew site arrays, make sure to add them in the above concat statement. 
  //Also, name them correctly and use the correct document.methodology!
  
  for (var i = 0; i < idArray.length; i++) {
    if (i < 3) {
      try {
        //for Amazon pages
        document.getElementsByName(idArray[i]).style.disabled = true;
      } catch (error) {
        continue;
      }
    }
    else if (i > 1 && i < 6) {
      try {
        //for eBay pages
        document.getElementById(idArray[i]).style.disabled = true;
      } catch (error) {
        continue;
      }
    }
    else {
      try {
        //for Etsy pages
        documents.getElementsByClassName(idArray[i]).style.disabled = true;
      } catch (error) {
        continue;
      }
    }
  }
  }, false)