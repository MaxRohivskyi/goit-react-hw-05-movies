import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
import { Loader } from 'components/Loader/Loader';
import {
  IconCopyright,
  Copyright,
  Footer,
  Content,
  Container,
  Header,
} from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <AppBar />
        </Container>
      </Header>
      <Content>
        <Container>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </Content>
      <Footer>
        <Container>
          <Copyright>
            <IconCopyright />
            Captain Kanapka during the war 2022
          </Copyright>
        </Container>
      </Footer>
    </>
  );
};

export default SharedLayout;
