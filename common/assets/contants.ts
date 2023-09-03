import { Message } from 'common/models';

export const DEFAULT_MESSAGES = [
	{
		id: 0,
		role: 'welcome',
		content: `닥터 스트레인지와 친구가 되었습니다.\n인사와 함께 궁금했던 것들에 대해 질문해보세요 ✋🏻`,
	} as Message,
	{
		id: 1,
		role: 'date',
		content: '오늘',
	} as Message,
	{
		id: 2,
		role: 'assistant',
		content: '안녕하세요, 무엇을 도와드릴까요?',
	} as Message,
];

// {
// 	id: 3,
// 	role: 'user',
// 	content: '대장암 수술 잘하시는 교수님 추천해줘',
// } as Message,
//
export const DEFAULT_STATIC_MESSAGES = [
	{
		id: 5,
		role: 'assistant',
		content: `네, 대장암 수술 잘하시는 교수님을 찾았어요.

1. 신촌세브란스병원 김남규 교수님
2. 서울대학교병원 박규주 교수님
3. 삼성서울병원 이우용 교수님`,
	} as Message,
	{
		id: 6,
		role: 'user',
		content: '스포츠 어깨 탈구 수술 잘하는 병원 추천해주세요',
	} as Message,
	{
		id: 8,
		role: 'assistant',
		content: `네, 어깨 탈구 수술 잘하시는 병원을 찾았어요.

		1. 서울대학교병원 오주한 교수님
2. 삼성서울병원 유재철 교수님
3. 서울성모병원 김양수 교수님
4. 이대서울병원 신상진 교수님`,
	} as Message,
	{
		id: 9,
		role: 'user',
		content: '소변에 피가 섞여 나왔어요. 심각한 건가요?',
	} as Message,
	{
		id: 10,
		role: 'assistant',
		content: `소변에 피가 섞여 나오는 현상은 혈뇨라고 합니다. 혈뇨에는 다양한 원인이 있을 수 있어요. 환자분의 나이와 성별을 고려하였을 때, 몇 가지 추가적인 정보가 필요합니다. 다음 질문에 대답해주세요.
		
1. 혈뇨 증상은 언제부터 있었나요?
2. 이전에도 이랬던 과거력이 있으신가요?
3. 혈뇨 증상이 있을 때, 복통이 있었나요?
4. 소변 색깔이 검붉은 색인가요, 아니면 선홍색인가요?
5. 소변에 핏덩이가 보이나요?
6. 최근에 심한 운동을 하거나, 충격을 받은 적이 있나요?
7. 현재 복용중인 약물이 있으신가요?
8. 발열 증상이 있으신가요?`,
	} as Message,
	{
		id: 11,
		role: 'user',
		content: `1. 어젯밤부터 있었어요.
2. 아니요.
3. 옆구리가 아파요
4. 검붉은 색
5. 아니요
6. 아니요
7. 없어요
8. 있어요 열나는 것 같아요.`,
	} as Message,
	{
		id: 12,
		role: 'assistant',
		content: `답변 감사합니다. 말씀해주신 내용을 바탕으로 진단을 도와드리겠습니다.
현재 가장 가능성이 높은 원인은 급성 신우신염 (Acute pyelonephritis) 입니다.
신우신염은 신장과 요관에 염증이 생기는 질환으로, 대부분의 경우에는 항생제를 투여하여 치료할 수 있습니다. 하지만, 신우신염은 항생제를 투여해도 증상이 호전되지 않을 수 있으므로, 증상이 호전되지 않는다면 다시 한번 병원을 찾아가시는 것이 좋습니다.
따라서 병원에 방문하실 만한 상황으로 생각되며, 고열이 심해질 경우 응급 상황으로도 이어질 수 있으니 주의하셔야 합니다.`,
	} as Message,
];

export const DEFAULT_ADVANCED_MESSAGES = [
	{
		id: 0,
		role: 'user',
		content: '안뇽',
	} as Message,
	{
		id: 1,
		role: 'assistant',
		content: '누가 기침소리를 내었는가?',
	} as Message,
	{
		id: 2,
		role: 'user',
		content: '안뇽',
	} as Message,
	{
		id: 3,
		role: 'assistant',
		content:
			'누가 기침소리를 내었는가? 누가 기침소리를 내었는가? 누가 기침소리를 내었는가? 누가 기침소리를 내었는가? 누가 기침소리를 내었는가? 누가 기침소리를 내었는가?',
	} as Message,
	{
		id: 4,
		role: 'user',
		content: '안뇽',
	} as Message,
	{
		id: 5,
		role: 'assistant',
		content: '누가 기침소리를 내었는가?',
	} as Message,
	{
		id: 6,
		role: 'user',
		content:
			'누가 기침소리를 내었는가? 누가 기침소리를 내었는가? 누가 기침소리를 내었는가? 누가 기침소리를 내었는가? 누가 기침소리를 내었는가? 누가 기침소리를 내었는가?',
	} as Message,
	{
		id: 7,
		role: 'assistant',
		content: '누가 기침소리를 내었는가?',
	} as Message,
	{
		id: 8,
		role: 'user',
		content:
			'누가 기침소리를 내었는가? 누가 기침소리를 내었는가? 누가 기침소리를 내었는가? 누가 기침소리를 내었는가? 누가 기침소리를 내었는가? 누가 기침소리를 내었는가?',
	} as Message,
	{
		id: 9,
		role: 'assistant',
		content: '누가 기침소리를 내었는가?',
	} as Message,
	{
		id: 10,
		role: 'user',
		content:
			'누가 기침소리를 내었는가? 누가 기침소리를 내었는가? 누가 기침소리를 내었는가? 누가 기침소리를 내었는가? 누가 기침소리를 내었는가? 누가 기침소리를 내었는가?',
	} as Message,
	{
		id: 11,
		role: 'assistant',
		content:
			'누가 기침소리를 내었는가? 누가 기침소리를 내었는가? 누가 기침소리를 내었는가? 누가 기침소리를 내었는가? 누가 기침소리를 내었는가? 누가 기침소리를 내었는가?',
	} as Message,
];
