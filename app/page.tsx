'use client';

import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';

import {Scanner} from '@yudiel/react-qr-scanner';

export default function Page() {

  return (
    <Scanner
        onDecode={(result) => console.log(result)}
        onError={(error) => console.log(error?.message)}
    />
  );
}
