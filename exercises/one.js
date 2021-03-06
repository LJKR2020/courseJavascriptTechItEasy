const inventory = [
    {
        type: '43PUS6504/12',
        name: '4K TV',
        brand: 'Philips',
        price: 379,
        availableSizes: [43, 50, 58, 65],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 23,
        sold: 2,
    },
    {
        type: 'NH3216SMART',
        name: 'HD smart TV',
        brand: 'Nikkei',
        price: 159,
        availableSizes: [32],
        refreshRate: 100,
        screenType: 'LED',
        screenQuality: 'HD ready',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: false,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 4,
        sold: 4,
    },
    {
        type: 'QE55Q60T',
        name: '4K QLED TV',
        brand: 'Samsung',
        price: 709,
        availableSizes: [43, 50, 55, 58, 65],
        refreshRate: 60,
        screenType: 'QLED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: false,
        },
        originalStock: 7,
        sold: 0,
    },
    {
        type: '43HAK6152',
        name: 'Ultra HD SMART TV',
        brand: 'Hitachi',
        price: 349,
        availableSizes: [43, 50, 55, 58],
        refreshRate: 60,
        screenType: 'LCD',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: false,
        },
        originalStock: 5,
        sold: 5,
    },
    {
        type: '50PUS7304/12',
        name: 'The One 4K TV',
        brand: 'Philips',
        price: 479,
        availableSizes: [43, 50, 55, 58, 65, 70],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: true,
        },
        originalStock: 8,
        sold: 3,
    },
    {
        type: '55PUS7805',
        name: '4K LED TV',
        brand: 'Philips',
        price: 689,
        availableSizes: [55],
        refreshRate: 100,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: true,
        },
        originalStock: 6,
        sold: 3,
    },
    {
        type: 'B2450HD',
        name: 'LED TV',
        brand: 'Brandt',
        price: 109,
        availableSizes: [24],
        refreshRate: 60,
        screenType: 'LED',
        screenQuality: 'Full HD',
        smartTv: false,
        options: {
            wifi: false,
            speech: false,
            hdr: false,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 10,
        sold: 8,
    },
    {
        type: '32WL1A63DG',
        name: 'HD TV',
        brand: 'Toshiba',
        price: 161,
        availableSizes: [32],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Full HD',
        smartTv: false,
        options: {
            wifi: false,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 10,
        sold: 8,
    },
];

// Opdracht 1 - Array Methoden
// Opdracht 1a: Gebruik een array-methode om een array te maken met alle tv-type namen.
// Log de uitkomst in de console.

// [X] maak een variabele aan en koppel de map-methode.
// [X] declareer wat je anonieme functie moet doen.
// [X] return de uitkomst.
// [X] controleer in de terminal.

const tvType = inventory.map((typename) => {
    return "tv-naam is " + typename.type;
})
// console.log(tvType);

// Opdracht 1b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten)
// die volledig uitverkocht zijn. Log de uitkomst in de console.

// [x] maak een variabele aan en koppel de filter-methode.
// [x] declareer wat je anonieme functie moet doen.
//    [x] Eerst moet het verschil van de stock uitgerekend worden.
//    [x] daarna moeten de tv's die uitverkocht zijn gevonden worden.
// [x] return de array van uitverkochte tv's.
// [x] controleer in de terminal.

const soldOut = inventory.filter((stock) => {
    const onStock = stock.originalStock - stock.sold;
    if (onStock === 0) {
        return stock.type;
    }
})
// console.log(soldOut);

// Opdracht 1c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten)
// die over AmbiLight beschikken. Log de uitkomst in de console.

// [x] maak een variabele aan en koppel de filter-methode.
// [x] declareer wat je anonieme functie moet doen.
//    [x] de tv's met de ambilight moeten gevonden worden.
// [x] return de array van de ambilight tv's.
// [x] controleer in de terminal.

const ambilight = inventory.filter((light) => {
    if (light.options.ambiLight === true) {
        return light;
    }
})
// console.log(ambilight);

// Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert.
// Log de uitkomst in de console.

// [x] maak een variabele met de sort-methode.
// [x] vul de anonieme functie aan met de a > b vergelijking.
//     Let op a.naam en b.naam voor de juiste route.
// [x] return de functie.
// [x] controleer in de terminal of het werkt.

const priceLowToHigh = inventory.sort((a, b) => {
    if (a.price > b.price) {
        return 1;
    }
    if (a.price < b.price) {
        return -1;
    }
    return 0;
})

// console.log(priceLowToHigh);

