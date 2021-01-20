/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const fishCollection = [
    {
        name: "Bart",
        food: "crustaceans",
        length: 4,
        locationHarvested: "creek out back",
        typeOfFish: "Beta"

    },
    {
        name: "Poppy",
        food: "seeds",
        length: 3,
        locationHarvested: "Ohio River",
        typeOfFish: "Sun Fish"

    },
    {
        name: "Sam",
        food: "other fish",
        length: 7,
        locationHarvested: "South of France",
        typeOfFish: "Clown"

    },
    {
        name: "Marney",
        food: "Jelly Fish",
        length: 9,
        locationHarvested: "Atlantic",
        typeOfFish: "Big Fish"

    },
    {
        name: "Bruce",
        food: "Anything it wants ",
        length: 120,
        locationHarvested: "Pacific Ocean",
        typeOfFish: "Great White Shark"

    },
    {
        name: "Nancy",
        food: "Anything it wants ",
        length: 2,
        locationHarvested: "Pacific Ocean",
        typeOfFish: "Great White Shark"

    },
    {
        name: "Duke",
        food: "Anything it wants ",
        length: 4,
        locationHarvested: "Pacific Ocean",
        typeOfFish: "Great White Shark"

    },
    {
        name: "Samson",
        food: "Anything it wants ",
        length: 7,
        locationHarvested: "Pacific Ocean",
        typeOfFish: "Great White Shark"

    },
    {
        name: "Bart",
        food: "crustaceans",
        length: 12,
        locationHarvested: "creek out back",
        typeOfFish: "Beta"

    },
    {
        name: "Poppy",
        food: "seeds",
        length: 9,
        locationHarvested: "Ohio River",
        typeOfFish: "Sun Fish"

    },
    {
        name: "Sam",
        food: "other fish",
        length: 20,
        locationHarvested: "South of France",
        typeOfFish: "Clown"

    },
    {
        name: "Marney",
        food: "Jelly Fish",
        length: 10,
        locationHarvested: "Atlantic",
        typeOfFish: "Big Fish"

    },
    {
        name: "Bruce",
        food: "Anything it wants ",
        length: 11,
        locationHarvested: "Pacific Ocean",
        typeOfFish: "Great White Shark"

    },
    {
        name: "Nancy",
        food: "Anything it wants ",
        length: 4,
        locationHarvested: "Pacific Ocean",
        typeOfFish: "Great White Shark"

    },
    {
        name: "Duke",
        food: "Anything it wants ",
        length: 9,
        locationHarvested: "Pacific Ocean",
        typeOfFish: "Great White Shark"

    },
    {
        name: "Samson",
        food: "Anything it wants ",
        length: 12,
        locationHarvested: "Pacific Ocean",
        typeOfFish: "Great White Shark"

    }

]

// This is new code. Add this.
export function useFish() {
    return fishCollection.slice()
}

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (let singleFish of fishCollection) {
        if(singleFish.length%3===0){
            // If the fish's length is evenly divisible by 3, run this code
            holyFish.push(singleFish)
        }

    }

    return holyFish
}



export const soldierFish = () => {

    const soldiers = [];
    // 5, 10, 15, 20, 25, etc... fish

    for(let i =0; i < fishCollection.length; i++){
        if(fishCollection[i].length % 5 === 0 && fishCollection[i].length % 3 !== 0){
            soldiers.push(fishCollection[i])
        }
    }
    return soldiers
}



export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const regularFish = []

    for(let singleFish of fishCollection){
        if(singleFish.length % 3 !== 0 && singleFish.length % 5 !== 0){
            regularFish.push(singleFish)
        }
    }
    return regularFish
}

