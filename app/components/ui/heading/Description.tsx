import { FC } from 'react'
import { View, useWindowDimensions } from 'react-native'
import { RenderHTML } from 'react-native-render-html'

const Description: FC<{ text: string }> = ({ text }) => {
	const { width } = useWindowDimensions()

	const tagsStyles = {
		body: {
			color: '#fff',
			fontSize: 17,
			lineHeight: 23,
			fontWeight: '300',
			opacity: 0.5
		}
	}

	return (
		<View>
			<RenderHTML
				contentWidth={width}
				source={{
					html: text.includes('<p>') ? text : `<p>${text}</p>`
				}}
				// @ts-ignore
				tagsStyles={tagsStyles}
			/>
		</View>
	)
}

export default Description
