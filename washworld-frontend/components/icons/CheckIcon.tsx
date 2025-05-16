import Svg, { Path, SvgProps } from "react-native-svg";

const CheckIcon: React.FC<SvgProps> = ({ color, style }) => {
  return (
    <Svg width="26" height="19" viewBox="0 0 26 19" fill="none" >
      <Path
        d="M9.09202 19L0 9.99376L2.27301 7.7422L9.09202 14.4969L23.727 0L26 2.25156L9.09202 19Z"
        fill={color}
      />
    </Svg>
  );
};


export default CheckIcon;
