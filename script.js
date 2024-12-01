(function() {
    emailjs.init('OiMEAcHFuztUoVBi0');
  })();
// Get form elements
const form = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

// Add event listener to form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  emailjs.send("service_44zo6pj","template_m3vjj5x",{
    from_name: "sam",
    message: "hello sammy",
    from_email: "mabalane.thubakgale@gmail.com",
    reply_to: "mabalane.thubakgale@gmail.com",
}).then(() => {
            console.log('SUCCESS!');
            formStatus.innerHTML = 'Message sent successfully!';
            form.reset();
        }, (error) => {
            console.log('FAILED...', error);
            formStatus.innerHTML = 'Error sending message. Please try again.';
        });

*/
/*
(function() {
    emailjs.init('OiMEAcHFuztUoVBi0');
  })();

// Contact Form JavaScript Code

const form = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // these IDs from the previous steps
    emailjs.sendForm('contact_service', 'contact_form', this)
        .then(() => {
            console.log('SUCCESS!');
            formStatus.innerHTML = 'Message sent successfully!';
            form.reset();
        }, (error) => {
            console.log('FAILED...', error);
            formStatus.innerHTML = 'Error sending message. Please try again.';
        });
});

/*
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
*/
