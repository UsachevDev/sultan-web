
const ButtonTemplate = ({width, height, text, className}) => {
    return (
        <button className={className} style={{width: width, height:height}}>{text}</button>
    )
}

export default ButtonTemplate;