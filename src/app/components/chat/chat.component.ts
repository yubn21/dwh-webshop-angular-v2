import { Component } from '@angular/core';

import { ChatItem } from '../../interfaces';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})

export class ChatComponent {
  conversation: ChatItem[] = [];
  latestQuestion: string = '';

  constructor() {}

  send() {
    var newChatItem = { person: 'You', message: this.latestQuestion };
    this.conversation.push(newChatItem);
  }
}
