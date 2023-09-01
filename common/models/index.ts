export type Message = {
	id?: number;
	role: 'assistant' | 'user' | 'welcome' | 'date';
	timestamp?: string;
	content: string;
};
