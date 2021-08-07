package com.arnavsaraf.ipldashboard.service;

import com.arnavsaraf.ipldashboard.model.Match;
import com.arnavsaraf.ipldashboard.model.Team;

import java.util.List;

public interface TeamService {

	/**
	 * 
	 * @param teamName
	 * @param matchesCount
	 * @return
	 * @throws Exception 
	 */
	Team getTeamData(String teamName,int matchesCount) throws Exception;

	/**
	 *
	 * @param teamName
	 * @param year
	 * @return
	 */
    List<Match> getTeamDataByYear(String teamName, int year);
}
