const currencies = [
    AUD = {
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

    USD = {
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
            ['100¢', 1.00, 'hundred-cents'],
            ['50¢', 0.50, 'fifty-cents'],
            ['25¢', 0.25, 'twenty-five-cents'],
            ['10¢', 0.10, 'ten-cents'],
            ['5¢', 0.05, 'five-cents'],
            ['1¢', 0.01, 'one-cent']
        ]
    },

    GBP = {
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
    },

    EUR = {
        country : 'Europe',
        acronym : 'EUR',
        symbol : '€',
        denominations : [
            ['€500', 500.00, 'five-hundred-euros'],
            ['€200', 200.00, 'two-hundred-euros'],
            ['€100', 100.00, 'hundred-euros'],
            ['€50', 50.00, 'fifty-euros'],
            ['€20', 20.00, 'twenty-euros'],
            ['€10', 10.00, 'ten-euros'],
            ['€5', 5.00, 'five-euros'],
            ['€2', 2.00, 'two-euros'],
            ['€1', 1.00, 'one-euros'],
            ['50¢', 0.50, 'fifty-cents'],
            ['20¢', 0.20, 'twenty-cents'],
            ['10¢', 0.10, 'ten-cents'],
            ['5¢', 0.05, 'five-cents'],
            ['2¢', 0.02, 'two-cents'],
            ['1¢', 0.01, 'one-cent']
        ]
    },

    CAD = {
        country : 'Canada',
        acronym : 'CAD',
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

function getCurrencySymbol(currency){
    let index = 0

    while (currencies[index].acronym != currency && index < currencies.length){
        index += 1
    }
    
    return currencies[index].symbol
}