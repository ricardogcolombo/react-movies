var AppDispatcher = require("../dispatcher/appDispatcher");
var AppConstants = require("../constants/appConstants");
var EventEmitter = require("events").EventEmitter;
var assign = require("object-assign");

var AppApi = require("../utils/appApi.js");
var CHANGE_EVENT = "change";

var _movies = [];
var _selected = "";

var AppStore = assign({}, EventEmitter.prototype, {
    setMovieResults: function(movies) {
        _movies = movies;
    },
    getMovieResults: function() {
        return _movies;
    },
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function(callback) {
        this.on("change", callback);
    },
    removeChangeListener: function(callback) {
        this.removeListener("change", callback);
    }
});

AppDispatcher.register(function(payload) {
    var action = payload.action;
    switch (action.actionType) {
        case AppConstants.SEARCH_MOVIES:
            AppApi.searchMovies(action.movie);
            AppStore.emit(CHANGE_EVENT);
            break;

        case AppConstants.RECIEVE_MOVIE_RESULTS:
            AppStore.setMovieResults(action.movies);
            AppStore.emit(CHANGE_EVENT);
            break;
        default:
    }
    return true;
});

module.exports = AppStore;
