/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Button, View, Text } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import DraggableFlatList from 'react-native-draggable-flatlist';

export default function NewRecipeStep3({ nextStep, prevStep, handleChange, values }) {
  let buff = '';
  const [updateState, setUpdateState] = useState(values.steps);
  const [count, setcount] = useState(1);

  const renderItem = ({ item, drag, isActive }) => (
    <TouchableOpacity
      onLongPress={drag}
      disabled={isActive}
    >
      <Text>
        {item.step}
        {' '}
      </Text>
      <Text>
        {item.listIndex}
        {' '}
      </Text>
      <Text>
        {item.title}
        {' '}
      </Text>
    </TouchableOpacity>
  );

  const addStep = (name) => {
    values.steps.push({ title: name, step: count, listIndex: count });
    setcount(count + 1);
    setUpdateState(['']);
  };

  const changeStep = (from, to) => {
    values.steps[from].step = to + 1;
    values.steps[to].step = from + 1;
    setUpdateState(['']);
  };

  return (
    <View>
      <Text>Pasos de preparación</Text>

      <View>
        {/* <TouchableHighlight>
          <Text>Pruebita</Text>
        </TouchableHighlight> */}
        <DraggableFlatList
          data={values.steps}
          keyExtractor={(item, index) => `draggable-item-${item.listIndex}`}
          onDragEnd={({ data, from, to }) => {
            handleChange('steps', data);
            changeStep(from, to);
            //   console.log(data);
            //   changeStep(data);
          }}
          renderItem={renderItem}
        />
        <TextInput
          placeholder=" prueba añade"
          onChangeText={(text) => {
            buff = text;
          }}
        />
        <Button
          title="añadir prueba"
          onPress={() => addStep(buff)}
        />

      </View>

      {/* Añadir validators */}
      <Button title="siguiente" onPress={nextStep} />
      <Button title="Atrás" onPress={prevStep} />
    </View>
  );
}
