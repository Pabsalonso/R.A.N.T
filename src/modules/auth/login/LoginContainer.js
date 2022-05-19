import { View, Text } from 'native-base';
import React from 'react';
import BaseComponent from 'base/BaseComponent';
import { connect } from 'react-redux';

import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import * as FormValidator from '../../../utils/validators/FormValidators';
import { Alert, Image } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import { login } from 'services/api/ApiCalls';
import { setUserTokens, setUserData } from '../../../services/user/UserActions';

import { loginStyle } from './login.style';

class LoginContainer extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      spinner: false,
      email: '',
      password: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

   onSubmit = () => {
     if (!FormValidator.emailValidator(this.state.email)
       || !FormValidator.isValidPassword(this.state.password)) {
       Alert.alert('Error', 'Email o contraseña no cumple con requisitos');
     } else {
       this.setState({ spinner: true });
       login(this.state.email, this.state.password).then((result) => {
         if (result.code === 401) {
           Alert.alert('Error', 'Email o contraseña incorrectos');
           this.setState({ spinner: false });
         } else {
           this.props.setUserTokens(result.token, '');
           this.props.setUserData(result);
         }
       });
     }
   };

   render() {
     return (
       <View style={loginStyle.containerContent}>
         {/* Carga el spinner cuando llame a la api */}
         { this.state.spinner
        && (
        <Spinner
          visible
          textContent="Cargando..."
        />
        )}

         <View style={loginStyle.containerCard}>
           <Text style={loginStyle.title}>Iniciar sesión</Text>
           <View style={loginStyle.profileImgContainer}>
             <Image
               source={require('resources/assets/images/granny-pfp.jpg')}
               resizeMode="contain"
               style={loginStyle.img}
             />
           </View>
           <TextInput
             placeholder="Email"
             onChangeText={(result) => this.setState({ email: result })}
             keyboardType="visible-password"
             style={loginStyle.input}
           />

           <TextInput
             placeholder="Contraseña"
             secureTextEntry
             onChangeText={(result) => this.setState({ password: result })}
             style={loginStyle.input}
           />

           {/** Falta campo confirmar contraseña */}

           <TouchableOpacity
             activeOpacity={0.8}
             style={loginStyle.registerButton}
             onPress={this.onSubmit}
           >
             <Text style={loginStyle.registerButtonFont}>
               {' '}
               Iniciar sesión
               {' '}
             </Text>
           </TouchableOpacity>
         </View>

       </View>
     );
   }
}

const mapStateToPropsActions = {
  setUserTokens,
  setUserData,
};

export default connect(null, mapStateToPropsActions)(LoginContainer);
