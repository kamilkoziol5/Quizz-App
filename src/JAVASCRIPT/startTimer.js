import highlightCorrectAnswer from './highlightCorrectAnswer';

let timer = null;

export function clearTimer() {
	if (timer) {
		clearInterval(timer);
		timer = null;
	}
}

export default function startTimer(answerOptions, currentQuestion, nextBtn) {
	const timerDisplay = document.querySelector('.time-duration');
	const QUIZ_TIME_LIMIT = 15;
	let currentTime = QUIZ_TIME_LIMIT;

	clearTimer();

	timerDisplay.textContent = `${currentTime}s`;

	timer = setInterval(() => {
		currentTime--;
		timerDisplay.textContent = `${currentTime}s`;

		if (currentTime <= 0) {
			clearInterval(timer);
			timer = null;
			highlightCorrectAnswer(answerOptions, currentQuestion);
			answerOptions.querySelectorAll('.answer-option').forEach(option => {
				option.classList.add('disabled');
			});

			nextBtn.classList.add('scale');
		}
	}, 1000);
}
