const { generateImage } = require("../services/placeholder.service");

exports.generatePlaceholder = async (req, res, next) => {
	const imageBuffer = await generateImage({ ...req.params, ...req.query });

	res.set("Content-Type", "image/png");
	if (req.query.download) res.setHeader("Content-Disposition", "attachment");
	res.send(imageBuffer);
};
