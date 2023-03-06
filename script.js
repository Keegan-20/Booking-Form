//dark-mode
let icon = document.getElementById('icon');
icon.onclick = function () {
    document.body.classList.toggle("dark-theme");

    //toggling the icon to sun-moon
    if(document.body.classList.contains("dark-theme"))
    {
        icon.src ="img/sun.png";  
    } 
    else {
        icon.src ="img/moon.png";
    }
}

//customise popup on clicking submit
const popupContainer = document.getElementById('container');
const popupMessage = document.getElementById('popup-message');
const contactForm = document.getElementById('contact-form');
const headerContact =document.getElementById('hcontact');

contactForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const response = await fetch('https://formspree.io/f/mwkjbjkr', {
    method: 'POST',
    headers: {
      'Accept': 'application/json'
    },
    body: formData
  });
  if (response.ok) {
    contactForm.reset();
    popupContainer.style.display = 'none';
    headerContact.style.display='none';
    popupMessage.style.display = 'block';
    setTimeout(() => {
      popupMessage.style.display = 'none';
      location.href = location.href;
    },80000);

  } else {
    alert('Error submitting form!');
  }
});
