import _isEmpty from "lodash/isEmpty";
export const EMPTY = {
  type: 'empty'
};
function formatNumber(value, options) {
  return value.toLocaleString(options.localeOptions.locale, {
    maximumFractionDigits: options.fractionDigits
  });
}
function generateLocaleOptions(locale) {
  const options = {
    localeOptions: {
      locale,
      decimalSeparator: '',
      // fake decimalSeparator, we're creating it now
      thousandSeparator: '' // fake thousandSeparator, we're creating it now
    },

    fractionDigits: 1
  };
  const decimalSeparator = formatNumber(1.1, options).replace(/1/g, '');
  const thousandSeparator = formatNumber(1111, options).replace(/1/g, '');
  return {
    locale,
    decimalSeparator,
    thousandSeparator
  };
}
export function generateOptions(locale, fractionDigits) {
  return {
    localeOptions: generateLocaleOptions(locale),
    fractionDigits
  };
}
export function parseInput(text, options) {
  if (_isEmpty(text)) {
    return EMPTY;
  }
  let cleanInput = text.replaceAll(options.localeOptions.thousandSeparator, '');
  cleanInput = cleanInput.replaceAll(options.localeOptions.decimalSeparator, '.');
  let number = Number(cleanInput);
  if (isNaN(number)) {
    return {
      type: 'error',
      userInput: text
    };
  }
  number = Number(number.toFixed(options.fractionDigits));
  const formattedNumber = formatNumber(number, options);
  return {
    type: 'valid',
    userInput: text,
    number,
    formattedNumber
  };
}
export function getInitialData(options, initialValue) {
  if (initialValue === undefined) {
    return EMPTY;
  }
  return parseInput(formatNumber(initialValue, options), options);
}