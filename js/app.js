$(document).ready(() => {
  console.log('ready');
  $('#connect-button').on('click', function () {
      $('.startBlock').addClass('hidden');
      $('.content').removeClass('hidden');
      startWork();
  });
});

function startWork() {
  const ws = new WebSocket('ws://localhost:8085');
  const name = $('.content input').val() || 'Unknown';
  const id = Date.now() + Math.random();

  ws.addEventListener('open', function (event) {
    ws.send(JSON.stringify({
      type: 0,
      id: id,
      message: name
    }));
  });

  ws.addEventListener('message', function (data) {
    console.log(data.data)
    let obj = JSON.parse(data.data);
    $('#chat-messages').append(`<p><strong>${obj.id}</strong>${obj.message}</p>`);
  });

  $('.content button').on('click', function (e) {
    let text = $('.content input').val();
    ws.send(JSON.stringify({
      id: name,
      type: 1,
      message: text || ':dump:'
    }));
    $('.content input').val('');
  });

  $('#app-instance .content a').on('click', function (e) {
    e.preventDefault();
    ws.close();
    window.location.reload();
  });
}