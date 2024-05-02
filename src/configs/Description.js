exports.apiDescription = {
	placeholder: {
		path: "/placeholder",
		pathVariable: [
			{
				path: "/placeholder/size",
				example: "/placeholder/300",
			},
			{
				path: "/placeholder/HEIGHTxHEIGHT",
				example: "/placeholder/300x400",
			},
		],
		query: [
			{
				bg: "color",
				example: "/placeholder/300?bg=red",
			},
			{
				download: "1",
				example: "/placeholder/300?download=1",
			},
		],
	},
	image: {
		path: "/edit",
		query: [
			{
				imgUrl: "Url of the image to be edited",
				example: "/edit?imgUrl=https://picsum.photos/id/237/200/300",
			},
			{
				rotate: "degrees",
				example: "/edit?imgUrl=https://picsum.photos/id/237/200/300&rotate=100",
			},
			{
				resize: "WIDTHxHEIGHT",
				example: "/edit?imgUrl=https://picsum.photos/id/237/200/300&resize=200x100",
			},
			{
				flip: "1",
				example: "/edit?imgUrl=https://picsum.photos/id/237/200/300&flip=1",
			},
			{
				flop: "1",
				example: "/edit?imgUrl=https://picsum.photos/id/237/200/300&flop=1",
			},
			{
				grayscale: "1",
				example: "/edit?imgUrl=https://picsum.photos/id/237/200/300&grayscale=1",
			},
			{
				brightness: "-128<->+128",
				example: "/edit?imgUrl=https://picsum.photos/id/237/200/300&brightness=2",
			},
			{
				contrast: "-128<->+128",
				example: "/edit?imgUrl=https://picsum.photos/id/237/200/300&contrast=2",
			},
			{
				download: "1",
				example: "/edit?imgUrl=https://picsum.photos/id/237/200/300&download=1",
			},
		],
	},
};
