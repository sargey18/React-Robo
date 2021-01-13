import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';



function App() {
   // constructor() {
     //   super()
       // this.state = {
         //   robots: [],
           // searchfield: ''
       // }
   // }

   const [robots, setRobots] = useState([])
   const [searchfield, setSearchfield] = useState('')



useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
              .then(response=> response.json())
              .then(users => {setRobots (users) });
 }, [])




    const onSearchChange = (event) => {
        setSearchfield( event.target.value)
    } 


    const filterRobots = robots.filter(robots =>{
        return robots.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    console.log(robots, searchfield)
    if (robots.length === 0) {
        return <h1>Loading</h1>
    } else {
        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filterRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>  
        );
        }
    }
   




export default App;