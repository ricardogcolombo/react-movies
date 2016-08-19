var React = require("react");
var appActions = require("../actions/appActions");
var AppStore = require("../stores/AppStore");


var searchForm= React.createClass({
            render: function() {
                return ( <div className="search-form">
                    <h1 className ="text-center">Search For a Movie </h1>
                    <form onSubmit={this.onSubmit}>
                    <div className = "form-group">
                    <input type="text" className="form-control" ref="title" placeholder="Enter a Movie Title..."/>
                    <button className= "btn btn-primary btn-block">Search Movies</button>
                    </div>
                    </form>
                    </div> );
                },

                onSubmit:function(e){
                    e.preventDefault();
                    var movie = {
                        title:this.refs.title.value.trim()
                    };
                    appActions.searchMovies(movie);
                }
            }); 
            
module.exports = searchForm;
