import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, Modal, StyleSheet, TouchableWithoutFeedback, Keyboard} from "react-native";
import {globalStyles} from "../styles/global";
import Card from "../shared/card";
import {MaterialIcons} from '@expo/vector-icons';
import ReviewForm from "./reviewForm";

export default function Home({navigation}) {
    const [modalOpen, setModalOpen] = useState(false)
    const pressHandler = () => {
        navigation.navigate('ReviewDetails');
    };
    const addReview = (review) => {
        review.key = Math.random().toString();
        setReviews((currentReviews) => {
            return [review, ...currentReviews]
        });
        setModalOpen(false);
    }
    const [reviews, setReviews] = useState([
        {title: "title1", rating: 5, body: "body1", key: '1'},
        {title: "title2", rating: 3, body: "body2", key: '2'},
        {title: "title3", rating: 1, body: "body3", key: '3'},
        {title: "title4", rating: 2, body: "body4", key: '4'},
        {title: "title5", rating: 4, body: "body5", key: '5'},
    ]);
    return (
        <View style={globalStyles.container}>
            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <MaterialIcons
                            name="close"
                            size={24}
                            onPress={() => setModalOpen(false)}
                            style={{...styles.modalToggle, ...styles.modalClose}}/>
                        <ReviewForm addReview={addReview}/>
                    </View>
                </TouchableWithoutFeedback>

            </Modal>
            <MaterialIcons
                name="add"
                size={24}
                onPress={() => setModalOpen(true)}
                style={styles.modalToggle}
            />
            <FlatList
                data={reviews}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate("ReviewDetails", item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
            {/*<Text style={globalStyles.titleText}>Home page</Text>*/}
            {/*<Button title="go to review page" onPress={pressHandler}/>*/}
        </View>
    );
}

const styles = StyleSheet.create({
    modalContent: {
        flex: 1,

    },
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#f2f2f2",
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0
    }
})
