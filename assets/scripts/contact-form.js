window.onload = function() {
  var name = document.getElementById('name');
  var email = document.getElementById('email');
  var message = document.getElementById('message');
  var contactAddress = document.getElementById('contact-address');
  var submit = document.getElementById('submit');

  submit.onclick = function(e) {
    e.preventDefault();
    e.stopPropagation();

    if (name.value.length < 1) alert('Please enter your name');
    else if (email.value.length < 1) alert('Please enter your email');
    else if (message.value.length < 1) alert('Please enter a message');
    else if (contactAddress.value.length < 1) alert('The developer did not put the hidden field in this form')
    else {
      // this sends a message to your email
      var urlName = encodeURIComponent(name.value);
      var urlEmail = encodeURIComponent(email.value);
      var urlMessage = encodeURIComponent(message.value);
      var urlContact = encodeURIComponent(contactAddress.value);
      fetch('https://contactform.aims.longwell.tech?name=' + urlName + '&email=' + urlEmail + '&message=' + urlMessage + '&contact=' + urlContact, {
        mode: 'no-cors',
        headers: {
          'Access-Control-Allow-Origin':'*'
        }
      }).then(function() {
        alert('Your message has been sent. Thank you for contacting me. You\'ll probably never hear from me 😜');
        name.value = '';
        email.value = '';
        message.value = '';
      }).catch(function(error) {
        console.warn(error);
        alert('There was a problem while sending your message');
      });
    }
  }
}