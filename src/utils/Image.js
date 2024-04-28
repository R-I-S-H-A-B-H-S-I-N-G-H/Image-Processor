const Jimp = require("jimp");
const sharp = require("sharp");
const axios = require("axios");

exports.IMAGE_MIME_TYPE = {
	png: "image/png",
	apng: "image/apng",
	avif: "image/avif",
	gif: "image/gif",
	jpeg: "image/jpeg",
	svg: "image/svg+xml",
	webp: "image/webp",
};

exports.editImageGimp = async (props) => {
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

exports.editImage = async (props) => {
	const { rotate, scale, imgUrl, contrast, brightness, grayscale, resize, flip, flop } = props;
	const inputImg = (await axios({ url: imgUrl, responseType: "arraybuffer" })).data;

	const imgObj = sharp(inputImg);

	if (grayscale) imgObj.grayscale();
	if (flip) imgObj.flip();
	if (flop) imgObj.flop();

	if (rotate) imgObj.rotate(parseInt(rotate));
	if (scale) imgObj.scale(parseInt(scale));

	if (contrast) imgObj.linear(parseInt(contrast), -(128 * parseInt(contrast)) + 128);
	if (brightness) imgObj.modulate({ brightness: parseInt(brightness) });

	if (resize) {
		const { width, height } = parseSize(resize);
		imgObj.resize(width, height);
	}

	return imgObj.toBuffer();
};

function parseSize(size = "", separator = "x") {
	const sizeArr = size.split(separator);
	return { width: parseInt(sizeArr[0]) || null, height: parseInt(sizeArr[1]) || null };
}
