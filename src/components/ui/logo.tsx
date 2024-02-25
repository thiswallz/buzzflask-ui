import Link from 'next/link'
import Image from 'next/image'
import LogoImg from '@/assets/images/logo.png'

export default function Logo() {
  return (
    <Link className="inline-flex" href="/" aria-label="Cruip">
      <Image className="max-w-none" src={LogoImg} width={38} height={38} priority alt="Stellar" />
      <span className='pl-2'>BuzzFlask</span>
    </Link>
  )
}