export const iconAnimVariants = {
	hidden: {
		x: 50,
		opacity: 0
	},
	visible: (i) => ({
		x: 0,
		opacity: 1,
		transition: {
			delay: i * .2,
			duration: .5,
			easy: "easyOut"
		}
	})
}


export const motionVariants = {
	hidden: {
		x: -50,
		opacity: 0
	},
	visible: (i) => ({
		x: 0,
		opacity: 1,
		transition: {
			delay: i * .6,
			duration: .5,
			easy: "easyOut"
		}
	})
}