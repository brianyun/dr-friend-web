import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { palette } from 'common/styles';
import { ChatOnboarding } from 'components/chat';

export const chat = () => {
	const [showOnboarding, setShowOnboarding] = useState<boolean>(false);

	useEffect(() => {
		const isOnboarded = localStorage.getItem('isOnboarded');
		if (isOnboarded) {
			setShowOnboarding(false);
		} else {
			setShowOnboarding(true);
		}
	}, []);

	return <Div>{showOnboarding && <ChatOnboarding />}</Div>;
};

const Div = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
`;
