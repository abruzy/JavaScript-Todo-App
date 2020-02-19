const dateElement = document.getElementById('date');

// Shows today's date

const options = {
  weekday: 'long',
  month: 'short',
  day: 'numeric',
  year: 'numeric',
};

const today = new Date();
dateElement.innerHTML = today.toLocaleDateString('en-us', options);