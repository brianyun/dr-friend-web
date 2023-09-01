import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { palette } from 'common/styles';

interface LayoutProps {
	childComponent: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ childComponent }) => {
	return (
		<Wrapper>
			<Div>{childComponent}</Div>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	background-color: #fafafa;
	height: 100vh;
	height: var(--doc-height);
	width: 100vw;

	overflow-x: hidden;
	overflow-y: hidden;
`;
const Div = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	background-color: white;
	height: 100vh;
	width: 100%;
	max-width: 50rem;
	margin: 0 auto;

	overflow-x: hidden;
	overflow-y: hidden;
`;
