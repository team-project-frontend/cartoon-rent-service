import React from "react";

import Contents from "./components/Contents";
import { Route, Routes } from "react-router-dom";
import routes from "./utiles/routes";
import loadable from "@loadable/component";
import Counter from "./pages/Counter";

const Error = loadable(() => import("./components/Error"), {
  fallback: <div>'로딩중..'</div>,
});
function Client() {
  return (
    <>
      <Counter />
      <Routes>
        {/* Contents 컴포넌트에 에 중첩라우터 용도에요  */}
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
