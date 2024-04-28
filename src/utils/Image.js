const Jimp = require("jimp");

exports.IMAGE_MIME_TYPE = {
	png: "image/png",
	apng: "image/apng",
	avif: "image/avif",
	gif: "image/gif",
	jpeg: "image/jpeg",
	svg: "image/svg+xml",
	webp: "image/webp",
};

exports.editImage = async (props) => {
	const { rotate, scale, imgUrl, contrast, brightness, invert, grayscale, resize } = props;
	const jimpReader = await Jimp.read(imgUrl);
	console.log(imgUrl);

	if (grayscale) jimpReader.grayscale();
	if (invert) jimpReader.invert();

	if (rotate) jimpReader.rotate(parseInt(rotate));
	if (scale) jimpReader.scale(parseInt(scale));

	if (contrast) jimpReader.contrast(parseInt(contrast));
	if (brightness) jimpReader.brightness(parseInt(brightness));

	if (resize) {
		const { width, height } = parseSize(resize);
		jimpReader.resize(width == -1 ? Jimp.AUTO : width, height == -1 ? Jimp.AUTO : height);
	}

	return jimpReader.getBufferAsync(Jimp.AUTO);
};

function parseSize(size = "", separator = "x") {
	const sizeArr = size.split(separator);
	return { width: parseInt(sizeArr[0]), height: parseInt(sizeArr[1]) };
}
