import { View } from "react-native";
import { styles } from "./styles";

export default function Orbit() {
  return (
    <>
      <View style={styles.orbit}>
        <View style={styles.majorOrbit}></View>
        <View style={styles.minorOrbit}></View>
      </View>
    </>
  );
}
