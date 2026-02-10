export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] gap-8 text-center px-4">
      <header className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">
          Next.js template
        </h1>
        <p className="text-xl">
          A clean starting point for your next big idea.
        </p>
        <p>
          Get started by editing <code className="bg-muted px-1 rounded">src/app/page.tsx</code>
        </p>
        <p>
          More info in <code className="bg-muted px-1 rounded">README.md</code> or <a className="underline" href="https://github.com/diploidal/next-js-template">GitHub</a>
        </p>
      </header>
    </div>
  );
}
