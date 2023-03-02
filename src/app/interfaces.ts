export interface Message {
  role: string;
  content: string;
}

export interface OpenAIResponseData {
  choices: OpenAIResponseChoice[];
  model: string;
  object: string;
}

interface OpenAIResponseChoice {
  text: string;
}
