package com.arnavsaraf.ipldashboard.data;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.batch.item.ItemProcessor;
import com.arnavsaraf.ipldashboard.model.Match;

/**
 * Item Processor gets an input and produces an output, spring batch will pickup the output and persist/manage the data
 * */
public class MatchDataProcessor implements ItemProcessor<MatchInput, Match> {

	  private static final Logger log = LoggerFactory.getLogger(MatchDataProcessor.class);
	  DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");

	  @Override
	  public Match process(final MatchInput matchInputData) throws Exception {
		  
		Match match = new Match();
		match.setId(Long.parseLong(matchInputData.getId()));
		
		/**
		 * Set team1 and team2 in innings order
		 */
		String firstInningsTeam = null, secondInningsTeam = null;
		
		if(matchInputData.getToss_decision().equalsIgnoreCase("bat")) {
			firstInningsTeam = matchInputData.getToss_winner();
			secondInningsTeam = matchInputData.getToss_winner().equals(matchInputData.getTeam1())
					? matchInputData.getTeam2() : matchInputData.getTeam1();
		}
		else if(matchInputData.getToss_decision().equalsIgnoreCase("field")) {
			secondInningsTeam = matchInputData.getToss_winner();
			firstInningsTeam = matchInputData.getToss_winner().equals(matchInputData.getTeam1())
					? matchInputData.getTeam2() : matchInputData.getTeam1();
			
		}
		
		match.setTeam1(firstInningsTeam);
		match.setTeam2(secondInningsTeam);
		
		match.setVenue(matchInputData.getVenue());
		match.setCity(matchInputData.getCity());
		match.setPlayerOfMatch(matchInputData.getPlayer_of_match());
		match.setMatchWinner(matchInputData.getWinner());
		match.setTossWinner(matchInputData.getToss_winner());
		match.setTossDecision(matchInputData.getToss_decision());
		match.setResult(matchInputData.getResult());
		match.setResultMargin(matchInputData.getResult_margin());
		match.setUmpire1(matchInputData.getUmpire1());
		match.setUmpire2(matchInputData.getUmpire2());
		match.setDate(LocalDate.parse(matchInputData.getDate(), dateTimeFormatter));	
		
		log.info("Converting (" + matchInputData + ") into (" + match + ")");
		
		return match;
			  
	  }

	}
