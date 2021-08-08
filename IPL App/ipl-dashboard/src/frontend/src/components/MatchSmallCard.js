import {React} from 'react'
import {Link} from 'react-router-dom'
import './MatchSmallCard.scss'

export const MatchSmallCard = ({teamName, match}) => {
  if (!match) return null;
  const otherTeam = match.team1 === teamName ? match.team2 : match.team1
  const otherteamRoute = `/teams/${otherTeam}`;
  const matchWon = teamName===match.matchWinner
  console.log(otherteamRoute)
    return (
      <div className={matchWon? 'MatchSmallCard won-card' : 'MatchSmallCard lost-card'}>
          <span className="vs">vs</span>
          <h3>
            <Link to={otherteamRoute}> {otherTeam}</Link>
          </h3>
          <h3 className='match-result'>{match.matchWinner} won by {match.resultMargin} {match.result}</h3>
      </div>
    );
  }