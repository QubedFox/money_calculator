const AUD = [
    ['$100', 100.00]
    ['$50', 50.00]
    ['$20', 20.00]
    ['$10', 10.00]
    ['$5', 5.00]
    ['$2', 2.00]
    ['$1', 1.00]
    ['50c', 0.50]
    ['20c', 0.20]
    ['10c', 0.10]
    ['5c', 0.05]
]

function getStringDenominations(currency){
    let output = []

    switch(currency){
        case 'AUD':
            for (i = 0; i < AUD.length; i++){
                output.push(AUD[i][0])
            }
            return output
    }
}

function getFloatDenominations(currency){
    let output = []

    switch(currency){
        case 'AUD':
            for (i = 0; i < AUD.length; i++){
                output.push(AUD[i][1])
            }
            return output
    }
}

function getDenominations(currency){
    let output = []

    switch(currency){
        case 'AUD':
            for (i = 0; i < AUD.length; i++){
                for (j = 0; j < 2; j++){
                    output.push(AUD[i][j])
                }
            }
            return output
    }
}