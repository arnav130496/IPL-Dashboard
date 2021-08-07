import {React, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { MatchDetailCard } from '../components/MatchDetailCard';

export const MatchPage = () => {

    const[matches, setMatches] = useState([])
    const {teamName,year} = useParams();
    useEffect(
        () => {
          const fetchMatches = async() => {
            const response = await fetch(`http://localhost:5099/team/${teamName}/matches?year=${year}`, {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json'
              }
          }
          )
          const data = await response.json();
          console.log(data)
          setMatches(data);
          
          };
          fetchMatches();
        }, [teamName,year]
      );

    if(!matches || !year){
        console.log(matches, year)
        console.log(teamName)
        console.log(year)
        return <h1>Invalid Match Data</h1>
    }
    return (
      <div className="MatchPage">
          <h1>Matches Page</h1>
          <h2>{teamName}</h2>
          <MatchDetailCard />
          {
              matches.map(match => <MatchDetailCard teamName= {teamName} match={match}/>)
          }
          
      </div>
    );
}