
// Định nghĩa kiểu dữ liệu cho nội dung chi tiết
export type DetailItem = {
  type: 'text' | 'image' | 'heading' | 'quote';
  content?: string;
  src?: string; // Chỉ dùng cho loại 'image'
  caption?: string; // Chú thích ảnh
};

export type TimelineItemType = {
  id: number;
  year: string;
  title: string;
  description: string; // Mô tả ngắn hiện ở thẻ bên ngoài
  details: DetailItem[]; // Nội dung chi tiết bên trong (gồm cả diễn biến và hiện vật)
};

export const timelineData: TimelineItemType[] = [
  // --- 1. Thực tiễn thời đại ---
  {
    id: 1,
    year: "Cuối XIX - Đầu XX",
    title: "1. Thực tiễn thời đại",
    description: "Bối cảnh lịch sử Việt Nam và thế giới tác động đến sự hình thành tư tưởng Hồ Chí Minh.",
    details: [
      { type: 'heading', content: "Bối cảnh Quốc tế" },
      { type: 'text', content: "Chủ nghĩa tư bản chuyển sang giai đoạn đế quốc chủ nghĩa, xâm chiếm thuộc địa. Mâu thuẫn giữa các dân tộc thuộc địa và chủ nghĩa thực dân trở nên gay gắt." },
      { type: 'text', content: "Cách mạng Tháng Mười Nga (1917) thành công mở ra thời đại mới - thời đại quá độ từ CNTB lên CNXH." },
      { type: 'image', src: 'https://placehold.co/800x500/e2e8f0/1e293b?text=Ban+Do+The+Gioi+Phan+Chia+Thuoc+Dia', caption: "Bản đồ phân chia thuộc địa thế giới (Cần ảnh bản đồ 1914 hoặc cuối thế kỷ 19)" },
      { type: 'heading', content: "Bối cảnh Việt Nam" },
      { type: 'text', content: "Thực dân Pháp thống trị tàn bạo. Các phong trào yêu nước theo khuynh hướng phong kiến (Cần Vương) và dân chủ tư sản (Đông Du, Duy Tân) đều thất bại." },
      { type: 'quote', content: "Tình hình đen tối như không có đường ra." },
      { type: 'image', src: 'https://placehold.co/800x500/e2e8f0/1e293b?text=Phong+Trao+Dong+Du+Phan+Boi+Chau', caption: "Hình ảnh cụ Phan Bội Châu hoặc phong trào Đông Du" }
    ]
  },
  // --- 2. Tiền đề Lý luận ---
  {
    id: 2,
    year: "Nguồn gốc", 
    title: "2. Tiền đề Lý luận",
    description: "Những giá trị và học thuyết là nguồn gốc hình thành nên tư tưởng Hồ Chí Minh.",
    details: [
      { type: 'heading', content: "Giá trị truyền thống dân tộc" },
      { type: 'text', content: "Chủ nghĩa yêu nước là giá trị cốt lõi, là dòng chảy xuyên suốt. Cùng với đó là tinh thần đoàn kết, nhân nghĩa, khoan dung." },
      { type: 'heading', content: "Tinh hoa văn hóa nhân loại" },
      { type: 'text', content: "Phương Đông: Tiếp thu hạt nhân hợp lý của Nho giáo (tu thân, hành đạo), Phật giáo (từ bi, bác ái)." },
      { type: 'text', content: "Phương Tây: Tiếp thu tư tưởng Tự do - Bình đẳng - Bác ái của Đại cách mạng Pháp và tinh thần dân chủ của Mỹ." },
      { type: 'heading', content: "Chủ nghĩa Mác - Lênin" },
      { type: 'text', content: "Là tiền đề lý luận quan trọng nhất, quyết định bản chất cách mạng của tư tưởng Hồ Chí Minh." },
      { type: 'image', src: 'https://placehold.co/800x500/e2e8f0/1e293b?text=Tuyen+Ngon+Dang+Cong+San', caption: "Bìa sách Tuyên ngôn Đảng Cộng sản (Marx - Engels)" }
    ]
  },
  // --- 3. Nhân tố chủ quan ---
  {
    id: 3,
    year: "Nhân tố chủ quan",
    title: "3. Nhân tố chủ quan Hồ Chí Minh",
    description: "Phẩm chất cá nhân kiệt xuất và tài năng hoạt động thực tiễn của Người.",
    details: [
      { type: 'heading', content: "Tư duy & Trí tuệ" },
      { type: 'text', content: "Tư duy độc lập, tự chủ, sáng tạo. Không giáo điều, rập khuôn mà luôn vận dụng linh hoạt vào thực tiễn." },
      { type: 'heading', content: "Phẩm chất đạo đức" },
      { type: 'text', content: "Tâm hồn cao thượng, yêu nước thương dân vô bờ bến. Bản lĩnh kiên định, dũng cảm vượt qua mọi khó khăn thử thách." },
      { type: 'heading', content: "Hoạt động thực tiễn" },
      { type: 'text', content: "Hành trình bôn ba qua gần 30 quốc gia, làm nhiều nghề đã đem lại vốn hiểu biết sâu rộng về thực tiễn thế giới." },
      { type: 'image', src: 'https://placehold.co/800x500/e2e8f0/1e293b?text=Chan+Dung+Nguyen+Tat+Thanh', caption: "Chân dung Nguyễn Tất Thành thời trẻ (hoặc ảnh thẻ tại Pháp)" }
    ]
  },
  // --- 4. Thời kỳ 1: Trước 1911 ---
  {
    id: 4,
    year: "Trước 5-6-1911",
    title: "4. Hình thành tư tưởng yêu nước",
    description: "Giai đoạn hình thành nhận thức và chí hướng cứu nước.",
    details: [
      { type: 'heading', content: "Tiếp thu truyền thống" },
      { type: 'text', content: "Sinh ra và lớn lên ở Nghệ An, tiếp thu truyền thống yêu nước của gia đình và quê hương." },
      { type: 'heading', content: "Xác định chí hướng" },
      { type: 'text', content: "Chứng kiến nỗi đau mất nước và sự thất bại của các bậc tiền bối. Người nhận thấy không thể đi theo con đường cũ." },
      { type: 'text', content: "Người đã sớm có ý định: 'Tôi muốn đi ra ngoài, xem nước Pháp và các nước khác. Sau khi xem xét họ làm như thế nào, tôi sẽ trở về giúp đồng bào chúng ta'." },
      { type: 'image', src: 'https://placehold.co/800x500/e2e8f0/1e293b?text=Lang+Sen+Que+Bac', caption: "Hình ảnh Làng Sen quê nội hoặc Làng Hoàng Trù quê ngoại" }
    ]
  },
  // --- 5. Thời kỳ 2: 1911 - 1920 ---
  {
    id: 5,
    year: "1911 - 1920",
    title: "5. Tìm thấy con đường cứu nước",
    description: "Giai đoạn khảo nghiệm thực tế và đến với Chủ nghĩa Mác - Lênin.",
    details: [
      { type: 'heading', content: "Hành trình khảo nghiệm (1911-1917)" },
      { type: 'text', content: "Ngày 5/6/1911: Ra đi tìm đường cứu nước. Bôn ba qua Pháp, Mỹ, Anh, châu Phi, làm nhiều nghề để kiếm sống và hoạt động." },
      { type: 'image', src: 'https://placehold.co/800x500/e2e8f0/1e293b?text=Tau+Latouche+Treville', caption: "Tàu Amiral Latouche-Tréville (hoặc Bến Nhà Rồng năm 1911)" },
      { type: 'heading', content: "Bước ngoặt tư tưởng (1919-1920)" },
      { type: 'text', content: "1919: Gửi Bản Yêu sách của nhân dân An Nam tới Hội nghị Vécxây. -> Nhận thức: Phải dựa vào sức mình là chính." },
      { type: 'text', content: "7/1920: Đọc Sơ thảo Luận cương của Lênin. Người tìm thấy con đường giải phóng dân tộc gắn liền với cách mạng vô sản." },
      { type: 'text', content: "12/1920: Tại Đại hội Tours, tán thành Quốc tế III, tham gia sáng lập Đảng Cộng sản Pháp." },
      { type: 'image', src: 'https://placehold.co/800x500/e2e8f0/1e293b?text=Dai+Hoi+Tours+1920', caption: "Ảnh Nguyễn Ái Quốc phát biểu hoặc tham dự Đại hội Tours (Pháp)" }
    ]
  },
  // --- 6. Thời kỳ 3: 1920 - 1930 ---
  {
    id: 6,
    year: "1921 - 1930",
    title: "6. Hình thành cơ bản tư tưởng về CMVN",
    description: "Giai đoạn chuẩn bị về lý luận, tổ chức và thành lập Đảng Cộng sản Việt Nam.",
    details: [
      { type: 'heading', content: "Hoạt động lý luận" },
      { type: 'text', content: "Viết nhiều bài báo (Le Paria), tác phẩm 'Bản án chế độ thực dân Pháp' (1925), 'Đường Kách Mệnh' (1927) để truyền bá chủ nghĩa Mác - Lênin về trong nước." },
      { type: 'image', src: 'https://placehold.co/800x500/e2e8f0/1e293b?text=Bao+Le+Paria', caption: "Tờ báo Le Paria (Người Cùng Khổ) hoặc bìa sách Đường Kách Mệnh" },
      { type: 'heading', content: "Chuẩn bị tổ chức" },
      { type: 'text', content: "Thành lập Hội Việt Nam Cách mạng Thanh niên (1925) tại Quảng Châu. Đào tạo cán bộ cốt cán cho cách mạng." },
      { type: 'heading', content: "Thành lập Đảng (1930)" },
      { type: 'text', content: "3/2/1930: Chủ trì Hội nghị hợp nhất tại Hương Cảng, thành lập Đảng Cộng sản Việt Nam. Soạn thảo Cương lĩnh chính trị đầu tiên." },
      { type: 'image', src: 'https://placehold.co/800x500/e2e8f0/1e293b?text=Tranh+Hoi+Nghi+Thanh+Lap+Dang+1930', caption: "Tranh vẽ Hội nghị thành lập Đảng tại Hương Cảng (3/2/1930)" }
    ]
  },
  // --- 7. Thời kỳ 4: 1930 - 1941 ---
  {
    id: 7,
    year: "1930 - 1941",
    title: "7. Vượt qua thử thách",
    description: "Giai đoạn kiên trì giữ vững lập trường cách mạng trước những khó khăn và quan điểm sai trái.",
    details: [
      { type: 'heading', content: "Thử thách cam go" },
      { type: 'text', content: "Bị đế quốc bắt giam ở Hồng Kông (Vụ án Tống Văn Sơ - 1931). Trong Quốc tế Cộng sản xuất hiện khuynh hướng phê phán Người là 'dân tộc chủ nghĩa'." },
      { type: 'image', src: 'https://placehold.co/800x500/e2e8f0/1e293b?text=Vu+An+Tong+Van+So', caption: "Hình ảnh liên quan vụ án Tống Văn Sơ hoặc Luật sư Loseby" },
      { type: 'heading', content: "Kiên định lập trường" },
      { type: 'text', content: "Trong thời gian hoạt động ở Quốc tế Cộng sản (1934-1938), Người vẫn kiên trì bảo vệ quan điểm: Vấn đề dân tộc và vấn đề giai cấp phải được giải quyết hài hòa." },
      { type: 'text', content: "Thực tiễn sau đó đã chứng minh quan điểm của Người là hoàn toàn đúng đắn. Năm 1941, Người trở về nước trực tiếp lãnh đạo cách mạng." },
      { type: 'image', src: 'https://placehold.co/800x500/e2e8f0/1e293b?text=Bac+Ho+Ve+Nuoc+1941', caption: "Cột mốc 108 hoặc Hang Pác Bó nơi Bác về nước (1941)" }
    ]
  },
  // --- 8. Thời kỳ 5: 1941 - 1969 ---
  {
    id: 8,
    year: "1941 - 1969",
    title: "8. Tư tưởng tiếp tục phát triển",
    description: "Tư tưởng Hồ Chí Minh soi đường cho sự nghiệp cách mạng chiến thắng vẻ vang.",
    details: [
      { type: 'heading', content: "Hoàn thiện đường lối GPDT (1941-1945)" },
      { type: 'text', content: "1941: Về nước, chủ trì Hội nghị TW 8, hoàn chỉnh chuyển hướng chỉ đạo chiến lược. Thành lập Mặt trận Việt Minh." },
      { type: 'image', src: 'https://placehold.co/800x500/e2e8f0/1e293b?text=Doc+Tuyen+Ngon+Doc+Lap+1945', caption: "Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập (2/9/1945)" },
      { type: 'heading', content: "Lãnh đạo kháng chiến & kiến quốc (1945-1969)" },
      { type: 'text', content: "Lãnh đạo thắng lợi CMT8 (1945). Đề ra đường lối 'Kháng chiến kiến quốc' trong chống Pháp (1946-1954) và 'Xây dựng CNXH ở miền Bắc, đấu tranh thống nhất nước nhà' trong chống Mỹ." },
      { type: 'image', src: 'https://placehold.co/800x500/e2e8f0/1e293b?text=Chien+Dich+Dien+Bien+Phu', caption: "Bác Hồ và các đồng chí chỉ huy chiến dịch Điện Biên Phủ" },
      { type: 'text', content: "Viết Di chúc - Tổng kết lớn về lý luận và thực tiễn cách mạng." }
    ]
  },
  // --- 9. Giá trị CMVN ---
  {
    id: 9,
    year: "Giá trị 1",
    title: "9. Giá trị đối với CM Việt Nam",
    description: "Tài sản tinh thần vô giá, kim chỉ nam cho mọi hành động của Đảng và dân tộc.",
    details: [
      { type: 'heading', content: "Nền tảng tư tưởng" },
      { type: 'text', content: "Tư tưởng Hồ Chí Minh cùng với chủ nghĩa Mác - Lênin là nền tảng tư tưởng và kim chỉ nam cho hành động của Đảng." },
      { type: 'text', content: "Đưa cách mạng Việt Nam đi từ thắng lợi này đến thắng lợi khác: Giành độc lập, thống nhất đất nước, và thành công trong công cuộc Đổi mới." },
      { type: 'heading', content: "Ngọn đuốc soi đường" },
      { type: 'text', content: "Mãi mãi là ngọn đuốc soi đường cho nhân dân Việt Nam trong sự nghiệp xây dựng và bảo vệ Tổ quốc Xã hội chủ nghĩa." },
      { type: 'image', src: 'https://placehold.co/800x500/e2e8f0/1e293b?text=Cong+Cuoc+Doi+Moi', caption: "Hình ảnh đại diện cho thành tựu đổi mới hoặc Đại hội Đảng" }
    ]
  },
  // --- 10. Giá trị Nhân loại ---
  {
    id: 10,
    year: "Giá trị 2",
    title: "10. Giá trị đối với Nhân loại",
    description: "Đóng góp to lớn vào sự nghiệp đấu tranh vì hòa bình, độc lập dân tộc, dân chủ và tiến bộ xã hội.",
    details: [
      { type: 'heading', content: "Giải phóng các dân tộc thuộc địa" },
      { type: 'text', content: "Mở ra thời đại sụp đổ của hệ thống thuộc địa trên thế giới. Cổ vũ các dân tộc bị áp bức vùng lên đấu tranh tự giải phóng." },
      { type: 'heading', content: "Hòa bình & Hữu nghị" },
      { type: 'text', content: "Góp phần vun đắp tình hữu nghị, hợp tác giữa các dân tộc. Tư tưởng về hòa bình, nhân văn của Người được thế giới tôn vinh." },
      { type: 'text', content: "Năm 1987, UNESCO vinhanh Hồ Chí Minh là 'Anh hùng giải phóng dân tộc và Nhà văn hóa kiệt xuất'." },
      { type: 'image', src: 'https://placehold.co/800x500/e2e8f0/1e293b?text=UNESCO+Vinh+Danh', caption: "Biểu tượng UNESCO hoặc Nghị quyết vinh danh" }
    ]
  }
];