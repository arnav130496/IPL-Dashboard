import './HomePage.scss'
import {React, useEffect, useState} from 'react'
import '../components/TeamTile'
import { TeamTile } from '../components/TeamTile'

export const HomePage = () => {

    const[team, setTeam] = useState([]);
    useEffect(
      () => {
        const fetchAllTeams = async() => {
          const backendIp = process.env.REACT_APP_BACKEND_ENDPOINT
          const response = await fetch(`${backendIp}/team`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'            }
        })
        const data = await response.json();
        setTeam(data);
        
        };
        fetchAllTeams();
      }, []
    );
    return (
      <div className="HomePage">
        <div className='page-heading'>
            <h1 className='app-name'>IPL Dashboard</h1>
        </div>
        
        <div className='team-grid'>
            {team.map(team => 
                <TeamTile key={team.id} teamName={team.teamName} />
            )}
        </div>
      </div>
    );
  }
  