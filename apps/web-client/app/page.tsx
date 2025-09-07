import { Button } from '@packages/ui';

const getNextjsApi = async (): Promise<{ message: string }> => {
  try {
    const res = await fetch('/api');
    return res.json();
  } catch (error) {
    console.error('Error fetching Next.js API:', error);
    return { message: 'Error fetching Next.js API' };
  }
};

const getThirdPartyApi = async (): Promise<{ message: string }> => {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  if (!baseUrl) {
    console.error('NEXT_PUBLIC_SERVER_URL is not defined');
    return { message: 'Server URL not defined' };
  }
  try {
    const res = await fetch(`${baseUrl}/`);
    return res.json();
  } catch (error) {
    console.error('Error fetching third-party API:', error);
    return { message: 'Error fetching third-party API' };
  }
};

export default async function Home() {
  const nextJsData = await getNextjsApi();
  const nextJsMessage = nextJsData.message;

  const serverData = await getThirdPartyApi();
  const serverMessage = serverData.message;

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
