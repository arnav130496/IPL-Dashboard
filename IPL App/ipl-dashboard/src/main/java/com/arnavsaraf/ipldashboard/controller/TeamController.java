package com.arnavsaraf.ipldashboard.controller;

import com.arnavsaraf.ipldashboard.model.Match;
import org.springframework.web.bind.annotation.*;

import com.arnavsaraf.ipldashboard.model.Team;
import com.arnavsaraf.ipldashboard.service.TeamService;

import java.util.List;

@RestController
@CrossOrigin
public class TeamController {
	
	private TeamService teamService;

	public TeamController(TeamService teamService) {
		this.teamService=teamService;
	}
	
	@GetMapping("/team/{teamName}")
	public Team getTeamData(@PathVariable("teamName") String teamName, 
			@RequestHeader(value="matchesCount", required = true) int matchesCount) throws Exception{
		
		return teamService.getTeamData(teamName,matchesCount);
	}

	@GetMapping("/team/{teamName}/matches")
	public List<Match> getTeamDataByYear(@PathVariable("teamName") String teamName,
								   @RequestParam(value="year", required = true) int year) throws Exception{

		return teamService.getTeamDataByYear(teamName,year);
	}
	

}
