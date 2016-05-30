document.addEventListener('DOMContentLoaded', function() {
  
  var idArray = ['submit.add-to-cart', 'submit.one-click-order.x', 'binBtn_btn', 'isCartBtn_btn', 'shGetRates', 'btn-transaction']
  
  for (var i = 0; i < idArray.length; i++) {
    if (i < 2) {
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