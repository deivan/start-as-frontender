window.onload = () => {
  console.log('loaded');
  const jv = new JustVidget({
    id: 'app-core',
    price: '$10',
    image: '',
    strings: ['efef  efefe', 'efeg thrth wefwefg', 'eergerg gerger ergergr egrgerg']
  }),
  a1 = new JustVidget({
    id: 'app-core-a',
    price: '$50',
    image: '',
    strings: ['edvdv fefd vdvd  efefe', 'th wef wefg', 'eer rg gerger ergergr egrgerg']
  }),
  a2 = new JustVidget({
    id: 'app-core-b',
    price: '$99',
    image: '',
    strings: ['efef  efefe', 'efeg thrth wefwefg', 'eergerg gerger ergergr egrgerg']
  });
};

class JustVidget {
  constructor (config) {
    console.log('class created');
    this.container = document.getElementById(config.id);
    this.strings = config.strings;
    this.price = config.price;
    this.image = config.image;
    this.prepareBase();
  }
  
  prepareBase () {
    this.components = {
      image: this.makeElement('img','','image'),
      price: this.makeElement('span', this.price,'price'),
      content: this.makeElement('div', '', 'content')
    };
    this.components.image.src = this.image;
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