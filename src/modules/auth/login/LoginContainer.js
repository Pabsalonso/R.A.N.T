import { View, Text, Button } from 'native-base';
import React from 'react';
import BaseComponent from 'base/BaseComponent';

import { TextInput } from 'react-native-gesture-handler';
import * as FormValidator from '../../../utils/validators/FormValidators';
// import * as Routing from 'routes/Routing';
import { Alert } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import { login } from 'services/api/ApiCalls';
import { setUserTokens } from '../../../services/user/UserActions';
import * as UserReducer from '../../../services/user/UserReducer';

class LoginContainer extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      spinner: false,
      email: '',
      password: '',
      prueba: '' };
    this.onSubmit = this.onSubmit.bind(this);
  }

   onSubmit = () => {
     if (!FormValidator.emailValidator(this.state.email)
       || !FormValidator.isValidPassword(this.state.password)) {
       Alert.alert('Error', 'Email o contraseña no cumple con requisitos');
     } else {
       this.setState({ spinner: true });
       login(this.state.email, this.state.password).then((result) => {
         // if (!result.ok) {
         //   Alert.alert('Error', 'Este correo no vale');
         // }
         //  setUserTokens(result.token, '');
         console.log(UserReducer.default(this.state.prueba, setUserTokens(result.token, result.token)));
         console.log(UserReducer.default(this.state.prueba, ''));
         this.setState({ spinner: false });
       });
     }
   };

   render() {
     return (
       <View>
         {/* Carga el spinner cuando llame a la api */}
         { this.state.spinner
        && (
        <Spinner
          visible
          textContent="Cargando..."
        />
        )}

         <TextInput
           placeholder="Email"
           onChangeText={(result) => this.setState({ email: result })}
           keyboardType="visible-password"
         />

         <TextInput
           placeholder="Contraseña"
           secureTextEntry
           onChangeText={(result) => this.setState({ password: result })}
         />

         {/** Falta Confirmar contraseña */}

         <Button onPress={this.onSubmit}>
           <Text>Iniciar Sesión</Text>
         </Button>

       </View>
     );
   }
}

export default LoginContainer;
