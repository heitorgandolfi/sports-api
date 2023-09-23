const data = [
  {
    position: 1,
    team: "Equipe A",
    logo: "logo",
    PTS: 30,
    P: 10,
    W: 9,
    D: 0,
    L: 1,
    GF: 30,
    GA: 10,
    GD: 20,
    form: "WWWWW",
    nextMatch: "Opponent A",
  },
  {
    position: 2,
    team: "Equipe B",
    logo: "logo",
    PTS: 28,
    P: 10,
    W: 8,
    D: 2,
    L: 0,
    GF: 25,
    GA: 5,
    GD: 20,
    form: "WWDLW",
    nextMatch: "Opponent B",
  },
  {
    position: 3,
    team: "Equipe C",
    logo: "logo",
    PTS: 28,
    P: 10,
    W: 8,
    D: 2,
    L: 0,
    GF: 25,
    GA: 5,
    GD: 20,
    form: "WWDLW",
    nextMatch: "Opponent B",
  },
  {
    position: 4,
    team: "Equipe C",
    logo: "logo",
    PTS: 28,
    P: 10,
    W: 8,
    D: 2,
    L: 0,
    GF: 25,
    GA: 5,
    GD: 20,
    form: "WWDLW",
    nextMatch: "Opponent B",
  },
  {
    position: 5,
    team: "Equipe C",
    logo: "logo",
    PTS: 28,
    P: 10,
    W: 8,
    D: 2,
    L: 0,
    GF: 25,
    GA: 5,
    GD: 20,
    form: "WWDLW",
    nextMatch: "Opponent B",
  },
  {
    position: 6,
    team: "Equipe C",
    logo: "logo",
    PTS: 28,
    P: 10,
    W: 8,
    D: 2,
    L: 0,
    GF: 25,
    GA: 5,
    GD: 20,
    form: "WWDLW",
    nextMatch: "Opponent B",
  },
];

export function StandingTable() {
  return (
    <>
      <h1>Premier League LOGO</h1>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Team</th>
            <th>PTS</th>
            <th>P</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>GF</th>
            <th>GA</th>
            <th>GD</th>
            <th>Form</th>
            <th>Next Match</th>
          </tr>
        </thead>
        <tbody>
          {data.map((team) => (
            <tr key={team.position}>
              <td>{team.position}</td>
              <td>
                {team.logo} {team.team}
              </td>
              <td>{team.PTS}</td>
              <td>{team.P}</td>
              <td>{team.W}</td>
              <td>{team.D}</td>
              <td>{team.L}</td>
              <td>{team.GF}</td>
              <td>{team.GA}</td>
              <td>{team.GD}</td>
              <td>{team.form}</td>
              <td>{team.nextMatch}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
