import { Component } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { firstValueFrom } from 'rxjs';

import { Message, OpenAIResponseData } from '../../interfaces';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent {
  conversation: Message[] = [];
  latestQuestion: string = '';
  isLoading: boolean = false;

  prompt: string =
    'The following is a conversation with a AI assistant of a webshop. The assistant is creative, very humorous and very helpful. The assistant is designed to provide human-like responses and communicate in a way that feels natural and intuitive to users. It can provide information on a wide variety of topics and engage in conversations on many different subjects. The webshop sells umbrella, backpack, mug and bike.';

  constructor(private chatService: ChatService) {}

  async send() {
    var newChatItem = {
      role: 'You',
      content: this.latestQuestion,
    };

    this.conversation.push(newChatItem);
    this.prompt = this.prompt.concat(
      `${newChatItem.role} : ${newChatItem.content} \n AI: `
    );

    this.isLoading = true;
    var response = (await firstValueFrom(
      this.chatService.sendMessageToTextCompletionAPI(this.prompt)
    )) as OpenAIResponseData;
    this.isLoading = false;

    var newResponseItem = {
      role: 'AI',
      content: response.choices[0].text,
    };
    this.conversation.push(newResponseItem);
    this.prompt = this.prompt.concat(`${newResponseItem.content} \n`);

    this.latestQuestion = '';
  }
}
