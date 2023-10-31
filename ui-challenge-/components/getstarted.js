import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
function GetStarted() {
  return (
    <View>
      <Text style={styles.heading}> Cultive your Creativity </Text>
      <Text style={styles.text}>
        {' '}
        collection of guides, courses, articles, inspiration and challanges to
        develop your Creativity in all areas
      </Text>

      <View  style={styles.boxCircle}>
        <View style={styles.circle}> </View>

        <View style={styles.circle}> </View>

        <View style={styles.circle}> </View>
      </View>

      <TouchableOpacity style={styles.btn}>
        {' '}
        <Text> GetStarted </Text>{' '}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    paddingLeft: 70,
  },
  text: {
    width: 340,
    fontSize: 15,
    paddingLeft: 80,
  },

  circle: {
    width: 10,
    height: 10,
    borderRadius: '50%',
    backgroundColor: 'black',
    marginLeft:3
  },

  boxCircle:{
    flexDirection:"row" ,
    marginLeft:170 ,
    paddingTop: 9

  },
  btn: {
    width: 150,
    height: 40,
    backgroundColor: '#efb3b3',
    paddingTop: 9,
    paddingLeft: 38,
    borderRadius: 20,
    marginLeft: 120,
    marginTop: 12,
  },
});

export default GetStarted;
