import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { palette } from 'common/styles';
import {
	AIMessage,
	ChatHeader,
	ChatInputView,
	ChatOnboarding,
	DefaultGreetingMessage,
	UserMessage,
} from 'components/chat';
import { useRecoilState } from 'recoil';
import { Message } from 'common/models';
import { messagesState } from 'recoil/atoms';

const chat = () => {
	const [showOnboarding, setShowOnboarding] = useState<boolean>(false);
	const [messages, setMessages] = useRecoilState<Array<Message>>(messagesState);
	const containerRef = useRef(null);
	const [input, setInput] = useState<string>('');
	const [disableInput, setDisableInput] = useState<boolean>(true);

	useEffect(() => {
		const isOnboarded = localStorage.getItem('isOnboarded');
		if (isOnboarded) {
			setShowOnboarding(false);
		} else {
			// 디버깅 목적으로 숨김
			// setShowOnboarding(true);
			setShowOnboarding(false);
		}
	}, []);

	// scroll to bottom when new message is added
	useEffect(() => {
		containerRef.current.scrollTop = containerRef.current.scrollHeight;
	}, [messages]);

	useEffect(() => {
		// 마지막 메세지가 user 이면 streamResponse 호출
		if (messages.length > 1 && messages[messages.length - 1].role === 'user') {
			const input = messages[messages.length - 1].content;
			streamResponse(input, messages);
		}
	}, [messages]);

	const streamResponse = async (input: string, messages: Array<Message>) => {
		return;
	};

	const handleNewChat = useCallback(() => {
		console.log('handleNewChat');
	}, []);

	const handleSubmit = useCallback((value: string) => {
		console.log('handleSubmit', value);
		setInput('');
		setDisableInput(true);

		const newUserMessage = {
			role: 'user',
			content: value,
		} as Message;
		setMessages((msgs) => [...msgs, newUserMessage]);
	}, []);

	return (
		<Div>
			{showOnboarding && (
				<ChatOnboarding handleClick={() => setShowOnboarding(false)} />
			)}
			<ChatHeader handleNewChat={handleNewChat} />
			<Spacer />
			<DefaultGreetingMessage />
			<MessageContainer ref={containerRef}>
				{messages.map((msg, index) =>
					msg.role === 'assistant' ? (
						<AIMessage key={`ai-${index}-${msg.content}`} text={msg.content} />
					) : (
						<UserMessage
							key={`user-${index}-${msg.content}`}
							text={msg.content}
						/>
					)
				)}
			</MessageContainer>
			<ChatInputView
				input={input}
				setInput={setInput}
				disableInput={disableInput}
				setDisableInput={setDisableInput}
				handleSubmit={handleSubmit}
			/>
		</Div>
	);
};

export default chat;

const Div = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	width: 100%;
	height: 100%;
	justify-content: flex-start;
	align-items: center;
`;
const Spacer = styled.div`
	display: flex;
	width: 100%;
	height: 4rem;
`;
const MessageContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	/* height: calc(100% - 4rem - 3.5rem); */
	height: calc(100% - 4rem - 3.5rem - 7rem);
	justify-content: top;
	align-items: center;
	overflow-y: scroll;

	@media (max-width: 800px) {
		height: calc(100% - 2.5rem - 2rem);
	}

	&::-webkit-scrollbar {
		width: 0px; /* Remove scrollbar space */
		background: transparent; /* Optional: just make scrollbar invisible */
	}
`;
