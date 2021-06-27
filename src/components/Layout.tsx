import { FC } from 'react';

export const Layout: FC = ({ children }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">{children}</div>
      </div>
    </div>
  );
};
