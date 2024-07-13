import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

function Redirect({ url }: { url: string }) {
    const to = useNavigate();
    useEffect(() => {
        to(url);
    }, []);
    return <div></div>;
}

export default Redirect;