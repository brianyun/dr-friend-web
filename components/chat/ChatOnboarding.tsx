import React from 'react';
import styled from 'styled-components';
import { palette } from 'common/styles';

type Props = {
	setShowOnboarding: (value: boolean) => void;
};

export const ChatOnboarding: React.FC<Props> = ({ setShowOnboarding }) => {
	const handleSubmit = () => {
		setShowOnboarding(false);
		localStorage.setItem('isChatOnboarded', 'true');
	};

	return (
		<Div>
			<OnboardingContainer>
				<ThumbnailImage src={'/dr_strange.svg'} alt="" />
				<TitleText>닥터 스트레인지</TitleText>
				<MessageContainer>
					<MessageText>
						만나서 반가워
						<br />
						처음이라 조금 낯서네. 난 닥터 스트레인지야.
						<br />
						이름에서 알 수 있듯이 의사고.
					</MessageText>
				</MessageContainer>
				<MessageContainer>
					<MessageText>
						친구와 대화한다고 생각하고, 나에게 편하게
						<br />
						질문을 던져주면 돼. 특히, 의학 관련 질문을 던져 주면
						<br />잘 답해줄 수 있으니 참고해줘.
					</MessageText>
				</MessageContainer>
				<TimestampContainer>
					<TimestampText>지금</TimestampText>
				</TimestampContainer>
			</OnboardingContainer>
			<SubmitButton onClick={handleSubmit}>
				<p>시작</p>
				<img src={'/onboarding_next.svg'} alt="" />
			</SubmitButton>
		</Div>
	);
};

const Div = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	z-index: 1000;
	position: absolute;
	background-color: white;
	top: 0;
	left: 0;
`;
const OnboardingContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: calc(100% - 6rem);
	justify-content: center;
	align-items: center;
`;
const ThumbnailImage = styled.img`
	width: 5rem;
	height: 5rem;
	border-radius: 50%;
	object-fit: contain;
`;
const TitleText = styled.p`
	color: var(--gray-100, #141618);
	text-align: center;
	font-family: Pretendard;
	font-size: 16px;
	font-weight: 700;
	margin: 10px auto;
`;
const MessageContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: calc(100% - 2.5rem);
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
const SubmitButton = styled.button`
	display: flex;
	width: calc(100% - 2.5rem);
	height: 3rem;
	justify-content: center;
	align-items: center;
	padding: 10px 20px;
	margin: 0 auto 3rem auto;

	align-self: stretch;
	border: none;
	cursor: pointer;
	outline: none;
	border-radius: 2.25rem;
	background-color: ${palette.brand.primary};

	p {
		color: #fff;
		text-align: center;
		font-family: Pretendard;
		font-size: 1rem;
		font-weight: 700;
		margin-right: 0.75rem;
	}

	img {
		width: 1rem;
		height: 1rem;
	}
`;
const TimestampContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: calc(100% - 2.5rem);
	max-width: 500px;
	justify-content: center;
	align-items: flex-end;
	margin: 5px auto;
`;
const TimestampText = styled.p`
	color: var(--gray-40, #b3bcc2);
	text-align: right;
	font-family: Pretendard;
	font-size: 9px;
	font-weight: 400;
`;
