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

Cinema.prototype.getFilmsByProperty = function(value, property){
  const output = this.films.filter((film) => {
    if(film[property] === value) {
      return film
    }
  })
  return output
}

Cinema.prototype.filmsFromYear = function(year){
  return this.films.reduce((truthValue, film) => {
    if (film.year === year) {
      truthValue = true
    }
    return truthValue
  }, false)
}

Cinema.prototype.existsFilmsFromYear = function(year){
  return this.filmsFromYear(year);
}

Cinema.prototype.notExistsFilmsFromYear = function(year){
  return !this.filmsFromYear(year);
}

Cinema.prototype.allFilmsOverLength = function(length){
  return this.films.reduce((truthValue, film) => {
    if (film.length > length) {
      truthValue = true
    }
    return truthValue
  }, false)
}

Cinema.prototype.totalRunningTime = function() {
  return this.films.reduce((runningTotal, film) => {
    return runningTotal + film.length
  }, 0)
}

module.exports = Cinema;
