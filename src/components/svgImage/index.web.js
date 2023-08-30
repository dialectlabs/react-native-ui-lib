import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import Image from "../image";
import { isSvg, isSvgUri, isBase64ImageContent } from "../../utils/imageUtils";
const PostCssPackage = require("../../optionalDependencies").PostCssPackage;
const DEFAULT_SIZE = 16;
function SvgImage(props) {
  const {
    data,
    style = [],
    tintColor,
    ...others
  } = props;
  const [id] = useState(`svg-${new Date().getTime().toString()}`);
  const [svgStyleCss, setSvgStyleCss] = useState(undefined);
  useEffect(() => {
    if (PostCssPackage) {
      const {
        postcss,
        cssjs
      } = PostCssPackage;
      const styleObj = StyleSheet.flatten(style);
      postcss().process(styleObj, {
        parser: cssjs
      }).then(style => {
        const svgPathCss = styleObj?.tintColor ? `#${id} svg path {fill: ${styleObj?.tintColor}}` : '';
        setSvgStyleCss(`#${id} svg {${style.css}} #${id} {${style.css}} ${svgPathCss}}`);
      });
    }
  }, [style, id]);
  if (isSvgUri(data)) {
    return <img {...others} src={data.uri} style={StyleSheet.flatten(style)} />;
  } else if (isBase64ImageContent(data)) {
    if (tintColor) {
      return <Image source={{
        uri: data
      }} width={DEFAULT_SIZE} height={DEFAULT_SIZE} style={[style, {
        tintColor
      }]} {...others} />;
    }
    return <img {...others} src={data} style={StyleSheet.flatten(style)} />;
  } else if (data && svgStyleCss) {
    const svgStyleTag = `<style> ${svgStyleCss} </style>`;
    return <div id={id} {...others}
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML={{
      __html: svgStyleTag + data
    }} />;
  }
  return null;
}
SvgImage.displayName = 'IGNORE';
SvgImage.isSvg = isSvg;
export default SvgImage;