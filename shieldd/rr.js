function sendUrgentMessage() {
    let guardianEmail = localStorage.getItem('guardianEmail');
    if (guardianEmail) {
        const templateParams = {
            to_email: guardianEmail,
            message: "Your daughter is in a critical situation. Help her!"
        };

        emailjs.send('service_cici2pt', 'template_n0n7f8o', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert("Urgent message sent to your guardian.");
            }, function(error) {
                console.error('FAILED...', error); // Log error for debugging
                alert("Failed to send message: " + error.text); // More detailed error message
            });
    } else {
        alert("Guardian's email not found.");
    }
}
