import {React} from 'react'
import {Link} from 'react-router-dom'

export const MatchDetailCard = ({teamName, match}) => {
  if (!match) return null;
    const otherTeam = match.team1 === teamName ? match.team2 : match.team1
    const otherteamRoute = `/teams/${otherTeam}`;
    console.log(otherTeam)
    return (
      <div className="MatchDetailCard">
          <h3>Latest Match Details</h3>
          <Link to={otherteamRoute}><h1>vs {otherTeam}</h1></Link>
          <h2>{match.date}</h2>
          <h3>at {match.venue} in {match.city}</h3>
          <h3>{match.matchWinner} won by {match.resultMargin} {match.result}</h3>
      </div>
    );
  }