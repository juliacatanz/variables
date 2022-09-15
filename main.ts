input.onButtonPressed(Button.A, function () {
    fav_ += 1
    basic.showNumber(fav_)
})
input.onGesture(Gesture.TiltLeft, function () {
    Jimmy.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    fav_ += -1
    basic.showNumber(fav_)
})
input.onGesture(Gesture.TiltRight, function () {
    Jimmy.change(LedSpriteProperty.X, 1)
})
let Jimmy: game.LedSprite = null
let fav_ = 0
basic.showIcon(IconNames.Heart)
fav_ = 5
basic.showNumber(fav_)
Jimmy = game.createSprite(2, 2)
basic.forever(function () {
	
})
