import { Application } from "@repo/model";

export function useApi() {
  const apiUrl = (process.env.NEXT_PUBLIC_API_URL ?? "") + "/api/application";

  async function postApplication(data: Application) {
    try {
      const response = await fetch(apiUrl, {
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

      return true;
    } catch (error) {
      console.error("Error posting application:", error);
      throw error;
    }
  }

  return { postApplication };
}
