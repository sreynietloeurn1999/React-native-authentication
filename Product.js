import { Touchable, TouchableWithoutFeedback, View } from "react-native";
import React from "react";

class Product extends React.Component {
    render () {
        return (
            <View style = {styles.container}>
                <TouchableWithoutFeedback onPress={() => alert(this.props.id)}>
                  <Text style = {styles.title}>{this.props.title}</Text>
                </TouchableWithoutFeedback>
                <Text>{this.props.description}</Text>
                <Image source = {{url: this.props.image}} style ={styles.image} />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        width:'100%',
    },

    title: {
        fontSize: 25,
    },
    container: {
      margin: 8,
    }
})