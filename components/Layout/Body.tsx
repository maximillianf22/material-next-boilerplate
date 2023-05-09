import React, { ReactNode, FC } from "react";

interface Props {
  children: ReactNode;
}

const Body: FC<Props> = ({ children }) => {
  return <>{children}</>;
};
export default Body;
