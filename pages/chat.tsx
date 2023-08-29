import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { palette } from 'common/styles';
import { ChatHeader, ChatOnboarding } from 'components/chat';

const chat = () => {
	const [showOnboarding, setShowOnboarding] = useState<boolean>(false);

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

	const handleNewChat = useCallback(() => {
		console.log('handleNewChat');
	}, []);

	return (
		<Div>
			{showOnboarding && (
				<ChatOnboarding handleClick={() => setShowOnboarding(false)} />
			)}
			<ChatHeader handleNewChat={handleNewChat} />
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
	justify-content: center;
	align-items: center;
`;
