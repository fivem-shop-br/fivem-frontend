import * as Input from "@fivem-shop/react";
import { Button } from "@fivem-shop/react";
import { Layout } from "@src/components/Layout";
import { api } from "@src/services/api-client";
import { NextSeo } from "next-seo";
import { CircleNotch, GlobeSimple, ShoppingCartSimple } from "phosphor-react";
import { useEffect, useState } from "react";
import { Container } from "./styled.css";

export default function New() {
  const [name, setName] = useState("");
  const [subDomain, setSubDomain] = useState("");
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);
  const colorPerCheck =
    subDomain && !loading ? (checked ? "#2DA845" : "#E8564D") : "#2D3439";

  useEffect(() => {
    if (!subDomain.trim()) return;
    setLoading(true);
    const timeout = setTimeout(async () => {
      setChecked(await verifyExistSlug(subDomain));
    }, 500);
    return () => clearTimeout(timeout);
  }, [subDomain]);

  async function verifyExistSlug(slug: string) {
    try {
      await api.get("shop/" + slug);
      return false;
    } catch (error) {
      return true;
    } finally {
      setLoading(false);
    }
  }

  return (
    <Layout>
      <NextSeo title="Nova Loja - Fivem Shop" />
      <Container>
        <ul>
          <span>Me conte mais sobre sua Loja</span>
          <h1>Configure sua Loja</h1>
        </ul>

        <section>
          <div>
            <label>
              Nome <span>*</span>
            </label>
            <Input.Root>
              <Input.Icon position="left">
                <ShoppingCartSimple size={22} />
              </Input.Icon>
              <Input.Input
                type="text"
                placeholder="Digite nome da sua loja"
                onChange={(e) => setName(e.target.value)}
                autoFocus
              />
            </Input.Root>
          </div>
          <div>
            <label>
              Escolha um subdomínio <span>*</span>
            </label>
            <Input.Root>
              <Input.Icon position="left">
                {loading ? (
                  <CircleNotch
                    size={21}
                    className="loading-animation"
                    color="#fff"
                  />
                ) : (
                  <GlobeSimple size={21} color={colorPerCheck} />
                )}
              </Input.Icon>
              <Input.Input
                type="text"
                placeholder="Digite sub-domínio"
                onChange={(e) => setSubDomain(e.target.value)}
              />
            </Input.Root>
            <span style={{ color: colorPerCheck }}>
              {subDomain && `https://${subDomain}.fivem.com.br`}
              {colorPerCheck === "#E8564D" && " Já foi usado."}
            </span>
          </div>

          <div>
            <Button
              mode="primary"
              hoverColor="#2DA845"
              disabled={!name || !subDomain || loading || !checked}
            >
              {/* Prosseguir para o pagamento */}
              Finalizar sua loja
            </Button>
          </div>
        </section>
      </Container>
    </Layout>
  );
}
