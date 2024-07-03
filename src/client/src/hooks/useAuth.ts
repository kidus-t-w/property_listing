import * as React from "react";
import Cookies from "js-cookie";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(false);

  React.useEffect(() => {
    const accessToken = Cookies.get("accessToken");
    if (accessToken) {
      setIsAuthenticated(true);
    }
  });
  return { isAuthenticated };
};

export default useAuth;
