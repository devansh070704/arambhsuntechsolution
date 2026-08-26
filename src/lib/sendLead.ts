export async function sendLeadToAppsScript(payload: Record<string, any>): Promise<boolean> {
  try {
    // 1. Try sending via internal server route /api/lead (supports secret APPS_SCRIPT_URL in Vercel)
    const res = await fetch("/api/lead", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      return true;
    }
  } catch (err) {
    console.warn("Server route /api/lead failed, trying direct browser fetch...", err);
  }

  // 2. Fallback to direct client-side fetch if NEXT_PUBLIC_APPS_SCRIPT_URL exists
  const scriptUrl = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL;

  if (!scriptUrl) {
    console.log("APPS_SCRIPT_URL not configured yet. Form submission simulated.");
    return true;
  }

  try {
    const formData = new URLSearchParams();
    Object.keys(payload).forEach((key) => {
      formData.append(key, String(payload[key] || ''));
    });

    await fetch(scriptUrl, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    });

    return true;
  } catch (error) {
    console.error("Error sending lead data to Google Apps Script:", error);
    return false;
  }
}
