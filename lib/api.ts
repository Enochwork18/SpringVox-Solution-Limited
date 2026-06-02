const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

async function post(path: string, data: Record<string, unknown>) {
  const url = API_URL ? `${API_URL}${path}` : path;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export const submitContact = (data: Record<string, unknown>) =>
  post("/api/contact", data);

export const submitConsultation = (data: Record<string, unknown>) =>
  post("/api/consultation", data);

export const submitWaitlist = (data: Record<string, unknown>) =>
  post("/api/waitlist", data);

export const submitReadinessChecklist = (data: Record<string, unknown>) =>
  post("/api/contact", data);
