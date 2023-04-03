import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import RollScreen from "./src/screens/RollScreen";

const navigator = createStackNavigator({
  Roll: RollScreen,
}, {
  initialRouteName: 'Roll',
  defaultNavigationOptions: {
    title: 'Dice Rolling App'
  }
});

export default createAppContainer(navigator);
