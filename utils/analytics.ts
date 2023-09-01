declare global {
	interface Window {
		gtag: any;
	}
}

const setUserProperties = () => {
	const properties = localStorage.getItem('user_properties');
	const userProperties = properties && JSON.parse(properties);

	window.gtag('set', 'user_properties', {
		user_id: userProperties?.user_id,
		sign_up_at: userProperties?.sign_up_at,
		is_tester: userProperties?.is_tester,
	});
};

export const viewHome = () => {
	setUserProperties();
	window.gtag('event', 'view_home', {});
};

export const completeChatOnboarding = () => {
	setUserProperties();
	window.gtag('event', 'complete_chat_onboarding', {});
};

export const startServiceOnboarding = () => {
	setUserProperties();
	window.gtag('event', 'start_service_onboarding', {});
};

export const selectOnboardingGender = (gender: string) => {
	setUserProperties();
	window.gtag('event', 'select_onboarding_gender', { gender });
};

export const selectOnboardingBirthday = (birthday: string) => {
	setUserProperties();
	window.gtag('event', 'select_onboarding_birthday', { birthday });
};

export const selectOnboardingPhone = (phone: string) => {
	setUserProperties();
	window.gtag('event', 'select_onboarding_phone', { phone });
};

export const completeServiceOnboarding = () => {
	setUserProperties();
	window.gtag('event', 'start_service_onboarding', {});
};

export const submitUserMessage = (value: string) => {
	setUserProperties();
	window.gtag('event', 'submit_user_message', { value });
};

export const clickNewChat = () => {
	setUserProperties();
	window.gtag('event', 'click_new_chat', {});
};

export const clickUserProfile = () => {
	setUserProperties();
	window.gtag('event', 'click_user_profile', {});
};
