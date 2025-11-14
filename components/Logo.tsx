import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/assets/logos/Somstyle-complete-logo kopie.png"
        alt="Somstyle Logo"
        width={150}
        height={50}
        className="h-10 w-auto"
        priority
      />
    </Link>
  );
}


