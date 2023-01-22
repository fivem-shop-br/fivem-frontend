import { GetStaticProps } from "next";
import { getallPlan, getAllSlide } from "@src/lib/dato-cms";
export { default } from "./home";

export interface HomeProps {
  plans?: [
    {
      id: string;
      title: string;
      price: string;
      time: string;
      benefits: {
        list: Array<string>;
      };
    }
  ];
  sliders?: [
    {
      id: string;
      types?: "feature" | "fixed";
      title: string;
      subtitle: string;
      description: string;
      image: {
        url: string;
      };
    }
  ];
}

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
