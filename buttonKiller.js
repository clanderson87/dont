document.addEventListener('DOMContentLoaded', function() {
  
  var amzNames = ['submit.add-to-cart', 'submit.one-click-order.x', 'submit.rcx-subscribe'];//add any Amazon purchase-like button element names to this array
  var ebayIds = ['binBtn_btn', 'isCartBtn_btn', 'shGetRates']; //add any eBay purchase-like button ID names to this array.
  var etsyClasses = ['btn-transaction'] //add any Etsy purchase-like button class names to this array.
  var idArray = amzNames.concat(ebayIds, etsyClasses); 
  //if you add any new site arrays, make sure to add them in the above concat statement. 
  //Also, name them correctly and use the correct document.methodology!
  var idArraySpacer = amzNames.length;
  
  for (var i = 0; i < idArray.length; i++) {
    if (i < amzNames.length) {
      try {
        //for Amazon pages
        document.getElementsByName(idArray[i]).style.disabled = true;
      } catch (error) {
        continue;
      }
      idArraySpacer += ebayIds.length; //note the spacer is += the NEXT arr.length.
    }
    
    /*note to self: this idArraySpacer idea won't work, or at least it allows for false conditions to be met, such as 
    idArraySpacer to 'move the goalposts' on the conditions in the if statement. Perhaps this can be reworked later,
    resetting idArraySpacer, but for now I think i'm going to switch over to using the window.location.href method.*/ 
    
    else if (i >= amzNames.length && i < idArraySpacer) {
      try {
        //for eBay pages
        document.getElementById(idArray[i]).style.disabled = true;
      } catch (error) {
        continue;
      }
      idArraySpacer += etsyClasses.length
    }
    else {
      try {
        //for Etsy pages
        documents.getElementsByClassName(idArray[i]).style.disabled = true;
      } catch (error) {
        continue;
      }
      idArraySpacer = 
    }
  }
  }, false)