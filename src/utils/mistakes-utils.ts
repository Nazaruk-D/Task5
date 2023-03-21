import {Language, LanguageType} from "../enums/Language";
import {Alphabets} from "../enums/Alphabets";
import seedrandom from 'seedrandom';


const generateError = (input: string, language: LanguageType, rng: seedrandom.PRNG): any => {
    const errorTypes = ['delete', 'insert', 'swap'];
    const errorType = errorTypes[Math.floor(rng() * errorTypes.length)];
    const errorIndex = Math.floor(rng() * input.length);
    switch (errorType) {
        case 'delete':
            return input.slice(0, errorIndex) + input.slice(errorIndex + 1);
        case 'insert':
            const alphabet = getAlphabetForRegion(language);
            const randomChar = alphabet![Math.floor(rng() * alphabet!.length)];
            return input.slice(0, errorIndex) + randomChar + input.slice(errorIndex);
        case 'swap':
            if (errorIndex === input.length - 1) {
                return input.slice(0, errorIndex - 1) + input[errorIndex] + input[errorIndex - 1];
            } else {
                return input.slice(0, errorIndex) + input[errorIndex + 1] + input[errorIndex] + input.slice(errorIndex + 2);
            }
    }
}

const getAlphabetForRegion = (language: LanguageType) => {
    switch (language) {
        case 'en':
            return Alphabets[Language.US]
        case 'ru':
            return Alphabets[Language.RU]
        case 'de':
            return Alphabets[Language.DE]
    }
}


export const generateErrors = (inputs: string, errorRate: number, language: LanguageType, seedNumber?: number) => {
    let input = inputs
    let rng: seedrandom.PRNG
    if (seedNumber) {
        rng = seedrandom(String(seedNumber))
    } else {
        rng = seedrandom()
    }

    const errors = Math.floor(errorRate) + (rng() < (errorRate % 1) ? 1 : 0);

    for (let i = 0; i < errors; i++) {
        input = generateError(input, language, rng);
    }
    return input;
}


