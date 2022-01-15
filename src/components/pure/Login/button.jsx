import styled from 'styled-components';

const accentColor = '#32D4A4';

const Button = styled.button`
  align-items: center;
  background-color: ${(props) =>
    props.variant === 'primary' ? '#32D4A4' : '#32D4A4'};
  border-radius: 8px;
  border-style: solid;
  border-width: 1px;
  border-color: ${accentColor};
  color: ${(props) => (props.variant === 'primary' ? 'white' : 'white')};
  cursor: pointer;
  display: inline-flex;
  font: inherit;
  font-weight: bold;
  min-height: 40px;
  margin-top: 10px;
  margin-bottom: 100px; 
  justify-content: center;
  min-width: 450px;
  font-family: 'Raleway', sans-serif;
  outline-style: none;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  padding: 10px; 
  top: 10px;
  
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
  text-decoration: none;
  transition: background-color 0.2s;
  &:hover {
    background-color: ${(props) =>
    props.variant === 'primary'
      ? '#67fccf'
      : '#67fccf'};
  }
`;
const ButtonPrimary = (props) => <Button variant="primary" {...props} />;
export default Button;
