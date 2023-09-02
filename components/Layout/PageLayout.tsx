import Link from 'next/link';
import Image from 'next/image';
import { PropsWithChildren } from 'react';
import { Container } from 'react-bootstrap';

type PageLayoutProps = {
  title: string;
  withBackLink?: boolean;
};

export default function PageLayout({ withBackLink = false, children, title }: PropsWithChildren<PageLayoutProps>) {
  return (
    <Container>
      {withBackLink && (
        <Link href='/'>
          <Image src='/nav/left-arrow.svg' width={20} height={20} alt='' />
          <span className='ms-1'>Return to the Grand Hall</span>
        </Link>
      )}
      <h1>{title}</h1>
      {children}
    </Container>
  );
}
