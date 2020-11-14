import {createStackNavigator} from "react-navigation-stack";
import Home from "../components/home";
import ReviewDetails from "../components/reviewDetails";

const screens = {
    Home: {
        screen: Home,
        navigationOptions:{
            title:"Главная",
            // headerStyle:{
            //     backgroundColor:"#bbb",
            // }
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: "Детали",
            // headerStyle:{
            //     backgroundColor:"#bbb",
            // }
        }
    },
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:"yellow",
            height:100,
        },
        headerTintColor:"#444",
    }
});

export default HomeStack;
