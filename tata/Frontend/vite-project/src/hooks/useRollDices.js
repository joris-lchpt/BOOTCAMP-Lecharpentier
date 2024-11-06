export default function useRollDices() {

    const roll = (dice_number) => {

        let result = 0;

        if (dice_number == 1) {
            result = Math.floor((Math.random() * 6) + 1)
        } 
        else if (dice_number == 2) {
            result = Math.floor((Math.random() * 6) + 1) +Math.floor((Math.random() * 6) + 1)
        } 
        else if (dice_number == 3){
            result = Math.floor((Math.random() * 6) + 1) + Math.floor((Math.random() * 6) + 1) + Math.floor((Math.random() * 6) + 1)
        }

        return result
    };

    return { roll }

}