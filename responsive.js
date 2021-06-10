/*HAMBUGER NAV -- ONLY SEEN ON SMALL SCREENS*/
/* Set the width of the side navigation to 280px - opening the nav*/
function openNav() {
  document.getElementById("mySidenav").style.width = "280px";
}

/* Set the width of the side navigation to 0 - closing the nav*/
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

/*POP-UP CART*/
/*When the 'add to cart button' is clicked the cart popup will show*/
function openMiniCart() {
  document.getElementById("myMiniCart").style.width = "50%";
}

/* Set the width of the cart popup to 0 to close it*/
function closeMiniCart() {
  document.getElementById("myMiniCart").style.width = "0";
}

/*FORM VALIDATION*/
function validateForm() {
  var x = document.forms["myForm"]["firstname"].value;
  if (x == "") {
    label("Name must be filled out");
    return false;
  }

  var x = document.forms["myForm"]["lastname"].value;
  if (x == "") {
    label("Last Name must be filled out");
    return false;
  }
  
}

/*ORDER CONFIRMATION*/
/*The confirmation fills the whole page to show that the order was successful*/
function openConfirmation() {
  document.getElementById("myConfirmation").style.width = "100%";
}
