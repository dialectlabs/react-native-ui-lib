import { StyleSheet } from 'react-native';
export function unpackStyle(style, options = {}) {
  if (style) {
    return JSON.parse(JSON.stringify(options.flatten ? StyleSheet.flatten(style) : style));
  }
}