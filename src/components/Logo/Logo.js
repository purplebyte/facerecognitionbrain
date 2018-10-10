import React from 'react';
import Tilt from 'react-tilt';
import brand from './brand.png'
import './Logo.css';


const Logo = () => {
	return (
		<div className='ma5 mt0'>
			<Tilt className='Tilt br2 shadow-2' options={{ max : 55 }} style={{ height: 150, width: 150 }} >
			<div className='Tilt-inner pa3'>
				<img src={brand} alt='logo' style={{paddingTop: '5px', height: 'auto', width: 200}}/>
			</div>
			</Tilt>
		</div>
	);
};

export default Logo;