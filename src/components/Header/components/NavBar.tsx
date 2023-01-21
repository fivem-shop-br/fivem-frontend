import Link from "next/link";
import { Avatar } from "./Avatar";
import { User } from "phosphor-react";
import { Button } from "@fivem-shop/react";
import { useAuth } from "@src/hooks/useAuth";
import { Skeleton } from "@src/components/Skeleton";
import SkeletonProvider from "react-loading-skeleton";

const navLinks = [
  {
    href: "/#features",
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
        <Skeleton width={138} height={44} state={!loading}>
          <Button mode="primary" asChild>
            <a href="#">PLANOS</a>
          </Button>
        </Skeleton>

        <Skeleton width={138} height={44} state={!loading}>
          {user && <Avatar />}
          {!user && (
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
        </Skeleton>
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
          {loading ? <SkeletonProvider width={55} /> : index.name}
        </a>
      ))}
    </>
  );
}
