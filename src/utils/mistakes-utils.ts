import {Language, LanguageType} from "../enums/Language";
import {Alphabets} from "../enums/Alphabets";

const generateError = (input: string, language: LanguageType): any => {
    const errorTypes = ['delete', 'insert', 'swap'];
    const errorType = errorTypes[Math.floor(Math.random() * errorTypes.length)];
    const errorIndex = Math.floor(Math.random() * input.length);
    switch (errorType) {
        case 'delete':
            return input.slice(0, errorIndex) + input.slice(errorIndex + 1);
        case 'insert':
            const alphabet = getAlphabetForRegion(language);
            const randomChar = alphabet![Math.floor(Math.random() * alphabet!.length)];
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


export const generateErrors = (inputs: string, errorRate: number, language: LanguageType) => {
    let input = inputs
    const errors = Math.floor(errorRate) + (Math.random() < (errorRate % 1) ? 1 : 0);
    for (let i = 0; i < errors; i++) {
        input = generateError(input, language)
    }
    return input;
}
