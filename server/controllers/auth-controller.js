const axios = require('axios');
const home = async (req, res) => {
    try {
        res
            .status(200)
            .json('Welcome to Aratagi Gang using controller');
    } catch (error) {
        console.log("error occurs at home, controller");
    }
}
const register = async (req, res) => {
    try {
        console.log(req.body);
        res
            .status(200)
            .json({message : req.body});
    } catch (error) {
        res
            .status(500)
            .json("Internal Server Error");
    }
}

const movie = async (req, res) => {
  try {
      const apiKey = '69a5ae7d41d296647da8522474ecdc4d';
      const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);

      const movies = response.data.results.slice(0, 20);
      movies.sort((a, b) => b.vote_average - a.vote_average);

      const movietop20List = movies.map(mov => ({
          title : mov.title,
          rating : mov.vote_average,
          reviews: mov.vote_count,
          genres: mov.genre_ids,
          posterUrl: `https://image.tmdb.org/t/p/w500${mov.poster_path}`
      }));

      res.json(movietop20List);
      console.log(movietop20List);
  } catch (error) {
      res
          .status(500)
          .json("Unable to fetch movies");
  }
}
module.exports = {home, register, movie};
