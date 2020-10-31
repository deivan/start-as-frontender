window.onload = () => {
    console.log('loaded');
    const 
        a1 = new JustVidget({
            id: 'Pepper',
            productName: 'Pepper',
            image: 'image/Food_C247-128.png',
        }),
        a2 = new JustVidget({
            id: 'Apple',
            productName: 'Apple',
            image: 'image/Food_C240-128.png',
        }),
        a3 = new JustVidget({
            id: 'Cheese',
            productName: 'Cheese',
            image: 'image/Food_C217-128.png',
        }),
        a4 = new JustVidget({
            id: 'Corn',
            productName: 'Corn',
            image: 'image/Food_C245-128.png',
        }),
        a5 = new JustVidget({
            id: 'Mushroom',
            productName: 'Mushroom',
            image: 'image/Food_C239-128.png',
        }),
        a6 = new JustVidget({
            id: 'Garlic',
            productName: 'Garlic',
            image: 'image/Food_C238-128.png',
        }),
        a7 = new JustVidget({
            id: 'Beef',
            productName: 'Beef',
            image: 'image/Food_C225-128.png',
        }),
        a8 = new JustVidget({
            id: 'Fish',
            productName: 'Fish',
            image: 'image/Food_C205-128.png',
        }),
        a9 = new JustVidget({
          id: 'Eggs',
          productName: 'Eggs',
          image: 'image/Food_C203-128.png',
          }),
        a10 = new JustVidget({
            id: 'Coriander',
            productName: 'Coriander',
            image: 'image/Food_C235-128.png',
        });
}
  
  class JustVidget {
    constructor (config) {
      console.log('class created');
      this.container = document.getElementById(config.id);
      this.productName = config.productName;
      this.image = config.image;
      this.prepareBase();
    }
    
    prepareBase () {
      this.components = {
        image: this.makeElement('img','','image'),
        productName: this.makeElement('span', this.productName,'productName')
      };
      this.components.image.src = this.image;
      this.container.appendChild(this.components.image);
      this.container.appendChild(this.components.productName);
    }
    
    makeElement (tagName, content='', className='') {
      let newElement = document.createElement(tagName);
      newElement.appendChild(document.createTextNode(content));
      newElement.className = className;
      return newElement;
    }
  }