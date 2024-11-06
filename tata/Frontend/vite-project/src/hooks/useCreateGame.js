export default function useCreateGame() {

    const createGame = (game_name, name_list) => {
        return fetch("http://127.0.0.1:8000/api/create_games", {
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
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            return data.id;
        })
        .catch((reason) => {
            console.error(reason);
        });
    };

    return { createGame };
}