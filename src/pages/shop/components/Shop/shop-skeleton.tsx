import Skeleton from "react-loading-skeleton";
import { Image, Shop as ShopS } from "../../styled.css";

export function ShopSkeleton() {
  return (
    <ShopS>
      <div>
        <Image />
        <ul>
          <Skeleton width="150px" height="20px" />
          <Skeleton width="100px" height="15px" style={{ marginTop: "2px" }} />
        </ul>
      </div>
      <Skeleton style={{ width: "100%" }} height="40px" />
    </ShopS>
  );
}
