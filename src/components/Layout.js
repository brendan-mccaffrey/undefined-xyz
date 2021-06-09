import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';


const Styles = styled.div`
	#content-holder {
		padding-bottom: 0;
		margin-bottom: 0;
	}
`;

export const Layout = (props) => (
	<Container id="content-holder" fluid>
		{props.children}
	</Container>
	) 