import React from 'react';
import styled from 'styled-components';
import { palette } from 'common/styles';

export const UserMessage = ({
	text,
	timestamp,
}: {
	text: string;
	timestamp?: string;
}) => {
	return (
		<Div>
			<MessageContainer>
				{timestamp && <TimestampText isLeft={false}>{timestamp}</TimestampText>}
				<MessageText isLeft={false}>{text}</MessageText>
			</MessageContainer>
		</Div>
	);
};

const Div = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: flex-end;
	align-items: flex-start;

	margin: 0 10px 0 0;
`;
const MessageContainer = styled.div`
	display: flex;
	max-width: calc(100% - 3rem - 8rem);
	flex-direction: row;
	align-items: flex-end;

	@media (max-width: 800px) {
		max-width: calc(100% - 3rem - 3rem);
	}
`;
const MessageText = styled.p<{ isLeft: boolean }>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 100%;
	align-items: ${(props) => (props.isLeft ? 'flex-start' : 'flex-end')};

	max-width: 100%;
	font-size: 1rem;
	font-weight: 400;
	word-break: break-word;
	white-space: pre-wrap;
	line-height: 1.5rem;

	margin: 0.75rem 0;
	padding: 0.75rem;
	border-radius: 0.5rem;
	background-color: ${(props) =>
		props.isLeft ? '#F7F7F9' : palette.brand.primary};
	color: ${(props) => (props.isLeft ? '#101010' : palette.white)};

	@media (max-width: 800px) {
		font-size: 14px;
	}
`;
const TimestampText = styled.p<{ isLeft: boolean }>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	height: 100%;

	font-size: 9px;
	color: var(--gray-40, #b3bcc2);
	font-weight: 400;
	word-break: break-word;
	white-space: pre-wrap;
	margin: ${(props) =>
		props.isLeft ? '0.75rem 0 0.75rem 0.375rem' : '0.75rem 0.375rem 0.75rem 0'};
`;
