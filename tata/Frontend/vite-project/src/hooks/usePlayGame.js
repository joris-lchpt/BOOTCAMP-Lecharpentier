import { useState, useEffect } from 'react';

export default function usePlayGame(initialPlayers) {
    const [players, setPlayers] = useState(initialPlayers);
    const [currentPlayer, setCurrentPlayer] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        setPlayers(initialPlayers);
    }, [initialPlayers]);

    const Play = (dice_number) => {
        let result = 0;

        for (let i = 0; i < dice_number; i++) {
            result += Math.floor((Math.random() * 6) + 1);
        }

        let newPlayers = [...players];
        newPlayers[currentPlayer].score += result;

        if (newPlayers[currentPlayer].score > 21) {
            newPlayers[currentPlayer].score = 0;
            nextPlayer();
        } else if (newPlayers[currentPlayer].score === 21) {
            setGameOver(true);
        }

        setPlayers(newPlayers);
        return result;
    };

    const nextPlayer = () => {
        setCurrentPlayer((prevPlayer) => (prevPlayer + 1) % players.length);
    };

    const endTurn = () => {
        nextPlayer();
    };

    return { players, currentPlayer, gameOver, Play, endTurn };
}
