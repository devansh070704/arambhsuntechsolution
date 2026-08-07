export async function sendLeadToAppsScript(payload: Record<string, any>): Promise<boolean> {
  const scriptUrl = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL;

  if (!scriptUrl) {
    console.log("NEXT_PUBLIC_APPS_SCRIPT_URL not configured yet. Form submission simulated.");
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
