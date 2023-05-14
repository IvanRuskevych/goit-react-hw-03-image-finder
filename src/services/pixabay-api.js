const KEY_API = '36389692-c154128aff5c7bd1a9ee05972';
const BASE_URL = 'https://pixabay.com/api/';

// const searchParams = new URLSearchParams({
//   q: 'cat',
//   key: KEY_API,
// });

function fetchImages(text = '') {
  return fetch(
    `${BASE_URL}?q=cat&page=1&key=${KEY_API}&image_type=photo&orientation=horizontal&per_page=12&q=${text}`
  ).then(response => {
    // console.log(response);
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Haven't found any images "${text}"`));
  });
}

const imagesApi = {
  fetchImages,
};

export default imagesApi;
