/* eslint-disable no-unused-vars */
/* eslint-disable global-require */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DraggableFlatList from 'react-native-draggable-flatlist';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as Routing from 'routes/Routing';
import { newRecipe, editRecipe } from 'services/api/ApiCalls';
import { connect } from 'react-redux';

import { newRecipeStyle, newRecipeStep3 } from '../newRecipe.style';

function NewRecipeStep3({ prevStep, handleChange, values, dataUser, accessToken }) {
  const [updateState, setUpdateState] = useState(values.steps);
  const [count, setcount] = useState((values.steps.length !== undefined) ? values.steps.length + 1 : 1);

  const renderItem = ({ item, drag, isActive }) => (
    <View>
      <TouchableOpacity
        onLongPress={drag}
        disabled={isActive}
        style={newRecipeStep3.listItem}
      >
        <ImageBackground
          style={newRecipeStep3.listItemBackground}
          source={item.stepImg !== null && item.stepImg.length !== 0
            ? { uri: `data:image/png;base64,${item.stepImg}` }
            : require('resources/assets/images/default.jpg')}
        >
          <Icon
            name="delete"
            style={newRecipeStep3.listActionIcon}
            color="black"
            size={30}
            onPress={() => removeStep(item.stepNo - 1)}
          />
          <View style={newRecipeStep3.pasoInfo}>
            <Text style={newRecipeStep3.pasoNoText}>{item.stepNo}</Text>
            <Text style={newRecipeStep3.pasoNoTitle}>{item.title}</Text>
          </View>
          <Icon
            name="edit"
            style={newRecipeStep3.listActionIcon}
            color="black"
            size={30}
            onPress={() => Routing.openEditRecipeStep({ editStep, stepData: item, title: 'Editar paso' })}
          />
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );

  const addStep = (name, text, img) => {
    values.steps.push({ title: name, stepText: text, stepImg: img, stepNo: count, listIndex: count - 1 });
    setUpdateState(['']);
    setcount(count + 1);
    Routing.pop();
  };

  const editStep = (step, name, text, img) => {
    for (let i = 0; i < values.steps.length; i += 1) {
      const element = values.steps[i];
      if (element.stepNo === step) {
        values.steps[i] = {
          title: name,
          stepText: text,
          stepImg: img,
          stepNo: element.stepNo,
          listIndex: element.listIndex };
        break;
      }
    }
    setUpdateState(['']);
    Routing.pop();
  };

  const removeStep = (index) => {
    values.steps.splice(index, 1);
    for (let i = index; i < values.steps.length; i += 1) {
      const element = values.steps[i];
      element.stepNo = i + 1;
    }
    setcount(count - 1);
    handleChange('steps', values.steps);
  };

  const changeStep = (data) => {
    for (let i = 0; i < data.length; i += 1) {
      const element = data[i];
      element.stepNo = i + 1;
    }
    return data;
  };

  const postData = () => {
    if (values.id === undefined) {
      newRecipe(dataUser.id, accessToken, values).then(() => Routing.pop());
    } else {
      editRecipe(accessToken, values).then(() => Routing.pop());
    }
  };

  return (
    <View style={newRecipeStyle.container}>
      <View style={{ flex: 1 }}>
        <DraggableFlatList
          style={newRecipeStep3.list}
          data={values.steps}
          keyExtractor={(item) => `draggable-item-${item.listIndex}`}
          onDragEnd={({ data }) => {
            handleChange('steps', changeStep(data));
          }}
          renderItem={renderItem}
          ListHeaderComponent={(
            <View style={newRecipeStep3.centerText}>
              <Text style={newRecipeStyle.title}>Pasos de preparación</Text>
              <Text style={newRecipeStep3.instuccionesText}>
                Arrastra los pasos para ordenar. Pulsa en un paso para editarlo
              </Text>
            </View>
          )}
          ListFooterComponent={(
            <>
              {/* Añadir receta boton */}
              <View style={newRecipeStyle.centerView}>
                <Icon
                  name="add-circle-outline"
                  size={50}
                  onPress={() => Routing.openCreateRecipeStep({ addFunc: addStep, title: 'Crear un Paso' })}
                />
              </View>
              {/* Añadir validators */}
              {/* Footer */}
              <View style={newRecipeStyle.footer}>
                <ImageBackground
                  style={newRecipeStyle.imgBackround}
                  source={require('resources/assets/images/background-table.jpg')}
                >
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={newRecipeStyle.continue}
                    onPress={postData}
                  >
                    <Text style={newRecipeStyle.continueText}>
                      {' '}
                      {values.id === undefined ? 'Crear la Receta' : 'Editar la Receta' }
                      {' '}
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={newRecipeStyle.cancelar}
                    onPress={prevStep}
                  >
                    <Text style={newRecipeStyle.continueText}>
                      {' '}
                      Atras
                      {' '}
                    </Text>
                  </TouchableOpacity>
                </ImageBackground>
              </View>
            </>
          )}
        />
      </View>
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
