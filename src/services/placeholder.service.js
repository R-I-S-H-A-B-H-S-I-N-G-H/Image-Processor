const Jimp = require("jimp");
const IMAGE_TYPE = {
	PNG: "png",
};

exports.generateImage = (props) => {
	let { height, width, color, size, filetype = IMAGE_TYPE.PNG } = props;
	if (size) {
		height = size;
		width = size;
	}
	const jim = new Jimp(height, width, color);
	if (filetype === IMAGE_TYPE.PNG) return jim.getBufferAsync(Jimp.MIME_PNG);
	throw new Error("INVALID FILE", filetype);
};
