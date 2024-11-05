export default function useCreateGame() {

    const createGame = () => {
        fetch("http://127.0.0.1:8000/api/docs", {
            method: "POST",
            body: {
                name: "game_name",
                players: ["toto", "tata"],
            },
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