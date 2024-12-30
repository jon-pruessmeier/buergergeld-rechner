import { Application } from "@repo/model";
import { resolveSoa } from "dns";

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

      const resultJson = await response.json();
      const id: string = resultJson.id;

      return id ?? "";
    } catch (error) {
      console.error("Error posting application:", error);
      throw error;
    }
  }

  async function getResultById(id: string) {
    const url = apiUrl + "/" + id;
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `Error: ${response.status} - ${errorData.error || response.statusText}`
        );
      }

      const resultJson = await response.json();
      const result = resultJson.result;

      return result ?? "0";
    } catch (error) {
      console.error("Error posting application:", error);
      throw error;
    }
  }

  return { postApplication, getResultById };
}
