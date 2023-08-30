import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { palette } from 'common/styles';

type Props = {
	input: string;
	setInput: React.Dispatch<React.SetStateAction<string>>;
	disableInput: boolean;
	setDisableInput: React.Dispatch<React.SetStateAction<boolean>>;
	handleSubmit: (value: string) => void;
};

export const ChatInputView: React.FC<Props> = ({
	input,
	setInput,
	disableInput,
	setDisableInput,
	handleSubmit,
}) => {
	const [height, setHeight] = useState('40px');
	const [lineHeight, setLineHeight] = useState('40px');
	const [topPadding, setTopPadding] = useState('0px');
	const shadowTextareaRef = useRef(null);

	useEffect(() => {
		// handle height
		const shadowTextarea = shadowTextareaRef.current;
		if (!shadowTextarea) return;
		const { scrollHeight } = shadowTextarea;

		if (scrollHeight > 40) {
			setTopPadding('10px');
			setHeight('60px');
			setLineHeight('20px');
		} else {
			setTopPadding('0px');
			setHeight('40px');
			setLineHeight('40px');
		}

		// handle disableInput
		if (input.length > 0) {
			setDisableInput(false);
		} else {
			setDisableInput(true);
		}
	}, [input]);

	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setInput(e.target.value);
	};

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			handleSubmit(input);
		}
	};

	return (
		<Div>
			<InteractionContainer>
				<Textarea
					placeholder={'질문을 입력하세요'}
					name="input"
					value={input}
					onChange={(e) => handleChange(e)}
					height={height}
					lineHeight={lineHeight}
					topPadding={topPadding}
					onKeyDown={handleKeyDown}
				/>
				<ShadowTextarea ref={shadowTextareaRef} value={input} readOnly />
				<SubmitButton
					onClick={() => handleSubmit(input)}
					disabled={disableInput}
				>
					<Icon
						src={disableInput ? '/send_disabled.svg' : '/send.svg'}
						alt=""
					/>
				</SubmitButton>
			</InteractionContainer>
		</Div>
	);
};

const Div = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	position: absolute;
	z-index: 900;
	left: 0%;
	bottom: 0;
	background-color: white;

	border-top: 1px solid #f7f7f9;
	padding-top: 8px;
	padding-bottom: 3rem;
`;
const InteractionContainer = styled.div`
	display: flex;
	position: relative;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: calc(100% - 16px);
	margin: 0 8px 0 8px;
	padding: 0.25rem 0;
`;
const Textarea = styled.textarea<{
	height: string;
	lineHeight: string;
	topPadding: string;
}>`
	display: flex;
	justify-content: center;
	align-items: center;
	width: calc(100% - 40px - 12px);
	height: ${(props) => props.height};
	border-radius: 20px;
	background: #f7f7f9;
	margin-right: 12px;
	border: none;
	outline: none;
	overflow: hidden;
	overflow-y: scroll;
	resize: none;
	padding: ${(props) => props.topPadding} 16px;

	&::placeholder {
		color: var(--gray-30, #c6ced2);
		font-feature-settings: 'clig' off, 'liga' off;
		font-family: Pretendard;
		font-size: 16px;
		font-weight: 400;
	}

	color: #101010;
	font-feature-settings: 'clig' off, 'liga' off;
	font-family: Pretendard;
	font-size: 16px;
	font-weight: 400;
	line-height: ${(props) => props.lineHeight};

	&::-webkit-scrollbar {
		width: 0px; /* Remove scrollbar space */
		background: transparent; /* Optional: just make scrollbar invisible */
	}
`;
const SubmitButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 2.5rem;
	height: 2.5rem;
	background-color: transparent;
	cursor: pointer;
	border: none;
	outline: none;
`;
const Icon = styled.img`
	width: 100%;
	height: 100%;
	object-fit: contain;
`;
const ShadowTextarea = styled.textarea`
	position: absolute;
	width: calc(100% - 40px - 12px);
	height: auto;
	padding: 0 16px;
	top: 0;
	top: -100px;
	left: 0;
	visibility: hidden;
	font-family: Pretendard;
	font-size: 16px;
	line-height: 20px;
	font-weight: 400;
	white-space: pre-wrap;
	word-wrap: break-word;
	overflow: hidden;
	z-index: 1;
`;
