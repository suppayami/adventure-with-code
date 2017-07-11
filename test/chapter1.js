const assert = require('chai').assert
import Chapter1 from '../src/problems/chapter1'

describe('\nChapter 1 (src/problems/chapter1.js)\n', () => {
    describe('Welcome to the Code Adventure\n', () => {
        describe('Please enter your name:', () => {
            it(Chapter1.enterName(), () => {
                assert.notEqual(Chapter1.enterName(), 0, 'Please enter your name')
            })
        })

        describe('Are you ready to go to the adventure?', () => {
            it(Chapter1.isReadyToAdventure() ? 'Yes' : 'No', () => {
                assert.isTrue(Chapter1.isReadyToAdventure(), 'Please be ready before going to the adventure...')
            })
        })
    })
})