import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

class MenusApi {
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${MenusApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Get current user

  static async getCurrentUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  // Get recipes

  static async getRecipe(item) {
    let res = await this.request(`recipes`, {item});
    return res;
  }

  // Get user's menus

  static async getMenus(username) {
    let res = await this.request(`menus/${username}`);
    return res.menus;
  }

  // Get specific menu

  static async getMenu(username, id) {
    let res = await this.request(`menus/${username}/${id}`);
    return res.menu;
  }

  // Get item card

  static async getItem(username, id, item) {
    let res = await this.request(`menus/${username}/${id}/${item}`);
    return res.items[0];
  }

  // Create new menu

  static async createMenu(username, data) {
    let res = await this.request(`menus/${username}`, data, "post");
    return res.menus;
  }

  // Delete menu
  static async deleteMenu(username, id, data) {
    await this.request(`menus/${username}/${id}`, data, "delete");
  }

  // Create new menu item
  static async createItem(username, id, data) {
    let res = await this.request(`menus/${username}/${id}/addItem`, data, "post");
    return res.item;
  }

  // Delete menu item
  static async deleteItem(username, id, item, data) {
    await this.request(`menus/${username}/${id}/${item}`, data, "delete");
  }
  
  // Login and get token
  static async login(data) {
    let res = await this.request(`auth/token`, data, "post");
    return res.token;
  }

  // Register for site

  static async signup(data) {
    let res = await this.request(`auth/register`, data, "post");
    return res.token;
  }

// Save user profile

  static async saveProfile(username, data) {
    let res = await this.request(`users/${username}`, data, "patch");
    return res.user;
  }
}


export default MenusApi;
