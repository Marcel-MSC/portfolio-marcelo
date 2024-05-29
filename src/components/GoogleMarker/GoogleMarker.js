// import React from 'react';
// import PropTypes from 'prop-types';
// // import { Wrapper } from './styles';

// import styled from 'styled-components';

// const Wrapper = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   width: 18px;
//   height: 18px;
//   background-color: #0ead28;
//   border: 2px solid #120d0d;
//   border-radius: 100%;
//   user-select: none;
//   transform: translate(-50%, -50%);
//   cursor: ${(props) => (props.onClick ? 'pointer' : 'default')};
//   &:hover {
//     z-index: 1;
//   }
// `;

// const GoogleMarker = ({ text, onClick }) => (
//   <Wrapper
//     alt={text}
//     onClick={onClick}
//   />
// );

// GoogleMarker.defaultProps = {
//   onClick: null,
// };

// GoogleMarker.propTypes = {
//   onClick: PropTypes.func,
//   text: PropTypes.string.isRequired,
// };

// export default GoogleMarker;