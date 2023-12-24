const Category = require("../models/category");

module.exports = {
  createCategory: async (category) => {
    try {
      const category = await Category.create(category);
      return category;
    } catch (error) {
      throw error;
    }
  },
  getCategories: async () => {
    try {
      const categories = await Category.find();
      return categories;
    } catch (error) {
      throw error;
    }
  },
  getCategoryById: async (id) => {
    try {
      const category = await Category.findOne({ where: { id } });
      return category;
    } catch (error) {
      throw error;
    }
  },
  getCategoryByName: async (name) => {
    try {
      const category = await Category.findOne({ where: { name } });
      return category;
    } catch (error) {
      throw error;
    }
  },
  updateCategoryById: async (id, category) => {
    try {
      const updateCategory = await Category.update(category, { where: { id } });
      return updateCategory;
    } catch (error) {
      throw error;
    }
  },
  deleteCategoryById: async (id) => {
    try {
      const deleteCategory = await Category.destroy({ where: { id } });
      return deleteCategory;
    } catch (error) {
      throw error;
    }
  },
};
