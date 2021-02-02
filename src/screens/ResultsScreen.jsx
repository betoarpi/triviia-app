import React, { useContext } from 'react';
import { Text, ScrollView, View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';

import { ThemeContext } from '../utils/context';

import Answer from '../components/Answer';
import { ButtonAqua } from '../components/Buttons';
import Layout from '../components/Layout';
import Score from '../components/Score';

const ResultsScreen = ({ route }) => {
    const navigation = useNavigation();
    const { results, answers } = route.params;
    const { theme } = useContext(ThemeContext);
    return (
        <Layout>
            <Score results={results} theme={theme} />
            <LinearGradient
                colors={[ 'rgba(255, 234, 248, 0)', '#e1eaf8']}
                start={[0, 0.6]}
                end={[0, 0]}
                style={[
                    styles.gradient,
                    { marginBottom: -80, zIndex: 10 }
                ]}
            />
            <ScrollView
                style={styles.container}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.innerContainer}>
                    {answers.map((item, index) => (
                        <Answer
                            key={`${index}-key`}
                            isCorrect={item.answer}
                            question={item.question}
                            theme={theme}
                        />
                    ))}
                </View>
            </ScrollView>
            <Entypo
                name='chevron-down'
                size={24}
                color={theme.colors.text}
                style={styles.icon}
            />
            <LinearGradient
                colors={[ 'rgba(255, 234, 248, 0)', '#e1eaf8']}
                start={[0, 0]}
                end={[0, 0.6]}
                style={[
                    styles.gradient,
                    { marginTop: -80 }
                ]}
            />
            <ButtonAqua
                title='Play Again?'
                onPress={() => navigation.navigate('Home')}
                theme={theme}
            />
        </Layout>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingBottom: 60,
        width: '100%',
        position: 'relative'
    },
    innerContainer: {
        marginBottom: 50
    },
    icon: {
        marginBottom: 8,
        zIndex: 10
    },
    gradient: {
        height: 80,
        width: '100%'
    }
});

export default ResultsScreen;