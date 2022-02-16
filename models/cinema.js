const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getFilmTitles = function(){
  return this.films.map((film) => {
    return film.title
  })
}

Cinema.prototype.getFilmTitle = function(title){
  const filmTitle = this.films.filter((film) => {
    if(film.title === title){
      return film
    }
  })
  return filmTitle[0]
}

module.exports = Cinema;
