import './MatchDetailCard.scss'
import {React} from 'react'
import {Link} from 'react-router-dom'

export const MatchDetailCard = ({teamName, match}) => {
  if (!match) return null;
    const otherTeam = match.team1 === teamName ? match.team2 : match.team1
    const otherteamRoute = `/teams/${otherTeam}`;
    const matchWon = teamName === match.matchWinner 
    console.log(otherTeam)
    return (
      <div className={matchWon? 'MatchDetailCard won-card' : 'MatchDetailCard lost-card'}>
          <div className='main-match-data'>
            <Link to={otherteamRoute}>
            <span>vs</span>
            <h1>{otherTeam}</h1></Link>
            <h2 className='match-date'>{match.date}</h2>
            <h3 className='match-venue'>at {match.venue} in {match.city}</h3>
            <h3 class='match-result'>{match.matchWinner} won by {match.resultMargin} {match.result}</h3>
          </div>
          <div className='additional-match-data'>
            <h3>First Innings</h3>
            <p>{match.team1}</p>
            <h3>Second Innings</h3>
            <p>{match.team2}</p>
            <h3>Man of the Match</h3>
            <p>{match.playerOfMatch}</p>
            <h3>Umpires</h3>
            <p>{match.umpire1}, {match.umpire2}</p>
          </div>
          
      </div>
    );
  }