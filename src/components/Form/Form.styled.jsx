import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';

import icons from '../../images/icons.svg';

export const FieldWrapper = styled.div`
  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[12]}px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Label = styled.label`
  position: absolute;
  top: 50%;
  left: ${p => p.theme.space[2]}px;
  transform: translateY(-50%);
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: ${p => p.theme.fontSizes.xxs};
  color: ${p => p.theme.colors.formText};
  line-height: ${p => p.theme.lineHeights.xl};

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.xs};
    line-height: ${p => p.theme.lineHeights.m};
  }
`;

export const Input = styled(Field)`
  width: 100%;
  padding: ${p => p.theme.space[5]}px ${p => p.theme.space[1]}px;
  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.formBorder};
  border-radius: ${p => p.theme.radii.normal};
  outline: none;
  font-size: ${p => p.theme.fontSizes.xxs};
  line-height: ${p => p.theme.lineHeights.xl};
  &:focus + Label,
  &:not(:placeholder-shown) + Label {
    transform: translateY(-54px);
  }
  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.xs};
    line-height: ${p => p.theme.lineHeights.m};
  }
`;

export const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => (
        <ErrorText>
          <svg width={16} height={15}>
            <use href={`${icons}#icon-worning`}></use>
          </svg>
          {message}
        </ErrorText>
      )}
    />
  );
};

const ErrorText = styled.div`
  display: flex;
  align-items: center;
  font-size: ${p => p.theme.fontSizes.xxxs};
  line-height: ${p => p.theme.lineHeights.xl};
  color: ${p => p.theme.colors.red};
`;
