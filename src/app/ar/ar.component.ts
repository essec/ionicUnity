import { Component, OnInit } from '@angular/core';

declare let unityARCaller: any;

@Component({
  selector: 'app-ar',
  templateUrl: './ar.component.html',
  styleUrls: ['./ar.component.scss'],
})
export class ARComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  openUnity() {
    console.log('press the open button');
    unityARCaller.launchAR('my message for Unity-side', this.uReturnedFromUnity, this.uMessageReceivedFromUnity);
  }

  test() {
    console.log('test!!!');
  }
  sendMessageToUnity() {
    // Send a message to Unity while Unity is still running
    unityARCaller.sendMessage('Function name', 'Optional parameter');
  }
  uReturnedFromUnity = (param) => {
    // param:String is the (optional) message returned from Unity-side
    alert(param);
  }
  uMessageReceivedFromUnity = (message) => {
    // message:String is the message received from Unity-side
    // If you call a UI-blocking function here like 'alert', subsequent messages from Unity
    // will be queued by the OS and will only be received after returning to Ionic and
    // unblocking the UI
    console.log('=========' + message + '=========');
  }
}
