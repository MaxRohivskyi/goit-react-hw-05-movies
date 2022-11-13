import styled from 'styled-components';
import { CgCopyright } from 'react-icons/cg';

export const Header = styled.header`
  background-color: ${p => p.theme.colors.accent};
`;

export const Container = styled.div`
  width: 1200px;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
`;

export const Content = styled.main`
  padding: 20px;
`;

export const Footer = styled.footer`
  padding: 20px 0;

  background-color: ${p => p.theme.colors.accent};
`;

export const Copyright = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${p => p.theme.colors.primary};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const IconCopyright = styled(CgCopyright)`
  margin: 0 10px 0 0;
`;
