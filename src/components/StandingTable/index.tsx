import { TableSubTitle } from "./Subtitles/Subtitles";
import { TableWrapper, InfosLeagueWrapper, Table, FormInfo } from "./style";

const data = [
  {
    position: 1,
    team: "Manchester City",
    logo: "logo",
    PTS: 86,
    P: 38,
    W: 27,
    D: 5,
    L: 6,
    GF: 83,
    GA: 32,
    GD: 51,
    form: "WWLWL",
    nextMatch: "A",
  },
  {
    position: 2,
    team: "Manchester United",
    logo: "logo",
    PTS: 74,
    P: 38,
    W: 21,
    D: 11,
    L: 6,
    GF: 73,
    GA: 44,
    GD: 29,
    form: "WLWDW",
    nextMatch: "B",
  },
  {
    position: 3,
    team: "Liverpool",
    logo: "logo",
    PTS: 69,
    P: 38,
    W: 20,
    D: 9,
    L: 9,
    GF: 68,
    GA: 42,
    GD: 26,
    form: "WWDLW",
    nextMatch: "C",
  },
  {
    position: 4,
    team: "Chelsea",
    logo: "logo",
    PTS: 67,
    P: 38,
    W: 19,
    D: 10,
    L: 9,
    GF: 58,
    GA: 36,
    GD: 22,
    form: "WDWLW",
    nextMatch: "D",
  },
  {
    position: 5,
    team: "Leicester City",
    logo: "logo",
    PTS: 66,
    P: 38,
    W: 20,
    D: 6,
    L: 12,
    GF: 68,
    GA: 50,
    GD: 18,
    form: "LDLWL",
    nextMatch: "E",
  },
  {
    position: 6,
    team: "West Ham",
    logo: "logo",
    PTS: 65,
    P: 38,
    W: 19,
    D: 8,
    L: 11,
    GF: 62,
    GA: 47,
    GD: 15,
    form: "WWDWW",
    nextMatch: "F",
  },
  {
    position: 7,
    team: "Tottenham",
    logo: "logo",
    PTS: 62,
    P: 38,
    W: 18,
    D: 8,
    L: 12,
    GF: 68,
    GA: 45,
    GD: 23,
    form: "WLWWL",
    nextMatch: "G",
  },
  {
    position: 8,
    team: "Arsenal",
    logo: "logo",
    PTS: 61,
    P: 38,
    W: 18,
    D: 7,
    L: 13,
    GF: 55,
    GA: 39,
    GD: 16,
    form: "LWWLW",
    nextMatch: "H",
  },
  {
    position: 9,
    team: "Leeds United",
    logo: "logo",
    PTS: 59,
    P: 38,
    W: 18,
    D: 5,
    L: 15,
    GF: 62,
    GA: 54,
    GD: 8,
    form: "LWLLW",
    nextMatch: "I",
  },
  {
    position: 10,
    team: "Everton",
    logo: "logo",
    PTS: 59,
    P: 38,
    W: 17,
    D: 8,
    L: 13,
    GF: 47,
    GA: 48,
    GD: 1,
    form: "WWLDL",
    nextMatch: "J",
  },
  {
    position: 11,
    team: "Aston Villa",
    logo: "logo",
    PTS: 55,
    P: 38,
    W: 15,
    D: 10,
    L: 13,
    GF: 51,
    GA: 46,
    GD: 5,
    form: "DLDLW",
    nextMatch: "K",
  },
  {
    position: 12,
    team: "Newcastle United",
    logo: "logo",
    PTS: 45,
    P: 38,
    W: 12,
    D: 9,
    L: 17,
    GF: 46,
    GA: 54,
    GD: -8,
    form: "LDDWL",
    nextMatch: "L",
  },
  {
    position: 13,
    team: "Wolverhampton",
    logo: "logo",
    PTS: 45,
    P: 38,
    W: 12,
    D: 9,
    L: 17,
    GF: 40,
    GA: 58,
    GD: -18,
    form: "WDDLL",
    nextMatch: "M",
  },
  {
    position: 14,
    team: "Crystal Palace",
    logo: "logo",
    PTS: 44,
    P: 38,
    W: 12,
    D: 8,
    L: 18,
    GF: 41,
    GA: 66,
    GD: -25,
    form: "LDWDL",
    nextMatch: "N",
  },
  {
    position: 15,
    team: "Southampton",
    logo: "logo",
    PTS: 43,
    P: 38,
    W: 12,
    D: 7,
    L: 19,
    GF: 47,
    GA: 68,
    GD: -21,
    form: "WDLWL",
    nextMatch: "O",
  },
  {
    position: 16,
    team: "Burnley",
    logo: "logo",
    PTS: 39,
    P: 38,
    W: 10,
    D: 9,
    L: 19,
    GF: 33,
    GA: 55,
    GD: -22,
    form: "LLDLD",
    nextMatch: "P",
  },
  {
    position: 17,
    team: "Brighton",
    logo: "logo",
    PTS: 39,
    P: 38,
    W: 9,
    D: 12,
    L: 17,
    GF: 40,
    GA: 46,
    GD: -6,
    form: "DDLDW",
    nextMatch: "Q",
  },
  {
    position: 18,
    team: "Fulham",
    logo: "logo",
    PTS: 28,
    P: 38,
    W: 5,
    D: 13,
    L: 20,
    GF: 27,
    GA: 53,
    GD: -26,
    form: "LWLLL",
    nextMatch: "R",
  },
  {
    position: 19,
    team: "West Bromwich",
    logo: "logo",
    PTS: 26,
    P: 38,
    W: 5,
    D: 11,
    L: 22,
    GF: 35,
    GA: 76,
    GD: -41,
    form: "LLLDL",
    nextMatch: "S",
  },
  {
    position: 20,
    team: "Sheffield United",
    logo: "logo",
    PTS: 23,
    P: 38,
    W: 6,
    D: 5,
    L: 27,
    GF: 20,
    GA: 63,
    GD: -43,
    form: "LDLLL",
    nextMatch: "T",
  },
];

export function StandingTable() {
  return (
    <TableWrapper>
      <InfosLeagueWrapper>
        <h3>logo da liga</h3>
        <h1>Premier League</h1>
        <span>bandeira do país da liga</span>
      </InfosLeagueWrapper>

      <Table>
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
              <FormInfo>{team.form}</FormInfo>
              <td>{team.nextMatch}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <TableSubTitle />
    </TableWrapper>
  );
}
