import { font } from "./font"
/*
    font with only integers can be easily extended by creating another font object and merged
    ex: export const alphaNumerics = Object.assign(alphaFont, NumericalFont)
 */
export const numericalFont:font  = {
    "0": [
        " _ ",
        "| |",
        "|_|"
    ],
    "1": [
        "   ",
        "  |",
        "  |"
    ],
    "2": [
        " _ ",
        " _|",
        "|_ "
    ],
    "3": [
        " _ ",
        " _|",
        " _|"
    ],
    "4": [
        "   ",
        "|_|",
        "  |"
    ],
    "5": [
        " _ ",
        "|_ ",
        " _|"
    ],
    "6": [
        " _ ",
        "|_ ",
        "|_|"
    ],
    "7":[
        " _ ",
        "  |",
        "  |"
    ],
    "8":
        [
            " _ ",
            "|_|",
            "|_|"
        ],
    "9": [
        " _ ",
        "|_|",
        "  |"
    ]
}