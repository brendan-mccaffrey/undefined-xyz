import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';


const Styles = styled.div`
	
`;

export const Layout = (props) => (
	<Container fluid>
		{props.children}
	</Container>
	) 