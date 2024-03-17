function deckOfCards(input) {
    let cardsList = input.shift().split(", ");
    let n = input.shift();

    for (let i = 0; i <= input.length + 1; i++) {
        let command = input.shift();

        let [action, indexOne, indexTwo] = command.split(", ");


        switch (action) {
            case "Add":
                if (cardsList.includes(indexOne)) {
                    console.log("Card is already in the deck");
                } else {
                    cardsList.push(indexOne);
                    console.log("Card successfully added");
                }
                break;

            case "Remove":
                let itemIndex = cardsList.indexOf(indexOne);
                if (itemIndex !== -1) {
                    cardsList.splice(itemIndex, 1);

                    console.log("Card successfully removed");


                } else {

                    console.log("Card not found");

                }
                break;
            case "Remove At":
                if (indexOne < cardsList.length && indexOne > -1) {
                    console.log("Index out of range");
                } else {
                    cardsList.splice(indexOne, 1);
                    console.log("Card successfully removed");
                }
                break;
            case "Insert":
                if (cardsList.includes(indexTwo) && indexOne > -1 && indexOne <= cardsList.length) {
                    console.log("Card is already added");
                } else if (indexOne > cardsList.length || indexOne < 0) {
                    console.log("Index out of range");
                } else {
                    cardsList.splice(indexOne, 0, indexTwo);
                    console.log("Card successfully added");
                }
                break;
        }

    }

    console.log(cardsList.join(", "));
}
deckOfCards(["Ace of Diamonds, Queen of Hearts, King of Clubs",
    "3",
    "Add, King of Diamonds",
    "Insert, 2, Jack of Spades",
    "Remove, Ace of Diamonds"])