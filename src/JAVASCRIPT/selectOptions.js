export default function selectOptions() {
	const categories = document.querySelectorAll(
		'.category-options .category-option'
	);
	const questionsAmount = document.querySelectorAll(
		'.question-options .question-option'
	);

	let selectedCategory = 'Programming';
	let selectedAmount = 5;

	categories.forEach(cat => {
		cat.addEventListener('click', () => {
			categories.forEach(c => c.classList.remove('active'));
			cat.classList.add('active');
			selectedCategory = cat.dataset.category;
		});
	});

	questionsAmount.forEach(qst => {
		qst.addEventListener('click', () => {
			questionsAmount.forEach(q => q.classList.remove('active'));
			qst.classList.add('active');
			selectedAmount = Number(qst.dataset.amount);
		});
	});

	return {
		getSelectedCategory: () => selectedCategory,
		getSelectedAmount: () => selectedAmount,
	};
}
