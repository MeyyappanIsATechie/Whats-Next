// pages/server-side-example.js
export default async function ServerSideExample() {
    let data;
    try {
    // Example API endpoint (replace with your actual API)
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
    data = await response.json();

  } catch (error) {
    console.error("Error fetching data:", error);
  }
  return (
    <div>
      <h1>Server-Side Data Fetching Example</h1>
      <p>Data fetched from the API:</p>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
