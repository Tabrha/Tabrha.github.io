

/*Be sure to use meaningful variable names.  
Try to use map and reduce in your functions as appropriate. */
 export{ player3, teamStats, findTotalScores, findTotalPlayerPoints, findTotalPointsByJersey }

type Player = {
    jersey: number;
    stats: Stats[];
}

type Stats = {
    game: number;
    points: number;
}

type JerseyPoints = {
    jersey: number;
    total: number;
}

 const player1: Player = { jersey: 8, stats: [{ game: 1, points: 6 }, { game: 2, points: 7 }] };
 const player2: Player = { jersey: 12, stats: [{ game: 1, points: 16 }, { game: 2, points: 14 }] };
 const player3: Player = { jersey: 6, stats: [{ game: 1, points: 10 }, { game: 2, points: 6 }] };
 const teamStats: Player[] = [player1, player2, player3];

/**
 * Calculates the total points for a given player.
 * @param {Player} player - The player object.
 * @returns {number} - The total points for the player.
 */
 function findTotalPlayerPoints(player: Player): number {
    return player.stats.reduce((total, game) => total + game.points, 0);
}

/**
 * Calculates the total points for all games played by a player with a given jersey number.
 * @param {number} jerseyNumber - The jersey number of the player.
 * @returns {number} - The total points for the player with the specified jersey number.
 */
 function findTotalPointsByJersey(jerseyNumber: number): number {
    const player = teamStats.find(player => player.jersey === jerseyNumber);
    if (player) {
        return findTotalPlayerPoints(player);
    } else {
        return 0; // Return 0 if no player with the specified jersey number is found.
    }
}

/**
 * Calculates the total points for all players and organizes the result by jersey number.
 * @param {Player[]} teamStats - An array of player objects.
 * @returns {JerseyPoints[]} - An array of objects containing jersey numbers and corresponding total points.
 */
 function findTotalScores(teamStats: Player[]): JerseyPoints[] {
    return teamStats.map(player => ({
        jersey: player.jersey,
        total: findTotalPlayerPoints(player)
    }));
}
