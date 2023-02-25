const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const image = document.querySelector('#image').files[0];
	const name = document.querySelector('#name').value;
	const description = document.querySelector('#description').value;
	const price = document.querySelector('#price').value;

	const formData = new FormData();
	formData.append('image', image);
	formData.append('name', name);
	formData.append('description', description);
	formData.append('price', price);

	fetch('/upload', {
		method: 'POST',
		body: formData
	}).then((response) => {
		console.log(response);
	}).catch((error) => {
		console.error(error);
	});
});
