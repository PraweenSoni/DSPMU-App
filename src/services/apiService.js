const API_BASE_URL = "http://192.168.24.28:3000/api";
export const fetchUserData = async (endpoint, token) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
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
