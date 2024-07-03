// utils/useSearchParams.js

import { useRouter } from 'next/router';

function useSearchParams() {
    const router = useRouter();
    const params = new URLSearchParams(router.asPath.split('?')[1]);

    return params;
}

export default useSearchParams;
