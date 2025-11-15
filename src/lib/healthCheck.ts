export async function checkHealth() {
  return [
    { name: "database", ok: true },
    { name: "auth", ok: true },
    { name: "services", ok: true }
  ]
}
