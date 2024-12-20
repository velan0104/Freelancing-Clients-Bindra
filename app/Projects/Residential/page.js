import { Suspense } from "react";
import ResidentialPage from "./Residential";

export const metadata = {
  title: "Residential Projects ",
};
const page = () => {
  return (
    <Suspense fallback={<div> Loading... </div>}>
      <ResidentialPage />
    </Suspense>
  );
};

export default page;
