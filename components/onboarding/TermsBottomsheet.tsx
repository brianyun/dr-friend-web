import React, { ReactNode, useState } from 'react';
import styled from 'styled-components';
import { palette } from 'common/styles';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { isBottomsheetVisibleState } from 'recoil/atoms';
import { completeServiceOnboarding } from 'utils';
import { API_URL } from 'environment';

type Props = {
	nextButtonDestination?: string;
};

export const TermsBottomsheet: React.FC<Props> = ({
	nextButtonDestination,
}) => {
	const [isBottomsheetVisible, setIsBottomsheetVisible] = useRecoilState(
		isBottomsheetVisibleState
	);
	const router = useRouter();
	const [isPrivacyChecked, setIsPrivacyChecked] = useState<boolean>(false);
	const [isLocationChecked, setIsLocationChecked] = useState<boolean>(false);

	const handleBackgroundClick = (e) => {
		e.preventDefault();
		e.stopPropagation();
		setIsBottomsheetVisible(false);
	};

	const handleClickToggleBoth = () => {
		setIsPrivacyChecked((c) => !c);
		setIsLocationChecked((c) => !c);
	};

	const handleImageClick = (event, type) => {
		event.stopPropagation();

		var relativePath = '';
		// todo: privacy, terms 내용 채워지면 경로 수정
		// if (type === 'privacy') relativePath = '/privacy';
		// else relativePath = '/terms';

		const absoluteURL = new URL(relativePath, window.location.origin);
		window.open(absoluteURL, '_blank');
	};

	const handleSubmit = async () => {
		localStorage.setItem('isServiceOnboarded', 'true');
		await signUp();
		completeServiceOnboarding();
		router.push(`/${nextButtonDestination}`);
	};

	const signUp = async () => {
		const gender = localStorage.getItem('gender');
		const birthday = localStorage.getItem('birthday');
		const phone = localStorage.getItem('phone');

		const response = await fetch(`${API_URL}/sign-up/temp`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				gender: gender,
				birthday: birthday,
				phone: phone,
			}),
		});

		const responseBody = await response.json();
		const userId = responseBody.userId || '';
		localStorage.setItem('userId', userId);

		localStorage.removeItem('gender');
		localStorage.removeItem('birthday');
		localStorage.removeItem('phone');
	};

	return (
		<Div>
			<LayerContainer onClick={(e) => handleBackgroundClick(e)} />
			<RelativeContainer>
				<BottomsheetContainer>
					<ContentContainer>
						<TitleTermsRow onClick={handleClickToggleBoth}>
							<BigCheck
								src={
									isPrivacyChecked && isLocationChecked
										? '/big_check_filled.svg'
										: '/big_check_empty.svg'
								}
								alt=""
							/>
							<TitleTermsText>서비스 이용약관 동의 (전체)</TitleTermsText>
						</TitleTermsRow>
						<TermsRow onClick={() => setIsPrivacyChecked((c) => !c)}>
							<TermsInner>
								<SmallCheck
									src={
										isPrivacyChecked
											? '/small_check_filled.svg'
											: '/small_check_empty.svg'
									}
									alt=""
								/>
								<TermsText>(필수) 개인정보 수집 및 이용 동의</TermsText>
							</TermsInner>
							<RightArrow
								src={'/right_arrow.svg'}
								alt=""
								onClick={(e) => handleImageClick(e, 'privacy')}
							/>
						</TermsRow>
						<TermsRow onClick={() => setIsLocationChecked((c) => !c)}>
							<TermsInner>
								<SmallCheck
									src={
										isLocationChecked
											? '/small_check_filled.svg'
											: '/small_check_empty.svg'
									}
									alt=""
								/>
								<TermsText>(필수) 위치정보 이용약관 동의</TermsText>
							</TermsInner>
							<RightArrow
								src={'/right_arrow.svg'}
								alt=""
								onClick={(e) => handleImageClick(e, 'location')}
							/>
						</TermsRow>
					</ContentContainer>
					<ButtonContainer>
						<OnboardingSubmitButton
							isActive={isPrivacyChecked && isLocationChecked}
							onClick={handleSubmit}
							disabled={!isPrivacyChecked || !isLocationChecked}
						>
							<p>다음</p>
							<img src={'/onboarding_next.svg'} alt="" />
						</OnboardingSubmitButton>
					</ButtonContainer>
				</BottomsheetContainer>
			</RelativeContainer>
		</Div>
	);
};

const Div = styled.div`
	display: flex;
	position: fixed;
	flex-direction: column;
	width: 100%;
	max-width: 50rem;
	margin: 0 auto;
	height: 100%;

	position: fixed;
	z-index: 2000;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
`;
const LayerContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.2);
	z-index: 1100;
`;
const RelativeContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	position: relative;
`;
const BottomsheetContainer = styled.div`
	display: flex;
	flex-direction: column;

	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 25rem;
	padding: 0rem 2rem 2rem 2rem;

	border-radius: 2rem 2rem 0 0;
	background-color: white;
	z-index: 1200;
`;
const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: calc(100% - 4rem - 3rem);
	justify-content: center;
	align-items: center;
`;
const ButtonContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	height: 3rem;
`;
const Button = styled.button<{ color: string }>`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 100%;
	background-color: ${(props) =>
		props.color === 'default' ? palette.white : palette.brand.primary};
	border: 1px solid black;
	border-color: ${(props) =>
		props.color === 'default' ? palette.brand.dark : palette.brand.primary};
	border-radius: 0.5rem;
	outline: none;
	cursor: pointer;
`;
const ButtonText = styled.p<{ color: string }>`
	height: 3rem;
	font-size: 1rem;
	line-height: 3rem;
	font-weight: 400;
	color: ${(props) =>
		props.color === 'default' ? palette.brand.dark : palette.white};
`;
const TitleTermsRow = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	cursor: pointer;
	width: 100%;
	padding-left: 16px;
	margin-bottom: 26px;
`;
const TitleTermsText = styled.p`
	color: #101010;
	font-feature-settings: 'clig' off, 'liga' off;
	font-family: Pretendard;
	font-size: 22px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
`;
const BigCheck = styled.img`
	width: 22px;
	height: 22px;
	margin-right: 10px;
`;
const TermsRow = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	cursor: pointer;
	width: 100%;
	padding-left: 16px;
	margin-top: 15px;
	margin-bottom: 15px;
`;
const TermsInner = styled.div`
	display: flex;
	flex-direction: row;
	width: calc(100% - 52px);
`;
const TermsText = styled.p`
	color: #252728;
	font-feature-settings: 'clig' off, 'liga' off;
	font-family: Pretendard;
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
`;
const SmallCheck = styled.img`
	width: 20px;
	height: 20px;
	margin-right: 12px;
`;
const RightArrow = styled.img`
	width: 20px;
	height: 20px;
	margin-right: 12px;
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
