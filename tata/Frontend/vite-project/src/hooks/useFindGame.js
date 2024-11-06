import { useState, useEffect } from 'react';

export default function useFindAll(game_id) {
    const [gameData, setGameData] = useState({});  

    const Find = () => {
        fetch(`http://localhost:8000/api/game/${game_id}`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
        .then((response) => response.json())
        .then((data) => {
            setGameData(data);  
        })
        .catch((reason) => {
            console.error(reason);
            setGameData(null); 
        });
    };

    useEffect(() => {
        Find();
    },[game_id]);

    
    return { gameData };
}

