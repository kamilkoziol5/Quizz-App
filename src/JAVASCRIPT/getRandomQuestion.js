import showQuizResult from './showQuizResult';
import questions from '../Data/questions.json';

export default function getRandomQuestion(
	category,
	amount,
	questionsIndexHistory
) {
	const categoryQuestions =
		questions.find(cat => cat.category.toLowerCase() === category.toLowerCase())
			.questions || [];

	if (
		questionsIndexHistory.length >= Math.min(categoryQuestions.length, amount)
	) {
		return showQuizResult(questionsIndexHistory, amount);
	}

	const availableQuestions = categoryQuestions.filter(
		(_, index) => !questionsIndexHistory.includes(index)
	);

	const randomQuestion =
		availableQuestions[Math.floor(Math.random() * availableQuestions.length)];

	questionsIndexHistory.push(categoryQuestions.indexOf(randomQuestion));
	return randomQuestion;
}
