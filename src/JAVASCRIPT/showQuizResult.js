import { correctAnswersCount, resetCorrectAnswersCount } from './state.js';

export default function showQuizResult(questionsIndexHistory, amount) {
	const quizContainer = document.querySelector('.quiz-container');
	const configContainer = document.querySelector('.config-container');
	const result = document.createElement('div');
	result.classList.add('result-container');
	result.innerHTML = `
	 <div class="strength-progress-box">
	    <div class="strength-container">
				<div class="strength-progress">
					<span class="strength-value">0%</span>
				</div>
				<p class="strength-label">-----</p>
			</div>
			</div>
			<h2 class="result-title">Quiz Completed!</h2>
			<p class="result-message">
				You answered <b>${correctAnswersCount}</b> out of <b>${amount}</b> questions correctly.
			</p>
			<button class="try-again-btn">Try Again</button>
     `;

	document.body.append(result);

	result.animate(
		[
			{ opacity: 0, transform: 'scale(0)' },
			{ opacity: 1, transform: 'scale(1)' },
		],
		{
			duration: 400,
			easing: 'ease',
			fill: 'forwards',
		}
	);

	quizContainer.remove();

	const tryBtn = result.querySelector('.try-again-btn');

	tryBtn.addEventListener('click', () => {
		const fadeOut = result.animate(
			[
				{ opacity: 1, transform: 'scale(1)' },
				{ opacity: 0, transform: 'scale(0)' },
			],
			{
				duration: 400,
				easing: 'ease',
			}
		);

		fadeOut.onfinish = () => {
			result.remove();
			configContainer.classList.remove('hide');
			resetCorrectAnswersCount();
			questionsIndexHistory.length = 0;
		};
	});

	const progressEl = result.querySelector('.strength-progress');
	const valueEl = result.querySelector('.strength-value');
	const strengthLabel = result.querySelector('.strength-label');
	const percent = (correctAnswersCount / amount) * 100;
	let progressStartValue = 0;
	let progressEndValue = percent;
	let speed = 15;

	progressEl.style.background = `conic-gradient(#3399ff 0deg, #bbbbbb 0deg)`;

	setTimeout(() => {
		let progressInterval = setInterval(() => {
			progressStartValue++;
			valueEl.textContent = `${progressStartValue}%`;

			if (percent === 0) {
				valueEl.textContent = `0%`;
				progressEl.style.background = `conic-gradient(#121212 0deg, #bbbbbb 0deg)`;
				strengthLabel.textContent = 'Keep trying!';
				return;
			}

			progressEl.style.background = `conic-gradient(#5246c2 ${
				progressStartValue * 3.6
			}deg, #bbbbbb 0deg)`;

			if (progressStartValue >= progressEndValue) {
				clearInterval(progressInterval);

				if (percent < 50) {
					strengthLabel.textContent = 'Keep trying!';
				} else if (percent < 70) {
					strengthLabel.textContent = 'Good!';
				} else {
					strengthLabel.textContent = 'Excellent!';
				}
			}
		}, speed);
	}, 1000);
}
