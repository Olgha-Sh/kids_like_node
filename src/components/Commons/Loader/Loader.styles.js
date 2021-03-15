import styled from 'styled-components';

export const LoaderWrapperDiv = styled.div`
	top: 0;
	left: 0;
	position: absolute;
	height: 100vh;
	width:100vw;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.01);
	z-index: 10000;
`;
