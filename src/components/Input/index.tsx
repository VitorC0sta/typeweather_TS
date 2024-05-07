import { InputHTMLAttributes } from 'react';
import { Spin } from '../Spin';
import { extend } from 'dayjs';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  isLoading?: boolean;

}

export function Input({ isLoading = false, ...rest }: Props) {
  return (
    <div className="input" >
      <input type='text' {...rest} />

      {isLoading && <Spin />}
    </div>
  )
}