import React, {Component} from "react";
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';


class App extends Component{
    constructor(){
        super()
        // Can change and affect the app
        this.state = {
            robots: [],
            searchField:''
        }
    }

    // Its part of react so no need for lamba func
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {this.setState({ robots:users })} );
    }

    // Random name we create
    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
        
        //console.log(filteredRobots);
    }

    render(){

        const { robots, searchField } = this.state; // Destructuring
        const filteredRobots = robots.filter( robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        return !robots.length ? // 0 is false in JS
        // Loading bar
        <h1>Loading</h1> :
        (
            <div className='tc'>

                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                <CardList robots={filteredRobots}/>
                </Scroll>
                
            </div>
        );
    }
}

export default App;