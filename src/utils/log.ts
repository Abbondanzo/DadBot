export const log = (...args: any[]) => {
  const message = args
    .map((arg) => (typeof arg === "object" ? JSON.stringify(arg) : String(arg)))
    .join(" ");
  console.log(`${new Date().toISOString()} - ${message}`);
};
