import { Component } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { firstValueFrom } from 'rxjs';
import { ChatItem, OpenAIResponseData } from '../../interfaces';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent {
  conversation: ChatItem[] = [];
  latestQuestion: string = '';
  isLoading: boolean = false;

  prompt: string =
    'The following is a conversation with an AI of a webshop. The assistant is helpful, creative, clever, and very friendly. The webshop sells umbrella, backpack, mug and bike.';

  constructor(private chatService: ChatService) {}

  async send() {
    var newChatItem = {
      person: 'You',
      message: this.latestQuestion,
    };

    this.conversation.push(newChatItem);
    this.prompt = this.prompt.concat(
      `${newChatItem.person} : ${newChatItem.message} \n AI: `
    );

    this.isLoading = true;
    var response = (await firstValueFrom(
      this.chatService.sendMessageToChatGPT(this.prompt)
    )) as OpenAIResponseData;
    this.isLoading = false;

    var newResponseItem = {
      person: 'AI',
      message: response.choices[0].text,
    };
    this.conversation.push(newResponseItem);
    this.prompt = this.prompt.concat(`${newResponseItem.message} \n`);

    this.latestQuestion = '';
  }
}
