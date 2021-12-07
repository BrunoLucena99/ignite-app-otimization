import { Icon } from './Icon';

import '../styles/button.scss';
import { ButtonHTMLAttributes, memo } from 'react';

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'id' | 'onClick'> {
  title: string;
  iconName: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  selected: boolean;
  id: number;
  onClick: (id: number) => void;
}

const ButtonComponent = ({ iconName, title, selected, onClick, id, ...rest }: ButtonProps) => {
  return (
    <button type="button" {...(selected && { className: 'selected' })} onClick={() => onClick(id)} {...rest}>
      <Icon name={iconName} color={selected ? '#FAE800' : '#FBFBFB'} />
      {title}
    </button>
  );
}

export const Button = memo(ButtonComponent);
