import { should } from "chai"
should()

import {numericalFont} from "../src/fonts/numericalFont"
import {format} from "../src/format"

describe(
    "formatter",
    () => {
        it (
            "Format string and ignore undefined characters",
            () => {
                // print according to the fontD file
                format("910", numericalFont)
                    .should.eql(
                    [
                        " _     _ ",
                        "|_|  || |",
                        "  |  ||_|"
                    ]
                )
                // all numbers
                format("0123456789", numericalFont)
                    .should.eql(
                    [
                        " _     _  _     _  _  _  _  _ ",
                        "| |  | _| _||_||_ |_   ||_||_|",
                        "|_|  ||_  _|  | _||_|  ||_|  |"
                    ]
                )
                // ignore undefined character
                format("1a1a1", numericalFont)
                    .should.eql(
                    [
                        "         ",
                        "  |  |  |",
                        "  |  |  |"
                    ]
                )
            }
        )
    }
)