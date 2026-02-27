export interface PaintingData {
    id: string;
    title: string;
    description: string;
    imagePath: string;
    /** Angle in radians around the circular wall (0 = front/entrance, going clockwise) */
    angle: number;
    /** Height of the painting center from the ground (world units) */
    heightOffset?: number;
    /** Scale multiplier for the painting size */
    scale?: number;
}

// ── Wall geometry constants ──
// The museum model is loaded at scale=20. The circular inner wall (gray/beige
// section near the floor) has these approximate dimensions:
export const WALL_RADIUS = 8.3;        // distance from center — paintings in middle of exhibition hall
export const WALL_CENTER: [number, number, number] = [0.5, 0, -3.5];
export const PAINTING_WIDTH = 3.2;     // default painting width in world units
export const PAINTING_HEIGHT = 2.4;    // default painting height (adjusted to fit wall)
export const INTERACTION_DISTANCE = 5.0;

// Height where the center of paintings sit — on the lower gray wall
const DEFAULT_HEIGHT = 1.8;

// 9 paintings spaced evenly around the wall, avoiding the entrance gap
// Entrance is roughly at angle=0 (positive Z direction), so we place
// paintings from ~40° to ~320° (0.7 rad to 5.6 rad)
const TOTAL_PAINTINGS = 14;
const START_ANGLE = 0.37;               // ~40 degrees (past entrance)
const END_ANGLE = 6;                 // ~320 degrees (before entrance)

function angleForIndex(i: number): number {
    return START_ANGLE + (END_ANGLE - START_ANGLE) * (i / (TOTAL_PAINTINGS - 1));
}

export const EXHIBITION_PAINTINGS: PaintingData[] = [
    {
        id: 'psapano_4',
        title: 'Huyết Mạch Tiền Tuyến: Binh Đoàn Xe Đạp Thồ',
        description: 'Dưới bầu trời rực lửa và làn mưa bom bão đạn của không quân Pháp, bức tranh khắc họa sống động hình ảnh những đoàn dân công hỏa tuyến kiên cường. Với những chiếc xe đạp thồ được gia cố thô sơ nhưng có thể chở hàng tạ giang sơn, cùng đôi vai trần và sức mạnh phi thường, hàng vạn người con đất Việt đã nườm nượp trèo đèo lội suối. Họ chính là mạch máu sống còn, ngày đêm luân chuyển lương thực, thuốc men, vũ khí và đạn dược, tạo nên một mạng lưới hậu cần vĩ đại chôn vùi dã tâm của kẻ thù.',
        imagePath: '/paintings/psapano_4.png',
        angle: angleForIndex(0),
        heightOffset: DEFAULT_HEIGHT,
        scale: 1.0,
    },
    {
        id: 'psapano_5',
        title: 'Xẻ Núi Lăn Bom: Kéo Pháo Vào Trận Địa',
        description: 'Tái hiện một trong những kỳ tích vĩ đại nhất của lịch sử quân sự thế giới: bộ đội ta dùng sức người và lòng quả cảm kéo những khẩu pháo hàng tấn vượt qua dốc cao hiểm trở của núi rừng Tây Bắc. Tiếng hò "dô ta" vang vọng giữa đại ngàn, hòa cùng mồ hôi và máu rơi trên những vách đá cheo leo. Việc đưa pháo lên các điểm cao bí mật đã tạo nên một thế trận pháo binh áp đảo, gây bất ngờ hoàn toàn cho quân địch trong ngày mở màn chiến dịch.',
        imagePath: '/paintings/psapano_5.jpg',
        angle: angleForIndex(1),
        heightOffset: DEFAULT_HEIGHT,
        scale: 1.0,
    },
    {
        id: 'psapano_6',
        title: 'Trường Đoạn 1: Toàn Dân Ra Trận',
        description: 'Khát vọng độc lập cháy bỏng đã triệu tập sức mạnh của cả một dân tộc. Góc tranh hùng tráng mở ra bức tranh toàn cảnh về sự chuẩn bị vĩ đại: từ những đoàn quân chủ lực rầm rập tiến bước, đến hàng vạn dân công ngày đêm mở đường, tiếp tế. Cả một cao nguyên Điện Biên Phủ bao la rung chuyển dưới những bước chân thần tốc, thể hiện ý chí quyết tâm "Tất cả cho tiền tuyến, tất cả để chiến thắng" của toàn Đảng, toàn quân và toàn dân.',
        imagePath: '/paintings/psapano_6.jpg',
        angle: angleForIndex(2),
        heightOffset: DEFAULT_HEIGHT,
        scale: 1.0,
    },
    {
        id: 'psapano_7',
        title: 'Trường Đoạn 2: Khúc Dạo Đầu Hùng Tráng',
        description: 'Chiều ngày 13/3/1954, sấm sét bùng nổ trên bầu trời Mường Thanh. Bức tranh miêu tả khoảnh khắc lịch sử khi pháo binh ta bất ngờ dội bão lửa chính xác tuyệt đối vào các cứ điểm Him Lam, Độc Lập. Dưới sự chi viện đắc lực của hỏa lực, lực lượng xung kích anh dũng xông lên như vũ bão, phá toang hàng rào dây thép gai, đánh thẳng vào trung tâm đề kháng của địch. Khúc dạo đầu đầy uy lực này đã giáng một đòn chí mạng vào sự kiêu hãnh của Tập đoàn cứ điểm Điện Biên Phủ.',
        imagePath: '/paintings/psapano_7.jpg',
        angle: angleForIndex(3),
        heightOffset: DEFAULT_HEIGHT,
        scale: 1.0,
    },
    {
        id: 'psapano_8',
        title: 'Bão Lửa Pháo Binh',
        description: 'Một cảnh tượng uy linh và rực lửa: nòng pháo của quân đội Nhân dân Việt Nam gầm vang, trút những trận mưa đạn pháo không ngớt xuống trận địa kẻ thù. Bức tranh tái hiện sức mạnh hỏa lực tàn khốc đã nghiền nát hệ thống phòng ngự kiên cố do người Pháp tự hào xây dựng. Trong ánh chớp đạn pháo chiến trường, hình ảnh những chiến sĩ bộ đội Cụ Hồ vẫn kiên cường bám trụ, tiến lên phía trước với khí thế ngút trời.',
        imagePath: '/paintings/psapano_8.jpg',
        angle: angleForIndex(4),
        heightOffset: DEFAULT_HEIGHT,
        scale: 1.0,
    },
    {
        id: 'psapano_9',
        title: 'Vũng Lầy Của Đội Quân Viễn Chinh',
        description: 'Trái ngược với khí thế hừng hực của quân ta, tác phẩm lột tả chân thực sự tuyệt vọng và khốn cùng của lính Pháp. Góc nhìn xoáy sâu vào khung cảnh chật chội, ngột ngạt và lầy lội dưới chiến hào ngập vũng bùn đất trận mạc. Bị bao vây cô lập, thiếu thốn đạn dược và tuyệt vọng dưới hỏa lực áp đảo, những binh sĩ viễn chinh từng kiêu ngạo nay run rẩy, đối mặt với cái chết cận kề trong "địa ngục trần gian" mà họ từng gọi là pháo đài bất khả xâm phạm.',
        imagePath: '/paintings/psapano_9.jpg',
        angle: angleForIndex(5),
        heightOffset: DEFAULT_HEIGHT,
        scale: 1.0,
    },
    {
        id: 'psapano_10',
        title: 'Trường Đoạn 3: Cuộc Đối Đầu Lịch Sử Và Khối Bộc Phá Đồi A1',
        description: 'Tâm điểm của chiến dịch hiện lên qua trận chiến sinh tử giành giật Đồi A1 - điểm cao chiến lược sống còn. Điểm nhấn chói lọi là sức công phá kinh thiên động địa của khối lượng bộc phá gần 1 tấn được bộ đội ta bí mật đào hầm đặt dưới lòng đồi, xé toang hầm ngầm cố thủ của Pháp. Xung quanh là chiến thuật vây lấn tài tình, quân ta đào hào như mạng nhện siết chặt vòng vây, từng bước tiến công dũng mãnh giữa cơn mưa bom đạn.',
        imagePath: '/paintings/psapano_10.jpg',
        angle: angleForIndex(6),
        heightOffset: DEFAULT_HEIGHT,
        scale: 1.0,
    },
    {
        id: 'psapano_11',
        title: 'Huyết Chiến Từng Tấc Đất',
        description: 'Bức tranh là bản hùng ca bi tráng về sự giằng co khốc liệt và tinh thần quả cảm tột độ. Mỗi mét chiến hào, mỗi đoạn hàng rào dây thép gai đều thấm đẫm máu xương của cả hai phe. Các họa sĩ đã tỉ mỉ khắc họa những trận đánh giáp lá cà nảy lửa, chiến trận đẫm máu không lùi bước của bộ đội ta vượt qua mọi rào cản phòng ngự, khẳng định ý chí thép "thà hy sinh tất cả chứ nhất định không chịu mất nước".',
        imagePath: '/paintings/psapano_11.jpg',
        angle: angleForIndex(7),
        heightOffset: DEFAULT_HEIGHT,
        scale: 1.0,
    },
    {
        id: 'psapano_12',
        title: 'Trường Đoạn 4: Khúc Khải Hoàn Mừng Chiến Thắng',
        description: 'Khoảnh khắc vĩ đại nhất của thế kỷ 20 được cô đọng hoàn mỹ: Chiều ngày 7/5/1954, lá cờ "Quyết chiến, Quyết thắng" của quân đội ta kiêu hãnh tung bay trên nóc hầm tướng De Castries. Dưới lá cờ đỏ sao vàng vinh quang là hàng dài dằng dặc những gã lính Pháp cúi đầu, giơ tay đầu hàng bước ra từ lòng đất. Bức tranh không chỉ tôn vinh chiến thắng rực rỡ mà còn đánh dấu chấm hết cho ách thống trị của thực dân Pháp trên bán đảo Đông Dương.',
        imagePath: '/paintings/psapano_12.jpg',
        angle: angleForIndex(8),
        heightOffset: DEFAULT_HEIGHT,
        scale: 1.0,
    },
    {
        id: 'new_01',
        title: '56 Ngày Đêm: Chấn Động Địa Cầu',
        description: '"Khoét núi, ngủ hầm, mưa dầm, cơm vắt - Máu trộn bùn non...". Tác phẩm mang ý nghĩa biểu tượng sâu sắc về chiến thắng 56 ngày đêm chiến đấu ngoan cường của quân dân ta. Hình ảnh lá cờ tung bay ngạo nghễ trên cứ điểm Điện Biên Phủ đã trở thành biểu tượng bất diệt cho sức mạnh đại đoàn kết dân tộc, truyền cảm hứng mãnh liệt cho phong trào giải phóng thuộc địa trên toàn cầu.',
        imagePath: '/paintings/107cb58f-205f-4887-9259-2ead08f3.jpg',
        angle: angleForIndex(9),
        heightOffset: DEFAULT_HEIGHT,
        scale: 1.0,
    },
    {
        id: 'new_02',
        title: 'Cú Cúi Đầu Của "Pháo Đài Bất Khả Xâm Phạm"',
        description: 'Ghi lại chân thực khoảnh khắc lịch sử: Tướng De Castries cùng toàn bộ Bộ Chỉ huy Pháp lầm lũi rời hầm ngầm đầu hàng vô điều kiện. Sự gục ngã của dàn tướng lĩnh cấp cao được trang bị vũ khí tối tân trước đội quân "áo vải cờ đào" mang dép lốp đã đập tan huyền thoại về "tập đoàn cứ điểm mạnh nhất Đông Dương", khẳng định sức mạnh chính nghĩa Việt Nam.',
        imagePath: '/paintings/25c22c07-3eec-444c-b85b-a1677977.jpg',
        angle: angleForIndex(10),
        heightOffset: DEFAULT_HEIGHT,
        scale: 1.0,
    },
    {
        id: 'new_03',
        title: 'Đại Tướng Võ Nguyên Giáp: Trí Tuệ Vĩ Đại Của Chiến Dịch',
        description: 'Bức ảnh toát lên phong thái uy nghiêm, sắc sảo nhưng vô cùng giản dị của Tổng tư lệnh - Đại tướng Võ Nguyên Giáp. Tại Sở Chỉ huy Mường Phăng, vị tướng huyền thoại đã có một quyết định lịch sử khó khăn nhất trong cuộc đời cầm quân: linh hoạt chuyển phương châm tác chiến từ "đánh nhanh, thắng nhanh" sang "đánh chắc, tiến chắc", dẫn đến đại thắng Điện Biên Phủ vinh quang.',
        imagePath: '/paintings/6ce226ee-ac37-4bdc-8e63-d138bb0d.jpg',
        angle: angleForIndex(11),
        heightOffset: DEFAULT_HEIGHT,
        scale: 1.0,
    },
    {
        id: 'new_04',
        title: 'Kéo Pháo Dốc Đèo: Kỳ Tích Bằng Sức Người',
        description: 'Góc nhìn chân thực đầy xúc động về sức vóc phi thường của quân đội và nhân dân Việt Nam. Vượt qua ngọn núi cao chót vót, len lỏi qua những cánh rừng rậm sương mù, những người chiến sĩ gồng mình hợp lực, kéo từng cỗ pháo nặng nề tiếp cận sào huyệt đỉnh đồi. Dùng ý chí sắt đá chinh phục giới hạn của kỹ thuật.',
        imagePath: '/paintings/d55c6bf0-0323-49b2-8c3f-4790bf65.jpg',
        angle: angleForIndex(12),
        heightOffset: DEFAULT_HEIGHT,
        scale: 1.0,
    },
    {
        id: 'new_05',
        title: 'Quyết Định Lịch Sử Tại Tỉn Keo - An Toàn Khu',
        description: 'Tại An Toàn Khu (ATK) Thái Nguyên sương phủ ngày 6/12/1953, Chủ tịch Hồ Chí Minh cùng Bộ Chính trị đã triệu tập hội nghị đặc biệt thông qua kế hoạch tác chiến Đông - Xuân. Bức ảnh ghi nhận khoảnh khắc lịch sử khi Bác Hồ dứt khoát quyết định mở chiến dịch Điện Biên Phủ, khơi nguồn bản hùng ca oanh liệt chấn động địa cầu.',
        imagePath: '/paintings/df477245-9ff7-4630-894c-04dc8460.jpg',
        angle: angleForIndex(13),
        heightOffset: DEFAULT_HEIGHT,
        scale: 1.0,
    },
];
