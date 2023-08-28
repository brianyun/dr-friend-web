import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { palette } from 'common/styles';
import { ChatOnboarding } from 'components/chat';

const chat = () => {
	const [showOnboarding, setShowOnboarding] = useState<boolean>(false);

	useEffect(() => {
		const isOnboarded = localStorage.getItem('isOnboarded');
		if (isOnboarded) {
			setShowOnboarding(false);
		} else {
			setShowOnboarding(true);
		}
	}, []);

	return (
		<Div>
			{showOnboarding && (
				<ChatOnboarding handleClick={() => setShowOnboarding(false)} />
			)}
		</Div>
	);
};

export default chat;

const Div = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
`;
