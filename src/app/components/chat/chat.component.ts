import { Component } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { firstValueFrom } from 'rxjs';
import { ChatItem, OpenAIResponse, OpenAIResponseData } from '../../interfaces';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent {
  conversation: ChatItem[] = [];
  latestQuestion: string = '';
  response: OpenAIResponse = {} as OpenAIResponse;

  constructor(private chatService: ChatService) {}

  async send() {
    var newChatItem = { person: 'You', message: this.latestQuestion };
    this.conversation.push(newChatItem);

    var response = (await firstValueFrom(
      this.chatService.sendMessageToChatGPT(this.latestQuestion)
    )) as OpenAIResponseData;
    console.log('response ', response);

    var newResponseItem = {
      person: 'ChatGPT',
      message: response.choices[0].text,
    };
    this.conversation.push(newResponseItem);
  }
}
