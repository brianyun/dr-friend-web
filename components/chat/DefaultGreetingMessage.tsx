import React from 'react';
import styled from 'styled-components';
import { palette } from 'common/styles';

export const DefaultGreetingMessage = () => {
	return (
		<Div>
			<MessageContainer>
				<MessageText>
					닥터 스트레인지와 강은빈님이 친구가되었습니다. <br />
					인사와 함께 궁금했던 것들에 대해 질문해보세요 ✋🏻
				</MessageText>
			</MessageContainer>
		</Div>
	);
};

const Div = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;
const MessageContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: calc(100% - 2rem);
	max-width: 500px;
	justify-content: center;
	align-items: center;
	margin: 5px auto;
	padding: 13.5px 20px;
	background-color: #f7f7f9;
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
