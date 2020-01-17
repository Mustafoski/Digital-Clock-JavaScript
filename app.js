setInterval(function () {
	let currentDate = new Date();
	let hours = currentDate.getHours();
	let minutes = currentDate.getMinutes();
	let seconds = currentDate.getSeconds();
	let period = "AM";

	if (hours >= 12) {
		period = "PM";
	} else if (hours >= 12) {
		hours = hours - 12;
	} else if (seconds < 10) {
		seconds = "0" + seconds;
	} else if (minutes < 10) {
		minutes = "0" + minutes;
	}

	let clockTime = `${hours} : ${minutes} : ${seconds}  ${period}`

	let clock = document.getElementById('clock');
	clock.innerText = clockTime
}, 1000)
