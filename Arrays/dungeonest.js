function dungeonest(array) {
    let newArray = array[0].split('|')
    let totNewArray = []
    let healt = 100
    let coins = 0
    let currHealt = 100
    let roomCount = 0

    for (let i = 0; i < newArray.length; i++) {
        let abs = newArray[i].split(' ')
        totNewArray += abs + ','

        for (let j = 0; j < abs.length; j += 2) {
            let currElement = abs[j]
            let point = abs[j + 1]
            switch (currElement) {
                case 'potion':
                    roomCount++
                    if (healt < 100) {
                        currHealt = 100 - healt
                        healt += Number(point)
                        if (healt > 100) {
                            console.log(`You healed for ${currHealt} hp.`);
                            healt = 100
                        } else {
                            console.log(`You healed for ${point} hp.`)
                        }
                    }
                    console.log(`Current health: ${healt} hp.`);
                    break;
                case 'chest':
                    roomCount++
                    if (healt > 0) {
                        coins += Number(point)
                        console.log(`You found ${point} coins.`);
                    }
                    break;
                default:
                    roomCount++
                    healt -= Number(point)
                    if (healt > 0) {
                        console.log(`You slayed ${currElement}.`
                        );
                    } else {
                        console.log(`You died! Killed by ${currElement}.`);
                        console.log(`Best room: ${roomCount}`);
                        return
                    }

            }
        }

    }
    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${healt}`);
}