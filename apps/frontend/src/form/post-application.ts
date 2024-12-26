import { Application } from "@repo/model";

export async function postApplication(data: Application) {
  try {
    const response = await fetch("http://localhost:8080/api/application", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        `Error: ${response.status} - ${errorData.error || response.statusText}`
      );
    }

    const responseData = await response.json();
    return true;
  } catch (error) {
    console.error("Error posting application:", error);
    throw error;
  }
}
