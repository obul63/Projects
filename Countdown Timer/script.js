// function updateTimer() {

// future = date.parse('jun 12, 2022 12:43:00');
// now = new Date();
// diff = future - now;
// days = math.floor(diff / (1000 * 60 * 60 * 24));
// hours = math.floor(diff / (1000 * 60 * 60));
// mins = math.floor(diff / (1000 * 60));
// secs = math.floor(diff / 1000);

// d = days;
// h = hours - days * 24;
// m = mins - hours * 60;
// s = secs - mins * 60;

// document.getElementById('timer')
// .innerHTML = 
// '<div>' + d + '<span>Days</span></div>' +
// '<div>' + h + '<span>Hours</span></div>' +
// '<div>' + m + '<span>Minutes</span></div>' +
// '<div>' + s + '<span>Seconds</span></div>' ;


// setInterval('updateTimer()', 1000);

function updateTimer() {
    future = Date.parse("jun 12, 2024 01:30:00");
now = new Date();
diff = future - now;

 days = Math.floor(diff / (1000 * 60 * 60 * 24));
 hours = Math.floor(diff / (1000 * 60 * 60));
 mins = Math.floor(diff / (1000 * 60));
secs = Math.floor(diff / 1000);

d = days;
 h = hours - days * 24;
 m = mins - hours * 60;
 s = secs - mins * 60;

document.getElementById("timer")
  .innerHTML =
  '<div>' + d + '<span>Days</span></div>' +
  '<div>' + h + '<span>Hours</span></div>' +
  '<div>' + m + '<span>Minutes</span></div>' +
  '<div>' + s + '<span>Seconds</span></div>';
}
setInterval('updateTimer()', 1000);