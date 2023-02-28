import { Time } from '@angular/common';

export interface ChatItem {
  person: string;
  message: string;
}

export interface OpenAIResponseData {
  choices: OpenAIResponseChoice[];
  model: string;
  object: string;
}

interface OpenAIResponseChoice {
  text: string;
}
