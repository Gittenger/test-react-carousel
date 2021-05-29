import React, { useState, useEffect } from 'react'
import Carousel from 'react-gallery-carousel'
import axios from 'axios'
import { API_KEY } from '../../env.js'

import { Container } from './Gallery.styles'

const Gallery = () => {
	const [catImgs, setCatImgs] = useState([])

	useEffect(() => {
		axios.get('https://api.thecatapi.com/v1/images/search?limit=10').then(res => {
			const { data } = res
			const images = data.map(el => ({
				src: el.url,
			}))

			setCatImgs(images)
		})
	}, [])

	return (
		<Container>
			<Carousel images={catImgs} style={{ height: 800, width: 500 }} />
		</Container>
	)
}

export default Gallery
