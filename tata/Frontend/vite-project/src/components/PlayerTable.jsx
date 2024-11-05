import PlayerRow from "./PlayerRow";   

const players =[
    {
      id: 1,
      score: 0,
      name: "toto",
    },
    {
        id: 2,
        score: 0,
        name: "toto2",
    },
  ]

export default function PlayerTable({ list }) {
    return (
        <table>
            <thead>
                <tr>
                    <td>id</td>
                    <td>name</td>
                    <td>score</td>
                </tr>
            </thead>
            <tbody>
                {
                    players.map((player)=> (
                    < PlayerRow key={player.id} list={player}/>
                ))
                }
            </tbody>
        </table>
    );
    
}