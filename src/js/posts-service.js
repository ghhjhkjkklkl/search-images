import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '35126969-91a6591af8599828cd024373b';

export default class PostApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.totalHits = 0;
  }

  async fetchPost() {
    const OPTIONS = new URLSearchParams({
      key: API_KEY,
      q: this.searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: this.page,
      per_page: 40,
    });

    try {
      const response = await axios.get(`${BASE_URL}?${OPTIONS.toString()}`);
      console.log(response);
      this.incrementPage();
      return response.data;
    } catch (error) {
      console.error(error.toJSON());
    }
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    return (this.searchQuery = newQuery);
  }
  get hits() {
    return this.totalHits;
  }
  set hits(newTotalHits) {
    return (this.totalHits = newTotalHits);
  }
  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}
