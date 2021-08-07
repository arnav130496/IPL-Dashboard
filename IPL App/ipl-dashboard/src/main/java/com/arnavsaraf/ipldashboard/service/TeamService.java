package com.arnavsaraf.ipldashboard.service;

import com.arnavsaraf.ipldashboard.model.Team;

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
	 * @param matchesCount
	 * @param year
	 * @return
	 */
    Team getTeamDataByYear(String teamName, int matchesCount, int year);
}
