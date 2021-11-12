import { FormEvent, HTMLAttributes, MutableRefObject, useRef } from 'react';

interface Inputs extends HTMLAttributes<HTMLInputElement> {
  ref?: MutableRefObject<HTMLInputElement>;
}

const useCodeInputs = () => {
  const refs: MutableRefObject<HTMLInputElement>[] = [];

  for (let i = 0; i < 6; i += 1) {
    refs.push(useRef<HTMLInputElement>());
  }

  const onChange = (event: FormEvent<HTMLInputElement>, pos: number) => {
    if (event.currentTarget.value === '' && pos > 0) {
      refs[pos - 1].current.focus();
    } else if (event.currentTarget.value !== '' && pos < 5) {
      refs[pos + 1].current.focus();
    }
  };

  const codeInputs: Inputs[] = refs.map((item, index) => ({
    ref: item,
    onChange: event => onChange(event, index),
  }));

  return { codeInputs };
};

export default useCodeInputs;
