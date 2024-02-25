function sortMovies(arr) {
    let movieList = [];
    for (let currRow of arr) {
        if (currRow.includes('addMovie ')) {
            let tokens = currRow.split('addMovie ')
            let movie = tokens[1]
            let movieObj = { name: movie };
            movieList.push(movieObj)
        } else if (currRow.includes('directedBy')) {
            let tokens = currRow.split(' directedBy ');
            let movie = tokens[0];
            let director = tokens[1]
            let inculdeMovie = movieList.find(n => n.name === movie);
            if (inculdeMovie) {
                inculdeMovie.director = director
            }
        } else if (currRow.includes('onDate')) {
            let tokens = currRow.split(' onDate ');
            let movie = tokens[0];
            let date = tokens[1];
            let inculdeMovie = movieList.find(n => n.name === movie);
            if (inculdeMovie) {
                inculdeMovie.date = date
            }
        }
    }
    let fullInfoMovie = movieList.filter(n => n.name && n.director && n.date)
    for (let i of fullInfoMovie) {
        console.log(JSON.stringify(i));
    }
}
sortMovies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
])