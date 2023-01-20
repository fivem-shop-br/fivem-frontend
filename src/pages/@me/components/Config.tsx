import { Button } from "@fivem-shop/react";
import { Separator, Topic, Config as ConfigS } from "../styled.css";
import { TopicPasswordAuthorization } from "./Topic/password-authorization";
import { RemovedAccount } from "./Topic/removed-account";
import { VerificationAccount } from "./Topic/verification-account";

export const buttonCss = {
  height: "45px",
  fontWeight: 500,
  padding: "12px 30px",
  fontSize: "16px",
};

export function Config() {
  return (
    <ConfigS>
      <TopicPasswordAuthorization />
      <VerificationAccount />
      <RemovedAccount />
    </ConfigS>
  );
}
