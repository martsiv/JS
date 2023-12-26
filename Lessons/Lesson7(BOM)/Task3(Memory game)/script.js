$("#overlayButton").on('click', function () {
  var overlay = document.getElementById('overlay');
  overlay.style.display = (overlay.style.display === 'none' || overlay.style.display === '') ? 'block' : 'none';
});
let $gameBodyGrid = $("#gameBody");


let imagePaths = [];
imagePaths.push('./Cards/10-de-copas.png');
imagePaths.push('./Cards/200px-Playing_card_diamond_9.svg.png');
imagePaths.push('./Cards/200px-Playing_card_heart_6.svg.png');
imagePaths.push('./Cards/200px-Playing_card_heart_7.svg.png');
imagePaths.push('./Cards/819px-Playing_card_club_6.svg.png');
imagePaths.push('./Cards/1200px-Playing_card_club_8.svg.png');
imagePaths.push('./Cards/1200px-Playing_card_spade_6.svg.png');
imagePaths.push('./Cards/09462a668a4c8b5126d0c64c1c42169f.jpg');
imagePaths.push('./Cards/190996-1024__12779.jpg');
imagePaths.push('./Cards/32651166-jack-of-diamonds-playing-card.jpg');
imagePaths.push('./Cards/45128575-poker-playing-card-9-club.jpg');
imagePaths.push('./Cards/45128581-poker-playing-card-9-heart.jpg');
imagePaths.push('./Cards/ace-diamonds-playing-card-isolated-white-ace-diamonds-playing-card-isolated-white-clipping-path-included-172707789.jpg');
imagePaths.push('./Cards/ace-hearts-deck-goodall-son-ltd-14968582.jpg.webp');
imagePaths.push('./Cards/ace-spades-playing-card-isolated-white-ace-spades-playing-card-isolated-white-clipping-path-included-172550077.jpg');
imagePaths.push('./Cards/f1db2cddb90fd324cc32cefe1fa066d3.jpg');
imagePaths.push('./Cards/game-card-6357341.jpg');
imagePaths.push('./Cards/images.png');
imagePaths.push('./Cards/imgbin-gong-zhu-queen-of-clubs-playing-card-suit-queen-kZexwNV8y9sDK8VnBhf8b80yM.jpg');
imagePaths.push('./Cards/imgbin-queen-of-hearts-playing-card-king-playing-cards-queen-of-hearts-playing-card-k3y46UzpkrWbts03BmdnWTpCt.jpg');
imagePaths.push('./Cards/istockphoto-502944230-612x612.jpg');
imagePaths.push('./Cards/jack-clubs-playing-card-isolated-white-clipping-path-included-jack-clubs-playing-card-isolated-white-173562459.jpg');
imagePaths.push('./Cards/king-of-diamonds-card-AERYA3.jpg');


function displayImages() {
  const images = imagePaths.map(path => `<div><img src="${path}" alt="Card Image"></div>`);

  $gameBodyGrid.html(images.join(''));
}
displayImages();