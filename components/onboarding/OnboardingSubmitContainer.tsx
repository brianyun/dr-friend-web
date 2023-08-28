import React from 'react';
import styled from 'styled-components';
import { palette } from 'common/styles';
import { useRouter } from 'next/router';
import { isBottomsheetVisibleState } from 'recoil/atoms';
import { useRecoilState } from 'recoil';

type Props = {
	isSkipVisible?: boolean;
	isActive?: boolean;
	nextButtonDestination?: string;
	isTriggerBottomsheet?: boolean;
};

export const OnboardingSubmitContainer: React.FC<Props> = ({
	isSkipVisible,
	isActive,
	nextButtonDestination,
	isTriggerBottomsheet = false,
}) => {
	const router = useRouter();
	const [isBottomsheetVisible, setIsBottomsheetVisible] = useRecoilState(
		isBottomsheetVisibleState
	);

	const handleNext = () => {
		if (isTriggerBottomsheet) {
			setIsBottomsheetVisible(true);
		} else {
			router.push(`/${nextButtonDestination}`);
		}
	};

	return (
		<Div>
			<OnboardingSubmitButton
				isActive={isActive}
				onClick={handleNext}
				disabled={!isActive}
			>
				<p>다음</p>
				<img src={'/onboarding_next.svg'} alt="" />
			</OnboardingSubmitButton>
			<SkipButtonContainer>
				<SkipButton isSkipVisible={isSkipVisible} onClick={handleNext}>
					건너뛰기
				</SkipButton>
			</SkipButtonContainer>
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
const SkipButtonContainer = styled.div`
	display: flex;
	width: calc(100% - 2.5rem);
	margin: 12px auto;
	padding: 9px 0;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
const SkipButton = styled.button<{ isSkipVisible: boolean }>`
	display: ${(props) => (props.isSkipVisible ? 'flex' : 'none')};
	color: #79828a;
	text-align: center;
	font-size: 15px;
	font-weight: 700;
	text-decoration-line: underline;

	background-color: transparent;
	border: none;
	cursor: pointer;
	outline: none;
	width: auto;
`;
