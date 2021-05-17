var multiplier = 1
const MULTIPLES = ['x1', 'x5', 'x10', 'x25', 'x100']
const MAX_INDEX = MULTIPLES.length - 1

function getMultiplier(){
    return multiplier
}

function updateMultiplierButton(){
    let currentMultiplier = $('.multiplier').text()
    let index = 0
    
    while (index <= MAX_INDEX){
        if (MULTIPLES[index] == currentMultiplier){
            console.log(MULTIPLES[index], currentMultiplier, index, MAX_INDEX)
            if (index == MAX_INDEX){
                $('.multiplier').text(MULTIPLES[0])
                multiplier = MULTIPLES[0].substring(1)
                break
            }
            else{
                $('.multiplier').text(MULTIPLES[index + 1])
                multiplier = MULTIPLES[index + 1].substring(1)
                break
            }
        }
        else{
            index += 1
        }
    }
}