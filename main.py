def on_forever():
    if 800 < pins.analog_read_pin(AnalogReadWritePin.P1):
        robotbit.motor_run(robotbit.Motors.M1B, 120)
        robotbit.motor_run(robotbit.Motors.M2A, 0)
    else:
        robotbit.motor_run(robotbit.Motors.M1B, 0)
        robotbit.motor_run(robotbit.Motors.M2A, 120)
basic.forever(on_forever)
