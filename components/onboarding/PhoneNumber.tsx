import React, { useRef, useEffect, useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import { palette } from 'common/styles';

type Props = {
	phone: string;
	setPhone: React.Dispatch<React.SetStateAction<string>>;
};

export const PhoneNumber: React.FC<Props> = ({ phone, setPhone }) => {
	const phoneInputRef = useRef<HTMLInputElement>(null);
	const [isActive, setIsActive] = useState<boolean>(false);
	const [isKeyboardVisible, setKeyboardVisible] = useState<boolean>(false);

	useEffect(() => {
		const checkKeyboardVisible = () => {
			const isKeyboardUp = window.innerHeight < window.outerHeight;
			setKeyboardVisible(isKeyboardUp);
		};

		window.addEventListener('resize', checkKeyboardVisible);

		return () => {
			window.removeEventListener('resize', checkKeyboardVisible);
		};
	}, []);

	useEffect(() => {
		if (phoneInputRef.current) {
			phoneInputRef.current.focus();
		}
	}, []);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setPhone(value);

		if (value.length >= 11 && phoneInputRef.current) {
			phoneInputRef.current.blur();
		}
	};

	return (
		<Div>
			<Text>휴대폰 번호</Text>
			<InputContainer isActive={isActive}>
				<Input
					type="tel"
					inputMode="numeric"
					placeholder=""
					value={phone}
					ref={phoneInputRef}
					onChange={(e) => handleChange(e)}
					onFocus={() => setIsActive(true)}
					onBlur={() => setIsActive(true)}
					autoFocus
				/>
				<DeleteButton onClick={() => setPhone('')}>
					<img src="/delete_circle.svg" alt="X" />
				</DeleteButton>
			</InputContainer>
			{isKeyboardVisible && (
				<SubmitButton>
					<p>다음</p>
					<img src={'/onboarding_next.svg'} alt="" />
				</SubmitButton>
			)}
		</Div>
	);
};

const Div = styled.div`
	display: flex;
	flex-direction: column;
	width: calc(100% - 2.5rem);
	margin: 2.5rem auto 2.5rem auto;
`;
const InputContainer = styled.div<{ isActive: boolean }>`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 3rem;
	justify-content: center;
	border-bottom: 2px solid
		${(props) => (props.isActive ? palette.brand.primary : palette.brand.black)};
`;
const Input = styled.input`
	border: none;
	border-radius: 0;
	outline: none;
	text-align: left;
	width: 100%;

	color: ${palette.brand.black};
	font-family: Pretendard;
	font-size: 1.5rem;
	font-weight: 500;
`;
const Text = styled.p`
	color: #838b9b;
	margin-bottom: 7px;
	font-family: Pretendard;
	font-size: 15px;
	font-weight: 400;
`;
const DeleteButton = styled.button`
	border: none;
	background-color: transparent;
	outline: none;
	cursor: pointer;

	img {
		width: 1.5rem;
		height: 1.5rem;
		object-fit: contain;

		&:hover {
			filter: brightness(0.5);
		}
	}
`;
const SubmitButton = styled.button`
	display: none;
	width: 100%;
	height: 50px;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	background-color: ${palette.brand.primary};
	color: white;
	border: none;
	position: fixed;
	bottom: 0;
	left: 0;

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

	@media (max-width: 800px) {
		display: flex;
	}
`;
