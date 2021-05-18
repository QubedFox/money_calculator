const currencies = [
    AUD_TEST = {
        country : 'Australia',
        acronym : 'AUD',
        symbol : '$',
        denominations : [
            ['$100', 100.00, 'hundred-dollars'],
            ['$50', 50.00, 'fifty-dollars'],
            ['$20', 20.00, 'twenty-dollars'],
            ['$10', 10.00, 'ten-dollars'],
            ['$5', 5.00, 'five-dollars'],
            ['$2', 2.00, 'two-dollars'],
            ['$1', 1.00, 'one-dollar'],
            ['50¢', 0.50, 'fifty-cents'],
            ['20¢', 0.20, 'twenty-cents'],
            ['10¢', 0.10, 'ten-cents'],
            ['5¢', 0.05, 'five-cents']
        ]
    },

    USD_TEST = {
        country : 'United States',
        acronym : 'USD',
        symbol : '$',
        denominations : [
            ['$100', 100.00, 'hundred-dollars'],
            ['$50', 50.00, 'fifty-dollars'],
            ['$20', 20.00, 'twenty-dollars'],
            ['$10', 10.00, 'ten-dollars'],
            ['$5', 5.00, 'five-dollars'],
            ['$2', 2.00, 'two-dollars'],
            ['$1', 1.00, 'one-dollar'],
            ['50¢', 0.50, 'fifty-cents'],
            ['25¢', 0.25, 'twenty-five-cents'],
            ['10¢', 0.10, 'ten-cents'],
            ['5¢', 0.05, 'five-cents'],
            ['1¢', 0.01, 'one-cent']
        ]
    },

    GBP_TEST = {
        country : 'United Kingdom',
        acronym : 'GBP',
        symbol : '£',
        denominations : [
            ['£50', 50.00, 'fifty-pounds'],
            ['£20', 20.00, 'twenty-pounds'],
            ['£10', 10.00, 'ten-pounds'],
            ['£5', 5.00, 'five-pounds'],
            ['50p', 0.50, 'fifty-pence'],
            ['20p', 0.20, 'twenty-pence'],
            ['10p', 0.10, 'ten-pence'],
            ['5p', 0.05, 'five-pence'],
            ['2p', 0.02, 'two-pence'],
            ['1p', 0.01, 'one-pence']
        ]
    }
]

function getDenominations(currency){
    let index = 0
    let output = [];

    while (currencies[index].acronym != currency && index < currencies.length){
        index += 1
    }

    for (i = 0; i < currencies[index].denominations.length; i++){
        output.push(currencies[index].denominations[i])
    }
    return output
}

function getCurrencyDescriptions(){
    let output = []

    for (i = 0; i < currencies.length; i++){
        output.push([[currencies[i].country], [currencies[i].acronym]])
    }

    return output
}