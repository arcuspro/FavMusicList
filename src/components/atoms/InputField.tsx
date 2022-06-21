import styled from '@emotion/styled';
import React, { ChangeEventHandler } from 'react';


interface InputProps {
  label: string;
  touched: boolean | undefined;
  errors: string | undefined;
  textarea?: boolean;
  className?: string;
  placeholder?: string;
  inputProps: {
    name: string;
    type: string;
    onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    value: string;
  };
}

export const InputField: React.FC<InputProps> = (
  { label, touched, errors, inputProps, textarea, className },
  props,
) => {
  return (
    <Container className={className}>
      <label htmlFor={props.name}>{label}</label>
      {textarea ? <textarea {...inputProps} /> : <input {...inputProps} />}
      {touched && errors ? (
        <ErrorMsg className={`error ${textarea && 'textarea-error'}`}>
          <p>{errors}</p>
        </ErrorMsg>
      ) : null}
    </Container>
  );
};


const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 120px;


  label {
    display: block;
    font-size: 16px;
    line-height: 3rem;
    margin-bottom: 1rem;
    align-self: flex-start;
    color: ${({ theme }) => theme.fontColor};
  }

  input,
  textarea {
    background-color: ${({ theme }) => theme.formInputs};
    color: ${({ theme }) => theme.fontColor};
    border: none;
    outline: none;
    border-radius: 6px;
    width: 100%;
  }

  input {
    font-size: 2rem;
    line-height: 3rem;
    min-height: 40px;
    padding: 0 1rem;
  }

  textarea {
    resize: none;
    padding: 10px;
    font-size: 1.8rem;
    min-height: 20rem;
    padding-bottom: 3px;
  }
`;
const ErrorMsg = styled.div`
  color: red;
  padding-top: 0.1rem;
  text-align: left;
  align-self: flex-start;

  p {
    font-size: 15px;
    line-height: 22px;
  }

  @media (max-width: 600px) {
    bottom: -8rem;

    &.textarea-error {
      bottom: -4rem;
    }

    p {
      font-size: 13px;
    }
  }
`;
