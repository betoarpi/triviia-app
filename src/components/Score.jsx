import React from 'react';
import propTypes from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';
import Emoji from 'react-native-emoji';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: -100,
  },
  circle: {
    alignItems: 'center',
    borderRadius: 60,
    justifyContent: 'center',
    marginBottom: 10,
    height: 120,
    width: 120,
  },
  circleText: {
    fontFamily: 'SourceSansPro_900Black',
    fontSize: 36,
  },
  text: {
    fontFamily: 'SourceSansPro_700Bold',
    fontSize: 20,
  },
  textEmoji: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});

const Score = ({ results, theme }) => {
  const score = results / 10;

  const handleEmoji = () => {
    let emoji;
    if (score <= 0.5) {
      emoji = 'confused';
    } else if (score <= 0.7) {
      emoji = 'flushed';
    } else if (score <= 0.9) {
      emoji = 'grin';
    } else {
      emoji = 'sunglasses';
    }
    return emoji;
  };

  const handleMessage = () => {
    let message;
    if (score <= 0.5) {
      message = 'You can do it better';
    } else if (score <= 0.7) {
      message = 'Oh! nice try';
    } else if (score <= 0.9) {
      message = 'Wow! very nice';
    } else {
      message = 'You are the best!';
    }
    return message;
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.circle,
          {
            backgroundColor: theme.colors.button,
          },
        ]}
      >
        <Text
          style={[
            styles.circleText,
            {
              color: theme.colors.primary,
            },
          ]}
        >
          {`${results}/10`}
        </Text>
      </View>
      <View style={styles.textEmoji}>
        <Text
          style={[
            styles.text,
            {
              color: theme.colors.primary,
            },
          ]}
        >
          {handleMessage()}
        </Text>
        <Emoji
          name={handleEmoji()}
          style={{
            fontSize: 24,
            marginLeft: 5,
          }}
        />
      </View>
    </View>
  );
};

Score.propTypes = {
  results: propTypes.number.isRequired,
  theme: propTypes.shape({
    colors: propTypes.shape({
      primary: propTypes.string,
      button: propTypes.string,
    }),
  }).isRequired,
};

export default Score;
