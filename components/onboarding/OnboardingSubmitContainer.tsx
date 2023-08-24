import React from 'react';
import styled from 'styled-components';
import { palette } from 'common/styles';
import { useRouter } from 'next/router';

type Props = {
	isSkipVisible?: boolean;
	isActive?: boolean;
	nextButtonDestination?: string;
};

export const OnboardingSubmitContainer: React.FC<Props> = ({
	isSkipVisible,
	isActive,
	nextButtonDestination,
}) => {
	const router = useRouter();

	return (
		<Div>
			<OnboardingSubmitButton
				isActive={isActive}
				onClick={() => router.push(`/${nextButtonDestination}`)}
			>
				<p>다음</p>
				<img src={'/onboarding_next.svg'} alt="" />
			</OnboardingSubmitButton>
			<SkipButton
				isSkipVisible={isSkipVisible}
				onClick={() => router.push(`/${nextButtonDestination}`)}
			>
				건너뛰기
			</SkipButton>
		</Div>
	);
};

const Div = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
`;
const OnboardingSubmitButton = styled.button<{ isActive: boolean }>`
	display: flex;
	width: calc(100% - 2.5rem);
	height: 3rem;
	justify-content: center;
	align-items: center;
	padding: 10px 20px;
	margin: 0 auto;

	align-self: stretch;
	border: none;
	cursor: pointer;
	outline: none;
	border-radius: 2.25rem;
	background-color: ${(props) =>
		props.isActive ? palette.brand.primary : '#E8ECF0'};

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
const SkipButton = styled.button<{ isSkipVisible: boolean }>`
	display: ${(props) => (props.isSkipVisible ? 'flex' : 'none')};
	color: #79828a;
	text-align: center;
	font-size: 15px;
	font-weight: 700;
	text-decoration-line: underline;
`;
