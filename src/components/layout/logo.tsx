import Image from 'next/image';

type LogoProps = {
  alt?: string;
  className?: string;
};

export function Logo({ alt = 'KV Packaging Logo', className }: LogoProps) {
  return (
    <Image src="/images/logo.png" alt={alt} width={160} height={80} className={className} />
  );
}
