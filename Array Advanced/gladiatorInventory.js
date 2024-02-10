function gladiatorInventory(commands) {
    let inventory = commands.shift().split(' ')
    for (let command of commands) {
        let tokens = command.split(' ')
        let action = tokens.shift();
        let item = tokens.shift();

        if (action === 'Buy') {
            let idx = inventory.indexOf(item);
            if (idx < 0) {
                inventory.push(item);
            }
        } else if (action === 'Trash') {
            let idx = inventory.indexOf(item);
            if (idx >= 0) {
                inventory.splice(idx, 1);

            }

        } else if (action === 'Repair') {
            let idx = inventory.indexOf(item);
            if (idx >= 0) {
                inventory.splice(idx, 1);
                inventory.push(item)
            }

        } else if (action === 'Upgrade') {
            let upgrade = item.split('-')
            item = upgrade.shift();

            let idx = inventory.indexOf(item);
            if (idx >= 0) {
                let upr = item + ':' + upgrade
                inventory.splice(idx + 1, 0, upr);

            }
        }
    }
    console.log(inventory.join(' '));
}
gladiatorInventory(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V'])