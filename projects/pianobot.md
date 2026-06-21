---
title: "Piano-Playing Robot"
date: "01-2026 - 04-2026"
id: "pianobot"
cover_image: "pianobot.jpg"
topic: 'embedded'
header: "Piano-Playing Robot for ELEC 391"
---
This project is for ELEC 391, where I my 5 team members were tasked to build a robot that can autonomously play a song on a digital keyboard. My primary role was programming the MCU, calibrating the PID controller, and programming the various songs.

The robot uses the ESP32 microcontroller and FreeRTOS for task scheduling. One core is used for the PID Controller and playing the songs, while the other core is used to host a web server that users could use to control the robot. The web server let's users select the song they want the robot to play (Axel F by Crazy Frog, Twinkle Twinkle Little Star, and Hotel California) as well as manually control the robot (move the arm to a certain position and actuate the fingers).

The mechanical system used hand-made linear actuators, a motor with an encoder, a belt drive, and rails. The rest of the build was 3D modelled and printed by 2 of my teammates. It also featured custom PCBs (motherboard and daughter boards for the motors) made in Altium. It was initially designed to have to "hands", but due to time restraints the final robot only had one hand. 

We had originally used an STM32H753ZI microcontroller, but it was fried during an earlier experiment and we had to pivot our design. Our robot would later fry itself again during the demo due to an electronics fault. While we didn't perform as well as we had hoped, we all learned a *lot* and had a fun time solving this challenge. Plus, I can now read sheet music and play songs on a piano ***very*** slowly. 
