import HomeScreen from './src/screens/HomeScreen';
import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { COLORS } from './assets/constants';
import { FontAwesome } from '@expo/vector-icons';

const SearchScreen = () => (
  <View style={{ flex: 1, backgroundColor: COLORS.flatGreen }} />
);

const SendScreen = () => (
  <View style={{ flex: 1, backgroundColor: COLORS.flatBlue }} />
);

const renderScene = SceneMap({
  homeScreen: HomeScreen,
  searchScreen: SearchScreen,
  sendScreen: SendScreen
});


export default function App() {

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'homeScreen', title: 'Home Screen' },
    { key: 'searchScreen', title: 'Search Screen' },
    { key: 'sendScreen', title: 'send Screen' },
  ]);

  const Icon = ({ iconName }) => {
    return <View style={{ paddingTop: 10 }}>
      <FontAwesome name={iconName} size={24} color="white" />
    </View>
  }

  const renderTabBar = props => (
    <TabBar
      renderLabel={({ route, focused }) => (
        route.key == "homeScreen" ?
          <Icon iconName="home" /> :
          route.key == "searchScreen" ?
            <Icon iconName="search" /> :
            <Icon iconName="send" />
      )}
      {...props}
      indicatorStyle={{ backgroundColor: COLORS.flatRed, height: 5 }}
      style={{ backgroundColor: "black", height: 80 }}
    />

  );
  return (
    < >
      <TabView
        tabBarPosition='bottom'
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
        initialLayout={{ width: layout.width }}
      />
    </>
  )
}
