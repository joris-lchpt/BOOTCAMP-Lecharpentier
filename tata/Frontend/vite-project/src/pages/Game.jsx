import { useState } from 'react';
import usePlayGame from "../hooks/usePlayGame";
import useFindAll from "../hooks/useFindGame";
import { useParams } from 'react-router-dom';

export default function Game() {
    const { Play } = usePlayGame();
    const { id } = useParams();
    const { gameData } = useFindAll(id);

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

    //console.log(id)
    console.log({gameData})


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