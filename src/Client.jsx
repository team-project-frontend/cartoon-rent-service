import React from "react";

import Contents from "./layout/Contents";
import { Route, Routes } from "react-router-dom";
import routes from "./utiles/routes";
import loadable from "@loadable/component";

const Error = loadable(() => import("./components/Error"), {
  fallback: <div>'로딩중..'</div>,
});
function Client() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Contents />}>
          {routes.map((c) => {
            return <Route key={c.id} path={c.path} element={c.item} />;
          })}
        </Route>
        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
}
export default Client;
