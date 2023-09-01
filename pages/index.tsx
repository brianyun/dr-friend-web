import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { palette } from 'common/styles';
import {
	AIMessage,
	ChatHeader,
	ChatInputView,
	ChatOnboarding,
	CenteredMessage,
	UserMessage,
} from 'components/chat';
import { useRecoilState } from 'recoil';
import { Message } from 'common/models';
import { messagesState } from 'recoil/atoms';
import { API_URL } from 'environment';
import { useRouter } from 'next/router';

const chat = () => {
	const [showOnboarding, setShowOnboarding] = useState<boolean | null>(null);
	const [messages, setMessages] = useRecoilState<Array<Message>>(messagesState);
	const containerRef = useRef(null);
	const [input, setInput] = useState<string>('');
	const [disableInput, setDisableInput] = useState<boolean>(true);
	const router = useRouter();

	useEffect(() => {
		const isChatOnboarded = !!localStorage.getItem('isChatOnboarded');
		setShowOnboarding(!isChatOnboarded);
	}, []);

	// scroll to bottom when new message is added
	useEffect(() => {
		if (!containerRef.current) return;
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
		try {
			// 첫 질문은 히스토리에 포함시키지 않는다.
			// 마지막 유저 질문은 히스토리에 포함시키지 않는다 (어차피 prompt로 포함되어 들어간다).
			// id, confidence 는 전달하지 않는다.
			const trimmedMessages = messages
				.slice(0, -1)
				// .filter((m) => m.id !== 0)
				// .filter((m) => m.id !== 1)
				.map(({ id, role, content }) => ({ role, content }));

			const response = await fetch(`${API_URL}/chat/3.5`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					question: input,
					messages: JSON.stringify(trimmedMessages),
				}),
			});

			if (!response.body) {
				throw new Error();
			}

			const reader = response.body
				.pipeThrough(new TextDecoderStream())
				.getReader();
			const newAIMessages: Message[] = [];

			var generatedText = '';

			while (true) {
				const { value, done } = await reader.read();

				if (done) {
					break;
				}

				var data = value.split('MESSAGE: ').splice(1, 1)[0];
				if (!data) continue;

				generatedText = data;
				newAIMessages[0] = {
					role: 'assistant',
					content: generatedText,
				} as Message;

				setMessages([...messages, ...newAIMessages]);
			}

			return generatedText;
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};

	const handleNewChat = useCallback(() => {
		console.log('handleNewChat');
	}, []);

	const handleSubmit = useCallback((value: string) => {
		//check service onboarding
		const isServiceOnboarded = localStorage.getItem('isServiceOnboarded');
		if (!isServiceOnboarded) {
			alert('회원가입 화면으로 이동합니다');
			router.push('/onboarding/age');
		}

		console.log('handleSubmit', value);
		setInput('');
		setDisableInput(true);

		const newUserMessage = {
			role: 'user',
			content: value,
		} as Message;
		setMessages((msgs) => [...msgs, newUserMessage]);
	}, []);

	if (showOnboarding === null) return null;

	return (
		<Div>
			{showOnboarding && (
				<ChatOnboarding setShowOnboarding={setShowOnboarding} />
			)}
			<ChatHeader handleNewChat={handleNewChat} />
			<Spacer />
			<MessageContainer ref={containerRef}>
				{messages.map((msg, index) => {
					if (msg.role === 'assistant') {
						return <AIMessage key={`ai-${index}`} text={msg.content} />;
					} else if (msg.role === 'user') {
						return <UserMessage key={`user-${index}`} text={msg.content} />;
					} else if (msg.role === 'welcome') {
						return (
							<CenteredMessage
								key={`welcome-${index}`}
								isGray={true}
								text={msg.content}
							/>
						);
					} else if (msg.role === 'date') {
						return (
							<CenteredMessage
								key={`date-${index}`}
								isGray={false}
								text={msg.content}
							/>
						);
					}
					return null; // or some default rendering
				})}
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
