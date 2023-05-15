const KEY_API = '36389692-c154128aff5c7bd1a9ee05972';
const BASE_URL = 'https://pixabay.com/api/';

function fetchImages(query, page) {
  const url = `${BASE_URL}/?key=${KEY_API}&q=${query}&page=${page}&per_page=12&image_type=photo&orientation=horizontal&safesearch=true`;
  return fetch(url).then(response => {
    // console.log(response);
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Haven't found any images "${query}"`));
  });
}

const imagesApi = {
  fetchImages,
};

export default imagesApi;
