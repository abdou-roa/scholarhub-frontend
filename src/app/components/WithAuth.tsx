"use client"
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';


// Define the props type for the HOC
interface WithAuthProps {
    [key: string]: any;  // Allow additional props
}

// HOC to wrap around a component and enforce authentication
const withAuth = <P extends WithAuthProps>(WrappedComponent: React.ComponentType<P>): React.FC<P> => {
    const AuthenticatedComponent: React.FC<P> = (props) => {
        const router = useRouter();

        useEffect(() => {
            const token = localStorage.getItem('auth-token');
            if (!token) {
                router.replace('/login');  // Redirect to login page if no token
            }
        }, [router]);

        // If token is present, render the wrapped component
        return (
            <>
                <WrappedComponent {...props} />
            </>
        );
    };

    return AuthenticatedComponent;
};

export default withAuth;
