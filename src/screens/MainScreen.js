import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { COLORS } from '../../assets/constants';
import { FontAwesome } from '@expo/vector-icons';

const SearchScreen = () => (
  <View style={{ flex: 1, backgroundColor: COLORS.flatGreen }} />
);

const SendScreen = () => (
  <View style={{ flex: 1, backgroundColor: "white" }} />
);



const renderScene = SceneMap({
  homeScreen: HomeScreen,
  searchScreen: SearchScreen,
  sendScreen: SendScreen,
  profileScreen:ProfileScreen
});


 function MainScreen() {

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'homeScreen', title: 'Home Screen' },
    { key: 'searchScreen', title: 'Search Screen' },
    { key: 'sendScreen', title: 'send Screen' },
    { key: 'profileScreen', title: 'profile Screen' },
  ]);

  const Icon = ({ iconName }) => {
    return <View style={{ paddingTop: 10 }}>
      <FontAwesome name={iconName} size={20} color="white" />
    </View>
  }

  const renderTabBar = props => (
    <TabBar
      renderLabel={({ route, focused }) => (
        route.key == "homeScreen" ?
          <Icon iconName="home" /> :
          route.key == "searchScreen" ?
            <Icon iconName="search" /> :
            route.key == "sendScreen" ?
            <Icon iconName="send" />:
            <Icon iconName="user" />
      )}
      {...props}
      indicatorStyle={{ backgroundColor: COLORS.blue, height: 5 }}
      style={{ backgroundColor:"#9DBEFF", height: 65 }}
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

export default MainScreen
