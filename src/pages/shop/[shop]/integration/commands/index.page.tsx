import { SideBar } from "@src/pages/shop/components/Sidebar";
import { GetServerSideProps } from "next";
import { useState } from "react";
import { io } from "socket.io-client";
import { Header } from "../../catalog/styles.css";
import { ShopProps } from "../../index.page";
import { Container } from "../../styled.css";
import { Terminal } from "../styles.css";

function connectedWs(token: string) {
  const socket = io("ws://localhost:3000", {
    transports: ["websocket"],
    auth: {
      token,
    },
  });
  return socket;
}

interface messageProps {
  command: string;
}

export default function Commands({ shop_slug }: ShopProps) {
  const socket = connectedWs("1");
  const [commands, setCommands] = useState<messageProps[]>([]);
  const [command, setCommand] = useState("");

  const handleCommands = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      socket.emit("command", command);

      setCommands((rest) => [...rest, { command }]);
      setCommand("");
    }
  };

  const handleCommand = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommand(e.target.value);
  };

  return (
    <SideBar path="/integration" shopId={shop_slug}>
      <Container>
        <Header>
          <h1>Executar Comandos</h1>
        </Header>
        <Terminal>
          <header>
            <div />
            <div />
            <div />
          </header>

          <section>
            {commands &&
              commands.map(({ command }, key) => (
                <code key={key}>
                  <span>[fivem-shop] {">"}</span> <ul>{command}</ul>
                </code>
              ))}
          </section>

          <data>
            <span id="path">{">"}</span>
            <input
              onKeyDown={handleCommands}
              onChange={handleCommand}
              value={command}
            />
          </data>
        </Terminal>
      </Container>
    </SideBar>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  query: { shop },
}) => {
  return {
    props: {
      shop_slug: shop,
    },
  };
};
