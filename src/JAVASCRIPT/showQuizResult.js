import { correctAnswersCount, resetCorrectAnswersCount } from './state.js';

export default function showQuizResult(questionsIndexHistory, amount) {
	const quizContainer = document.querySelector('.quiz-container');
	const configContainer = document.querySelector('.config-container');
	const result = document.createElement('div');
	result.classList.add('result-container');
	result.innerHTML = `
     <img src="/Quizz-App/quiz-over.png"   class="result-img" alt="Result-image" />
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
}
