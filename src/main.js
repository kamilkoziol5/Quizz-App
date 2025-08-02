import './SCSS/style.scss';
import selectOptions from './JAVASCRIPT/selectOptions.js';
import renderQuestions from './JAVASCRIPT/renderQuestions.js';
import renderQuiz from './JAVASCRIPT/renderQuiz.js';

function startQuizApp() {
	const config = selectOptions();
	const startBtn = document.querySelector('.start-quiz-btn');
	const configContainer = document.querySelector('.config-container');

	const QUIZ_TIME_LIMIT = 15;
	let currentTime = QUIZ_TIME_LIMIT;
	let timer = null;

	const questionsIndexHistory = [];

	startBtn.addEventListener('click', () => {
		const category = config.getSelectedCategory();
		const amount = config.getSelectedAmount();

		renderQuiz(category, amount, questionsIndexHistory);
		renderQuestions(category, amount, questionsIndexHistory);
		configContainer.classList.add('hide');
	});
}

startQuizApp();
