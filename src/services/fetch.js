const URL = 'https://pixabay.com/api/';
const API_KEY = '35482299-15104ebb11f3b9947dca699f9';

export function getImages(search) {
//   const params = {
//     key: API_KEY,
//     q: search,
//     page: 1,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     per_page: 12,
//   };
  return fetch(`${URL}?q=${search}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12

  `)
    .then(res => res.json());
}
