import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { themeDark, themeLight } from './styles/theme'
import GlobalStyles from './styles/global.styles.jsx'
import 'react-gallery-carousel/dist/index.css'

import CIndex from './components/components.index.js'
import Gallery from './components/Gallery/Gallery.component'

function App() {
	const [theme, setTheme] = useState('light')
	const {
		TComp: { P },
	} = CIndex

	const changeTheme = () => {
		theme === 'light' ? setTheme('dark') : setTheme('light')
	}

	return (
		<ThemeProvider theme={theme === 'light' ? themeLight : themeDark}>
			<GlobalStyles />
			<Gallery />
		</ThemeProvider>
	)
}

export default App
