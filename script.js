window.onload = function () {
  console.log('App started');
  document.getElementById('link-1').addEventListener('click', showDropdown,true);
  document.getElementById('link-2').addEventListener('click', showDropdown,true);
};
  
  
function showDropdown (e) {
  var m1 = document.getElementById('menu-content-1');
  var m2 = document.getElementById('menu-content-2');
  console.log('event',e.target.id);
  if (e.target.id === 'link-1') {
    if(m1.classList.contains('menu-content--show')) {
      m1.classList.remove('menu-content--show');
    } else {
      m1.classList.add('menu-content--show');
    }
  }
}