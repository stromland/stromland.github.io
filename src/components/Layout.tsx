import { FC } from 'react';

export const Layout: FC = ({ children }) => {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">stromland.github.io</span>
        </div>
      </nav>
      <div className="row">
        <div className="col"></div>
        <div className="col-6 px-5 py-3 bg-light">{children}</div>
        <div className="col"></div>
      </div>
    </div>
  );
};
