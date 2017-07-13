export default {
    sayHiToFairy: () => {
        return ''
    },

    partyAfterSayHiToFairy: () => {
        // TODO: the 'Fairy' is coming with you, please add her
        // to your party (consider Fairy is 'Fairy')
        return ['You']
    },

    attackWithAWeapon: () => {
        // TODO: You have to setup your own weapon, with 'name'
        // and 'damage'
        let weapon = {
            name: 'Sword',
            damage: 10
        }
        return weapon
    }
}