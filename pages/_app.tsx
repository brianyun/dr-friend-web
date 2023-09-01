import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import '../common/styles/globals.css';
import { Layout } from 'components';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
	useEffect(() => {
		const setDocumentHeight = () => {
			const doc = document.documentElement;
			doc.style.setProperty('--doc-height', `${window.innerHeight}px`);
		};

		// Initial set
		setDocumentHeight();

		// Update on window resize
		window.addEventListener('resize', setDocumentHeight);

		// Cleanup
		return () => {
			window.removeEventListener('resize', setDocumentHeight);
		};
	}, []);

	return (
		<RecoilRoot>
			<Layout childComponent={<Component {...pageProps} />} />
		</RecoilRoot>
	);
}
