import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-10 border-t border-dashed p-4">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Noe Co. Website by{" "}
          <Link href="https://ingo.au/" target="_blank" className="underline">
            Ingo
          </Link>
          .
        </p>
      </div>
    </footer>
  );
}
