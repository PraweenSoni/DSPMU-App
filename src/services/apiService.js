// import AsyncStorage from "@react-native-async-storage/async-storage";
const API_BASE_URL = ""; 
export const fetchUserData = async (endpoint) => {
  const userToken = "";
  try {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${userToken}`,
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || "Failed to fetch data");

    return data; // Return the fetched data
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error.message);
    return null;
  }
};
