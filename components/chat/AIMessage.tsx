import React from 'react';
import styled from 'styled-components';
import { palette } from 'common/styles';

export const AIMessage = ({ text }: { text: string }) => {
	return (
		<Div>
			<ThumbnailImage src={'/dr_strange.svg'} alt="AI" />
			<MessageContainer>
				<MessageText isLeft={true}>{text}</MessageText>
			</MessageContainer>
		</Div>
	);
};

const Div = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: flex-start;
	align-items: flex-start;
`;
const MessageContainer = styled.div`
	display: flex;
	max-width: calc(100% - 3rem - 8rem);
	flex-direction: column;

	@media (max-width: 800px) {
		max-width: calc(100% - 3rem - 3rem);
	}
`;
const MessageText = styled.p<{ isLeft: boolean }>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: ${(props) => (props.isLeft ? 'flex-start' : 'flex-end')};

	max-width: 100%;
	font-size: 1rem;
	font-weight: 400;
	word-break: break-word;
	white-space: pre-wrap;
	line-height: 1.5rem;
	margin: 0.5rem 0;

	padding: 0.75rem;
	border-radius: 0.5rem;
	background-color: ${(props) =>
		props.isLeft ? '#F7F7F9' : palette.brand.primary};
	color: ${(props) => (props.isLeft ? '#101010' : palette.white)};

	@media (max-width: 800px) {
		font-size: 14px;
	}
`;

const ThumbnailImage = styled.img`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 3rem;
	height: 3rem;
	border-radius: 50%;
	border: 1px solid ${palette.grey[300]};
	margin: 0.5rem;
	object-fit: cover;

	@media (max-width: 800px) {
		width: 2.5rem;
		height: 2.5rem;
	}
`;
