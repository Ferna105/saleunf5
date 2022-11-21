import { ThemeProps } from "../Themed";
import DefaultIcon from "../../assets/svgs";

export type IconProps = ThemeProps & {
    name: string;
};

export function Icon(props: IconProps) {
    const { name } = props;

    return DefaultIcon.Google;
}
