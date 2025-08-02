import highlightCorrectAnswer from './highlightCorrectAnswer';
import { clearTimer } from './startTimer.js';
import { incrementCorrectAnswersCount } from './state.js';

export default function handleAnswer(
	li,
	index,
	currentQuestion,
	answerOptions
) {
	clearTimer();

	const nextBtn = document.querySelector('.next-question-btn');

	if (li.classList.contains('disabled')) {
		li.style.pointerEvents = 'none';
		return;
	}
	const isCorrect = currentQuestion.correctAnswer === index;
	li.classList.add(isCorrect ? 'correct' : 'incorrect');

	!isCorrect
		? highlightCorrectAnswer(answerOptions, currentQuestion)
		: incrementCorrectAnswersCount();

	const icon = document.createElement('span');
	icon.classList.add('material-symbols-rounded');
	icon.textContent = isCorrect ? 'check_circle' : 'cancel';

	li.append(icon);

	answerOptions.querySelectorAll('.answer-option').forEach(option => {
		option.classList.add('disabled');
	});

	nextBtn.classList.add('scale');
}
