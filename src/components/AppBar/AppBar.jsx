import { Logo } from 'components/Logo/Logo';
import { Navigation } from '../Navigation/Navigation';
import { AppBarWrapper } from './AppBar.styled';

export const AppBar = () => {
  return (
    <AppBarWrapper>
      <Logo />
      <Navigation />
    </AppBarWrapper>
  );
};
