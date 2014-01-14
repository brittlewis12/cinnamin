function hideNav() {
  _.each(document.querySelectorAll("nav"), function(el){
    el.remove();
  });
  console.log("Nav Hidden!");
}

if (window.hide === true){
  hideNav();
}
