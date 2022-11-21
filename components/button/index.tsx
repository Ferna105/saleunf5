
import { Pressable } from 'react-native';
import { Sizing } from '../../constants/Sizing';
import { Text } from '../text';
import { ThemeProps, useThemeColor } from '../Themed';


export type ButtonProps = ThemeProps & {
    style?: object;
    text: string;
    disabled?: boolean;
    onPress: () => void;
};

export function Button(props: ButtonProps) {
    const { style, lightColor, darkColor, text, disabled, onPress } = props;
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

    return (
        <Pressable style={[{ backgroundColor, paddingHorizontal: Sizing.M, paddingVertical: Sizing.XXS, borderRadius: Sizing.XS }, style]} {...{ disabled, onPress }}>
            <Text>{text}</Text>
        </Pressable>
    );
}