import { useState } from 'react';
import style from './CharacterCard.module.scss';
import Image from 'next/image';
import { Button } from 'react-bootstrap';

type CharacterCardProps = {
  name: string;
  src: string;
  gameDescription?: string;
  withPlayButton?: boolean;
  href?: string;
  width?: number;
  height?: number;
};

export default function CharacterCard({
  name,
  src,
  gameDescription,
  withPlayButton = false,
  href,
  width = 350,
  height = 350,
}: CharacterCardProps) {
  const [mouseIn, setMouseIn] = useState(false);

  const enterCard = () => setMouseIn(true);
  const leaveCard = () => setMouseIn(false);

  const showButtons = withPlayButton && mouseIn;
  return (
    <>
      <h3 id={`card-${name}`} className={style.card_title}>
        {name}
      </h3>
      <article className={style.illustrated_card} onMouseEnter={enterCard} onMouseLeave={leaveCard}>
        <div className={style.container}>
          <Image src={src} width={width} height={height} alt='' sizes='(min-width: 768px) 350px, 350px' />
          {showButtons && (
            <div className={style.btns_container}>
              <p>{gameDescription}</p>
              <Button href={href}>Play</Button>
            </div>
          )}
        </div>
      </article>
    </>
  );
}
