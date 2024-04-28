const Jimp = require("jimp");

exports.generateImage = (props) => {
	let { height, width, color, size, filetype = "png" } = props;
	if (size) {
		height = size;
		width = size;
	}
	const jim = new Jimp(height, width, color);
	return jim.getBufferAsync(Jimp.AUTO);
};
