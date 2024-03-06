function countCardPoints(input) {
    let players = {}

    input.forEach(element => {
        let [name, cards] = element.split(': ')
        cards = cards.split(', ')
        if (!players.hasOwnProperty(name)) {
            players[name] = cards
        } else {
            cards.forEach(newCard => {
                let isHere = players[name].indexOf(newCard)
                if (isHere < 0) {
                    players[name].push(newCard)
                }
            })
        }
    });

    players = Object.entries(players)

    for (let [player, desk] of players) {
        let sumOfCards = 0
        desk = new Set(desk)
        desk.forEach(currCard => {
            let power
            let type
            if (currCard.length > 2) {
                power = currCard[0] + currCard[1]
                type = currCard[2]
            } else {
                power = currCard[0];
                type = currCard[1]
            }
            let powerOfCard = Number(power)
            switch (type) {
                case 'S':
                    if (powerOfCard) {
                        sumOfCards += powerOfCard * 4
                    } else {
                        switch (power) {
                            case 'J':
                                sumOfCards += 11 * 4
                                break;
                            case 'Q':
                                sumOfCards += 12 * 4
                                break;
                            case 'K':
                                sumOfCards += 13 * 4
                                break;
                            case 'A':
                                sumOfCards += 14 * 4
                                break;
                        }
                    }

                    break;
                case 'H':
                    if (powerOfCard) {
                        sumOfCards += powerOfCard * 3
                    } else {
                        switch (power) {
                            case 'J':
                                sumOfCards += 11 * 3
                                break;
                            case 'Q':
                                sumOfCards += 12 * 3
                                break;
                            case 'K':
                                sumOfCards += 13 * 3
                                break;
                            case 'A':
                                sumOfCards += 14 * 3
                                break;
                        }
                    }

                    break;
                case 'D':
                    if (powerOfCard) {
                        sumOfCards += powerOfCard * 2
                    } else {
                        switch (power) {
                            case 'J':
                                sumOfCards += 11 * 2
                                break;
                            case 'Q':
                                sumOfCards += 12 * 2
                                break;
                            case 'K':
                                sumOfCards += 13 * 2
                                break;
                            case 'A':
                                sumOfCards += 14 * 2
                                break;
                        }
                    }

                    break;
                case 'C':
                    if (powerOfCard) {
                        sumOfCards += powerOfCard
                    } else {
                        switch (power) {
                            case 'J':
                                sumOfCards += 11
                                break;
                            case 'Q':
                                sumOfCards += 12
                                break;
                            case 'K':
                                sumOfCards += 13
                                break;
                            case 'A':
                                sumOfCards += 14
                                break;
                        }
                    }

                    break;

            }

        })

        console.log(`${player}: ${sumOfCards}`);
    }
}

countCardPoints([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
])