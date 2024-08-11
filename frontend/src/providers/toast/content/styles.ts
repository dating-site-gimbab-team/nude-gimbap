import styled from 'styled-components';

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div > p:first-of-type {
    font-size: 1rem;
  }
  & > div > p:last-of-type {
    font-size: 14px;
  }
`;

export const CloseButton = styled.img`
  width: 18px;
  height: 18px;
`;

export const CustomCloseButton = styled.button`
  width: 40%;
  color: ${({ theme }) => theme.colors.neutral[10]};
  font-size: 14px;
  font-family: inherit;
  border: 1px solid transparent;
  border-radius: 99px;
  background: ${({ theme }) => theme.colors.info[6]};
  height: 30px;
  line-height: 30px;
`;
