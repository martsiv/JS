// Task 1
function getRandomRGB() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}
function deleteBlock() {
    $(this).remove();
}
function addNewBlock() {
    let newBlock = document.createElement('div');
    newBlock.classList.add('colorBlock');
    newBlock.style.backgroundColor = getRandomRGB();
    let $newBlock = $(newBlock);
    $newBlock.on('click', deleteBlock);
    $('.colorContainer').append($newBlock);
}
$('#addColorBtn').on('click', addNewBlock);

// Task 2
function switchTrafficLight() {
    let $trafficLight = $('.trafficLight');
    let colors = $trafficLight.children().toArray();
    let activeColor = $(colors).index($trafficLight.find(':not(.inactiveItem)'));
    colors[(activeColor + 1) % colors.length].classList.remove('inactiveItem');
    colors[activeColor].classList.add('inactiveItem'); 
}
$('#switchTrafficLight').on('click', switchTrafficLight);
