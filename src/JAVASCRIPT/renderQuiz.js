import renderQuestions from './renderQuestions';

export default function renderQuiz(category, amount, questionsIndexHistory) {
	const quiz = document.createElement('section');
	quiz.classList.add('quiz-container');
	quiz.innerHTML = `
    
    <header class="quiz-header">
				<h2 class="quiz-title">Quiz Application</h2>
				<div class="quiz-timer">
					<span class="material-symbols-rounded"> timer </span>
					<p class="time-duration">15s</p>
				</div>
			</header>

			<div class="quiz-content">
				<h1 class="question-text"></h1>
				<ul class="answer-options"></ul>
			</div>

			<div class="quiz-footer">
				<p class="question-status"></p>
				<button class="next-question-btn">
					Next
					<span class="material-symbols-rounded"> arrow_right_alt </span>
				</button>
			</div>
    `;

	document.body.append(quiz);

	const nextBtn = quiz.querySelector('.next-question-btn');

	nextBtn.addEventListener('click', () => {
		renderQuestions(category, amount, questionsIndexHistory);
	});
}
