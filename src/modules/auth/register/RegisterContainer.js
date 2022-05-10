/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable global-require */
import { View, Text } from 'native-base';
import React from 'react';
import BaseComponent from 'base/BaseComponent';
import { connect } from 'react-redux';

import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import * as FormValidator from '../../../utils/validators/FormValidators';
// import * as Routing from 'routes/Routing';
import { Alert, Image } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import ImagePickerModal from 'modules/imagePicker/ImagePickerModal';
import * as ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { register } from 'services/api/ApiCalls';
import { setUserTokens, setUserData } from '../../../services/user/UserActions';

import { registerStyle } from './register.style';

class RegisterContainer extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      spinner: false,
      email: '',
      password: '',
      confirmPassword: '',
      profile: '',
      name: '',
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
      this.setState({ profile: response.assets !== undefined ? response.assets[0].base64 : '' });
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
      this.setState({ profile: response.assets !== undefined ? response.assets[0].base64 : '' });
      this.setState({ visible: false });
    }).catch();
  };

   onSubmit = ({ email, password, confirmPassword, profile, name }) => {
     if (!FormValidator.emailValidator(email)
       || !FormValidator.isValidPassword(password)) {
       Alert.alert('Error', 'Email o contraseña no cumple con requisitos');
     } else {
       this.setState({ spinner: true });
       register(email, password, name, profile).then((result) => {
         if (result.code === 401) {
           Alert.alert('Error', 'El correo ya se encuentra en uso');
           this.setState({ spinner: false });
         } else {
           this.props.setUserTokens(result.token, '');
           this.props.setUserData(result);
         }
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
           <Text style={registerStyle.title}> Registrarse</Text>
         </View>
         <Text style={registerStyle.subtitle}>Bienvenido! Proporcionanos los siguientes datos para darte de alta</Text>

         <View style={registerStyle.imageContainer}>
           <View style={registerStyle.profileImgContainer}>
             <Image
               source={values.profile.length !== 0
                 ? { uri: `data:image/png;base64,${values.profile}` }
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

               <Text>{' '}{values.profile === '' ? 'Añadir foto de Perfil' : 'Editar foto de Perfil'}{' '}</Text>
             </TouchableOpacity>
             { values.profile.length !== 0 && (
               <TouchableOpacity
                 activeOpacity={0.8}
                 style={registerStyle.removeImgButton}
                 onPress={() => this.setState({ profile: '' })}
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
             onChangeText={(result) => this.setState({ name: result })}
             keyboardType="visible-password"
             style={registerStyle.input}
           />
           <TextInput
             placeholder="Email"
             onChangeText={(result) => this.setState({ email: result })}
             keyboardType="visible-password"
             style={registerStyle.input}
           />
           <TextInput
             placeholder="Contraseña"
             secureTextEntry
             onChangeText={(result) => this.setState({ password: result })}
             style={registerStyle.input}
           />
           <TextInput
             placeholder="Repetir contraseña"
             secureTextEntry
             onChangeText={(result) => this.setState({ confirmPassword: result })}
             style={registerStyle.input}
           />
           {/** Falta Validatorss */}

           <TouchableOpacity
             activeOpacity={0.8}
             style={registerStyle.registerButton}
             onPress={() => this.onSubmit(this.state)}
           >
             <Text style={registerStyle.registerButtonFont}>{' '}Crear cuenta{' '}</Text>
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

const mapStateToPropsActions = {
  setUserTokens,
  setUserData,
};

export default connect(null, mapStateToPropsActions)(RegisterContainer);
