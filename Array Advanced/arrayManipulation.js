function numsayManipulation(nums, commands) {
    for (let command of commands) {
        let tokens = command.split(' ')
        let actions = tokens.shift();

        if (actions === 'add') {

            let idx = tokens.shift();
            let item = Number(tokens.shift())
            nums.splice(idx, 0, item)

        } else if (actions === 'addMany') {

            let idx = Number(tokens.shift())

            for (let item of tokens) {
                nums.splice(idx, 0, Number(item))
                idx++
            }

        } else if (actions === 'contains') {
            let item = Number(tokens.shift())
            let idx = nums.indexOf(item)
            console.log(idx);

        } else if (actions === 'remove') {
            let idx = Number(tokens.shift());
            nums.splice(idx, 1)

        } else if (actions === 'shift') {
            let idx = Number(tokens.shift());
            for (let start = 1; start <= idx; start++) {
                let tokensElement = nums.shift()
                nums.push(tokensElement)
            }
        } else if (actions === 'sumPairs') {
            let newsum = []
            for (let j = 0; j < nums.length; j += 2) {
                if (j + 1 < nums.length) {
                    let sum = nums[j] + nums[j + 1]
                    newsum.push(sum)
                } else {
                    newsum.push(nums[j])
                }
            }
            nums = newsum
        } else if (actions === 'print') {
            console.log(`[ ${nums.join(', ')} ]`);
        }

    }
}
// numsayManipulation([1, 2, 4, 5, 6, 7],
//     ['add 1 8', 'contains 1', 'contains 3', 'remove 3', 'print'])
numsayManipulation([2, 2, 4, 2, 4],
    ['add 1 4', "sumPairs", "print"])
// numsayManipulation([1, 2, 3, 4, 5],
//     ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print'])