const encouragements = [
  "It would be good if you posted something",
  "Maybe you should post something",
  "Everyone's excited to see what you post",
  "You don't have to post anything but it'd be a lot cooler if you did",
  "Have you ever considered a career in posting?",
  "There will never be a better time to post something than right now",
  "Sad about something? Post about it, let everyone know",
  "Scientists agree: posting makes you 10x more attractive to the opposite sex",
  "I was just thinking how nice it'd be if you posted something",
  "It's better to post than to not post",
  "Show everyone how good you are at posting",
  "Sometimes it's good to just post",
  "Post something",
  "Time to unleash posting perfection",
  "Maybe you should post something",
  "Post as much as humanly possible",
  "For the love of God, just post",
  "Sometimes you've just gotta post",
  "I can't believe you aren't posting",
];

export default function getRandomEncouragement() {
  const random = Math.floor(Math.random() * encouragements.length);
  return encouragements[random];
}
