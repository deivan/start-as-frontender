'use strict';

$(document).ready( () => {
  console.log('jQuery is ready for manipulations with DOM', (new Date()).getTime());
  //Первый вариант
   /* $('div.example5 button').on('click',(e)=>{
      if (e.target.id === 'example1') 
        $('div.example[data-type="e1"] span').css({color:'red', fontSize:'16px',fontWeight: '900'});
      if (e.target.id === 'example2')
        $('div.example.example2 p.special').css({color:'blue', fontSize:'18px',border: '1px solid black',backgroundColor: 'yellow',textAlign: 'center'});
      if (e.target.id === 'example3'){
        $('div.example.example3 ul li').each((i, item)=>{
            let $item = $(item);
                if (i === 2) $item.css('color','green'); 
                if (i === 3) $item.css('backgroundColor','green');
                if (i === 4) {
                    $item.on('click', () =>{
                    $('div.main').css('fontWeight',900);
                    });
                    }
                if($item.text().indexOf('Node.js') !== -1) $item.css('textDecoration','underLine');
                });}
      if (e.target.id === 'example4') 
        {var templ = '';
        for(let i=0;i<10;i++){templ += '<p>DFGDFG'+i+'</p>';}
        $('#container-for-append').append(templ);}                       
  });*/
  //Второй вариант
  $('div.example5 button').on('click',(e)=>{
      if (e.target.id === 'example1') doSomething1();  
      if (e.target.id === 'example2') doSomething2();
      if (e.target.id === 'example3') doSomething3();
      if (e.target.id === 'example4') doSomething4();                      
  });
  function doSomething1(){
    $('div.example[data-type="e1"] span').css({color:'red', fontSize:'16px',fontWeight: '900'});
  };
  function doSomething2(){
    $('div.example.example2 p.special').css({color:'blue', fontSize:'18px',border: '1px solid black',backgroundColor: 'yellow',textAlign: 'center'});
  };
  function doSomething3(){
    $('div.example.example3 ul li').each((i, item)=>{
        let $item = $(item);
            if (i === 2) $item.css('color','green'); 
            if (i === 3) $item.css('backgroundColor','green');
            if (i === 4) {
              $item.on('click', () =>{
              $('div.main').css('fontWeight',900);
              });
            }
            if($item.text().indexOf('Node.js') !== -1) $item.css('textDecoration','underLine');
            });
  };
  function doSomething4(){
    let templ = '';
        for(let i=0;i<10;i++){templ += '<p>DFGDFG'+i+'</p>';}
        $('#container-for-append').append(templ);
  };
  
 //Модальное окно
 //Так мы сделали в классе
/*$('#toggle-modal').on('change',(e)=>{
    let checker = $(e.target),modal = $('#modal-window');
    if(checker.prop('checked')){
     modal.show()
     modal.find('button').on('click',(e)=>{
        modal.hide();
        checker.prop('checked', false);
    });
}
})*/
//Домашний вариант
$('#toggle-modal').on('change',(e)=>{
    let checker = $(e.target),modal = $('#modal-window');    
    if(checker.prop('checked')) modal.show();
   // $('#butOk').on('click',(e)=>{                         //Вариант с добавлением ID к кнопке
   //$('#modal-window button').on('click',(e)=>{            //Второй вариант
   modal+$('button').on('click',(e)=>{                      //Третий Вариант
        modal.hide();
        checker.prop('checked', false);
    });
}
);    
});
window.onload = () => {
  console.log('Document loaded', (new Date()).getTime());
};
