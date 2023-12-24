const Nft = require("../models/nft");

module.exports = {
  createNft: async (nft) => {
    try {
      const nft = await Nft.create(nft);
      return nft;
    } catch (error) {
      throw error;
    }
  },
  getNfts: async () => {
    try {
      const nfts = await Nft.find();
      return nfts;
    } catch (error) {
      throw error;
    }
  },
  getNftById: async (id) => {
    try {
      const nft = await Nft.findOne({ where: { id } });
      return nft;
    } catch (error) {
      throw error;
    }
  },
  getNftByName: async (name) => {
    try {
      const nft = await Nft.findOne({ where: { name } });
      return nft;
    } catch (error) {
      throw error;
    }
  },
  updateNftById: async (id, nft) => {
    try {
      const updateNft = await Nft.update(nft, { where: { id } });
      return updateNft;
    } catch (error) {
      throw error;
    }
  },
  deleteNftById: async (id) => {
    try {
      const deleteNft = await Nft.destroy({ where: { id } });
      return deleteNft;
    } catch (error) {
      throw error;
    }
  },
};
