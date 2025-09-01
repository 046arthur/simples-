basic.forever(function () {
    if (800 < pins.analogReadPin(AnalogReadWritePin.P1)) {
        robotbit.MotorRun(robotbit.Motors.M1B, 120)
        robotbit.MotorRun(robotbit.Motors.M2A, 0)
    } else {
        robotbit.MotorRun(robotbit.Motors.M1B, 0)
        robotbit.MotorRun(robotbit.Motors.M2A, 120)
    }
    if (16000 < input.runningTime()) {
        robotbit.MotorStopAll()
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        150,
        robotbit.Motors.M1A,
        150
        )
    }
    if (800 < pins.analogReadPin(AnalogReadWritePin.P1)) {
        robotbit.MotorRun(robotbit.Motors.M1B, 120)
        robotbit.MotorRun(robotbit.Motors.M2A, 0)
    } else {
        robotbit.MotorRun(robotbit.Motors.M1B, 0)
        robotbit.MotorRun(robotbit.Motors.M2A, 120)
    }
})
