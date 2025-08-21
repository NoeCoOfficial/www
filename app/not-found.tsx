import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="m-auto p-2">
      <div className="text-center p-4 gap-2 flex flex-col items-center">
        <h1 className="text-9xl">404</h1>
        <p>The page you are looking for does not exist.</p>
        <Button>Home</Button>
      </div>
    </div>
  );
}
