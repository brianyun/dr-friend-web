import { Message } from 'common/models';

export const DEFAULT_MESSAGES = [
	{
		id: 0,
		role: 'welcome',
		content: `닥터 스트레인지와 친구가 되었습니다.\n인사와 함께 궁금했던 것들에 대해 질문해보세요 ✋🏻`,
	} as Message,
	{
		id: 1,
		role: 'date',
		content: '오늘',
	} as Message,
	{
		id: 2,
		role: 'assistant',
		content: '안녕하세요, 무엇을 도와드릴까요?',
	} as Message,
];

export const DEFAULT_ADVANCED_MESSAGES = [
	{
		id: 0,
		role: 'user',
		content: '안뇽',
	} as Message,
	{
		id: 1,
		role: 'assistant',
		content: '누가 기침소리를 내었는가?',
	} as Message,
	{
		id: 2,
		role: 'user',
		content: '안뇽',
	} as Message,
	{
		id: 3,
		role: 'assistant',
		content:
			'누가 기침소리를 내었는가? 누가 기침소리를 내었는가? 누가 기침소리를 내었는가? 누가 기침소리를 내었는가? 누가 기침소리를 내었는가? 누가 기침소리를 내었는가?',
	} as Message,
	{
		id: 4,
		role: 'user',
		content: '안뇽',
	} as Message,
	{
		id: 5,
		role: 'assistant',
		content: '누가 기침소리를 내었는가?',
	} as Message,
	{
		id: 6,
		role: 'user',
		content:
			'누가 기침소리를 내었는가? 누가 기침소리를 내었는가? 누가 기침소리를 내었는가? 누가 기침소리를 내었는가? 누가 기침소리를 내었는가? 누가 기침소리를 내었는가?',
	} as Message,
	{
		id: 7,
		role: 'assistant',
		content: '누가 기침소리를 내었는가?',
	} as Message,
	{
		id: 8,
		role: 'user',
		content:
			'누가 기침소리를 내었는가? 누가 기침소리를 내었는가? 누가 기침소리를 내었는가? 누가 기침소리를 내었는가? 누가 기침소리를 내었는가? 누가 기침소리를 내었는가?',
	} as Message,
	{
		id: 9,
		role: 'assistant',
		content: '누가 기침소리를 내었는가?',
	} as Message,
	{
		id: 10,
		role: 'user',
		content:
			'누가 기침소리를 내었는가? 누가 기침소리를 내었는가? 누가 기침소리를 내었는가? 누가 기침소리를 내었는가? 누가 기침소리를 내었는가? 누가 기침소리를 내었는가?',
	} as Message,
	{
		id: 11,
		role: 'assistant',
		content:
			'누가 기침소리를 내었는가? 누가 기침소리를 내었는가? 누가 기침소리를 내었는가? 누가 기침소리를 내었는가? 누가 기침소리를 내었는가? 누가 기침소리를 내었는가?',
	} as Message,
];
