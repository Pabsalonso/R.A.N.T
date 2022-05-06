/* eslint-disable no-unused-vars */
/* eslint-disable global-require */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DraggableFlatList from 'react-native-draggable-flatlist';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as Routing from 'routes/Routing';
import { newRecipe } from 'services/api/ApiCalls';
import { connect } from 'react-redux';

import { newRecipeStyle, newRecipeStep3 } from '../newRecipe.style';

function NewRecipeStep3({ prevStep, handleChange, values, dataUser, accessToken }) {
  const [updateState, setUpdateState] = useState(values.steps);
  const [count, setcount] = useState((values.steps.length.length !== undefined) ? values.steps.length + 1 : 1);

  const renderItem = ({ item, drag, isActive }) => (
    <TouchableOpacity
      onLongPress={drag}
      disabled={isActive}
      style={newRecipeStep3.listItem}
    >
      <ImageBackground
        style={newRecipeStep3.listItemBackground}
        source={item.stepImg.length !== 0
          ? { uri: `data:image/png;base64,${item.stepImg}` }
          : require('resources/assets/images/default.jpg')}
      >
        <View style={newRecipeStep3.pasoInfo}>
          <Text style={newRecipeStep3.pasoNoText}>{item.stepNo}</Text>
          <Text style={newRecipeStep3.pasoNoTitle}>{item.stepTitle}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );

  const addStep = (name, text, img) => {
    values.steps.push({ stepTitle: name, stepText: text, stepImg: img, stepNo: count, listIndex: count - 1 });
    setUpdateState(['']);
    setcount(count + 1);
    Routing.pop();
  };

  const changeStep = (data) => {
    for (let i = 0; i < data.length; i + 1) {
      const element = data[i];
      element.stepNo = i + 1;
    }
    return data;
  };

  const postData = () => {
    newRecipe(dataUser.id, accessToken, values).then((response) => console.log(response));
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
          ListHeaderComponent={(<Text style={newRecipeStyle.title}>Pasos de preparación</Text>)}
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
              {/* <TouchableOpacity
                onPress={}
                style={{ width: '100%', backgroundColor: 'green' }}
              >
                <Text>Pruebita</Text>
              </TouchableOpacity> */}
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
                      Crear la Receta
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
