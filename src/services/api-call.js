export default function getCharacter() {
  return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters/random')
    .then(res => {
      return res.json();
    });
}