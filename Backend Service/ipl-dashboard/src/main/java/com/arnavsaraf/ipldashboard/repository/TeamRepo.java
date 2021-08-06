package com.arnavsaraf.ipldashboard.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.arnavsaraf.ipldashboard.model.Team;

@Repository
public interface TeamRepo extends JpaRepository<Team, Long> {

	@Query(value = "SELECT * from Team where team_name= ?1", nativeQuery= true)
	public Team findByTeamName(String teamName);
}
