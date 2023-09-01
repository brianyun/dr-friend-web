import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { palette } from 'common/styles';
import {
	OnboardingHeaderContainer,
	OnboardingProgressBar,
	OnboardingSubmitContainer,
	OnboardingTitleContainer,
	PhoneNumber,
	TermsBottomsheet,
} from 'components/onboarding';
import { useRecoilState } from 'recoil';
import { isBottomsheetVisibleState } from 'recoil/atoms';
import { selectOnboardingPhone } from 'utils';

export const phone = () => {
	const [phone, setPhone] = useState<string>('');
	const [isBottomsheetVisible, setIsBottomsheetVisible] = useRecoilState(
		isBottomsheetVisibleState
	);

	return (
		<Div>
			<OnboardingHeaderContainer
				isVisible={true}
				backButtonDestination="onboarding/age"
			/>
			<OnboardingTitleContainer title={'휴대폰 번호는 이거에요'} />
			<ContentContainer>
				<PhoneNumber phone={phone} setPhone={setPhone} />
			</ContentContainer>
			<OnboardingProgressBar current={3} total={3} />
			<OnboardingSubmitContainer
				isSkipVisible={true}
				isActive={phone.length >= 10}
				isTriggerBottomsheet={true}
				customHandleSubmit={(skip) =>
					skip ? selectOnboardingPhone('skip') : selectOnboardingPhone(phone)
				}
			/>
			{isBottomsheetVisible && <TermsBottomsheet nextButtonDestination="" />}
		</Div>
	);
};

export default phone;

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
