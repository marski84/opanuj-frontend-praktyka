export const searchCharacter(name: any, gender: any, setCharacters: (data: any)=> {}): void => {
  fetch(
    `https://rickandmortyapi.com/api/character/?name=${name}&gender=${gender}`
  )
    .then((response) => response.json())
    .then((data) => setCharacters(data.results || []))
    .catch((error) => console.error('Error fetching data:', error));
}
}