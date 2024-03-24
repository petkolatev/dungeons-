function adAstra(input) {
    let pattern = /([\|#])(?<prod>[A-Za-z ]+)\1(?<expdate>\d{2}\/\d{2}\/\d{2})\1(?<kcal>[\d]+)\1/gm
    let storeInfo = []
    let totalKcal = 0

    while ((valid = pattern.exec(input)) !== null) {
        let nameProd = valid.groups.prod
        let bestBefore = valid.groups.expdate
        let kcal = valid.groups.kcal
        totalKcal += Number(kcal)
        let currProdData = `Item: ${nameProd}, Best before: ${bestBefore}, Nutrition: ${kcal}`
        storeInfo.push(currProdData)
    }
    let totalDays = Math.floor(totalKcal / 2000)
    console.log(`You have food to last you for: ${totalDays} days!`);

    for (const iterator of storeInfo) {
        console.log(iterator);

    }

}
adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'])