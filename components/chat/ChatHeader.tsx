import React, { useState } from 'react';
import styled from 'styled-components';
import { palette } from 'common/styles';
import { useRouter } from 'next/router';
import { clickNewChat, clickUserProfile } from 'utils';

type Props = {
	handleNewChat: () => void;
};

export const ChatHeader: React.FC<Props> = ({ handleNewChat }) => {
	const [showEllipsis, setShowEllipsis] = useState<boolean>(false);
	const router = useRouter();

	const handleClickProfile = () => {
		setShowEllipsis(false);
		clickUserProfile();
		router.push('/profile');
	};
	const handleClickNewChat = () => {
		setShowEllipsis(false);
		clickNewChat();
		handleNewChat();
	};

	return (
		<Div>
			<ThumbnailImage src={'/dr_strange.svg'} alt="" />
			<HeaderText>닥터 스트레인지</HeaderText>
			<EllipsisButton onClick={() => setShowEllipsis((show) => !show)}>
				<EllipsisImage src={'/ellipsis.svg'} alt="" />
			</EllipsisButton>
			{showEllipsis && (
				<EllipsisOptionsContainer>
					<OptionButton onClick={handleClickNewChat}>새 채팅</OptionButton>
					<OptionButton onClick={handleClickProfile}>내 프로필</OptionButton>
				</EllipsisOptionsContainer>
			)}
		</Div>
	);
};

const Div = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 100%;
	padding: 10px 20px;
	background-color: white;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 900;
`;
const ThumbnailImage = styled.img`
	width: 36px;
	height: 36px;
	border-radius: 50%;
	object-fit: contain;
`;
const HeaderText = styled.p`
	display: flex;
	width: 100%;
	margin-left: 10px;
	color: var(--gray-100, #141618);
	font-family: Pretendard;
	font-size: 16px;
	font-weight: 700;
`;
const EllipsisButton = styled.button`
	display: flex;
	width: 30px;
	height: 30px;
	justify-content: center;
	align-items: center;
	outline: none;
	border: none;
	cursor: pointer;
	background-color: transparent;
`;
const EllipsisImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: contain;
`;
const EllipsisOptionsContainer = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	top: 50px;
	right: 10px;
	width: 150px;
	height: 100px;
	background-color: white;
	border-radius: 10px;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
	z-index: 900;

	@media (max-width: 800px) {
		width: 120px;
		height: 80px;
	}
`;
const OptionButton = styled.button`
	display: flex;
	width: 100%;
	height: 50%;
	justify-content: center;
	align-items: center;
	outline: none;
	border: none;
	cursor: pointer;
	background-color: transparent;
	color: var(--gray-100, #141618);
	font-family: Pretendard;
	font-size: 16px;
	font-weight: 700;
	&:hover {
		border-radius: 10px;
		background-color: ${palette.brand.light};
	}

	@media (max-width: 800px) {
		font-size: 14px;
		font-weight: 400;
	}
`;
