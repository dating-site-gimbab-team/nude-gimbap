import { Loader } from '@presentation/components/atoms/loader';
import { useSession, signIn } from 'next-auth/react';
import { Container, LoginBox, TitleText, LoginFormContainer } from './styles';
import { useToast } from '@application/hooks/common/toast';
import { useNextRouter } from '@application/hooks/common/router';
import { useEffect } from 'react';


export function Login(): JSX.Element {
    const { status, data } = useSession();
    const router = useNextRouter();
    const { showSuccess, showError } = useToast();

    useEffect(() => {
        if (data) router.replace("/")
    }, [data])

    const onClickGithub: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
        e.preventDefault();
        const res = await signIn('github');

        // 에러 핸들링
        if (res && res.status === 200) {
            showSuccess('로그인 완료');
            router.reload();
        } else if (res && res.error && res.status === 401) {
            showError(res.error);
        }
    };

    if (status === 'loading') {
        return <Loader />;
    }

    return (
        <Container>
            <LoginBox>
                <TitleText>환영합니다.</TitleText>
                <LoginFormContainer>
                    <button type="button" onClick={onClickGithub}>Github로 로그인</button>
                </LoginFormContainer>
            </LoginBox>
        </Container>
    );
}
