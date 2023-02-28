import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatserviceService {
  chatGPTAPI :string = 'https://api.openai.com/v1/engines/davinci/completions';

  constructor(private http: HttpClient) { }

  sendMessageToChatGPT(message : string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer YOUR_API_KEY' });

    const body = { 'prompt': message, 'engine': 'davinci' };

    return this.http.post(this.chatGPTAPI, body, { headers });
  }
}
