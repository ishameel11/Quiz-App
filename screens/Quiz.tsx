import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';

const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};
const Quiz = ({navigation}) => {
  const [questions, setQuestions] = useState();
  const [ques, setQues] = useState(0);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(false); // initially loading is false

  const getQuiz = async () => {
    setIsLoading(true); // the moment you get into this func, set to true
    const url =
      'https://opentdb.com/api.php?amount=25&category=9&difficulty=medium&type=multiple&encode=url3986';

    const res = await fetch(url);
    //console.log(res, 'response');
    const data = await res.json();
    // console.log('data', data.results[0]);
    setQuestions(data.results);
    setOptions(generateOptionsAndShuffle(data.results[0]));
    setIsLoading(false); // at the moment your data is ready
  };

  useEffect(() => {
    getQuiz();
  }, []);

  const handleNextPress = () => {
    setQues(ques + 1);
    setOptions(generateOptionsAndShuffle(questions[ques + 1]));
  };

  const generateOptionsAndShuffle = _question => {
    const options = [..._question.incorrect_answers];
    options.push(_question.correct_answer);

    //console.log(options);
    shuffleArray(options);
    //console.log(options, '123option');
    return options;
  };

  const handleSelectedOption = _option => {
    console.log(_option === questions[ques].correct_answer); // right or wrong answer will tell
    if (_option === questions[ques].correct_answer) {
      setScore(score + 25);
    }
    if (ques !== 24) {
      setQues(ques + 1); //for last question we won't do this.
      setOptions(generateOptionsAndShuffle(questions[ques + 1]));
    }
    if (ques === 24) {
      handleShowResult();
    }
  };

  const handleShowResult = () => {
    navigation.navigate('Result', {
      score: score,
    });
  };

  return (
    <View style={{padding: 10, paddingHorizontal: 20, height: '100%'}}>
      {isLoading ? (
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}>
          <Text style={{fontSize: 32, fontWeight: '700'}}>LOADING...</Text>
        </View>
      ) : (
        questions && (
          <View style={{height: '100%'}}>
            <View style={{marginVertical: 16, marginTop: 60}}>
              <Text style={{fontSize: 26}}>
                Q. {decodeURIComponent(questions[ques].question)}
              </Text>
            </View>
            <View style={{marginVertical: 16, flex: 1}}>
              <TouchableOpacity
                style={{
                  paddingVertical: 12,
                  marginVertical: 6,
                  backgroundColor: '#B79F6F',
                  paddingHorizontal: 12,
                  borderRadius: 12,
                }}
                onPress={() => handleSelectedOption(options[0])}>
                <Text
                  style={{fontSize: 18, fontWeight: '500', color: '#F5F5F9'}}>
                  {decodeURIComponent(options[0])}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  paddingVertical: 12,
                  marginVertical: 6,
                  backgroundColor: '#B79F6F',
                  paddingHorizontal: 12,
                  borderRadius: 12,
                }}
                onPress={() => handleSelectedOption(options[1])}>
                <Text
                  style={{fontSize: 18, fontWeight: '500', color: '#F5F5F9'}}>
                  {decodeURIComponent(options[1])}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  paddingVertical: 12,
                  marginVertical: 6,
                  backgroundColor: '#B79F6F',
                  paddingHorizontal: 12,
                  borderRadius: 12,
                }}
                onPress={() => handleSelectedOption(options[2])}>
                <Text
                  style={{fontSize: 18, fontWeight: '500', color: '#F5F5F9'}}>
                  {decodeURIComponent(options[2])}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  paddingVertical: 12,
                  marginVertical: 6,
                  backgroundColor: '#B79F6F',
                  paddingHorizontal: 12,
                  borderRadius: 12,
                }}
                onPress={() => handleSelectedOption(options[3])}>
                <Text
                  style={{fontSize: 18, fontWeight: '500', color: '#F5F5F9'}}>
                  {decodeURIComponent(options[3])}
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                marginBottom: 12,
                paddingVertical: 16,
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              {ques !== 24 && (
                <TouchableOpacity
                  style={{
                    backgroundColor: '#AB420A',
                    padding: 16,
                    paddingHorizontal: 16,
                    borderRadius: 16,
                    alignItems: 'center',
                    marginBottom: 30,
                  }}
                  onPress={handleNextPress}>
                  <Text
                    style={{fontSize: 18, fontWeight: '600', color: '#F5F5F9'}}>
                    SKIP
                  </Text>
                </TouchableOpacity>
              )}
              {ques === 24 && (
                <TouchableOpacity
                  style={{
                    backgroundColor: '#AB420A',
                    padding: 16,
                    paddingHorizontal: 16,
                    borderRadius: 16,
                    alignItems: 'center',
                    marginBottom: 30,
                  }}
                  onPress={handleShowResult}>
                  <Text
                    style={{fontSize: 18, fontWeight: '600', color: '#F5F5F9'}}>
                    SHOW RESULTS
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        )
      )}
    </View>
  );
};

export default Quiz;
