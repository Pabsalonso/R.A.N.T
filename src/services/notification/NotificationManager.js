import { Platform } from 'react-native';

/**
 * **********************************
 * Push Notification json (Android) *
 * **********************************
 * badge: "0"
 * content-available: "1"
 * custom: {
 *  createdAt":"2019-06-06 16:30:34",
 *  notification_type: "NEW_MESSAGE",
 *  _id:30,
 *  text:"HELL24",
 *  user:{"name":"Susan","_id":9,"avatar":null}
 * }
 * finish: ƒ finish()
 * foreground: true
 * google.delivered_priority: "normal"
 * google.message_id: "0:1559831457046737%cba78ef8f9fd7ecd"
 * google.original_priority: "normal"
 * google.sent_time: 1559831457034
 * google.ttl: 600
 * id: "1408327251"
 * locArgs: "[]"
 * locKey: "NEW_MESSAGE"
 * message: "NEW_MESSAGE"
 * sound: "default"
 * titleLocArgs: "[]"
 * titleLocKey: "TITLE_NEW_MESSAGE"
 * userInteraction: false


 * ******************************
 * Push Notification json (iOS) *
 * ******************************
 * alert: {
 *  body: "NEW_MESSAGE",
 *  loc-args: "[]",
 *  loc-key: "NEW_MESSAGE",
 *  title-loc-key: "TITLE_NEW_MESSAGE"
 * }
 * badge: 0
 * data: {
 *  createdAt: "2019-06-12 13:29:16",
 *  notificationId: "D3465395-C606-4BD3-BCB4-FAB0B928DF1F",
 *  notification_type: "NEW_MESSAGE",
 *  remote: true,
 *  text: "Hola Acaymo",
 *  user: {_id: 6, name: "Raúl", avatar: null}
 * }
 * finish: ƒ finish(res)
 * foreground: true
 * message: {}
 * sound: "default"
 * userInteraction: false
 */

export const getNotificationData = (notification) => {
  if (!notification) return null;
  if (Platform.OS === 'ios') return notification.data ? notification.data : null;
  return notification.custom ? JSON.parse(notification.custom) : null;
};

export const getNotificationDataEvent = (notification) => {
  const data = getNotificationData(notification);
  return data && data.notification_event ? data.notification_event : '';
};

export const getNotificationMessage = (notification) => {
  if (!notification) return '';
  if (Platform.OS === 'ios') {
    return notification.alert && notification.alert.body ? notification.alert.body : '';
  }
  return notification.message ? notification.message : '';
};

export const getNotificationType = (notification) => {
  if (!notification) return '';
  if (Platform.OS === 'ios') {
    return notification.alert && notification.alert['loc-key'] ? notification.alert['loc-key'] : '';
  }
  return notification && notification.locKey ? notification.locKey : '';
};
