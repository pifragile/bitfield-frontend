import Image from 'next/image'
import bitfiledLogo from '../images/logos/BitfieldLandscapeBlue.png'
export function Logo(props) {
  return (
    <div {...props}>
      <Image src={bitfiledLogo} alt={'Bitfield'} unoptimized />
    </div>
  )
}
