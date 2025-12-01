---
title: "Capacitance & Resistance Meter"
date: "03-2025"
id: "capacitance-meter"
cover_image: "capacitance-meter.jpg"
topic: 'embedded'
link: "https://github.com/edansteen/school-projects/tree/main/ELEC291%20Lab%203%20-%20STM32%20Capacitance%20Meter"
header: "STM32L051 Capacitance Meter and Ohmmeter"
---
This project uses STM32L051 microcontroller, programmed in C, to determine the capacitance of any capacitor between 1 nF and 1 uF. This is done using a 555 timer in the astable configuration, which will have it's output frequency affected by the capacitor chosen. The period of the timer's output can be measured through a GPIO pin and one of the microcontroller's internal timers, from which we calculate the approximate capacitance. 

The device also determines the resistance of a resistor using a simple voltage divider. Using the internal ADC it reads the voltage between two resistors (one predetermined one connected to a known Vcc, and the other unknown resistor connected to ground) and uses this value to calculate the unknown resistor. 

The capacitance and resistance are both displayed on an LCD screen as well as to the serial port simultaneously.