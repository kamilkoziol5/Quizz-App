export default function highlightCorrectAnswer(
	answerOptions,
	currentQuestion,
) {
	const correctOption =
		answerOptions.querySelectorAll('.answer-option')[
			currentQuestion.correctAnswer
		];
	correctOption.classList.add('correct');

	const icon = document.createElement('span');
	icon.classList.add('material-symbols-rounded');
	icon.textContent = 'check_circle';

	correctOption.append(icon);
}
