package com.arnavsaraf.ipldashboard.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.arnavsaraf.ipldashboard.model.Team;
import com.arnavsaraf.ipldashboard.service.TeamService;

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

	@GetMapping("/team/{teamName}/matches/{year}")
	public Team getTeamData(@PathVariable("teamName") String teamName,
							@RequestHeader(value="matchesCount", required = true) int matchesCount,
							@PathVariable("year") int year) throws Exception{

		return teamService.getTeamDataByYear(teamName,matchesCount,year);
	}
	

}
