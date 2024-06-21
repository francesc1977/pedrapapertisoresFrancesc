let random = 0
input.onGesture(Gesture.Shake, function () {
    random = randint(1, 10)
    basic.showNumber(random)
    if (random <= 3) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # . # #
            . # # # .
            . . # . .
            `)
    } else if (random < 7) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            . . . . #
            # # . # .
            # . # . .
            . # . # .
            . . . . #
            `)
    }
})
