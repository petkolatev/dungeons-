function exam6(input) {
    let capacity = Number(input.shift())
    let store = []

    let command = input.shift();

    while (command !== 'Statistics') {
        let tokens = command.split('=')
        let action = tokens.shift()

        if (action === 'Add') {
            let [name, sent, received] = tokens
            if (!store.hasOwnProperty(name)) {
                store[name] = {
                    sending: Number(sent),
                    received: Number(received)
                }
            }
        } else if (action === 'Message') {
            let [sender, receiver] = tokens
            if (store.hasOwnProperty(sender) && store.hasOwnProperty(receiver)) {
                store[sender].sending += 1
                store[receiver].received += 1
                if (store[sender].sending + store[sender].received >= capacity) {
                    console.log(`${sender} reached the capacity!`);
                    delete store[sender]
                }
                if (store[receiver].received + store[receiver].sending >= capacity) {
                    console.log(`${receiver} reached the capacity!`)
                    delete store[receiver]
                }
            }
        } else if (action === 'Empty') {
            let empty = tokens.shift();
            if (empty === 'All') {
                store = []
            } else {
                delete store[empty]
            }
        }
        command = input.shift()
    }
    store = Object.entries(store)
    console.log(`Users count: ${store.length}`)
    for (let [user, info] of store) {
        let totalMessag = info.sending + info.received
        console.log(`${user} - ${totalMessag}`);
    }
}
exam6(["12",
    "Add=Bonnie=3=5",
    "Add=Johny=4=4",
    "Empty=All",
    "Add=Bonnie=3=3",
    "Statistics"])