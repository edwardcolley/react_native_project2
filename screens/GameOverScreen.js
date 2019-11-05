import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    ScrollView,
} from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';

const GameOverScreen = props => {
    return (
        <ScrollView>
            <View style={styles.screen}>
                <TitleText>The Game is Over!</TitleText>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={require('../assets/success.png')}
                        resizeMode={'cover'}
                    />
                </View>
                <View style={styles.resultContainer}>
                    <BodyText style={styles.resultText}>Your phone needed
                  <Text style={styles.highlight}> {props.roundsNumber}</Text> rounds to guess
                  <Text style={styles.highlight}> {props.userNumber}</Text>
                    </BodyText>
                </View>
                <MainButton onPress={props.restart}>NEW GAME</MainButton>
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        borderRadius: Dimensions.get('window').width * .7 / 2,
        borderWidth: 3,
        borderColor: 'black',
        width: Dimensions.get('window').width * .7,
        height: Dimensions.get('window').width * .7,
        overflow: 'hidden',
        marginVertical: Dimensions.get('window').height / 30
    },
    image: {
        width: '100%',
        height: '100%'
    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: Dimensions.get('window').height / 60
    },
    resultText: {
        textAlign: 'center',
        fontSize: Dimensions.get('window').height < 400 ? 16 : 20
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold'
    }
});

export default GameOverScreen;