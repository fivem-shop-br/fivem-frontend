import * as ToggleGroup from "@radix-ui/react-toggle-group";
import Link from "next/link";
import { Button } from "@fivem-shop/react";
import { HomeProps } from "@src/pages/index.page";
import { Check } from "phosphor-react";
import { useState } from "react";

import { Card as CardS, CardContainer } from "../styled.css";

export function Card({ plans }: HomeProps) {
  const [plansValue, setPlansValue] = useState("normal");
  const filterPlan =
    plans && plans.filter((index) => index.title === plansValue)[0];

  return (
    <CardContainer data-aos="fade-right" data-aos-delay="500">
      <ToggleGroup.Root
        id="plans"
        type="single"
        defaultValue={plans && plans[0].title}
        className="ToggleGroup"
        value={plansValue}
        onValueChange={(value) => {
          if (value) setPlansValue(value);
        }}
      >
        {plans &&
          plans.map((index) => (
            <ToggleGroup.Item
              value={index.title}
              className="ToggleGroupItem"
              key={index.id}
            >
              {index.title.toUpperCase()}
            </ToggleGroup.Item>
          ))}
      </ToggleGroup.Root>
      <CardS>
        {plans && (
          <>
            <div>
              <h3>{plansValue.toUpperCase()}</h3>
              <h1>
                R${filterPlan?.price}
                <span>{filterPlan?.time}</span>
              </h1>
            </div>
            {filterPlan &&
              filterPlan.benefits.list.map((index, key) => (
                <p key={key}>
                  <span>
                    <Check weight="bold" />
                  </span>
                  {index}
                </p>
              ))}
          </>
        )}
        <Button size="medium" mode="primary" asChild>
          <Link href="/shop/new">COMEÇAR AGORA</Link>
        </Button>
      </CardS>
    </CardContainer>
  );
}
