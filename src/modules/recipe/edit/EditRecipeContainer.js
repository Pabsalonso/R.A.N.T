import React from 'react';
import { SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// Base
import BaseComponent from 'base/BaseComponent';
// Vistas de los pasos
import NewRecipeStep1 from '../create/formSteps/NewRecipeStep1Container';
import NewRecipeStep2 from '../create/formSteps/NewRecipeStep2Container';
import NewRecipeStep3 from '../create/formSteps/NewRecipeStep3Container';

// Resources

class EditRecipeContainer extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      step: 1,
      title: this.props.title,
      text: this.props.text,
      img: this.props.img,
      prepTime: this.props.prepTime,
      dificulty: this.props.dificulty,
      people: this.props.people,
      ingredients: this.props.ingredients,
      steps: this.props.steps,
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
          <SafeAreaView style={{ flex: 1 }}>
            <NewRecipeStep2
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={this.state}
            />
          </SafeAreaView>
        );
      case 3:
        return (
          <SafeAreaView style={{ flex: 1 }}>
            <NewRecipeStep3
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={this.state}
            />
          </SafeAreaView>
        );
      default:
        return (null);
    }
  }
}

export default EditRecipeContainer;
