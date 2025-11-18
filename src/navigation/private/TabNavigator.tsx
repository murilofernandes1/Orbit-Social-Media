// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { House } from "phosphor-react-native";
// import HomeScreen from "../../screens/private/Home/HomeScreen";

// const Tab = createBottomTabNavigator();

// export default function TabNavigator() {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//         animation: "none",
//         tabBarShowLabel: false,
//         tabBarStyle: {
//           backgroundColor: "#08090A",
//           borderTopWidth: 1,
//           borderTopColor: "#04471C",
//           height: 100,
//         },
//       }}
//     >
//       <Tab.Screen
//         name="HomeScreen"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <House
//               size={34}
//               color={focused ? "#058C42" : "#6A6A6A"}
//               weight={focused ? "fill" : "regular"}
//             />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }
