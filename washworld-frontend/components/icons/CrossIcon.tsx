import Svg, { Path, SvgProps } from "react-native-svg"


const CrossIcon: React.FC<SvgProps> = ({color, style}) => {
    return <Svg style={style} width="23" height="23" viewBox="0 0 23 23" fill="none">
        <Path d="M2.3 23L0 20.7L9.2 11.5L0 2.3L2.3 0L11.5 9.2L20.7 0L23 2.3L13.8 11.5L23 20.7L20.7 23L11.5 13.8L2.3 23Z" fill={color}/>
    </Svg>
}


export default CrossIcon

