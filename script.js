window.onload = () => {
  console.log('App started');
  document.body.addEventListener('click', showDropdown,true);
};
  
  
function showDropdown (e) {
  const links = {
    'link-1': 'menu-content-1',
    'link-2': 'menu-content-2'
  };
  
  console.log('event',e.target.id);
  
  if (links[e.target.id] !== undefined) {
    let elem = document.getElementById(links[e.target.id]);
    if(elem.classList.contains('menu-content--show')) {
      elem.classList.remove('menu-content--show');
    } else {
      elem.classList.add('menu-content--show');
    }
  }
}