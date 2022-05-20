/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable global-require */
import { View, Text } from 'native-base';
import React from 'react';
import BaseComponent from 'base/BaseComponent';
import { connect } from 'react-redux';
import * as Routing from 'routes/Routing';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import * as FormValidator from 'utils/validators/FormValidators';
import { Alert, Image } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import ImagePickerModal from 'modules/imagePicker/ImagePickerModal';
import * as ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { editProfile } from 'services/api/ApiCalls';
import { setUserTokens, setUserData } from 'services/user/UserActions';

import { registerStyle } from 'modules/auth/register/register.style';

class ProfileContainer extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      spinner: false,
      email: this.props.dataUser.email,
      picture: this.props.dataUser.picture,
      name: this.props.dataUser.name,
      visible: false,
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onImageLibraryPress = () => {
    const options = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: true,
    };
    ImagePicker.launchImageLibrary(options).then((response) => {
      this.setState({ picture: response.assets !== null ? response.assets[0].base64 : '' });
      this.setState({ visible: false });
    }).catch();
  };

  onCameraPress = () => {
    const options = {
      saveToPhotos: false,
      mediaType: 'photo',
      includeBase64: true,
    };
    ImagePicker.launchCamera(options).then((response) => {
      this.setState({ picture: response.assets !== null ? response.assets[0].base64 : '' });
      this.setState({ visible: false });
    }).catch();
  };

   onSubmit = ({ picture, name }) => {
     if (!FormValidator.isValidPassword(name)) {
       Alert.alert('Error', 'EL campo nombre debe ser válido');
     } else {
       this.setState({ spinner: true });
       editProfile(this.props.accessToken, this.props.dataUser.id, name, picture).then((result) => {
         this.props.setUserData(result);
         this.setState({ spinner: false });
         Routing.pop();
       });
     }
   };

   render() {
     const values = this.state;
     return (
       <ScrollView style={{ flex: 1 }}>
         {/* Carga el spinner cuando llame a la api */}
         { this.state.spinner
        && (
        <Spinner
          visible
          textContent="Cargando..."
        />
        )}
         <View style={registerStyle.titleContainer}>
           <Text style={registerStyle.title}> Mi Perfil</Text>
         </View>
         <Text style={registerStyle.subtitle}>
           Bienvenido de nuevo! Si deseas cambiar el nombre de tu cuenta
           o foto de perfil, modifica los campos
         </Text>

         <View style={registerStyle.imageContainer}>
           <View style={registerStyle.profileImgContainer}>
             <Image
               source={(values.picture ?? null) && (values.picture.length !== 0)
                 ? { uri: `data:image/png;base64,${values.picture}` }
                 : require('resources/assets/images/emptyImg.png')}
               style={registerStyle.img}
             />
           </View>
           <View>
             <TouchableOpacity
               activeOpacity={0.8}
               style={registerStyle.addImgButton}
               onPress={() => this.setState({ visible: true })}
             >
               <Icon name="add-a-photo" size={20} />

               <Text>{' '}{values.picture === null ? 'Añadir foto de Perfil' : 'Editar foto de Perfil'}{' '}</Text>
             </TouchableOpacity>
             { ((values.picture ?? null) && (values.picture.length !== 0)) && (
               <TouchableOpacity
                 activeOpacity={0.8}
                 style={registerStyle.removeImgButton}
                 onPress={() => this.setState({ picture: null })}
               >
                 <Icon name="delete" color="white" size={20} />

                 <Text style={{ color: 'white' }}>{' '}Eliminar foto{' '}</Text>
               </TouchableOpacity>
             )}
           </View>
         </View>

         <View style={registerStyle.containerContent}>
           <TextInput
             placeholder="Nombre y apellidos"
             value={this.state.name}
             onChangeText={(result) => this.setState({ name: result })}
             keyboardType="visible-password"
             style={registerStyle.input}
           />
           {/** Falta Validatorss */}

           <TouchableOpacity
             activeOpacity={0.8}
             style={registerStyle.registerButton}
             onPress={() => this.onSubmit(this.state)}
           >
             <Text style={registerStyle.registerButtonFont}>{' '}Editar información{' '}</Text>
           </TouchableOpacity>
         </View>

         <ImagePickerModal
           isVisible={values.visible}
           onClose={() => this.setState({ visible: false })}
           onImageLibraryPress={this.onImageLibraryPress}
           onCameraPress={this.onCameraPress}
         />
       </ScrollView>
     );
   }
}

const mapStateToProps = ({ UserReducer }) => {
  const { accessToken } = UserReducer;
  const { dataUser } = UserReducer;
  return {
    accessToken,
    dataUser,
  };
};

const mapStateToPropsActions = {
  setUserTokens,
  setUserData,
};

export default connect(mapStateToProps, mapStateToPropsActions)(ProfileContainer);
