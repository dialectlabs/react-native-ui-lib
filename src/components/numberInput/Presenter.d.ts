export type NumberInputData = {
    type: 'valid';
    userInput: string;
    number: number;
    formattedNumber: string;
} | {
    type: 'empty';
} | {
    type: 'error';
    userInput: string;
};
export declare const EMPTY: NumberInputData;
export interface LocaleOptions {
    locale: string;
    decimalSeparator: string;
    thousandSeparator: string;
}
export interface Options {
    localeOptions: LocaleOptions;
    fractionDigits: number;
}
export declare function generateOptions(locale: string, fractionDigits: number): Options;
export declare function parseInput(text: string, options: Options): NumberInputData;
export declare function getInitialData(options: Options, initialValue?: number): NumberInputData;
