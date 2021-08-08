import './TeamPage.scss'
import {React, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { MatchDetailCard } from '../components/MatchDetailCard'
import { MatchSmallCard } from '../components/MatchSmallCard'
import { PieChart } from 'react-minimal-pie-chart';


export const TeamPage = () => {

  const[team, setTeam] = useState({matches:[]});
  const {teamName} = useParams();
  useEffect(
    () => {
      const fetchMatches = async() => {
        const response = await fetch(`http://localhost:5099/team/${teamName}`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'matchesCount':4
          }
      })
      const data = await response.json();
      console.log(data)
      setTeam(data);
      
      };
      fetchMatches();
    }, [teamName]
  );

  if(!team || !team.teamName){
    console.log(team)
    return <h1>Team Not Found</h1>
  }
  return (
    <div className="TeamPage">
      <div className="team-name-section">
        <h1 className='team-name'>{team.teamName}</h1>
      </div>
      <div className="win-loss-section">
        <div className='win-loss'>Wins Losses</div>
        <PieChart
          data={[
            { title: 'Losses', value: team.totalMatches-team.totalWins, color: '#a34d5a' },
            { title: 'Wins', value: team.totalWins, color: '#4da372' }
           
          ]}
        />
      </div>
      <div className="latest-match-detail-section">
        <h3 className='latest-match-detail'>Latest Match Details</h3>
        <MatchDetailCard teamName= {team.teamName} match={team.matches[0]}/>
      </div>
      {team.matches.slice(1).map(match => <MatchSmallCard teamName= {team.teamName} match={match}/>)}
      <div className="more-link">
        <a href="#">More ></a>
      </div>
    </div>
  );
}

