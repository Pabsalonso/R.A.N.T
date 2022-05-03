import React from 'react';
import { SafeAreaView, Text, View, FlatList, TouchableOpacity, TextInput, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as Routing from 'routes/Routing';

// Base
import BaseComponent from 'base/BaseComponent';
import NewRecipeStep1 from './formSteps/NewRecipeStep1Container';

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
    console.log(this.state);
  }

  handleChange = (input, value) => {
    this.setState({ [input]: value });
  }

  render() {
    const { step } = this.state;

    switch (step) {
      case 1:
        return (
          <SafeAreaView>
            <ScrollView>
              <NewRecipeStep1
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={this.state}
              />
            </ScrollView>
          </SafeAreaView>

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
            <TextInput
              placeholder="Descripcion"
              onChangeText={(input) => this.setState({ input })}
            />
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
      default:
        return (null);
    }
  }
}

export default CreateRecipeContainer;
