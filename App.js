import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import RollScreen from './src/screens/RollScreen';
import { PointsProvider } from './src/context/TotalPointsContext';

const navigator = createStackNavigator(
  {
    Roll: RollScreen,
  },
  {
    initialRouteName: 'Roll',
    defaultNavigationOptions: {
      title: 'Dice Rolling App',
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <PointsProvider>
      <App />
    </PointsProvider>
  );
};
