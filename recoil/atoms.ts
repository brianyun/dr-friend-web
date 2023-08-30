import { DEFAULT_MESSAGES } from 'common/assets/contants';
import { Message } from 'common/models';
import { atom } from 'recoil';

export const messagesState = atom<Array<Message>>({
	key: 'messagesState',
	// default: [],
	default: DEFAULT_MESSAGES,
});

export const isBottomsheetVisibleState = atom<boolean>({
	key: 'isBottomsheetVisibleState',
	default: false,
});
