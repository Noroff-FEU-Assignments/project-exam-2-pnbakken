export const encouragements = [
  "It would be good if you posted something",
  "Maybe you should post something",
  "Everyone's excited to see what you post",
  "It's better to post than to not post",
  "Show everyone how good you are at posting",
  "Post something",
  "Time to unleash posting perfection",
  "Maybe you should post something",
  "Post as much as humanly possible",
  "Sometimes you've just gotta post",
  "I can't believe you aren't posting",
];

export default function getRandomEncouragement() {
  const random = Math.floor(Math.random() * encouragements.length);
  return encouragements[random];
}
