import {React, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { MatchDetailCard } from '../components/MatchDetailCard';
import { YearSelector } from '../components/YearSelector';
import './MatchPage.scss'

export const MatchPage = () => {

    const[matches, setMatches] = useState([])
    const {teamName,year} = useParams();
    useEffect(
        () => {
          const fetchMatches = async() => {
            const backendIp = process.env.REACT_APP_BACKEND_ENDPOINT
            const response = await fetch(`${backendIp}/team/${teamName}/matches?year=${year}`, {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json'
              }
          }
          )
          const data = await response.json();
          setMatches(data);
          
          };
          fetchMatches();
        }, [teamName,year]
      );

    if(!matches || !year){
        return <h1>Invalid Match Data</h1>
    }
    return (
      <div className="MatchPage">
          <div className='year-selector'>
            <h3>Select Year</h3>
            <YearSelector teamName={teamName}/>
          </div>
          
          <div className='match-details-section'>
            <h1 className='page-heading'>{teamName} matches in {year}</h1>
            <MatchDetailCard />
            {
                matches.map(match => <MatchDetailCard key={match.id} teamName= {teamName} match={match}/>)
            }
          </div>
         
          
      </div>
    );
}