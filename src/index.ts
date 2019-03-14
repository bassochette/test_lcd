import * as readline from "readline"
import {clearScreen, display, prompt} from "./display"

// create an interactive interface plugged on stdin and stdout
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const main = async ():Promise<void>=> {
    // listen for new inputs
    rl.on("line", async message => {
        display(message)
    })
}

// start the interactive command line tool
main()
    .then(():void => {
        clearScreen()
        console.log("LCD screen started... Type a number and then hit the enter key :)");
        prompt()
    })
    .catch((error):void => {
        console.log("Error => ", error)
        process.exit(42)
    })
