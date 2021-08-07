package com.arnavsaraf.ipldashboard.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.arnavsaraf.ipldashboard.model.Match;

@Repository
public interface MatchRepo extends JpaRepository<Match, Long> {
	
	@Query(value = "SELECT * from Match where team1= ?1 or team2= ?1 order by date desc", nativeQuery= true)
	public List<Match> findLatestMatchesByName(String teamName, Pageable pageable);

	@Query(value = "SELECT * from Match where (team1= ?1 or team2= ?1) and (date>= ?2 and date<= ?3) order by date desc", nativeQuery= true)
	public List<Match> findTeamMatchesByYear(String teamName, LocalDate startDate, LocalDate endDate);

	/**
	 *
	 * @param teamName1
	 * @param startDate1
	 * @param endDate1
	 * @param teamName2
	 * @param startDate2
	 * @param endDate2
	 * @return
	 */
	public List<Match> getByTeam1AndDateBetweenOrTeam2AndDateBetweenOrderByDateDesc(
			String teamName1, LocalDate startDate1, LocalDate endDate1,
			String teamName2, LocalDate startDate2, LocalDate endDate2);
}
