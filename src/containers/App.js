import React from 'react';
import CardList from '../components/CardList';
// import { robots } from './robots';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

class App extends React.Component {
    constructor()
    {
        super();
        this.state = {
            robots: [],
            searchField: ""
        }
    }
    componentDidMount()
    {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then( response => {
                return response.json();
            })
            .then( users => {
                this.setState({ robots : users })
            });
    }
    onSearchChange = (evt) =>
    {
        this.setState( { searchField : evt.target.value } );
        
    }
    render(){
        const {robots, searchField} = this.state;
        const filterRobots = robots.filter( robot =>
            {
                return robot.name.toLocaleLowerCase()
                            .includes(searchField.toLocaleLowerCase());
            })
        if( !robots.length  )
        {
            return <h1>Loading</h1>
        }
        else
        {
            return (
                <div className="tc">
                    <h1>RoboFriends</h1>
                    <SearchBox searchChange = {this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filterRobots} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
        }    
    }
}

export default App;