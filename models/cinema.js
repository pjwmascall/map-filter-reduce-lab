const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getFilmTitles = function() {
  return this.films.map((film) => {
    return film.title;
  });
}

Cinema.prototype.getFilmsByProperty = function(property, value) {
  return this.films.filter((film) => {
    if(film[property] === value) {
      return film;
    }
  });
}

Cinema.prototype.getFilmByTitle = function(title) {
  return this.getFilmsByProperty('title', title)[0];
}

Cinema.prototype.existsFilmsFromYear = function(year) {
  return this.films.reduce((truthValue, film) => {
    if (film.year === year) {
      truthValue = true;
    }
    return truthValue;
  }, false);
}

Cinema.prototype.notExistsFilmsFromYear = function(year) {
  return !this.existsFilmsFromYear(year);
}

Cinema.prototype.allFilmsOverLength = function(length) {
  return this.films.reduce((truthValue, film) => {
    if (film.length > length) {
      truthValue = true;
    }
    return truthValue;
  }, false);
}

Cinema.prototype.totalRunningTimes = function() {
  return this.films.reduce((runningTotal, film) => {
    return runningTotal + film.length;
  }, 0);
}

module.exports = Cinema;
