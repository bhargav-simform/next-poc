'use client';

import { notification } from 'antd';
import type { NotificationPlacement } from 'antd/es/notification/interface';

type NotificationType = 'success' | 'error' | 'info' | 'warning';

interface NotificationOptions {
  type: NotificationType;
  title: string;
  message?: string;
  duration?: number;
  position?: NotificationPlacement;
  className?: string;
}

export const notify = ({
  type,
  title,
  message = '',
  duration = 3,
  position = 'top',
  className,
}: NotificationOptions) => {
  notification[type]({
    message: title,
    description: message,
    duration,
    placement: position,
    className,
  });
};
