import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ToastrAlertifyService {
  constructor(private toastr: ToastrService) {}
  message(message: string, title: string, options: ToastrMessageOptions = {messageType: ToastrMessageType.Warning,messagePosition: ToastrMessagePosition.TopRight}) {
    this.toastr[options.messageType](message, title); 
  }
}
export class ToastrMessageOptions {
  messageType: ToastrMessageType = ToastrMessageType.Info;
  messagePosition?: ToastrMessagePosition = ToastrMessagePosition.TopRight;
}
export enum ToastrMessageType {
  Success = 'success',
  Info = 'info',
  Warning = 'warning',
  Error = 'error',
}
export enum ToastrMessagePosition {
  TopCenter = 'toast-top-center',
  TopRight = 'toast-top-right',
  TopLeft = 'toast-top-left',
  TopFull = 'toast-top-full-width',
  LeftCenter = 'toast-left-center',
  LeftRight = 'toast-left-right',
  LeftLeft = 'toast-left-left',
  LeftFull = 'toast-left-full-width',
  RightCenter = 'toast-right-center',
  RightRight = 'toast-right-right',
  RightLeft = 'toast-right-left',
  RightFull = 'toast-right-full-width',
}
