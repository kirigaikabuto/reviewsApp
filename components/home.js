import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, FlatList, TouchableOpacity} from "react-native";
import {globalStyles} from "../styles/global";

export default function Home({navigation}) {
    const pressHandler = () => {
        navigation.navigate('ReviewDetails');
    };
    const [reviews, setReviews] = useState([
        {title: "title1", rating: 5, body: "body1", key: '1'},
        {title: "title2", rating: 3, body: "body2", key: '2'},
        {title: "title3", rating: 1, body: "body3", key: '3'},
        {title: "title4", rating: 2, body: "body4", key: '4'},
    ]);
    return (
        <View style={globalStyles.container}>
            <FlatList
                data={reviews}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate("ReviewDetails", item)}>
                        <Text style={globalStyles.titleText}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
            {/*<Text style={globalStyles.titleText}>Home page</Text>*/}
            {/*<Button title="go to review page" onPress={pressHandler}/>*/}
        </View>
    );
}
