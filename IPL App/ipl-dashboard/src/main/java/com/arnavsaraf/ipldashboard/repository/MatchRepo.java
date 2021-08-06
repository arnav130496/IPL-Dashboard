package com.arnavsaraf.ipldashboard.repository;

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
}
