const labels = document.querySelectorAll('.form-control label')

labels.forEach((label) => {
	label.innerHTML = label.innerText
		.split('')
		.map((letter, idx) => `<span style="transition-delay:${idx * 75}ms">${letter}</span>`)
		.join('')
})

/*
we have the innerText and looping through the label
we have the innerText, email, splitting into an array
then mapping it to create an array of the letter with a span around it
then turning it back into a string.
*/
