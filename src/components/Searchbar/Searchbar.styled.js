import styled from 'styled-components';
import { IoIosSearch } from 'react-icons/io';
import { Form, Field } from 'formik';

export const FormWrapper = styled.div`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding: 12px 24px;

  background-color: ${p => p.theme.colors.accent};
  box-shadow: 2px 2px 5px ${p => p.theme.colors.muted};
`;

export const SearchForm = styled(Form)`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;

  background-color: ${p => p.theme.colors.secondary};
  border-radius: ${p => p.theme.radii.normal};
  overflow: hidden;
`;

export const SearchButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;

  border: none;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
  & svg {
    width: 24px;
    height: 24px;
  }
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const ButtonLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: none;
`;

export const Input = styled(Field)`
  display: inline-block;
  padding: 0 4px;
  width: 100%;

  font: inherit;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.normal};
  border: none;
  outline: none;
  &::placeholder {
    font: inherit;
  }
`;

export const Icon = styled(IoIosSearch)`
  margin: 0;
`;
