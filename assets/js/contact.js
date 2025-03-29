document.querySelector('.contact__form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    });

    if (response.ok) {
        alert('Thanks for your submission!');
        form.reset();
    } else {
        alert('Oops! Something went wrong. Please try again.');
    }
});
