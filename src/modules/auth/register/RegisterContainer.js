import { View, Text, Button } from 'native-base';
import React from 'react';
import { TextInput } from 'react-native-gesture-handler';
import * as FormValidator from '../../../utils/validators/FormValidators';
import * as Routing from 'routes/Routing';
import { Alert } from 'react-native';

export default function RegisterContainer() {
  const inputValidators=[
    { email: true },
    { password: true },
  ];
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  const onSubmit = () => {
    if (!FormValidator.emailValidator(email)
     || !FormValidator.isValidPassword(password)) {
      Alert.alert('Alert', 'Password must be minimum 8 characters');
    }
  };

  return (
    <View>
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
