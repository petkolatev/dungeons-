function buildaWall(wall) {
    wall.sort((a, b) => a - b)
    let smallestWall = wall[0]
    let progres = []
    let pessos = 0

    for (let i = smallestWall; i < 30; i++) {

        let buildFoot = 0;
        let cubikPerDay = 0;
        wall = wall.filter(n => n < 30)
        wall = wall.map(n => n + 1)

        buildFoot = wall.length
        cubikPerDay = buildFoot * 195
        pessos += cubikPerDay * 1900
        progres.push(' ' + cubikPerDay)

    }

    console.log(progres.join(','));
    console.log(`${pessos} pesos`);
}
buildaWall([17, 22, 17, 19, 17])