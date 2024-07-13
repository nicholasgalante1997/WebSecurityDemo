import React from 'react';
import { useQuery } from "@tanstack/react-query";
import { useCSRFContext } from '../contexts';

type LoaderOptions = {
    csrf?: string;
};

async function loader({ csrf }: LoaderOptions) {
    const headers = new Headers();
    headers.set('Accept', 'application/json');

    if (csrf) {
        headers.set('X-CSRF-Token', csrf)
    }

    const res = await fetch("http://localhost:3000/user", {
        mode: 'no-cors',
        method: 'GET',
        headers
    })

    if (res.status === 200) {
        const json = await res.json();
        return json;
    }

    return null;
}

export function useGetUser() {
    const { csrf } = useCSRFContext();
    return useQuery({
        queryKey: ['get-user', csrf],
        queryFn: () => loader({ csrf })
    })
}