import { GetStaticProps } from "next";
import { getallPlan, getAllSlide } from "@src/lib/dato-cms";
export { default } from "./home";

export const getStaticProps: GetStaticProps = async () => {
  const sliders = await getAllSlide();
  const plans = await getallPlan();

  return {
    props: {
      sliders,
      plans,
    },
    revalidate: 60 * 60 * 1 /* an hour */,
  };
};
