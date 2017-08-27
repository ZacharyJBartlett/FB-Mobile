import * as firebase from 'firebase';


// initializing firebase
const config = {
    apiKey: "AIzaSyBYdQGojMAMm5Q6Vu6d9FPN-JVhv9XM8PQ",
    authDomain: "helloworld-d9548.firebaseapp.com",
    databaseURL: "https://helloworld-d9548.firebaseio.com",
    projectId: "helloworld-d9548",
    storageBucket: "",
    messagingSenderId: "484299108181"
  };

  class Hello extends Component {
    render() {
        return (
            <View style="{styles.container}">
                Hello World
                </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#blue',
        flex: 1,
    },
});