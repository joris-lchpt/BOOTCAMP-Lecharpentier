import { useState } from 'react';
import useCreateGame from "../hooks/useCreateGame";
import { useNavigate} from "react-router-dom"

export default function Home() {
    const { createGame } = useCreateGame();
    const navigate = useNavigate()
    let name_list = []
    
    const [formData, setFormData] = useState({
        game_name: '',
        p1_name: '',
        p2_name: '',
        p3_name: '',
        p4_name: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target; 
        setFormData({
            ...formData,       // Copier les valeurs existantes
            [name]: value
        });
    };


    function start() {

        if (formData.p1_name !== null && formData.p1_name !== undefined && formData.p1_name !== '' && formData.p1_name.length >= 3) {name_list.push(formData.p1_name)}

        if (formData.p2_name !== null && formData.p2_name !== undefined && formData.p2_name !== '' && formData.p2_name.length >= 3) {name_list.push(formData.p2_name)}
    
        if (formData.p3_name !== null && formData.p3_name !== undefined && formData.p3_name !== '' && formData.p3_name.length >= 3) {name_list.push(formData.p3_name)}
    
        if (formData.p4_name !== null && formData.p4_name !== undefined && formData.p4_name !== '' && formData.p4_name.length >= 3) {name_list.push(formData.p4_name)}
    
        if (name_list.length >= 2 && formData.game_name !== '') {
            console.log(formData.game_name)
            console.log(name_list)
            
            createGame(formData.game_name, name_list).then((gameId) => {
                if (gameId) {
                    navigate(`/game/${gameId}`);
                }
            });
        }
        else if (formData.game_name == '') {
            alert('Nom de partie obligatoire')
        }
        else if (name_list.length < 2){
            alert('Les pseudos doivent avoir 3 caractères au minimum \n2 joueurs minimum requis')
        }

        name_list =[]
    }

    return ( 
        <>
            <h1>BlackJack</h1>
            <ul>
                <label htmlFor="game_name">Nom de la Partie</label>
                <li><input type="text" name="game_name" id="game_name" placeholder="Game name" value={formData.game_name} onChange={handleChange}/></li>
                <br />
                <br />
                <label htmlFor="game_name">Joueur 1</label>
                <li><input type="text" name="p1_name" id="p1_name" placeholder="Player 1 name" value={formData.p1_name} onChange={handleChange}/></li>
                <label htmlFor="game_name">Joueur 2</label>
                <li><input type="text" name="p2_name" id="p2_name" placeholder="Player 2 name" value={formData.p2_name} onChange={handleChange}/></li>
                <label htmlFor="game_name">Joueur 3</label>
                <li><input type="text" name="p3_name" id="p3_name" placeholder="Player 3 name" value={formData.p3_name} onChange={handleChange}/></li>
                <label htmlFor="game_name">Joueur 4</label>
                <li><input type="text" name="p4_name" id="p4_name" placeholder="Player 4 name" value={formData.p4_name} onChange={handleChange}/></li>
            </ul>
            
            {/*<button onClick={() => console.log(name_list)}></button>*/}
            <br />
            <button onClick={() => start()}>Jouer</button>
        
        </>
    )
}