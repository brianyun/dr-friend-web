import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BottomButton, palette } from 'common/styles';
import {
	OnboardingHeaderContainer,
	OnboardingProgressBar,
	OnboardingSubmitContainer,
	OnboardingTitleContainer,
} from 'components/onboarding';

export const gender = () => {
	const [gender, setGender] = useState<string>('');

	const genderOptions = [
		{ buttonText: '여성이에요', value: 'female' },
		{ buttonText: '남성이에요', value: 'male' },
		{ buttonText: '둘 중 어느 곳도 속하지 않아요', value: 'unknown' },
	];

	const handleToggleGender = (value: string) => {
		if (gender == value) setGender('');
		else setGender(value);
	};

	return (
		<Div>
			<OnboardingHeaderContainer
				isVisible={gender !== ''}
				backButtonDestination=""
			/>
			<OnboardingTitleContainer title={'제 성별은'} />
			<ContentContainer>
				{genderOptions.map((option) => (
					<GenderButton
						isSelected={gender == option.value}
						onClick={() => handleToggleGender(option.value)}
					>
						{option.buttonText}
					</GenderButton>
				))}
			</ContentContainer>
			<OnboardingProgressBar current={1} total={3} />
			<OnboardingSubmitContainer
				isSkipVisible={false}
				isActive={gender !== ''}
				nextButtonDestination="onboarding/age"
			/>
		</Div>
	);
};

export default gender;

const Div = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100vh;
	justify-content: center;
	align-items: center;
	background-color: white;
`;
const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
	margin-bottom: 6.2rem;
`;
const GenderButton = styled.button<{ isSelected: boolean }>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: calc(100% - 2.5rem);
	padding: 2.5rem 0;
	margin: 8px auto;

	border: none;
	border-radius: 14px;
	outline: none;
	cursor: pointer;
	background-color: ${(props) =>
		props.isSelected ? palette.brand.primary : '#F7F7F9'};

	color: ${(props) => (props.isSelected ? '#fff' : '#79828A')};
	font-size: 1.25rem;
	font-weight: 500;
`;
