import React, { Suspense } from "react";
import Categories from "./Categories/Categories";
const categoriesPromise = fetch(
  "https://taxi-kitchen-api.vercel.app/api/v1/categories"
).then((res) => res.json());
const Main = () => {
  return (
    <div className="grid grid-cols-12 gap-5 mt-10 w-11/12 mx-auto min-h-screen py-4">
      <Suspense>
        <Categories categoriesPromise={categoriesPromise}></Categories>
      </Suspense>
    </div>
  );
};

export default Main;
