import React, { createContext, useContext, useEffect, useState } from 'react';
import './LeagueCart.css'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useHistory } from 'react-router-dom';

const LeagueCart = ({league}) => {
    const {idLeague, strLeague} = league;
    const [leagueDetails, setLeagueDetails] = useState([])
    let history = useHistory()
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
        .then(res => res.json())
        .then(data => setLeagueDetails(data.leagues))
    },[idLeague])
    const handleDetail = () => {
        history.push(`/details/${idLeague}`)
    }
    return (
        <div className='single-league-cart'>
            {leagueDetails.map(league => <img className='league-logo' src={league.strBadge} alt=""/>)}
            <h4>{strLeague}</h4>
            <p>Sports Type Football</p>
            <button type='button' onClick={handleDetail}>Explore<ArrowForwardIcon className='icon'></ArrowForwardIcon></button>
        </div>
    );
};

export default LeagueCart;