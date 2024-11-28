import { createAsyncThunk } from '@reduxjs/toolkit';
import AxiosHelper from '../helpers/AxiosHelper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const login = createAsyncThunk(
  'user/dangnhap',
  async (data, { rejectWithValue }) => {
    try {
      const response = await AxiosHelper().post('/user/dangnhap', data);
      console.log(response)
      if (response.status == true) {
        await AsyncStorage.setItem('token', response.token);
        await AsyncStorage.setItem('refreshToken', response.refreshToken)
         // Cập nhật Axios với token mới
         AxiosHelper(response.token);
        return response.user;
      } else {
        return rejectWithValue(response.data.message);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const register = createAsyncThunk(
  'user/dangki',
  async (data, { rejectWithValue }) => {
    try {
      const response = await AxiosHelper().post('/user/dangki', data);
      if (response.status === true) {
        return response.message;
      } else {
        return rejectWithValue(response.data.message);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getProducts = createAsyncThunk(
  'product/getProducts',
  async ({ categoryId, brandId }, { rejectWithValue }) => {
    try {
      const url = brandId 
        ? `/products/byCategory/${categoryId}?brandId=${brandId}` 
        : `/products/byCategory/${categoryId}`;
      const response = await AxiosHelper().get(url);
      if (response) {
        return response.products;
      } else {
        return rejectWithValue('No products found');
      }
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message || 'Đã xảy ra lỗi không xác định');
      }
    }
  }
);




export const getBrands = createAsyncThunk(
  'brand/getBrands',
  async (_, { rejectWithValue }) => {
    try {
      const response = await AxiosHelper().get('/brands/all');
      if (response) {
        return response.brands;
      } else {
        return rejectWithValue('No brands found');
      }
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message || 'Đã xảy ra lỗi không xác định');
      }
    }
  }
);


export const getProductDetail = createAsyncThunk(
  'product/getProductDetail',
  async (_id, { rejectWithValue }) => {
    try {
      const response = await AxiosHelper().get(`/products/${_id}`);
      if (response) {
        return response.product; // Đảm bảo trả về đúng dữ liệu
      } else {
        return rejectWithValue('No product detail found');
      }
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message || 'Đã xảy ra lỗi không xác định');
      }
    }
  }
);


export const capnhatProfile = createAsyncThunk(
  'profile/updateProfile',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await AxiosHelper().put('/user/capnhatprofile', userData);
      if (response.status) {
        return response.user;
      } else {
        return rejectWithValue(response.message);
      }
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message || 'Đã xảy ra lỗi không xác định');
      }
    }
  }
);
