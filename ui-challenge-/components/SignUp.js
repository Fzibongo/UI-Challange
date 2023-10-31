import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  
} from 'react-native';

function SignUp() {
  return (
    <View>
      <Text style={styles.heading}>Create your account</Text>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.SignUpText}>SignUp</Text>
      </TouchableOpacity>

      <View style={styles.lineBox}>
        <View>
          <View style={styles.line}> </View>
        </View>

        <View>
        
          <Text style={styles.or}>or</Text>{' '}
        </View>

        <View>
          <View style={styles.line}> </View>
        </View>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Your name"
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Your email"
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Your password"
        keyboardType="numeric"
      />
      <View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.SignUpText}>SignUp</Text>
        </TouchableOpacity>
        <Text style={styles.forgotpassowrdText}>Already have an account? sign in</Text>

        <View  style={styles.SignInLine}></View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    paddingLeft: 76,
    paddingTop: 10,
  },
  btn: {
    width: 200,
    backgroundColor: 'black',
    height: 40,
    borderRadius: 20,
    marginLeft: 80,
    marginTop: 50,
  },
  SignUpText: {
    color: 'white',
    borderRadius: '30%',
    marginLeft: 70,
    paddingTop: 10,
  },

  lineBox: {
    flexDirection: 'row',
    marginTop: 20,
    paddingLeft: 80,
  },

  line: {
    width: 100,
    color: 'black',
    paddingTop: 5,
    borderTopWidth: 1,
  },

  input: {
    height: 40,
    margin: 10,
 borderBottomWidth:1,
    padding: 5,
  },


  forgotpassowrdText:{
    paddingLeft:30

  },

  or: {
    paddingTop:-150
  },

  SignInLine: {
     width: 50,
    color: 'black',
    paddingTop: 5,
    borderTopWidth: 1,
    marginLeft:190
  }
});

export default SignUp;
