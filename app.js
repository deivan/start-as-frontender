/* 
*   Make a PLP title for product as a widget
*   
*   Use a template for rendering
*/

window.onload = () => {
    console.log('app started.', DATABASE);
    const PLP = document.getElementById('container');
    let template = '';

    DATABASE.forEach(item => {
      let element = new Render('template', item);
      template += element.render();
    });
    PLP.innerHTML = template;
};

class Render {
  constructor(templateId, data) {
    this.template = document.getElementById(templateId).innerText;
    this.data = data;
  }

  render() {
    for(let key in this.data) {
      this.template = this.template.replace(`{{${key}}}`, this.data[key]);
    }
    return this.template;
  }
}