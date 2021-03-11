import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import LeagueCart from '../LeagueCart/LeagueCart';
import './Home.css';

const Home = () => {
    const [league, setLeague] = useState([])
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
        .then(res => res.json())
        .then(data => setLeague(data.leagues))
    },[])
    return (
        <div className='home'>
            <Banner></Banner>
            <div className='league-cart'>
                {league.map(league => <LeagueCart league={league} key={league.idLeague}></LeagueCart>)}
            </div>
        </div>
    );
};

export default Home;