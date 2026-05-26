const API_URL = 'http://localhost:1337'; // Adjust the URL to match your backend server

export async function fetchProperties() {
  const response = await fetch(`${API_URL}/properties`);
  if (!response.ok) {
    throw new Error('Failed to fetch properties');
  }
  const data = await response.json();
  return data;
}
