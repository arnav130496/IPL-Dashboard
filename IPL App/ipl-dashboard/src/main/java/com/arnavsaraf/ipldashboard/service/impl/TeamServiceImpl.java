package com.arnavsaraf.ipldashboard.service.impl;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.arnavsaraf.ipldashboard.model.Match;
import com.arnavsaraf.ipldashboard.model.Team;
import com.arnavsaraf.ipldashboard.repository.MatchRepo;
import com.arnavsaraf.ipldashboard.repository.TeamRepo;
import com.arnavsaraf.ipldashboard.service.TeamService;
import com.arnavsaraf.ipldashboard.util.exception.NotFoundException;

@Service
public class TeamServiceImpl implements TeamService {

	private TeamRepo teamRepo;
	private MatchRepo matchRepo;
	
	public TeamServiceImpl(TeamRepo teamRepo,MatchRepo matchRepo) {
		this.teamRepo=teamRepo;
		this.matchRepo=matchRepo;
	}

	@Override
	public Team getTeamData(String teamName, int matchesCount) throws Exception {
		
		Team team = teamRepo.findByTeamName(teamName);
		
		if(team==null) {
			throw new NotFoundException("Could not find any team with name " + teamName);
		}
		
		Pageable pageable = PageRequest.of(0, matchesCount);
		
		List<Match> latestMatches = matchRepo.findLatestMatchesByName(teamName,pageable);
		team.setMatches(latestMatches);
		return team;
	}

	@Override
	public List<Match> getTeamDataByYear(String teamName, int year) {
		LocalDate startDate = LocalDate.of(year,1,1);
		LocalDate endDate = LocalDate.of(year+1,1,1);
		List<Match> matchesOfTeam = matchRepo.findTeamMatchesByYear(teamName,startDate,endDate);
		return matchesOfTeam;
	}

}
