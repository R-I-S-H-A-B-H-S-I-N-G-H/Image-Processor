const Jimp = require("jimp");

exports.generateImage = (props) => {
	let { bg, size, filetype = "png" } = props;
	const { height, width } = parseResolution(size);
	const jim = new Jimp(height, width, bg);
	return jim.getBufferAsync(Jimp.AUTO);
};

function parseResolution(size = "", splitter = "x") {
	if (!size.includes(splitter)) return { height: size, width: size };
	const sizeArr = size.split(splitter);
	const height = sizeArr[0];
	const width = sizeArr[1];
	return { height, width };
}
