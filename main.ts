input.onGesture(Gesture.LogoUp, function () {
    if (true) {
    	
    }
})
radio.onReceivedString(function (receivedString) {
	
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(0)
    game.addLife(1)
})
let sprite = game.createSprite(2, 2)
sprite.turn(Direction.Right, 90)
