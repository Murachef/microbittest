input.onPinPressed(TouchPin.P0, function () {
    for (let index = 0; index <= 4; index++) {
        led.plot(0, 0)
        radio.raiseEvent(
        EventBusSource.MICROBIT_ID_BUTTON_A,
        EventBusValue.MICROBIT_EVT_ANY
        )
        index.showImage(0)
    }
})
basic.forever(function () {
	
})
