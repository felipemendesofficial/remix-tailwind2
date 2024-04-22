import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button"

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <h1>Teste 2</h1>
      <Button>Clique</Button>
    </div>
  );
}
