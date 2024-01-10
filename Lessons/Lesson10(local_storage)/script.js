let $container = $('#main-container');
let clicks = 0;
let startTime;
let lastTimeClick;
let fastestSpeed = localStorage.getItem('fastestSpeed') || 0;

$('body').on('click', function () {
    ++clicks;
    checkLastTimeClick();
    updateClickSpeed();
});

function updateClickSpeed() {
    let currentTime = new Date().getTime();
    lastTimeClick = currentTime;
    if (!startTime) {
        startTime = currentTime;
        return;
    }

    if (clicks < 5) return; 

    let elapsedTime = (currentTime - startTime) / 1000; // in seconds
    let clicksPerMinute = (clicks / elapsedTime) * 60;

    $container.text('Clicks per minute: ' + clicksPerMinute.toFixed(2));

    if (clicksPerMinute > parseFloat(fastestSpeed)) {
        fastestSpeed = clicksPerMinute.toFixed(2).toString();
        localStorage.setItem('fastestSpeed', fastestSpeed);
    }
    $container.append('<br>Fastest speed: ' + fastestSpeed);
}


function checkLastTimeClick() {
    if (lastTimeClick != null && 10 < ((new Date().getTime() - lastTimeClick) / 1000)) // if last ckick was more then 10 sec ago
    {
        clicks = 0;
        startTime = 0;
        lastTimeClick = 0;
    }
}