import React, { useRef, useEffect, useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import { palette } from 'common/styles';

type Props = {
	year: string;
	setYear: React.Dispatch<React.SetStateAction<string>>;
	month: string;
	setMonth: React.Dispatch<React.SetStateAction<string>>;
	date: string;
	setDate: React.Dispatch<React.SetStateAction<string>>;
};

export const DatePicker: React.FC<Props> = ({
	year,
	setYear,
	month,
	setMonth,
	date,
	setDate,
}) => {
	const yearInputRef = useRef<HTMLInputElement>(null);
	const monthInputRef = useRef<HTMLInputElement>(null);
	const dateInputRef = useRef<HTMLInputElement>(null);

	const [activeInput, setActiveInput] = useState<'year' | 'month' | 'date'>(
		'year'
	);

	useEffect(() => {
		if (yearInputRef.current) {
			yearInputRef.current.focus();
		}
	}, []);

	const handleChange = (
		e: ChangeEvent<HTMLInputElement>,
		type: 'year' | 'month' | 'date'
	) => {
		const value = e.target.value;

		if (type === 'year') {
			if (value.length <= 4) {
				setYear(value);
				if (value.length === 4) {
					if (monthInputRef.current) {
						monthInputRef.current.focus();
					}
				}
			}
		} else if (type === 'month') {
			if (value.length <= 2) {
				setMonth(value);

				if (
					value === '2' ||
					value === '3' ||
					value === '4' ||
					value === '5' ||
					value === '6' ||
					value === '7' ||
					value === '8' ||
					value === '9'
				) {
					if (dateInputRef.current) {
						dateInputRef.current.focus();
					}
				} else if (value.length === 2) {
					if (dateInputRef.current) {
						dateInputRef.current.focus();
					}
				}
			}
		} else {
			if (value.length <= 2) {
				setDate(value);
			}
		}
	};

	const handleFocus = (type: 'year' | 'month' | 'date') => {
		setActiveInput(type);
	};

	const handleBlur = () => {
		setActiveInput('year');
	};

	return (
		<Div>
			<Input
				type="tel"
				inputMode="numeric"
				placeholder=""
				value={year}
				ref={yearInputRef}
				onChange={(e) => handleChange(e, 'year')}
				onFocus={() => handleFocus('year')}
				onBlur={handleBlur}
				isActive={activeInput === 'year'}
				isLong={true}
			/>
			<Text>년</Text>
			<Input
				type="tel"
				inputMode="numeric"
				placeholder=""
				value={month}
				ref={monthInputRef}
				onChange={(e) => handleChange(e, 'month')}
				onFocus={() => handleFocus('month')}
				onBlur={handleBlur}
				isActive={activeInput === 'month'}
				isLong={false}
			/>
			<Text>월</Text>
			<Input
				type="tel"
				inputMode="numeric"
				placeholder=""
				value={date}
				ref={dateInputRef}
				onChange={(e) => handleChange(e, 'date')}
				onFocus={() => handleFocus('date')}
				onBlur={handleBlur}
				isActive={activeInput === 'date'}
				isLong={false}
			/>
			<Text>일</Text>
		</Div>
	);
};

const Div = styled.div`
	display: flex;
	flex-direction: row;
	width: calc(100% - 2.5rem);
	margin: 2.5rem auto 2.5rem auto;
`;
const Input = styled.input<{ isActive: boolean; isLong: boolean }>`
	border: none;
	border-radius: 0;
	border-bottom: 2px solid
		${(props) => (props.isActive ? palette.brand.primary : palette.brand.black)};
	outline: none;
	text-align: center;
	width: ${(props) => (props.isLong ? '7rem' : '5rem')};

	color: ${palette.brand.black};
	font-family: Pretendard;
	font-size: 1.5rem;
	font-weight: 500;

	@media (max-width: 800px) {
		width: ${(props) => (props.isLong ? '5rem' : '3rem')};
	}
`;
const Text = styled.p`
	color: ${palette.brand.black};
	font-family: Pretendard;
	font-size: 1.5rem;
	font-weight: 500;
	margin-left: 0.5rem;
	margin-right: 2rem;
`;
