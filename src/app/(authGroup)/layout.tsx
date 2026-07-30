import React from 'react';

const authLayout = async ({children,}: Readonly<{children: React.ReactNode;}>) => {
   
    return (
      <div className="max-w-full mx-auto ">
        
        {children}
      </div>
    );
};

export default authLayout;