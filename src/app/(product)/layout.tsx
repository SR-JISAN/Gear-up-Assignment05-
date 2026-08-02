import Footer from '@/components/share/Footer';
import { Navbar } from '@/components/share/Navbar';
import { userInfo } from '@/service/userInfo';

import React from 'react';

const productLayout = async ({children,}: Readonly<{children: React.ReactNode;}>) => {
    const user = await userInfo();
    return (
      <div className="max-w-full">
        <Navbar user={user} />
        {children}
        <Footer/>
      </div>
    );
};

export default productLayout;