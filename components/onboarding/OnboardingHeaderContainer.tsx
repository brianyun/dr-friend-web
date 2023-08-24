import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

type Props = {
	isVisible?: boolean;
	backButtonDestination?: string;
};

export const OnboardingHeaderContainer: React.FC<Props> = ({
	isVisible,
	backButtonDestination,
}) => {
	const router = useRouter();

	return (
		<Div>
			{isVisible ? (
				<BackButton onClick={() => router.push(`/${backButtonDestination}`)}>
					<Logo src={'/onboarding_back.svg'} alt="" />
				</BackButton>
			) : (
				<Empty />
			)}
		</Div>
	);
};

const Div = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	width: 100%;
	height: 3.5rem;
`;
const BackButton = styled.div`
	display: flex;
	width: 3.5rem;
	height: 3.5rem;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	outline: none;
`;
const Logo = styled.img`
	width: 1.5rem;
	height: 1.5rem;
	object-fit: contain;
`;
const Empty = styled.div`
	width: 3.5rem;
	height: 3.5rem;
`;
