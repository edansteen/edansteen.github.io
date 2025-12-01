---
title: "Plant Monitor"
date: "01-2025"
id: "plant-monitor"
cover_image: "plant-monitor.png"
topic: 'embedded'
link: "https://github.com/edansteen/school-projects/tree/main/ELEC291%20Lab%203%20-%20Plant%20Monitor"
header: "Plant Monitor Written with the 8051 Instruction Set on the N76E003 Microcontroller"
---
This simple plant monitor, programmed in Assembly with the 8051 Instruction Set on a N76E003 microcontroller, reads the temperature and moisture level of a plant. 

Using the LM335 temperature sensor, the microcontroller determines the ambient temperature by reading the voltage at the pin with the ADC, and uses a simple formula provided in the IC's datasheet to convert that voltage into a temperature. 

To find the moisture, this design takes advantage of the conductivity of water, and thus uses conductivity of the soil to determine the moisture. This requires careful calibration depending on the plant, soil type, and a multitude of other factors, so don't expect it to work perfectly for you! 

The microcontroller then sends the temperature data to the serial port of your computer, which gives you the option to graph the data using a Python Script! It will also display the data on an LCD screen, and an onboard LED will light up if the moisture is too low or the temperature is outside the preset parameters.

I had a lot of fun with this project and learned a lot about how the analog-digital converter on a microcontroller works. I also plan to make a more fleshed-out version of this in the future to take care of some arugula plants at home (using C this time since assembly was certainly a pain!), but for now this project had served as a great starting point.