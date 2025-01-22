import Hello from "./components/Hello";

export default function Home() {
  console.log("Server/client?");

  return (
    <>
      <h1 className="text-3xl">Hello, World!</h1>
      <Hello />
    </>
  );
}
