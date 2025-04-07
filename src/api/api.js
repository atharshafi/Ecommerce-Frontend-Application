import axios from 'axios';

// Base URL from environment variable (React uses REACT_APP_ prefix)
const apiUrl = process.env.REACT_APP_API_URL;

// Create Axios instance
const api = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

// -------------------- Auth --------------------

// Register User
export const register = async (userData) => {
  try {
    const res = await api.post('/auth/register', userData);
    return res.data;
  } catch (error) {
    console.error('Registration Error:', error.response || error.message);
    throw error;
  }
};

// Login User (FastAPI expects JSON format for login data)
export const login = async ({ email, password }) => {
  try {
    const formData = new URLSearchParams();
    formData.append('username', email);
    formData.append('password', password);

    const res = await api.post('/auth/token', formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    return res.data;
  } catch (error) {
    console.error("Login API error:", error.response?.data || error.message);
    throw error; // Re-throw to let calling code (e.g. Login.jsx) handle it
  }
};


// -------------------- Products --------------------
export const getProducts = async () => {
  try {
    const res = await api.get('/products');
    return res.data;
  } catch (error) {
    console.error('Products Fetch Error:', error.response || error.message);
    throw error;
  }
};

// -------------------- Cart --------------------
export const addToCart = async ({ product_id, quantity = 1 }, token) => {
  try {
    const res = await api.post(
      '/cart/items/',
      {product_id,quantity},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  } catch (error) {
    console.error('Add to Cart Error:', error.response || error.message);
    throw error;
  }
};

export const getCart = async (token) => {
  try {
    const res = await api.get('/cart', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.error('Error fetching cart:', error.response || error.message);
    throw error;
  }
};

export const clearCart = async (token) => {
  try {
    const res = await api.delete('/cart/clear', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.error('Clear Cart Error:', error.response || error.message);
    throw error;
  }
};

// -------------------- Orders --------------------
export const createOrder = async (token) => {
  try {
    const res = await api.post('/orders', null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.error('Create Order Error:', error.response || error.message);
    throw error;
  }
};

export const getOrders = async (token) => {
  try {
    const res = await api.get('/orders', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.error('Get Orders Error:', error.response || error.message);
    throw error;
  }
};
