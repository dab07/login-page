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

      // code below  fetch only 20 movies as provided per page
      // const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
      // const movies = response.data.results;


      // to get multiple page data, using for loop to get all movies from the targetted pages
      const movies = [];
      let n = 4;
      for (let page = 1; page < n; ++page) {
          const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${page}`);
          movies.push(...response.data.results);
      }
      const moviesScore_5_to_7 = [];
      for (let i = 0; i < movies.length; ++i) {
          if (movies[i].vote_average >= 5 && movies[i].vote_average <= 7) {
              moviesScore_5_to_7.push(movies[i]);
          }
      }
      moviesScore_5_to_7.sort((a, b) => b.vote_average - a.vote_average);
      const top20Movies = moviesScore_5_to_7.slice(0, 20);  //sorted out the top 20 out of all 80;

      // const top20Movies = moviesScore_5_to_7;            all 80 movies



      const movietop20List = top20Movies.map(mov => ({
          title : mov.title,
          rating : mov.vote_average,
          reviews: mov.vote_count,
          genres: mov.genre_ids,
          posterUrl: `https://image.tmdb.org/t/p/w500${mov.poster_path}`
      }));
      // if (movietop20List.length == 20) {
      //     console.log(movietop20List);
      // } else {
      //     console.log("less then 20 movies fetched");
      // }
      res.json(movietop20List);
      console.log(movietop20List);
      console.log(movies.length);
  } catch (error) {
      res
          .status(500)
          .json("Unable to fetch movies");
  }
}
module.exports = {home, register, movie};
