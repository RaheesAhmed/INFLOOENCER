import * as React from 'react';
import { SvgXml } from 'react-native-svg';
import NoSvg from '../../assets/svgs/NoSvg';

const SvgImport = props => {
  const variable = `${props.svg}`;
  const svgMarkup = variable;

  return <SvgXml xml={!props?.svg ? NoSvg : svgMarkup} style={props.style} />;
};

export default React.memo(SvgImport);
