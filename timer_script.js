

$(document).ready(function() {
	
	var startDate;
	
	const timerItems = $(".timer").children();	
	
	// function declensionNum(num, words) {
		// return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
	// }

	function countdownTimer() {
			
		let now = new Date().getTime();
		let diff = (startDate - now);
		
		if (diff < 0) {
			
			clearInterval(timeId);
			$(".footer")[0].textContent = "Time is over!";
			return;
				
		}
			
		const days = Math.floor(diff / 1000 / 60 / 60 / 24);
		const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
		const minutes = Math.floor(diff / 1000 / 60) % 60;
		const seconds = Math.floor(diff / 1000) % 60;
			
		// updateDigits(timerItems[0], days, declensionNum(days, ['день', 'дня', 'дней']));
		// updateDigits(timerItems[1], hours, declensionNum(hours, ['час', 'часа', 'часов']));
		// updateDigits(timerItems[2], minutes, declensionNum(minutes, ['минута', 'минуты', 'минут']));
		// updateDigits(timerItems[3], seconds, declensionNum(seconds, ['секунда', 'секунды', 'секунд']));
		
		updateDigits(timerItems[0], days, "Days");
		updateDigits(timerItems[1], hours, "Hours");
		updateDigits(timerItems[2], minutes, "Minutes");
		updateDigits(timerItems[3], seconds, "Seconds");
			
	};
	
	function updateDigits(item, value, title) {
			
		item.children[0].textContent = Math.floor(value/10)%10;
		item.children[1].textContent = value%10;
		item.dataset.title = title;

	};
	
	$("#datetime").change(function() {
		
		startDate = new Date($("#datetime").val()).getTime();
		timeId = setInterval(countdownTimer, 1000);
	
	});

});

