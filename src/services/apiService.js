// import AsyncStorage from "@react-native-async-storage/async-storage";
const API_BASE_URL = "http://192.168.89.28:3000/api"; 
export const fetchUserData = async (endpoint) => {
  const userToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2Q5YTEwOWMyYmM2ZGQ1MGMxYjVhNmIiLCJpYXQiOjE3NDIzMTY0NDgsImV4cCI6MTc0NDkwODQ0OH0.X20SyiVA7b6RbxLW6jvSaBEUT7jNZ8Tr41OtH2ncm_I";
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
