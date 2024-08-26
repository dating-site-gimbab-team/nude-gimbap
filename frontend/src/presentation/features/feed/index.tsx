import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { Loader } from '@presentation/components/atoms/loader';
import { Header } from '@presentation/components/organisms/header';
import { FeedOrg } from '@presentation/components/organisms/feed';
import { useNextRouter } from '@application/hooks/common/router';

export function Feed(): JSX.Element {
    const router = useNextRouter();
    const { status, data: session } = useSession();

    useEffect(() => {
        if (session === null) {
            router.push('/login');
        }
    }, [session]);

    if (status === 'loading') {
        return <Loader />;
    }

    return (
        <>
            <Header />
            <FeedOrg />
        </>
    );
}
