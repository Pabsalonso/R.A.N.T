/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Button, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DraggableFlatList from 'react-native-draggable-flatlist';

import * as Routing from 'routes/Routing';
import { newRecipe } from 'services/api/ApiCalls';
import { connect } from 'react-redux';

function NewRecipeStep3({ prevStep, handleChange, values, dataUser, accessToken }) {
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
        {item.stepTitle}
        {' '}
      </Text>
    </TouchableOpacity>
  );

  const addStep = (name, text, img) => {
    values.steps.push({ stepTitle: name, stepText: text, stepImg: img, stepNo: count, listIndex: count - 1 });
    setUpdateState(['']);
    setcount(count + 1);
  };

  //   Arreglar metodo para que actualize el orden de los steps
  const changeStep = (from, to) => {
    console.log(from);
    console.log(to);

    console.log(values.steps[from].step);

    values.steps[from].step = to + 1;
    console.log(values.steps[from].step);

    console.log(values.steps[to].step);

    values.steps[to].step = from + 1;

    console.log(values.steps[to].step);

    setUpdateState(['']);
  };

  const postData = () => {
    newRecipe(dataUser.id, accessToken, values).then((response) => console.log(response));
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
          }}
          renderItem={renderItem}
        />

        <TouchableOpacity
          onPress={() => Routing.openCreateRecipeStep({ addFunc: addStep })}
          style={{ width: '100%', backgroundColor: 'green' }}
        >
          <Text>Pruebita</Text>
        </TouchableOpacity>
      </View>

      {/* Añadir validators */}
      <Button
        title="Postear"
        onPress={postData}
      />
      <Button title="Atrás" onPress={prevStep} />
    </View>
  );
}

const mapStateToProps = ({ UserReducer }) => {
  const { accessToken } = UserReducer;
  const { dataUser } = UserReducer;
  return {
    accessToken,
    dataUser,
  };
};

export default connect(mapStateToProps, null)(NewRecipeStep3);
