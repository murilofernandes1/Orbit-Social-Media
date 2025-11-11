import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { styles } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
};

export default function Button(props: Props) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      activeOpacity={0.5}
      style={styles.button}
    >
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
}
