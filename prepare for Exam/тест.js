function gabi(input) {
    let command = input.shift();
    let store = []
    while (command !== 'Log out') {
        let tokens = command.split(': ')
        let action = tokens.shift();
        if (action === 'New follower') {
            let user = tokens.shift()
            if (!store.hasOwnProperty(user)) {
                store[user] = {
                    like: 0,
                    comment: 0
                }
            }

        } else if (action === 'Like') {
            let [user, likes] = tokens
            if (!store.hasOwnProperty(user)) {
                store[user] = {
                    like: Number(likes),
                    comment: 0
                }
            } else {
                store[user].like += Number(likes)
            }
        } else if (action === 'Comment') {
            let user = tokens.shift()
            if (!store.hasOwnProperty(user)) {
                store[user] = {
                    comment: 1,
                    like: 0
                }
            } else {
                store[user].comment += 1

            }
        } else if (action === 'Blocked') {
            let user = tokens.shift()
            if (store.hasOwnProperty(user)) {
                delete store[user]
            } else {
                console.log(`${user} doesn't exist.`);
            }
        }

        command = input.shift()
    }
    store = Object.entries(store)
    console.log(`${store.length} followers`);
    for (let [user, info] of store) {

        let total = info.like + info.comment
        console.log(`${user}: ${total}`);

    }
}
gabi(["Blocked: Amy",
    "Comment: Amy",
    "New follower: Amy",
    "Like: Tom: 5",
    "Like: Ellie: 5",
    "Log out"])