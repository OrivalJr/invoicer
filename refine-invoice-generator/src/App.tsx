import { Refine } from "@refinedev/core";
import { useNotificationProvider, Layout, LoginPage } from "@refinedev/antd";
import routerProvider from "@refinedev/react-router-v6";
import { DataProvider } from "@refinedev/strapi-v4";
import { authProvider, axiosInstance } from "./authProvider";

import "@refinedev/antd/dist/reset.css";

function App() {
  const API_URL = "Your_Strapi_Url";
  const dataProvider = DataProvider(API_URL + "/api", axiosInstance);

  return (
    <Refine
      routerProvider={routerProvider}
      notificationProvider={useNotificationProvider}
      Layout={Layout}
      dataProvider={dataProvider}
      authProvider={authProvider}
      LoginPage={LoginPage}
    />
  );
}