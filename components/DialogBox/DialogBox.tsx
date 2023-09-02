import Image from 'next/image';

type DialogBoxProps = {
  text: string;
  imageSrc: string;
};

export function DialogBox({ text, imageSrc }: DialogBoxProps) {
  return (
    <div className='d-flex align-items-center mb-5' style={{ background: '#2d30376e' }}>
      <Image width={150} height={150} src={imageSrc} alt='' />
      <p className='p-3'>{text}</p>
    </div>
  );
}
