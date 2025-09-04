'use client';

import type React from 'react';
import { notification } from 'antd';
import type { NotificationPlacement } from 'antd/es/notification/interface';

type NotificationType = 'success' | 'error' | 'info' | 'warning';

export const sendNotifications = (
  type: NotificationType,
  message: string,
  duration = 4,
  description?: string,
  placement?: NotificationPlacement,
  style?: React.CSSProperties,
) => {
  notification[type]({
    message,
    description,
    duration,
    placement,
    style,
  });
};
