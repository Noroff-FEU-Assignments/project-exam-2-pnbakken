export default function getRandom(set) {
  const random = Math.floor(Math.random() * set.length);
  return set[random];
}
