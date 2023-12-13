const button = document.getElementById('animatedButton');
const affirmation = document.getElementById('affirmation');
const myImage = document.getElementById('myImage');

const affirmations = [
  'I am really proud of how hard you work, especially when it gets difficult', 'You are very admirable, and I appreciate your constant perseverance', 'Everytime I look at you, I fall in love even more :)', 'I admire how hard you push through things, even if it\'s difficult', 'Your pupils keep dialating when you look at me and it\'s so cute hehe', 'You\'re my favorite person to play any video game with :)', 'My favorite place to be is where you are', 'I always think of you before I go to sleep', 'The way you create amazing designs, and produce amazing projects is absolutely stunning', 'I\'m always so proud and happy I can call you mine', 'Whenever I look at you my heart races really fast', 'I always look at the moon and think of you', 'Even when we\'re separated, it still feels like we\'re together :)',
  'I\'ve always believed that you were my soulmate',
  'Despite everything, it\'s still you.',
  'You always do things despite feeling bad or tired and that\'s admirable',
  'You are you',
  'You hug Bao really hard everytime and it\'s really cute',
  'You\'ve never given up on the hardest things that came your way.'
  // Add your affirmations here
];

button.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * affirmations.length);
  affirmation.textContent = affirmations[randomIndex];
  affirmation.style.display = 'block';

  myImage.style.display = 'none'; // Hide the image on button click

  const displayDuration = 5000; // You can set your display duration here

  setTimeout(() => {
    affirmation.style.display = 'none';
    myImage.style.display = 'inline-block'; // Show the image again
  }, displayDuration);
});
