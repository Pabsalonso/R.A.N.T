/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Button, SafeAreaView, Text, TextInput } from 'react-native';
import { View } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

import * as Routing from 'routes/Routing';

export default function CreateStepContainer({ addFunc }) {
  const [stepTitle, setstepTitle] = useState('');
  const [stepText, setstepText] = useState('');
  const [stepImg, setstepImg] = useState('');
  //   const [count, setcount] = useState((steps.length > 0) ? steps[steps.length - 1].step + 1 : 1);

  //   const addStep = (name) => {
  //     steps.push({ title: name, step: count });
  //     setcount(count + 1);
  //   };

  return (
    <SafeAreaView>
      <ScrollView>
        <Text>Hola caracola</Text>
        <TextInput
          placeholder="Titulo"
          onChangeText={(text) => setstepTitle(text)}
        />
        <TextInput
          placeholder="Imagen"
          onChangeText={(text) => setstepText(text)}
        />
        <TextInput
          placeholder="Texto"
          onChangeText={(text) => setstepImg(text)}
        />
        <Button
          title="Añadir"
          onPress={() => {
            //   console.log(props);
            // addStep('pruebita');
            addFunc(stepTitle, stepText, stepImg);
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
//   }
}

// export default CreateStepContainer;
