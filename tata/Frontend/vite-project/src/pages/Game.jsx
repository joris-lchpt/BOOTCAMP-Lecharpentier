import { useState } from 'react';
import usePlayGame from "../hooks/usePlayGame"

export default function Game() {
    const { Play } = usePlayGame();
    const blackjack = 21

    const [formData, setFormData] = useState({
        dice_number: '1',
    });

    const handleChange = (event) => {
        const { name, value } = event.target; 
        setFormData({
            ...formData,       // Copier les valeurs existantes
            [name]: value
        });
    };

    const handleRoll = () => {
        const dice_Count = Number(formData.dice_number); 
        if (dice_Count >= 1 && dice_Count <= 3) {  
            console.log(Play(dice_Count));
        }
    }


    return ( 
        <>
            <h1>BlackJack</h1> 
            <br />
            <label htmlFor="dice_number"> Nombre de Dés</label><br />
            <select name="dice_number" id="dice_number" value={formData.dice_number} onChange={handleChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <br /><br />
            <button onClick={handleRoll}>Lancer</button> 
        </> 
    )
}