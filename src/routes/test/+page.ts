import axios from "../../lib/axios.ts";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
  try {
    const response = await axios.get("bucket/tooth");
    return {
      data: response.data,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      data: null, // 发生错误时返回 null，防止页面崩溃
    };
  }
};
