import { Button } from '@packages/ui';

export default async function Home() {
  const nextjsRes = await fetch('http://localhost:3000/api');
  const nextJsData = await nextjsRes.json();
  const nextJsMessage = nextJsData?.message;

  const serverRes = await fetch('http://localhost:8080/');
  const serverData = await serverRes.json();
  const serverMessage = serverData?.message;

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {nextJsMessage && <p>Nextjs API: {nextJsMessage}</p>}
        {serverMessage && <p>Server API: {serverMessage}</p>}
        <Button label="Click me(label)" />
        <Button>{'Click me (children)'}</Button>
      </main>
    </div>
  );
}
