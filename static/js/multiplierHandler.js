const MULTIPLES = ['x1', 'x5', 'x10', 'x25', 'x100']
var currentSelection = MULTIPLES[0]
const MAX_INDEX = MULTIPLES.length - 1

function getMultiplier(){
    return currentSelection.substring(1)
}

function cycleMultiplier(){
    let index = 0

    while (index <= MAX_INDEX){
        if (MULTIPLES[index] == currentSelection){
            if (index == MAX_INDEX){
                currentSelection = MULTIPLES[0]
                return currentSelection
            }
            else{
                currentSelection = MULTIPLES[index + 1]
                return currentSelection
            }
        }
        else{
            index += 1
        }
    }
}

function cycleMultiplierBackwards(){
    let index = MAX_INDEX

    while (index >= 0){
        if (MULTIPLES[index] == currentSelection){
            if (index == 0){
                currentSelection = MULTIPLES[MAX_INDEX]
                return currentSelection
            }
            else{
                currentSelection = MULTIPLES[index - 1]
                return currentSelection
            }
        }
        else{
            index -= 1
        }
    }
}