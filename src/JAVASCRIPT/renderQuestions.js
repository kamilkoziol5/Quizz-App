import getRandomQuestion from './getRandomQuestion.js';
import handleAnswer from './handleAnswer.js';
import startTimer from './startTimer.js';

export default function renderQuestions(
	category,
	amount,
	questionsIndexHistory
) {
	const questionStatus = document.querySelector('.question-status');
	const nextBtn = document.querySelector('.next-question-btn');
	const answerOptions = document.querySelector('.answer-options');
	const currentQuestion = getRandomQuestion(
		category,
		amount,
		questionsIndexHistory
	);

	if (!currentQuestion) return;

	startTimer(answerOptions, currentQuestion, nextBtn);

	// Update UI
	answerOptions.innerHTML = '';
	document.querySelector('.question-text').textContent =
		currentQuestion.question;
	nextBtn.classList.remove('scale');
	questionStatus.innerHTML = `<b>${questionsIndexHistory.length}</b> of <b>${amount}</b> Questions`;

	currentQuestion.options.forEach((option, index) => {
		const li = document.createElement('li');
		li.classList.add('answer-option');
		li.textContent = option;
		answerOptions.append(li);
		li.addEventListener('click', () =>
			handleAnswer(li, index, currentQuestion, answerOptions, nextBtn)
		);
	});
}
