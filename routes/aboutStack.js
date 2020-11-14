import {createStackNavigator} from "react-navigation-stack";
import About from "../components/about";

const screens = {
    About: {
        screen: About,
        navigationOptions:{
            title:"About us page"
        }
    },
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:"yellow",
            height:100,
        },
        headerTintColor:"#444",
    }
});

export default AboutStack;
