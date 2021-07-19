import React from 'react';
import Container from 'react-bootstrap/Container';


export const Layout = (props) => (
	<Container id="content-holder" style={{padding: 0}} fluid>
		{props.children}
	</Container>
	) 