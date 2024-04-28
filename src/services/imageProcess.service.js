const { editImage } = require("../utils/Image");

exports.processImage = async (props) => {
	return editImage(props);
};

function parseSize(size) {}
