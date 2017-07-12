window.onload = () => {
  console.log('loaded');
  const jv = new JustVidget('app-core');
};

class JustVidget {
  constructor (id) {
    console.log('class created');
    this.container = document.getElementById(id);
    this.strings = ['grggrg rgrgrg wew', 'tghrth tyjty wef', 'ggrg rgrg', 'rgrg thtyjtyj','gjtj dhgh ere'];
    this.prepareBase();
  }
  
  prepareBase () {
    this.components = {
      image: this.makeElement('img','','image'),
      price: this.makeElement('span','$999','price'),
      content: this.makeElement('div', '', 'content')
    };
    this.components.image.src = 'https://www.google.com.ua/logos/doodles/2017/eiko-ishiokas-79th-birthday-5647813982552064-s.png';
    this.container.appendChild(this.components.image);
    this.container.appendChild(this.components.content);
    this.container.appendChild(this.components.price);
    this.prepareContent();
  }
  
  prepareContent () {
    let ul = this.makeElement('ul');
    this.strings.map( (item, i) => {
      ul.appendChild(this.makeElement('li', this.strings[i]));
    });
    this.components.content.appendChild(ul);
  }
  
  makeElement (tagName, content='', className='') {
    let newElement = document.createElement(tagName);
    newElement.appendChild(document.createTextNode(content));
    newElement.className = className;
    return newElement;
  }
}