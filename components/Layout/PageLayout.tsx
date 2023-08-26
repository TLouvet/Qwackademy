import Link from 'next/link';
import Image from 'next/image';
import { PropsWithChildren } from 'react';
import { Container } from 'react-bootstrap';

type PageLayoutProps = {
  withBackLink?: boolean;
};

export default function PageLayout({ withBackLink = false, children }: PropsWithChildren<PageLayoutProps>) {
  return (
    <Container>
      {withBackLink && (
        <Link href='/'>
          <Image src='/nav/left-arrow.svg' width={20} height={20} alt='' />
          <span className='ms-1'>Return to the Grand Hall</span>
        </Link>
      )}
      {children}
    </Container>
  );
}
