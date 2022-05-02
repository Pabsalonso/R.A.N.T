import React from 'react';
import { SafeAreaView, Text, View, FlatList, TouchableOpacity, TextInput, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as Routing from 'routes/Routing';

// Base
import BaseComponent from 'base/BaseComponent';

// Resources

// Styles

class CreateRecipeContainer extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      title: '',
      text: '',
      img: '',
      prepTime: 0,
      dificulty: '',
      people: 0,
      ingredients: [],
      steps: [],
    };
  }

  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  }

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  }

  render() {
    const { step } = this.state;

    switch (step) {
      case 1:
        return (
          <View>
            <Text>
              {' '}
              Paso
              {' '}
              {step}
            </Text>
            {/* <Button title="atras" onPress={this.prevStep} /> */}
            <Button title="siguiente" onPress={this.nextStep} />
          </View>

        );
      case 2:
        return (
          <View>
            <Text>
              {' '}
              Paso
              {' '}
              {step}
            </Text>
            <Button title="atras" onPress={this.prevStep} />
            <Button title="siguiente" onPress={this.nextStep} />
          </View>
        );
      case 3:
        return (
          <View>
            <Text>
              {' '}
              Paso
              {step}
            </Text>
            <Button title="atras" onPress={this.prevStep} />
            <Button title="siguiente" onPress={this.nextStep} />
          </View>
        );
      case 4:
        return (
          <Text>Exito</Text>
        );
        // never forget the default case, otherwise VS code would be mad!
      default:
        return (null);
           // do nothing
    }

    // return (
    //   <SafeAreaView>
    //     {/* <ScrollView>
    //         <TextInput
    //         placeholder='hola'/>

    //     </ScrollView> */}
    //   </SafeAreaView>
    // );
  }
}

export default CreateRecipeContainer;
