import SpriteSVG from "./SpriteSVG.svg";

export const SVGimage = ({ id, color, width = 100, height = 90 }) => (
  <svg fill={color} width={width} height={height}>
    <use href={`${SpriteSVG}#${id}`} />
  </svg>
);
