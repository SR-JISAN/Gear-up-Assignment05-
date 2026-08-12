"use client";

import Image from 'next/image';


const LogoImage = () => {


  
    return (
      <div>
       
        <Image
          src="/logo.png"
          alt="Gear Up Logo"
          width={120}
          height={40}
          priority
          className="block dark:hidden"
        />

        
        <Image
          src="/logoTwo.png"
          alt="Gear Up Logo"
          width={120}
          height={40}
          priority
          className="hidden dark:block"
        />
      </div>
    );
};

export default LogoImage;