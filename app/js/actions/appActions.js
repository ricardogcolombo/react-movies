var AppDispatcher = require("../dispatcher/appDispatcher"),
    AppConstants = require("../constants/appConstants"),
    AppActions;

AppActions = {
    searchMovies: function(movie) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.SEARCH_MOVIES,
            movie: movie
        });
    },
    recieveMovieResults: function(movies) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.RECIEVE_MOVIE_RESULTS,
            movies: movies
        });
    }
};

module.exports = AppActions;
