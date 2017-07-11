const assert = require('chai').assert
import Chapter2 from '../src/problems/chapter2'

describe('\nChapter 2 (src/problems/chapter2.js)\n', () => {
    describe('You are going to the Forest\n', () => {
        describe('You meet a fairy, you wanna say "Hi" to her~', () => {
            it("You said: " + Chapter2.sayHiToFairy(), () => {
                assert.equal(Chapter2.sayHiToFairy(), "Hi", 'Please say "Hi" to her.')
            })
        })

        describe('The fairy is coming with you', () => {
            it("Current party: [" + Chapter2.partyAfterSayHiToFairy() + "]", () => {
                assert.include(Chapter2.partyAfterSayHiToFairy(), 'You', 'Where are you my Hero?')
                assert.include(Chapter2.partyAfterSayHiToFairy(), 'Fairy', 'The Fairy is not added to your party!')
            })
        })

        describe('You meet a slime, it\'s going to attack you', () => {
            it("You should attack the slime, use your weapon to attack it!", () => {
                assert.property(Chapter2.attackWithAWeapon(), 'name', 'The weapon should have a name')
                assert.property(Chapter2.attackWithAWeapon(), 'damage', 'The weapon should have damage')
            })
        })
    })
})