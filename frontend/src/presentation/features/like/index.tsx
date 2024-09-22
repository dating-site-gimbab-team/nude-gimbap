import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { Loader } from '@presentation/components/atoms/loader';
import { Header } from '@presentation/components/organisms/header';
import { LikeOrg } from '@presentation/components/organisms/like';
import { useNextRouter } from '@application/hooks/common/router';
import BottomNavigation from '@presentation/components/organisms/navigation';

export function Like(): JSX.Element {
    const router = useNextRouter();
    const { status, data: session } = useSession();

    useEffect(() => {
        console.log(session);
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
            <LikeOrg />
            <BottomNavigation/>
        </>
    );
}
