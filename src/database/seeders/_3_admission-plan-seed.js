module.exports = {
	up: async (queryInterface) => {
		const admissionPlanData = [
			{
				// ==========================================
				// คณะวิทยาศาสตร์และเทคโนโลยี
				id: "3d28da7c-bb8f-4e41-bfe1-c6957649c7d1",
				quota_status: 0,
				quota_specific_subject: "",
				quota_detail: "",
				quota_good_study_qty: 0,
				quota_good_activity_im_qty: 0,
				quota_good_activity_li_qty: 0,
				quota_good_activity_sdd_qty: 0,
				quota_good_sport_qty: 0,
				quota_good_person_qty: 0,
				direct_status: 0,
				direct_specific_subject: "",
				direct_detail: "",
				direct_qty: 0,
				cooperation_status: 1,
				cooperation_specific_subject: "",
				cooperation_detail: "1.รับ ม.6 สายวิทย์-คณิต, 2.GPAX 5 ภาคเรียนไม่น้อยกว่า 2.00",
				cooperation_qty: 30,
				year: "2565",
				study_group: 1,
				course_id: "2d28da7c-bb8f-4e41-bfe1-c6957649c7d1",
				created_at: new Date(),
				updated_at: new Date()
			},
	

		];

		await queryInterface.bulkInsert('admission_plans', admissionPlanData);
	},

	down: async (queryInterface) => {
		await queryInterface.bulkDelete('admission_plans', {});
	},
};
