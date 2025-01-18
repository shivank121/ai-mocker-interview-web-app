"use client";

import { useEffect, useState } from 'react';
import { isAuthenticated } from '@/client-side/utils/token';

const useAuth = () => {
    const [authenticated, setAuthenticated] = useState<boolean>(true);

    useEffect(() => {
        setAuthenticated(isAuthenticated());
    }, []);

    return authenticated;
};

export default useAuth;
