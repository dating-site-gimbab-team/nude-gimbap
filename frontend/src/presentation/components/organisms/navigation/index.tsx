import Link from "next/link";
import { Container } from "./styles";
import { useNextRouter } from "@application/hooks/common/router";


function BottomNavigation(): JSX.Element {
    const router = useNextRouter();
    return (
        <Container>
            <Link href="/" className={router.pathname === '/' ? 'active' : ''}>Feed</Link>
            <Link href="/like" className={router.pathname === '/like' ? 'active' : ''}>Like</Link>
            <Link href="/profile" className={router.pathname === '/profile' ? 'active' : ''}>Profile</Link>
        </Container>
    );
}

export default BottomNavigation;