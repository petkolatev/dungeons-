function radioCrystals(array) {
    let targetThickness = array[0];

    for (let i = 1; i < array.length; i++) {
        let currThickness = array[i]
        console.log(`Processing chunk ${currThickness} microns`);
        let operation = 'first';
        let command = ' ';
        let cut = 0;
        let lap = 0;
        let grid = 0;
        let etch = 0;
        let xray = 0;
        while (command !== 'stop') {


            if (currThickness / 4 >= targetThickness) {
                currThickness = cutCrystal(currThickness)
                operation = 'cut'
                cut++
            } else if (currThickness - currThickness * 0.2 >= targetThickness) {
                if (operation !== 'lap' || operation === 'first') {
                    currThickness = transportAndWashCrystal(currThickness)
                }
                currThickness = lapCrystal(currThickness)
                operation = 'lap'
                lap++
            } else if (currThickness - 20 >= targetThickness) {
                if (operation !== 'grid' || operation === 'first') {
                    currThickness = transportAndWashCrystal(currThickness)
                }
                currThickness = gridCrystal(currThickness)
                operation = 'grid'
                grid++
            } else if (currThickness > targetThickness) {
                if (operation !== 'etch' || operation === 'first') {
                    currThickness = transportAndWashCrystal(currThickness)
                }
                currThickness = etchCrystal(currThickness)
                operation = 'etch'
                etch++
            }
            if (targetThickness - 1 === currThickness) {
                if (operation !== 'xray' || operation === 'first') {
                    currThickness = transportAndWashCrystal(currThickness)
                }
                currThickness = xrayCrystal(currThickness)
                operation = 'xray'
                xray++
            }
            if (targetThickness === currThickness) {
                command = 'stop';


            }
        }
        if (cut > 0) {
            console.log(`Cut x${cut}`);
            console.log(`Transporting and washing`);
        }
        if (lap > 0) {
            console.log(`Lap x${lap}`);
            console.log(`Transporting and washing`);
        }
        if (grid > 0) {
            console.log(`Grind x${grid}`);
            console.log(`Transporting and washing`);
        }
        if (etch > 0) {
            console.log(`Etch x${etch}`);
            console.log(`Transporting and washing`);
        }
        if (xray > 0) {
            console.log(`X-ray x${xray}`);
        }
        if (targetThickness === currThickness) {
            console.log(`Finished crystal ${currThickness} microns`);
        }



        function cutCrystal(num) {
            let newThickness = num / 4
            return newThickness
        }
        function lapCrystal(num) {
            let newThickness = num - num * 0.2
            return newThickness
        }
        function gridCrystal(num) {
            let newThickness = num - 20
            return newThickness
        }
        function etchCrystal(num) {
            let newThickness = num - 2
            return newThickness
        }
        function xrayCrystal(num) {
            let newThickness = num + 1
            return newThickness
        }
        function transportAndWashCrystal(num) {
            let newThickness = Math.floor(num)
            return newThickness
        }

    }
}
radioCrystals([1375, 50000])
// radioCrystals([1000, 4000, 8100])


