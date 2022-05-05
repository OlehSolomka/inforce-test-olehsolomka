import NavBar from './NavBar';
import { Route, Switch } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import AddProductForm from 'components/AddProductForm';
import NotFoundView from 'views/NotFoundView';

const Modal = lazy(() => import('./Modal' /*webpackChunkName: "modal"*/));
const ProductView = lazy(() =>
  import('../views/ProductView' /*webpackChunkName: "products"*/)
);
const ListView = lazy(() =>
  import('../views/ListView' /*webpackChunkName: "product-item"*/)
);

export const App = () => {
  return (
    <>
      <NavBar />

      <Suspense fallback={<div></div>}>
        <Switch>
          <Route path="/" exact>
            <ListView />
          </Route>

          <Route path="/add" exact>
            <Modal>
              <AddProductForm />
            </Modal>
          </Route>

          <Route path="/:itemId" exact>
            <ProductView />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
};
