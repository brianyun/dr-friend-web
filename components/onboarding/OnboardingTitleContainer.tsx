import React from 'react';
import styled from 'styled-components';
import { palette } from 'common/styles';

type Props = {
	title: string;
};

export const OnboardingTitleContainer: React.FC<Props> = ({ title }) => {
	return (
		<Div>
			<TitleText>{title}</TitleText>
		</Div>
	);
};

const Div = styled.div`
	display: flex;
	flex-direction: column;
	width: calc(100% - 2.5rem);
	margin: 6.2rem auto 2.5rem auto;
`;
const TitleText = styled.h1`
	color: ${palette.brand.black};
	font-family: Pretendard;
	font-size: 2rem;
	font-weight: 700;
`;
