export type Message = {
	id?: number;
	role: 'assistant' | 'user' | 'welcome' | 'date';
	content: string;
};
