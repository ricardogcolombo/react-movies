var React = require("react");
var appActions = require("../actions/appActions");
var AppStore = require("../stores/AppStore");
var Movie= require("./Movie.js");


var movieResults= React.createClass({
            render: function() {
                return ( <div>
                        <h3 className = "text-center">Results</h3>
                        {
                            this.props.movies.map(function(movie,i){
                                return(
                                    <Movie movie = {movie} key={i}/>
                                )
                            
                            })
                        }
                    </div> );
                },
            }); 
            
module.exports = movieResults;
