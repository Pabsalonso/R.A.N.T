import { View, Text, Button } from 'native-base';
import React from 'react';
import { TextInput } from 'react-native-gesture-handler';
import * as FormValidator from '../../../utils/validators/FormValidators';
// import * as Routing from 'routes/Routing';
import { Alert, ActivityIndicator } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import { register } from 'services/api/ApiCalls';

export default function RegisterContainer() {
  const [spinner, setSpinner] = React.useState(false);
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  const onSubmit = () => {
    setSpinner(true);
    if (!FormValidator.emailValidator(email)
     || !FormValidator.isValidPassword(password)) {
      Alert.alert('Error', 'Email o contraseña no cumple con requisitos');
    } else {
      register(email, password).then((result) => {
        if (!result.ok) {
          Alert.alert('Error', 'Este correo no vale');
        }
      });
    }
    setSpinner(false);
  };

  return (
    <View>
      { spinner ? <ActivityIndicator color={"#fff"} /> : null }
      {/* <Spinner
        visible={spinner}
        textContent={'Cargando...'}
      /> */}
      <Text>
        Hola
      </Text>
      <TextInput
        placeholder="Email"
        onChangeText={onChangeEmail}
      />

      <TextInput
        placeholder="Contraseña"
        secureTextEntry={true}
        onChangeText={onChangePassword}
      />

      <Button onPress={onSubmit}>
        <Text>Prueba a registrarte</Text>
      </Button>

    </View>
  );
}