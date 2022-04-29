import { View, Text, Button } from 'native-base';
import React from 'react';
import { TextInput } from 'react-native-gesture-handler';
import * as FormValidator from '../../../utils/validators/FormValidators';
// import * as Routing from 'routes/Routing';
import { Alert, ActivityIndicator } from 'react-native';
// import Spinner from 'react-native-loading-spinner-overlay';

import { login } from 'services/api/ApiCalls';

export default function LoginContainer() {
//   const [spinner, setSpinner] = React.useState(false);
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  const onSubmit = () => {
    // setSpinner(true);
    if (!FormValidator.emailValidator(email)
     || !FormValidator.isValidPassword(password)) {
      Alert.alert('Error', 'Email o contraseña no cumple con requisitos');
    } else {
      login(email, password).then((result) => {
        // if (!result.ok) {
        //   Alert.alert('Error', 'Este correo no vale');
        // }
        console.log(result.token);
      });
    }
    // setSpinner(false);
  };

  return (
    <View>
      {/* <Spinner
        visible={spinner}
        textContent={'Cargando...'}
      /> */}

      <TextInput
        placeholder="Email"
        onChangeText={onChangeEmail}
        keyboardType="visible-password"
      />

      <TextInput
        placeholder="Contraseña"
        keyboardType="visible-password"
        secureTextEntry={true}
        onChangeText={onChangePassword}
      />

      {/** Confirmar contraseña */}

      <Button onPress={onSubmit}>
        <Text>Iniciar Sesión</Text>
      </Button>

    </View>
  );
}
