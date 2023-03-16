module.exports = {
	up: async (queryInterface) => {
		const coursesData = [
			{
				id: "2d28da7c-bb8f-4e41-bfe1-c6957649c7d1",
				major: "คณิตศาสตร์",
				degree: "วท.บ. 4 ปี",
				detail: "คณิตศาสตร์ เรียน ...",
				faculty: "คณะวิทยาศาสตร์และเทคโนโลยี",
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: "2d28da7c-bb8f-4e41-bfe1-c6957642c2d4",
				major: "การศึกษาพิเศษและภาษาอังกฤษ",
				degree: "ค.บ. 4 ปี",
				detail: "การศึกษาพิเศษและภาษาอังกฤษ เรียน ...",
				faculty: "คณะครุศาสตร์",
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				id: "2d28da7c-bb8f-4e41-bfe1-c6957642c2d5",
				major: "การประถมศึกษา",
				degree: "ค.บ. 4 ปี",
				detail: "การประถมศึกษา เรียน ...",
				faculty: "คณะครุศาสตร์",
				created_at: new Date(),
				updated_at: new Date()
			},
		];

		await queryInterface.bulkInsert('courses', coursesData);
	},

	down: async (queryInterface) => {
		await queryInterface.bulkDelete('courses', {});
	},
};
