import { Linking } from 'react-native';

// Resources
import { strings } from 'resources/locales/i18n';

// Utils
import * as Console from 'utils/ui/Console';
import * as DialogManager from 'utils/ui/DialogManager';

export const openLink = (link, baseUrl) => {
  const url = baseUrl && baseUrl.length > 0 ? `${baseUrl}${link}` : link;

  Linking.canOpenURL(url)
    .then((supported) => {
      if (!supported) {
        Console.log('Is not possible to open URI:', url);
        DialogManager.alert(strings('error.linkingError'));
        return;
      }

      Linking.openURL(url)
        .catch(
          (err) => Console.log('An error occurred opening the URI', err),
        );
    })
    .catch((err) => {
      Console.log('This file can\'t be opened', err);
      DialogManager.alert(strings('error.linkingError'));
    });
};
