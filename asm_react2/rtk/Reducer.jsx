import { createSlice } from "@reduxjs/toolkit";
import { login, register, getProducts, getProductDetail, getBrands, capnhatProfile } from "./API";

// Khởi tạo trạng thái ban đầu của Redux slice
const initialState = {
  user: null, // Thông tin người dùng, nếu đã đăng nhập
  cart: [], // Danh sách các sản phẩm trong giỏ hàng
  status: 'idle', // Trạng thái của các yêu cầu API (loading, succeeded, failed)
  error: null, // Lỗi xảy ra trong các yêu cầu API
  products: [], // Danh sách sản phẩm từ API
  productDetail: null, // Chi tiết sản phẩm cụ thể
  brands: [], // Danh sách các thương hiệu từ API
  loading: false, // Trạng thái tải dữ liệu
};

// Tạo Redux slice cho ứng dụng
const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    // Thêm sản phẩm vào giỏ hàng
    addItemToCart: (state, action) => {
      // Lấy thông tin sản phẩm từ payload của action
      const { _id, name, quantity, currentPrice, selectedColor, selectedImage, selectedDungLuong } = action.payload;

      // Kiểm tra tính hợp lệ của dữ liệu sản phẩm
      if (!_id || !name || !quantity || !currentPrice || !selectedColor || !selectedImage || !selectedDungLuong) {
        console.error('Invalid item data:', action.payload); // Log lỗi nếu dữ liệu không hợp lệ
        return;
      }

      // Tìm chỉ số của sản phẩm trong giỏ hàng dựa trên id, màu sắc và dung lượng
      const itemIndex = state.cart.findIndex(item => 
        item._id === _id &&
        item.selectedColor.ten === selectedColor.ten &&
        item.selectedDungLuong.ram === selectedDungLuong.ram &&
        item.selectedDungLuong.luu_tru === selectedDungLuong.luu_tru
      );

      // Nếu sản phẩm đã tồn tại trong giỏ hàng, cập nhật số lượng
      if (itemIndex >= 0) {
        state.cart[itemIndex].quantity += quantity;
      } else {
        // Nếu sản phẩm chưa tồn tại, thêm sản phẩm mới vào giỏ hàng
        state.cart.push({
          _id, // ID sản phẩm
          name, // Tên sản phẩm
          quantity, // Số lượng sản phẩm
          currentPrice, // Giá hiện tại của sản phẩm
          selectedColor, // Màu sắc đã chọn
          selectedImage, // Hình ảnh sản phẩm theo màu sắc đã chọn
          selectedDungLuong // Dung lượng đã chọn
        });
      }
    },
    
    // Xóa sản phẩm khỏi giỏ hàng
    removeItemFromCart: (state, action) => {
      const { _id, selectedColor, selectedDungLuong } = action.payload;

      // Lọc giỏ hàng để xóa sản phẩm tương ứng
      state.cart = state.cart.filter(item => 
        !(item._id === _id &&
          item.selectedColor.ten === selectedColor.ten &&
          item.selectedDungLuong.ram === selectedDungLuong.ram &&
          item.selectedDungLuong.luu_tru === selectedDungLuong.luu_tru)
      );
    },
    
    // Xóa tất cả sản phẩm trong giỏ hàng
    clearCart: (state) => {
      state.cart = [];
    },
    
    // Thay đổi số lượng sản phẩm trong giỏ hàng
    changeQuantity: (state, action) => {
      const itemIndex = state.cart.findIndex(item => item._id === action.payload._id);
      if (itemIndex >= 0) {
        state.cart[itemIndex].quantity = action.payload.quantity;
      }
    },
    
    // Đăng xuất người dùng
    logout: (state) => {
      state.user = null;
    }
  },
  extraReducers: (builder) => {
    // Các case cho các action async từ API
    builder.addCase(register.pending, (state) => {
      state.status = 'loading'; // Trạng thái khi đang gửi yêu cầu đăng ký
    });
    builder.addCase(register.fulfilled, (state) => {
      state.status = 'succeeded'; // Trạng thái khi yêu cầu đăng ký thành công
    });
    builder.addCase(register.rejected, (state, action) => {
      state.status = 'failed'; // Trạng thái khi yêu cầu đăng ký thất bại
      state.error = action.error.message; // Ghi nhận lỗi
    });

    builder.addCase(login.pending, (state) => {
      state.status = 'loading'; // Trạng thái khi đang gửi yêu cầu đăng nhập
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.status = 'succeeded'; // Trạng thái khi yêu cầu đăng nhập thành công
      state.user = action.payload; // Lưu thông tin người dùng
    });
    builder.addCase(login.rejected, (state, action) => {
      state.status = 'failed'; // Trạng thái khi yêu cầu đăng nhập thất bại
      state.error = action.error.message; // Ghi nhận lỗi
    });

    builder.addCase(getProducts.pending, (state) => {
      state.loading = true; // Trạng thái khi đang tải dữ liệu sản phẩm
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false; // Dừng trạng thái tải khi hoàn thành
      state.products = action.payload; // Lưu danh sách sản phẩm
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading = false; // Dừng trạng thái tải khi lỗi
      state.error = action.error.message; // Ghi nhận lỗi
    });

    builder.addCase(getProductDetail.pending, (state) => {
      state.loading = true; // Trạng thái khi đang tải chi tiết sản phẩm
    });
    builder.addCase(getProductDetail.fulfilled, (state, action) => {
      state.loading = false; // Dừng trạng thái tải khi hoàn thành
      state.productDetail = action.payload; // Lưu chi tiết sản phẩm
    });
    builder.addCase(getProductDetail.rejected, (state, action) => {
      state.loading = false; // Dừng trạng thái tải khi lỗi
      state.error = action.error.message; // Ghi nhận lỗi
    });

    builder.addCase(getBrands.pending, (state) => {
      state.loading = true; // Trạng thái khi đang tải dữ liệu thương hiệu
    });
    builder.addCase(getBrands.fulfilled, (state, action) => {
      state.loading = false; // Dừng trạng thái tải khi hoàn thành
      state.brands = action.payload; // Lưu danh sách thương hiệu
    });
    builder.addCase(getBrands.rejected, (state, action) => {
      state.loading = false; // Dừng trạng thái tải khi lỗi
      state.error = action.error.message; // Ghi nhận lỗi
    });

    builder.addCase(capnhatProfile.pending, (state) => {
      state.status = 'loading'; // Trạng thái khi đang cập nhật thông tin người dùng
    });
    builder.addCase(capnhatProfile.fulfilled, (state, action) => {
      state.status = 'succeeded'; // Trạng thái khi cập nhật thông tin thành công
      state.user = action.payload; // Cập nhật thông tin người dùng
    });
    builder.addCase(capnhatProfile.rejected, (state, action) => {
      state.status = 'failed'; // Trạng thái khi cập nhật thông tin thất bại
      state.error = action.payload; // Ghi nhận lỗi
    });
  }
});

// Export các actions và reducer của slice
export const { addItemToCart, removeItemFromCart, clearCart, changeQuantity, logout } = appSlice.actions;
export default appSlice.reducer;
