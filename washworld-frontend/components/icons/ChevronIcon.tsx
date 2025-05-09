import Svg, { Path, SvgProps } from "react-native-svg"


const ChevronIcon: React.FC<SvgProps> = ({color, style}) => {
    return <Svg style={style} width="24" height="12" viewBox="0 0 16 9" fill="none">
        <Path  d="M1 0.999987L8 7.54138L15 0.999987" stroke={color} strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
}


export default ChevronIcon

