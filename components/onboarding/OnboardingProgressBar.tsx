import React from 'react';
import styled from 'styled-components';
import { palette } from 'common/styles';

type Props = {
	current: number;
	total: number;
};

export const OnboardingProgressBar: React.FC<Props> = ({ current, total }) => {
	const filledBoxes = new Array(current).fill(null);
	const unfilledBoxes = new Array(total - current).fill(null);

	return (
		<Div>
			{filledBoxes.map((_, index) => (
				<Filled key={index} />
			))}
			{unfilledBoxes.map((_, index) => (
				<Unfilled key={index} />
			))}
		</Div>
	);
};

const Div = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 6px;
	margin: 20px auto;
	justify-content: center;
	align-items: center;
`;
const Box = styled.div`
	display: flex;
	width: 20px;
	height: 6px;
	margin: 0 5px;
	border-radius: 3px;
`;
const Filled = styled(Box)`
	background-color: #79828a;
`;
const Unfilled = styled(Box)`
	background-color: #ebeff1;
`;
