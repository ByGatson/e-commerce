import { Injectable } from '@angular/core';
declare var alertify: any;

@Injectable({
  providedIn: 'root',
})

export class AlertifyService {
  message(settings: MessageSettings): void {
    alertify.set('notifier', 'position', settings.position);
    alertify[settings.type](settings.message);
  }
}

export class MessageSettings {
  message: string | undefined;
  type: MessageType = MessageType.Notify;
  position: MessagePosition | undefined = MessagePosition.TopRight;
}

export enum MessageType {
  Error = 'error',
  Success = 'success',
  Message = 'message',
  Warning = 'warning',
  Notify = 'notify',
}

export enum MessagePosition {
  BottomRight = 'bottom-right',
  BottomLeft = 'bottom-left',
  BottomCenter = 'bottom-center',
  TopRight = 'top-right',
  TopLeft = 'top-left',
  TopCenter = 'top-center',
}
