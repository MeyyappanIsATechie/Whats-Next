"use client"; //error boundaries are client components

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <html>
      <body>
        <h1>An error occurred</h1>
        <p>{error.message}</p>
        {error.digest && <p>Error ID: {error.digest}</p>}
      </body>
    </html>
  );
}
