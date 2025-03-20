import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';
import { useNavigation } from '@react-navigation/native';
import { PieChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const questions = [
  { id: '1', question: 'How many blocks are present in a Periodic Table?', option: { text: '4_blocks', correct: true }, correctAnswer: '4 blocks' },
  { id: '2', question: 'What is the atomic number of Oxygen?', option: { text: '6', correct: false }, correctAnswer: '8' },
  { id: '3', question: 'Which element has the symbol "Na"?', option: { text: 'Sodium', correct: true }, correctAnswer: 'Sodium' },
  { id: '4', question: 'What is the lightest element?', option: { text: 'Oxygen', correct: false }, correctAnswer: 'Hydrogen' },
  { id: '5', question: 'Which element is a noble gas?', option: { text: 'Neon', correct: true }, correctAnswer: 'Neon' },
];

const QuizScreen = () => {
  const navigation = useNavigation();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedBox, setSelectedBox] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleSelection = (box) => {
    setSelectedBox(box);
    setShowAnswer(true);

    const isCorrect = questions[currentQuestion].option.correct;
    if ((box === 'Correct' && isCorrect) || (box === 'Wrong' && !isCorrect)) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedBox(null);
      setShowAnswer(false);
    } else {
      setQuizCompleted(true);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.backButtonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('QuizHomeScreen')}>
          <Text style={styles.backButtonText}>⬅</Text>
        </TouchableOpacity>
      </View>


      {!quizCompleted ? (
        <>
          <View style={styles.progressBar}>
            <Text style={styles.progressText}>
              Question {currentQuestion + 1} / {questions.length}
            </Text>
          </View>

          <Text style={styles.question}>{questions[currentQuestion].question}</Text>

          <TouchableOpacity
            style={styles.option}
            onPress={() => setSelectedBox(null)}
          >
            <Text style={styles.optionText}>{questions[currentQuestion].option.text}</Text>
          </TouchableOpacity>

          <View style={styles.boxContainer}>
            <TouchableOpacity
              style={[styles.box, { backgroundColor: 'white' }]}
              onPress={() => handleSelection('Correct')}
            >
              <Text style={styles.boxText}>Correct</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.box, { backgroundColor: 'white' }]}
              onPress={() => handleSelection('Wrong')}
            >
              <Text style={styles.boxText}>Wrong</Text>
            </TouchableOpacity>
          </View>

          {showAnswer && (
            <View
              style={[
                styles.answerContainer,
                { backgroundColor: selectedBox === 'Correct' && questions[currentQuestion].option.correct ? 'green' : 'red' },
              ]}
            >
              <Text style={styles.answerText}>
                {selectedBox === 'Correct' && questions[currentQuestion].option.correct
                  ? 'Correct Answer'
                  : `Correct answer is: ${questions[currentQuestion].correctAnswer}`}
              </Text>
            </View>
          )}

          <TouchableOpacity onPress={nextQuestion} style={styles.nextButton}>
            <Text style={styles.nextButtonText}>Next ➡</Text>
          </TouchableOpacity>
        </>
      ) : (
        <View style={styles.resultContainer}>
           <PieChart
            data={[
              { name: 'Correct', population: score, color: 'green', legendFontColor: 'black', legendFontSize: 15 },
              { name: 'Wrong', population: 5 - score, color: 'red', legendFontColor: 'black', legendFontSize: 15 },
            ]}
            width={screenWidth - 40}
            height={200}
            chartConfig={{
              backgroundGradientFrom: '#fff',
              backgroundGradientTo: '#fff',
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            }}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="15"
            absolute
          />

          <Text style={styles.resultText}>Quiz Completed!</Text>
          <Text style={styles.scoreText}>Your Score: {score} / {questions.length}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('QuizHomeScreen')} style={styles.retryButton}>
            <Text style={styles.retryText}>Try Again</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = {
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: '#87CEFA', 
    alignItems: 'center', 
    justifyContent: 'center', // Centers all content
  },
  backButtonContainer: { 
    position: 'absolute',
    top: 20, 
    left: 20 // Moves button to the top-left corner
  },
  backButtonText: {
    fontSize: 30
  },
  progressBar: { backgroundColor: 'white', padding: 8, borderRadius: 10, marginBottom: 50 },
  progressText: { fontSize: 16, fontWeight: 'bold', color: 'black' },
  question: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  option: { padding: 15, backgroundColor: 'purple', borderRadius: 10, width: '80%', alignItems: 'center' },
  optionText: { color: 'white', fontSize: 18 },
  boxContainer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, width: '80%' },
  box: { width: '45%', padding: 15, borderRadius: 10, alignItems: 'center', borderWidth: 1 },
  boxText: { fontSize: 16, fontWeight: 'bold' },
  answerContainer: { padding: 15, marginTop: 10, borderRadius: 10 },
  answerText: { color: 'white', textAlign: 'center', fontSize: 18 },
  nextButton: { marginTop: 20, alignSelf: 'center', padding: 10, backgroundColor: 'blue', borderRadius: 10 },
  nextButtonText: { color: 'white', fontSize: 18 },
  resultContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  resultText: { fontSize: 24, fontWeight: 'bold' },
  scoreText: { fontSize: 20, marginTop: 10 },
  retryButton: { marginTop: 20, padding: 10, backgroundColor: 'blue', borderRadius: 10 },
  retryText: { color: 'white', fontSize: 18 },
};

export default QuizScreen;
