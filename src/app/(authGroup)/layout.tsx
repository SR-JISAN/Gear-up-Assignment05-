import React from 'react';

const authLayout = ({children,}: Readonly<{children: React.ReactNode;}>) => {
    return ( 
        <div>
            {children}
        </div>       
    );
};

export default authLayout;