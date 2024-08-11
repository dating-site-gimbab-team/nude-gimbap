import { useHighLight } from '@application/hooks/common/highlight';
import { MainLayoutWrapper } from './styles';
import type { BaseLayoutProps } from './types';
import { Container } from '@presentation/components/atoms/container';

export function BaseLayout(props: BaseLayoutProps): JSX.Element {
    const { children } = props;
    const { isHighlight } = useHighLight();
    return (
        <>
            <MainLayoutWrapper>
                <Container>{children}</Container>
            </MainLayoutWrapper>
            {isHighlight.isHighlighted && <div className="highlight" />}
        </>
    );
}
