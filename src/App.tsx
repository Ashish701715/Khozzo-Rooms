import { Button } from "@nextui-org/react";

export default function Home() {
  async function app() {
    const controller = new AbortController();
    const { signal } = controller;




    if (controller) {
      controller.abort();
      console.log("Previous request aborted.");
    }


    const timeout = (ms: number) => {
      return new Promise((_, reject) => {
        setTimeout(() => {
          controller.abort(); // Cancel the fetch
          reject(new Error('Network slow error: Request timed out.'));
        }, ms);
      });
    };

    try {
      const response: any = await Promise.race([
        fetch(`https://jsonplaceholder.typicode.com/todos`, { method: 'get', signal }),
        timeout(10000),
      ]);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Data fetched successfully:', data);
    } catch (error: any) {
      if (error.name === 'AbortError') {
        console.error('Network slow error: Request timed out.');
      } else {
        console.error('Error:', error.message);
      }
    }

    const xhr = new XMLHttpRequest();
    xhr.open("GET", 'https://jsonplaceholder.typicode.com/todos?api=xhr', true);
    xhr.send("");

    fetch(`https://jsonplaceholder.typicode.com/todos?api=fetch`, { method: 'get', signal });
  }



  return (
    <>
     <Button>hlo</Button>
    </>
  );
}
