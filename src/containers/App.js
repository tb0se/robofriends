import React, { useEffect} from "react";
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import {useDispatch, useSelector } from 'react-redux';
import { setSearchField, requestRobots } from '../actions';
import './App.css';


function App() {
 
    // Array Destructuring (STATES using Hooks)
    // const [robots, setRobots] = useState([]);
    //const [searchField, setSearchField] = useState('');

    const dispatch = useDispatch();
    const { searchField } = useSelector((state) => state.searchRobots);
    const {robots, isPending} = useSelector((state) => state.requestRobots);
    

    // useEffect(()=>{
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => response.json())
    //     .then(users => {setRobots(users)} );
    // },[])
    

    const onRequestRobots = () =>{
        dispatch(requestRobots());
    }

    const onSearchChange = (event) => {
        dispatch( setSearchField(event.target.value)) ;
    }

    const filteredRobots = robots.filter( robot =>{
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    useEffect(() =>{
        onRequestRobots();
    },[])

    return isPending ? // len=0 is false in JS
    // Loading bar
    <h1>Loading</h1> :
    
    (
        <div className='tc'>

            <h1 className="f1">RoboFriends</h1>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
                <ErrorBoundary>
                    <CardList robots={filteredRobots}/>
                </ErrorBoundary>
            </Scroll>
            
        </div>
    );
    
}

export default App;