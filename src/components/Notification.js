import React from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

class Notification extends React.Component {
    createNotification = _ => {
      return () => {
        NotificationManager.info('Info message'); 
      };
    };
}
export default Notification;