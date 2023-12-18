let myWindow = window.open('', '', 'width=410px,height=410px');
myWindow.document.title = 'New window';

setTimeout(function () {
  myWindow.resizeTo(500, 500);
}, 2000);
setTimeout(function () {
  myWindow.moveTo(200, 200);
}, 4000);
setTimeout(function () {
  myWindow.close();
}, 6000);