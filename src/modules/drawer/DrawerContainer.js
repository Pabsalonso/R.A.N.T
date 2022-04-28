import { View, Text, Button } from 'native-base';
import React from 'react';
import * as Routing from 'routes/Routing';

export default function DrawerContainer() {
  return (
    <View>
      <Text>
        Hola
      </Text>

      <Button onPress={() => Routing.openRegister()}>
        <Text>Registrarse</Text>
      </Button>

      <Button>
        <Text>Iniciar Sesión</Text>
      </Button>

      <Button>
        <Text>Favoritos</Text>
      </Button>
      <Button>
        <Text>País de las recetas</Text>
      </Button>

    </View>
  );
}
