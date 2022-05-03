import React from 'react';
import { SafeAreaView, Text, View, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
// Base
import BaseComponent from 'base/BaseComponent';
// Vistas de los pasos
import NewRecipeStep1 from './formSteps/NewRecipeStep1Container';
import NewRecipeStep2 from './formSteps/NewRecipeStep2Container';
import NewRecipeStep3 from './formSteps/NewRecipeStep3Container';

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
          <SafeAreaView>
            <ScrollView>
              <NewRecipeStep2
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={this.state}
              />
            </ScrollView>
          </SafeAreaView>
        );
      case 3:
        return (
          <SafeAreaView>
            <ScrollView>
              <NewRecipeStep3
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={this.state}
              />
            </ScrollView>
          </SafeAreaView>
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
