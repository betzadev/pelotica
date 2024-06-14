import Image from 'next/image';
import logolight from '../../public/darklogo.svg';

export default function Home() {
  return (
    <div>
      <Image
        src="/homebg.jpg"
        alt="Imagen de fondo"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Image src={logolight} alt="Logo" />
      </div>
    </div>
  );
}
