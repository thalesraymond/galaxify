async function getHealthCheck() {
  const res = await fetch("http://localhost:4000/api/health", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function HealthCheck() {
  const data = await getHealthCheck();

  return (
    <div>
      <h1>API Health Status</h1>
      <p>Status: {data.status}</p>
    </div>
  );
}
