const encouragements = [
  "It would be good if you posted something",
  "Maybe you should post something",
  "Everyone's excited to see what you post",
  "You don't have to post anything but it'd be a lot cooler if you did",
  "Have you ever considered a career in posting?",
  "There will never be a better time to post something than right now",
  "Sad about something? Post about it, let everyone know",
  "Scientists agree: posting makes you 10x more attractive to the opposite sex",
  "Wouldn't it be sad if you were laying there, on your deathbed, thinking 'I wish I had posted more'?",
];

export default function getRandomEncouragement() {
  const random = Math.floor(Math.random() * encouragements.length);
  return encouragements[random];
}
