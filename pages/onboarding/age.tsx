import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { palette } from 'common/styles';
import {
	OnboardingHeaderContainer,
	OnboardingProgressBar,
	OnboardingSubmitContainer,
	OnboardingTitleContainer,
	DatePicker,
} from 'components/onboarding';
import { selectOnboardingBirthday } from 'utils';

export const age = () => {
	const [year, setYear] = useState<string>('');
	const [month, setMonth] = useState<string>('');
	const [date, setDate] = useState<string>('');
	const [activated, setActivated] = useState<boolean>(false);

	useEffect(() => {
		if (year.length === 4 && month.length > 0 && date.length > 0) {
			setActivated(true);
		} else {
			setActivated(false);
		}
	}, [year, month, date]);

	return (
		<Div>
			<OnboardingHeaderContainer
				isVisible={true}
				backButtonDestination="onboarding/gender"
			/>
			<OnboardingTitleContainer title={'이 날 태어났어요'} />
			<ContentContainer>
				<DatePicker
					year={year}
					setYear={setYear}
					month={month}
					setMonth={setMonth}
					date={date}
					setDate={setDate}
				/>
			</ContentContainer>
			<OnboardingProgressBar current={2} total={3} />
			<OnboardingSubmitContainer
				isSkipVisible={true}
				isActive={activated}
				nextButtonDestination="onboarding/phone"
				customHandleSubmit={(skip) =>
					skip
						? selectOnboardingBirthday('skip')
						: selectOnboardingBirthday(`${year}-${month}-${date}`)
				}
			/>
		</Div>
	);
};

export default age;

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
