'use strict';

$(document).ready( () => {
  console.log('jQuery is ready for manipulations with DOM', (new Date()).getTime());
  $('div.example5 button').on('click',(e)=>{
      if (e.target.id === 'example1')doSomething();
  })
  $('#example1').on('click',(e)=>{
      $('div.example[data-type="e1"] span').css({color:'red', fontSize:'16px',fontWeight: '900'});
  });
  $('#example2').on('click',(e)=>{
  $('div.example.example2 p.special').css({color:'blue', fontSize:'18px',border: '1px solid black',backgroundColor: 'yellow',textAlign: 'center'});
});


$('#example3').on('click',(e)=>{
      $('div.example.example3 ul li').each((i, item)=>{
          let $item = $(item);
       if (i === 2) $item.css('color','green'); 
       if (i === 3) $item.css('backgroundColor','green');
       if (i === 4) {
           $item.on('click', () =>{
               $('div.main').css('fontWeight',900);
           })
      }
      if($item.text().indexOf('Node.js') !== -1) $item.css('textDecoration','underLine');
  });
});

$('#example4').on('click',(e)=>{
    let templ = '';
    for(let i=0;i<10;i++){templ += '<p>DFGDFG'+i+'</p>';    
    }
    $('#container-for-append').append(templ);
});

$('#toggle-modal').on('change',(e)=>{
    let checker = $(e.target),modal = $('#modal-window');
    if(checker.prop('checked')){
     modal.show()
     modal.find('button').on('click',(e)=>{
        modal.hide();
        checker.prop('checked', false);
    });
}
})
});
window.onload = () => {
  console.log('Document loaded', (new Date()).getTime());
};
