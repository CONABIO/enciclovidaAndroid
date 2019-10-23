import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator, createAppContainer } from "react-navigation";
import AboutScreen from "../Containers/AboutScreen";
import MediaScreen from "../Containers/MediaScreen";
import HomeScreen from "../Containers/HomeScreen";
import MapScreen from "../Containers/MapScreen";
import EnciclovidaScreen from "../Containers/EnciclovidaScreen";
import SymbologyScreen from "../Containers/SymbologyScreen";
import ListSpeciesScreen from "../Containers/ListSpeciesScreen";
import styles from "../Components/Styles/NavBarStyle";
import ClassificationScreen from "../Containers/ClassificationScreen";

import SlideMenu from "../Components/SideMenu";
import { NONE } from "apisauce";

const TabNav = createBottomTabNavigator({
    About: {screen: AboutScreen},
    Map: {screen: MapScreen},
    Media: {screen: MediaScreen},
    Classification: {screen: ClassificationScreen},
},
{
    headerMode: "none",
    defaultNavigationOptions : { 
      tabBarVisible: false ,
    },
    backBehavior: 'initialRoute',
    swipeEnabled:true,
    animationEnabled:false,
    shifting:true,


})

const Drawer = createDrawerNavigator(
    {
      Find: { screen: HomeScreen },
      SpeciesRisk: { screen: ListSpeciesScreen },
      SpeciesExotic: { screen: ListSpeciesScreen },
      SpeciesEndemic: { screen: ListSpeciesScreen },
      Info: { screen: EnciclovidaScreen },
      Symbology: { screen: SymbologyScreen },
      Tabs: {
        screen: TabNav
      }
    },
    {
      initialRouteName: "Find",
      contentComponent: SlideMenu,
      backBehavior:"history"

    }
  );

const AppNavigator = createStackNavigator(
    {
      Home: {
        screen: Drawer
      },
      Tabs: {
        screen: TabNav
      },   
    },{
        headerMode: "none",
        disableKeyboardHandling:true,
        initialRouteName:"Home"

    }
)

//export default AppNavigator;
const App = createAppContainer(AppNavigator);
export default App;