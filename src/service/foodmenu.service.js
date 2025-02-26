import http from "../http-common";

const getAll = () => {
  return http.get("/foodmenu");  // ใช้สำหรับดึงเมนูอาหารทั้งหมด
};

const get = (id) => {
  return http.get(`/foodmenu/${id}`);  // ใช้สำหรับดึงเมนูอาหารตาม ID
};

const create = (data) => {
  return http.post("/foodmenu", data);  // ใช้สำหรับเพิ่มเมนูอาหารใหม่
};

const update = (id, data) => {
  return http.put(`/foodmenu/${id}`, data);  // ใช้สำหรับอัปเดตเมนูอาหาร
};

const remove = (id) => {
  return http.delete(`/foodmenu/${id}`);  // ใช้สำหรับลบเมนูอาหาร
};

const FoodMenuService = {
  getAll,
  get,
  create,
  update,
  remove,
};

export default FoodMenuService;