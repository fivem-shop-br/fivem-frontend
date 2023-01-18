import Link from "next/link";
import { Avatar } from "./Avatar";
import { User } from "phosphor-react";
import { Button } from "@fivem-shop/react";
import { useAuth } from "@src/hooks/useAuth";
import Skeleton from "react-loading-skeleton";

const navLinks = [
  {
    href: "/#",
    name: "RECURSOS",
  },
  {
    href: "/#band",
    name: "STATUS",
  },
  {
    href: "/#",
    name: "SOBRE",
  },
];

export function NavBar() {
  const { user, loading } = useAuth();

  return (
    <nav>
      <NavLinkSkeleton loading={loading} />
      <div>
        {loading ? (
          <Skeleton width={138} height={44} />
        ) : (
          <Button mode="primary" asChild>
            <a href="#">PLANOS</a>
          </Button>
        )}

        {loading ? (
          <Skeleton width={138} height={44} />
        ) : user ? (
          <Avatar />
        ) : (
          <Button
            mode="secondary"
            hoverColor="$gray-500"
            backgroundColor="$gray-600"
            asChild
          >
            <Link href="/auth/login">
              <User weight="bold" />
              LOGIN
            </Link>
          </Button>
        )}
      </div>
    </nav>
  );
}

interface propsNavLinkSkeleton {
  loading: boolean;
}

function NavLinkSkeleton({ loading }: propsNavLinkSkeleton) {
  return (
    <>
      {navLinks.map((index, key) => (
        <a href={index.href} key={key}>
          {loading ? <Skeleton width={55} /> : index.name}
        </a>
      ))}
    </>
  );
}
