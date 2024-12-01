

/*// Initialize EmailJS with public key
const publicKey = 'OiMEAcHFuztUoVBi0';
const serviceId = 'service_44zo6pj';
const templateId = 'template_m3vjj5x';

// Get form element
const form = document.getElementById('contact-form');

// Add event listener to form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Create template parameters
  const templateParams = {
    from_name: name,
    from_email: email,
    message_html: message,
  };

  // Send email using EmailJS
  emailjs.send(
    publicKey,
    serviceId,
    templateId,
    templateParams
  ).then((response) => {
    console.log('Email sent successfully', response.status);
    alert('Email sent successfully!');
  }, (error) => {
    console.log('Error sending email', error);
    alert('Error sending email. Please try again.');
  });
});

*/

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
