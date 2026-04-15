import axios from "axios";
import type { CartItem } from "../../../back-end/src/models/cart"

const API = "http://localhost:3000/cart";

export const getCart = async () => {
    const res = await axios.get(API);
    return res.data;
}

export const addItem = async (item: CartItem) => {
    await axios.post(API, item);
}

export const removeItem = async (id: number) => {
    await axios.delete(`${API}/${id}`);
}