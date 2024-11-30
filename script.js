// Contact Form JavaScript Code

const form = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const nodeName = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // EmailJS SDK
    const templateParams = {
        to_name: 'Your Name',
        from_name: nodeName,
        to_email: 'your-email@example.com',
        message_html: message,
    };

    emailjs.send('service_44zo6pj', 'template_m3vjj5x', templateParams)
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            formStatus.innerHTML = 'Message sent successfully!';
            form.reset();
        })
        .catch((err) => {
            console.log('FAILED...', err);
            formStatus.innerHTML = 'Error sending message. Please try again.';
        });
});
