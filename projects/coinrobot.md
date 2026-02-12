---
title: "Coin-Picking Robot"
date: "02-2025 to 04-2025"
id: "coinrobot"
cover_image: "coinrobot.jpeg"
topic: 'embedded'
header: "Coin-Picking Robot for ELEC 291"
---
This was a group project with 5 of my friends for UBC ELEC 291 where our goal was to build a robot that automatically would move around within a perimeter, detect coins with a metal detector, and pick them up using an electromagnet. We also built a remote control using the JDY-40 wireless module and a MSP430 microcontroller.

The robot itself was built around an EFM8LB1 microcontroller that was soldered onto a development board our professor developed using a custom reflow oven controller from a previous project. An H-bridge that I wired from a schematic connected the microcontroller to the 2 motors that propelled the robot. 

For the coin detection, a large inductor placed under the robot's servo arms was connected to a 555 timer circuit and the microcontroller ADC would read the voltage across it. when a conductor, like a metal coin, passed under the inductor, this would disturb the signal and the robot would be able to detect the coin, move back a bit to make room, use the servos to position the arms over where the coin is, turn on the electromagnet, and move the coin into the robot's cache (a small container near the front).

The perimiter detection used a similar setup of 2 large inductors placed at the front of the robot like "bumpers". The perimiter was simply a wire taped down with a current running through it. The magnetic field from this current induces a magnetic field in the inductors, allowing the robot to detect the perimeter and spin away 

My role included building the physical chassis, combing through schematics to wire the components including a custom H-bridge, the design and implementation of the laser-based coin detection system (photoresistor with a laser diode pointed at it acting as a "laser tripwire" to prevent miscounts if a coin is dropped before entering the box), a "night-light" feature that turns on a headlight with a phototransistor detects low light levels, LED turn-signals that indicate the direction the robot is turning, and the implementation of the HC-SR04 ultrasonic distance sensor to detect obstacles. The majority of these bonus features were implemented on an LPC824 microcontroller, and compiled using makefiles, and CrossIDE, an IDE our very talented professor developed. 

Since a lot of the libraries that made this work were created by our professor, a large portion of the code was written by my groupmates and not me, and I don't have explicit permission to show the code, I won't be including a link to our GitHub repository, but enjoy this photo of the finished robot! This project wouldn't have been possible without my teammates too, of course, so if you guys ever read this, thanks gang.
