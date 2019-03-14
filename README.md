# Test Technique Beebuzziness
[Julien Prugne](julien.prugne@zenika.com)

## Getting started

* Install dependencies
`npm i`

* run the program
`npm start`

When the program is started it will prompt you for a number. Type the number (non integers characters will be ignored) then press enter. 
You can repeat as many times as you want. 

if the input string is to wide for the current screen size the input will be truncated. (resize after the display won't change the string length)

if no input are provided an empty screen will be displayed 

* Exit the program using Ctrl-C

## Available scripts

* start `npm start`
* test `npm test`
* build the js version `npm run build`
* run the "production" version `npm run start-prod` 

## I could have gone further...

ok, now is the time for m to stop on this. I can continue to enhance the codebase again and again. 
Possiblities are only limited to my imagination. 
You requested 3h of my time and voila.

## why the english?

All right, I could have gone for french BUT it's not a good practice in software. 
We need international codebases for open-source, contract workers from italy or switzerland (or maybe just some cheap dev bought from foreign agencies).
All ecmascript keywords are in english, even chinese edev code ein english. Maybe comments can be localized but it seems to me insane to go in franglish...
 
 ## note on the absence of semicolons
 
 In ecmascript, semicolons are optionals. A line break does the trick for the interpreters. 
 In a minified code based, semicolons are kind of mandatory.
 In this contexts (commonjs), it's a useless polution in my mind.
 BUT I'll foloow your coding style-guide in the future.