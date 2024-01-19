import React, { lazy, Suspense } from "react";

// const FirstApp = lazy(() => import("FIRST_APP/app"));
const SecApp = lazy(() => import("SECOND_APP/secondApp"));

function App() {
  return (
    <div>
      <h1>Micro</h1>
      <Suspense fallback={<span>Loading</span>}>
      <SecApp />
        {/* <FirstApp /> */}
      </Suspense>
    </div>
  );
}

export default App;
