export default function useCreateGame(game_name, name_list) {

    const createGame = () => {
        fetch("http://127.0.0.1:8000/api/create_games", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type":  "application/json",
            },
            body: JSON.stringify({
                name: game_name,
                players: name_list,
            }),
        })
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            console.log(response);
        })
        .catch((reason) => {
            console.error(reason);
        });
    };

    return { createGame };
}