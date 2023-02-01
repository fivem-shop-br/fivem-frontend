import { styled } from "@fivem-shop/react";
import * as Select from "@radix-ui/react-select";
import { getCategories } from "@src/services/queries";
import { useQuery } from "react-query";
import { ShopProps } from "../../../index.page";
import { CategorieProps } from "../../categories/index.page";

interface SelectCategoryProps extends ShopProps {
  categoryIdSelected: string;
  setCategoryIdSelected: (value: string) => void;
}

export function SelectCategory({
  shop_slug,
  setCategoryIdSelected,
  categoryIdSelected,
}: SelectCategoryProps) {
  const { data } = useQuery<CategorieProps[]>(`categories ${shop_slug}`, () => {
    return getCategories(shop_slug);
  });

  function handleSelectCategory(value: string) {
    setCategoryIdSelected(value);
    localStorage.setItem("select_category", value);
  }

  return (
    <SelectRoot onValueChange={handleSelectCategory} value={categoryIdSelected}>
      <SelectTrigger>
        <Select.Value placeholder="Selecione uma categoria..." />
      </SelectTrigger>
      <Select.Portal>
        <SelectContent position="popper" align="center">
          <SelectViewport>
            <StyledItem value="none">
              <Select.ItemText>Selecione uma categoria...</Select.ItemText>
            </StyledItem>
            {data &&
              data.map((index, key) => (
                <StyledItem value={index.id} key={key}>
                  <Select.ItemText>{index.name}</Select.ItemText>
                </StyledItem>
              ))}
          </SelectViewport>
        </SelectContent>
      </Select.Portal>
    </SelectRoot>
  );
}

const SelectRoot = styled(Select.Root, {
  flex: 1,
});

const SelectTrigger = styled(Select.SelectTrigger, {
  all: "unset",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 5,
  padding: "0 15px",
  fontSize: 13,
  lineHeight: 1,
  height: 35,
  gap: 5,
  backgroundColor: "$gray-800",
  color: "white",
  "&:hover": { backgroundColor: "$gray-700" },
  "&[data-placeholder]": { color: "white" },
});

const SelectContent = styled(Select.Content, {
  overflow: "hidden",
  backgroundColor: "$gray-700",
  borderRadius: 5,
  boxShadow:
    "0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)",
});

const SelectViewport = styled(Select.Viewport, {
  padding: 5,
});

const StyledItem = styled(Select.Item, {
  fontSize: 13,
  lineHeight: 1,
  color: "white",
  borderRadius: 3,
  display: "flex",
  alignItems: "center",
  height: 25,
  padding: "0 35px 0 25px",
  position: "relative",
  userSelect: "none",

  "&[data-disabled]": {
    color: "&gray-500",
    pointerEvents: "none",
  },

  "&[data-highlighted]": {
    outline: "none",
    backgroundColor: "$blue-700",
  },
});
