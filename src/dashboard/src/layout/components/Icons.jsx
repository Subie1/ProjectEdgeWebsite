import * as TbIcons from "react-icons/tb"

export default function Icon({ name, className }) {
    if (!TbIcons[name]) return ( <TbIcons.TbExclamationCircle className={className ?? ""} /> );
    const Ic = TbIcons[name];
    return (<Ic className={className ?? ""} /> );
}