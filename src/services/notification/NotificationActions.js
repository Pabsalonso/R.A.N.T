/* eslint import/prefer-default-export: 0 */

import PushType from 'services/notification/NotificationTypes';

// Managers
import {
  getNotificationDataEntityId,
  getNotificationDataEntityType,
  getNotificationDataEvent,
} from 'services/notification/NotificationManager';

// Utils
import Console from 'utils/ui/Console';

const onNotification = (notification) => {
  const notificationEvent = getNotificationDataEvent(notification);
  Console.log('onNotification - notification:', notification);
  Console.log('onNotification - notificationEvent:', notificationEvent);

  switch (notificationEvent) {
    case PushType.NOTIFICATION:
    default:
      if (notification.foreground) {
        // const message = getNotificationMessage(notification);
        // Do something
        return;
      }

      // BOOLEAN: If the notification was opened by the user from the notification area or not
      if (notification.userInteraction) {
        // Do something
      }
  }
};

export { onNotification };
