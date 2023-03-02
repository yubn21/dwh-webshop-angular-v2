import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  openaiApiKey: string = '';

  constructor(private http: HttpClient) {}

  sendMessageToTextCompletionAPI(message: string) {
    var api: string = 'https://api.openai.com/v1/completions';

    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.openaiApiKey}`,
    });

    var body = {
      model: 'text-davinci-003',
      prompt: message,
      temperature: 1,
      max_tokens: 150,
      presence_penalty: 0.6,
      stop: [' You:', ' AI:'],
    };

    return this.http.post(api, body, { headers });
  }
}
