import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import AuthProvider from '@/providers/auth/AuthProvider'

import Navigation from '@/navigation/Navigation'

export default function App() {
	return (
		<>
			<AuthProvider>
				<SafeAreaProvider>
					<Navigation />
				</SafeAreaProvider>
				<StatusBar style='light' />
			</AuthProvider>
		</>
	)
}
