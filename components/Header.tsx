import Image from 'next/image';

const Header = () => {
  return (
    <header className="header">
      <Image 
        src="/media/nusantaku2.png" 
        alt="NusantaKu Logo" 
        width={120} 
        height={40} 
        className="mx-auto"
      />
      <h1 className="text-3xl font-bold mt-2">Header1</h1>
    </header>
  );
};

export default Header;