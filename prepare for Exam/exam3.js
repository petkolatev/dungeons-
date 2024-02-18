function angryCat(priceRatin, position, value) {

    let leftsum = 0
    let rigthsum = 0

    for (let i = 0; i < position; i++) {
        let currleft = Number(priceRatin[i])
        if (value === 'cheap') {
            if (currleft < priceRatin[position]) {
                leftsum += currleft
            }
        }
        if (value === 'expensive') {
            if (currleft >= priceRatin[position]) {
                leftsum += currleft
            }
        }
    }

    for (let j = priceRatin.length - 1; j > position; j--) {
        let currRight = Number(priceRatin[j])
        if (value === 'cheap') {
            if (currRight < priceRatin[position]) {
                rigthsum += currRight
            }
        }
        if (value === 'expensive') {
            if (currRight >= priceRatin[position]) {
                rigthsum += currRight
            }
        }

    }
    if (leftsum >= rigthsum) {
        console.log(`Left - ${leftsum}`);
    } else {
        console.log(`Right - ${rigthsum}`);
    }
}

angryCat([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3],
    7,
    "expensive")