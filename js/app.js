const API_URL = 'https://script.google.com/macros/s/AKfycbxTrGxYoeOLu9ZcwWR_7523nguA6BResOb2q25cyumIjxrSY_P8G3PycoHA0u13IxlOiw/exec';

async function apiCall(action, data) {
  const payload = { action, ...data };
  const resp = await fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: { 'Content-Type': 'text/plain' }
  });
  return resp.json();
}

// Example: Register
document.getElementById('registerForm').onsubmit = async (e) => {
  e.preventDefault();
  const data = { email: '...', password: '...', name: '...' };
  const result = await apiCall('register', data);
  if (result.error) Swal.fire('Error', result.error, 'error');
  else Swal.fire('Success', result.msg, 'success');
};
