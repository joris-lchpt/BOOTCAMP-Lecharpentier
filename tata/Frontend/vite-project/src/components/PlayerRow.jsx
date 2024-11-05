export default function PlayerRow({ list }) {
    return (
        <tr>
            <td>{list.id}</td>
            <td>{list.name}</td>
            <td>{list.score}</td>
        </tr>
    )
    
}