import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  chatGPTAPI: string = 'https://api.openai.com/v1/completions';
  apiKey: string = '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';

  constructor(private http: HttpClient) {}

  sendMessageToChatGPT(message: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization:
        'Bearer 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',
    });
    const body = {
      model: 'text-davinci-003',
      prompt: message,
      temperature: 0.5,
      max_tokens: 60,
      top_p: 0.3,
      frequency_penalty: 0.5,
      presence_penalty: 0.0,
    };

    return this.http.post(this.chatGPTAPI, body, { headers });
  }
}
