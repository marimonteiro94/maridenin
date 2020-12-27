// This is a general function that could take functionality from many places.
// All it does is toggle a class on or off, like so:
// 01: Does "this" target HTML element have "that" class?
// 02: If it does, remove that class.
// 03: If it doesn't, add that class.
// 04: End function.
function toggleClass(targetElement, addedClass) {
  if (targetElement.classList.contains(addedClass)) {
    targetElement.classList.remove(addedClass);
  }
  else {
    targetElement.classList.add(addedClass);
  }
};

// This is the function we add to our menu button to enable its click functionality
document.querySelector('.menu-btn-fly').addEventListener('click', function() {

  // This toggleClass is for added 'menu--open' to our menu HTML element. This will open the menu.
  toggleClass(document.querySelector('.menu-fly'), 'menu-fly--open');

  // This toggleClass is for adding '.menu-btn--on' to our menu button HTML element. This creates the animation of the hamburger/hotdog icon to the close icon.
  toggleClass(document.querySelector('.menu-btn-fly'), 'menu-btn-fly--on');
});




//chamando a função ao rolar a tela.
window.onscroll = function() {
  scrollFunc();
};

//função para exibir o botão apenas depois de rolar a tela
function scrollFunc() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("menu-fly").style.display = "block";
  } else {
    document.getElementById("menu-fly").style.display = "none";
  }
}

function backtoTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
