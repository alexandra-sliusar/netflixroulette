import axios from "axios";
import { _ } from "vue-underscore";

const ApiService = {
  init() {
    axios.defaults.baseURL = "http://react-cdp-api.herokuapp.com/";
  },

  getMovies(sortBy, searchBy, search) {
    return axios
      .get("movies", {
        params: {
          limit: 400,
          sortOrder: "desc",
          sortBy,
          searchBy,
          search,
        },
      })
      .then((res) => res.data.data)
      .catch((error) => console.log(error));
  },

  getMoviesByGenres(sortBy, genres) {
    var urlString = `movies?limit=18&sortOrder=desc&sortBy=${sortBy}`;
    if (genres.length < 2) {
      urlString += `&searchBy=genres&search=${genres[0]}`;
    } else {
      _.each(genres, (genre) => {
        urlString += `&filter=${genre}`;
      });
    }
    
    return axios
      .get(urlString)
      .then((res) => res.data.data)
      .catch((error) => console.log(error));
  },

  getMovieById: function(id) {
    return axios
      .get(`movies/${id}`)
      .then((res) => res.data)
      .catch((error) => console.log(error));
  },

  setInterceptors() {
    axios.interceptors.request.use((config) => {
      console.log("Request Intercepted", config);
      return config;
    });
    axios.interceptors.response.use((res) => {
      console.log("Response Intercepted", res);
      return res;
    });
  },
};

export default ApiService;
