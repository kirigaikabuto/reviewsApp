import {createStackNavigator} from "react-navigation-stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import Header from "../shared/header";
import React from 'react'

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => <Header navigation={navigation} title="Home"/>,
            }
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
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: "#fff",
            height: 100,
        },
        headerTintColor: "#444",
    }
});

export default HomeStack;
