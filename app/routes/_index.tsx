import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
    {name: 'crypto', content: 'Best Crypto App'}
  ];
};

export default function Index() {
  return (
    <div className="bg-blue-200 p-4">
      <h1 className="text-xl font-bold">Hello, Tailwind CSS!</h1>
      <p className="text-red-700">Welcome to Remix with Tailwind CSS.</p>
    </div>
  );
}
