import { useState, useEffect } from 'react';
import usePlayGame from "../hooks/usePlayGame";
import useFindAll from "../hooks/useFindGame";
import { useParams } from 'react-router-dom';

export default function Game() {
    const { id } = useParams();
    const { gameData } = useFindAll(id);
    const [initialPlayers, setInitialPlayers] = useState([]);

    useEffect(() => {
        if (gameData && gameData.players) {
            const players = gameData.players.map(player => ({
                id: player.id,
                name: player.name,
                score: player.score
            }));
            setInitialPlayers(players);
        }
    }, [gameData]);

    const { Play, players, currentPlayer, gameOver, endTurn } = usePlayGame(initialPlayers);

    const [formData, setFormData] = useState({
        dice_number: '1',
    });

    const handleChange = (event) => {
        const { name, value } = event.target; 
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleRoll = () => {
        const dice_Count = Number(formData.dice_number); 
        if (dice_Count >= 1 && dice_Count <= 3) {  
            Play(dice_Count);
        }
    };

    const handleEndTurn = () => {
        endTurn();
    };

    return ( 
        <>
            <h1>BlackJack avec des dés</h1> 
            <br />
            <label htmlFor="dice_number">Nombre de Dés</label><br />
            <select name="dice_number" id="dice_number" value={formData.dice_number} onChange={handleChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <br /><br />
            <button onClick={handleRoll} disabled={gameOver}>Lancer</button> 
            <button onClick={handleEndTurn} disabled={gameOver}>Terminer le tour</button>
            <br /><br />
            <h2>Scores</h2>
            <ul>
                {players.map((player, index) => (
                    <li key={index}>{player.name}: {player.score}</li>
                ))}
            </ul>
            {gameOver && <h2>{players[currentPlayer].name} a gagné !</h2>}
        </>
    );
}
