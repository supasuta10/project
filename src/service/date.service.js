import http from "../http-common";

const getAll = () => {
  return http.get("/date");  // ดึงข้อมูลวันที่ทั้งหมด
};

const get = (id) => {
  return http.get(`/date/${id}`);  // ดึงข้อมูลวันที่ตาม ID
};

const create = (data) => {
  return http.post("/date", data);  // เพิ่มข้อมูลวันที่ใหม่
};

const update = (id, data) => {
  return http.put(`/date/${id}`, data);  // อัปเดตข้อมูลวันที่
};

const remove = (id) => {
  return http.delete(`/date/${id}`);  // ลบข้อมูลวันที่
};

const DateService = {
  getAll,
  get,
  create,
  update,
  remove,
};

export default DateService;