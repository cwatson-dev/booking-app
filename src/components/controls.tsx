import React, { Dispatch, SetStateAction } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import styled from 'styled-components';

type PageButtonProps = {
  setPage: Dispatch<SetStateAction<number>>
  currentPage: number
  maxPage: number
  locationEnabled: boolean
  setLocationEnabled: Dispatch<SetStateAction<boolean>>
}

type ButtonProps = {
  btnDisabled?: boolean
}

export const IconContainer = styled.span`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FaIcon = styled.div`
  color: '#ffffff;
`;

export const ButtonsContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  margin: 0.5em;
`;

// button design is of an outline form, would be good to offer filled version by way of prop
export const Button = styled.div<ButtonProps>`
  color: ${(props) => props.btnDisabled ? props.theme.disabled : props.color || props.theme.primary};
  background-color: ${(props) => props.theme.background};
  font-size: 1em;
  margin: 0.25em;
  padding: 0.15em 1em;
  border: 2px solid ${(props) => props.btnDisabled ? props.theme.disabled : props.color || props.theme.primary};
  border-radius: 3px;
  display: flex;
  align-items: center;
  user-select: none;
  cursor: ${(props) => props.btnDisabled ? 'default' : 'pointer'};
  ${(props) => props.btnDisabled ? '' : `&:hover {
    color: ${props.btnDisabled ? props.theme.disabled : '#fff'};
    background-color: ${props.btnDisabled ? props.theme.disabled : props.color || props.theme.primary};
  }`}
`;

export const ThemeSwitcher = styled.div`
  margin-right: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const themeSwitchIcon = (faIcon: IconDefinition) => {
  return (
    <IconContainer>
      <FontAwesomeIcon style={{ color: '#ffffff' }} icon={faIcon} />
    </IconContainer>
  );
};

export const PageButtons = (props: PageButtonProps) => {
  const { setPage, currentPage, maxPage, locationEnabled, setLocationEnabled } = props;
  return (
    <ButtonsContainer>
      <Button
        color={'#32bf57'}
        btnDisabled={currentPage >= maxPage - 1}
        onClick={currentPage >= maxPage - 1 ? undefined : () => setPage(currentPage + 1)}
      >Next</Button>
      <Button
        color={'#366fc9'}
        btnDisabled={currentPage < 1}
        onClick={currentPage < 1 ? undefined : () => setPage(currentPage - 1)}
      >Previous</Button>
      <Button color={'#f59042'} onClick={() => setLocationEnabled(!locationEnabled)} >
        <FontAwesomeIcon icon={faLocationArrow} />
      </Button>
    </ButtonsContainer>
  );
};
