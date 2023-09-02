import { PropsWithChildren } from 'react';
import style from './WhiteKey.module.scss';

type WhiteKeyProps = PropsWithChildren<{
  id: string;
  onClick: (note: string) => void;
}>;

export function WhiteKey({ children, id, onClick }: WhiteKeyProps) {
  return (
    <div id={id} className={style.whiteKey} onClick={() => onClick(id)}>
      {children}
    </div>
  );
}
