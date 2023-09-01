import React from 'react';
import styled from 'styled-components';
import { palette } from 'common/styles';

export const CenteredMessage = ({
	isGray,
	text,
}: {
	isGray: boolean;
	text: string;
}) => {
	const formattedText = text.replace(/\n/g, '<br />');

	return (
		<Div>
			<MessageContainer isGray={isGray}>
				<MessageText dangerouslySetInnerHTML={{ __html: formattedText }} />
			</MessageContainer>
		</Div>
	);
};

const Div = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;
const MessageContainer = styled.div<{ isGray: boolean }>`
	display: flex;
	flex-direction: column;
	width: calc(100% - 2rem);
	max-width: 500px;
	justify-content: center;
	align-items: center;
	margin: 20px auto;
	padding: 13.5px 20px;
	background-color: ${(props) => (props.isGray ? '#f7f7f9' : '#fff')};
	border-radius: 0.75rem;
`;
const MessageText = styled.p`
	color: #101010;
	text-align: center;
	font-family: Pretendard;
	font-size: 14px;
	font-weight: 400;
	line-height: 17px;
`;
