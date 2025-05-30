basic.forever(function () {
    basic.showArrow(ArrowNames.North)
    basic.pause(200)
    if (input.isGesture(Gesture.LogoUp)) {
        basic.showIcon(IconNames.Yes)
        basic.pause(200)
    } else {
        basic.showIcon(IconNames.No)
        basic.pause(200)
    }
    basic.showArrow(ArrowNames.South)
    basic.pause(200)
    if (input.isGesture(Gesture.LogoDown)) {
        basic.showLeds(`
            . . . # .
            . . # . #
            . # . . .
            # . . . .
            . . . . .
            `)
        basic.pause(200)
    } else {
        basic.showIcon(IconNames.No)
        basic.pause(200)
    }
    basic.showArrow(ArrowNames.West)
    basic.pause(200)
    if (input.isGesture(Gesture.TiltLeft)) {
        basic.showIcon(IconNames.Yes)
        basic.pause(200)
    } else {
        basic.showIcon(IconNames.No)
        basic.pause(200)
    }
    basic.showArrow(ArrowNames.East)
    basic.pause(200)
    if (input.isGesture(Gesture.TiltRight)) {
        basic.showIcon(IconNames.Yes)
        basic.pause(200)
    } else {
        basic.showIcon(IconNames.No)
        basic.pause(200)
    }
})
