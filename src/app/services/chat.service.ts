import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class ChatService {
  api : string = 'https://api.openai.com/v1/completions';
  key : string = '';

  constructor(private http: HttpClient) {}

  sendMessageToChatGPT(message: string) {  
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization:
        `Bearer ${this.key}`,
    });

    var body = {
      model: 'text-davinci-003',
      prompt: message,
      temperature: 0.9,
      max_tokens: 150,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.6,
      stop: [' You:', ' AI:'],
    };

    return this.http.post(this.api, body, { headers });
  }
}
