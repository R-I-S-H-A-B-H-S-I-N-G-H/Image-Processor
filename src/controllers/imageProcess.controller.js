const { processImage } = require("../services/imageProcess.service");
const { IMAGE_MIME_TYPE } = require("../utils/Image");

exports.processImage = async (req, res, next) => {
	const fileType = req.params.filetype || "png";
	const imageBuffer = await processImage({ ...req.params, ...req.query });

	res.set("Content-Type", IMAGE_MIME_TYPE[fileType]);
	if (req.query.download) res.setHeader("Content-Disposition", "attachment");
	res.send(imageBuffer);
};
