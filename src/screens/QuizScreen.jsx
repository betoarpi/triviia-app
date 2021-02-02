import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Layout from '../components/Layout';
import Loading from '../components/Loading';
import Question from '../components/Question';
import Progress from '../components/Progress';

const QuizScreen = () => {
    const [questions, setQuestions] = useState(null);
    useEffect(() => {
        getQuestionsFromApi();
    }, []);
    
    const [progress, setProgress] = useState(1);
    const [score, setScore] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);

    const [endQuiz, setEndQuiz] = useState(false);
    useEffect(() => {
        endQuiz === true && handleResults();
    }, [endQuiz]);

    const refQuestionList = useRef(null);

    const navigation = useNavigation();
    
    async function getQuestionsFromApi() {
        try {
            let response = await fetch('https://opentdb.com/api.php?amount=10&type=boolean');
            let responseJson = await response.json();
            return setQuestions(responseJson.results);
        } catch (error) {
            console.log(error)
        }
    }

    const handleScroll = (index) => {
        if(index < questions.length) {
            refQuestionList.current.scrollToIndex({
                animated: true,
                index: index
            });
            setProgress(progress + 1);
        }

    }

    const handleScore = (currentQuestion, answer, position) => {
        setUserAnswers([
            ...userAnswers,
            {
                question: currentQuestion,
                answer: answer
            }
        ]);

        answer === 'correct' ?
            setScore(score + 1)
        :
            setScore(score)
        
        if (position < questions.length) {
            handleScroll(position)
        } else {
            setEndQuiz(true);
        }
    }

    
    const handleResults = () => {
        navigation.navigate('Results', { 
            results: score,
            answers: userAnswers
        })
    }

    const renderItem = item => (
        <Question
            item={item}
            handleScore={handleScore}
        />
    );
    
    if(questions) {
        return(
            <Layout>
                {questions && 
                    <Progress
                        progress={progress}
                        length={questions.length}
                    />
                }
                <View style={styles.listContainer}>
                    <FlatList
                        ref={refQuestionList}
                        data={questions}
                        keyExtractor={(item, index) => 'key' + index}
                        renderItem={renderItem}
                        snapToAlignment='center'
                        horizontal={true}
                        pagingEnabled={true}
                        scrollEnabled={false}
                        scrollEventThrottle={16}
                        decelerationRate='fast'
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </Layout>
        );
    } else {
        return(
            <Layout>
                <Text>Loading</Text>
            </Layout>
        );
    }
};

const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        width: '100%',
    }
});

export default QuizScreen;