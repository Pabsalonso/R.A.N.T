// Resources
import { strings } from 'resources/locales/i18n';

// Utils
import * as DialogManager from 'utils/ui/DialogManager';

export const apiCheckErrors = (response) => {
  const { data } = response;
  let msg = strings('error.server400');

  if (data) {
    const error = apiGetError(data);
    if (error && error.length > 0) {
      msg = error;
    }
  }

  DialogManager.alert(msg);
};

export const apiGetError = (data) => {
  if (!data) {
    return '';
  }

  if (data.error && data.error.length > 0) {
    return data.error;
  }

  // TODO Put other errors that you need to control

  return '';
};
