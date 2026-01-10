
// Định nghĩa kiểu dữ liệu cho nội dung chi tiết
export type DetailItem = {
  type: 'text' | 'image' | 'heading' | 'quote' | 'video' | 'link';
  content?: string;
  src?: string; // Chỉ dùng cho loại 'image' hoặc 'link' thumbnail
  caption?: string; // Chú thích ảnh hoặc tiêu đề link
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
      { type: 'heading', content: "Bối cảnh xã hội Việt Nam" },
      { type: 'text', content: "Cuối thế kỷ XIX, Việt Nam bị thực dân Pháp đô hộ, chuyển từ xã hội phong kiến độc lập sang nước thuộc địa nửa phong kiến." },
      { type: 'text', content: "Các phong trào yêu nước theo hệ tư tưởng phong kiến (như Cần Vương với vua Hàm Nghi) hay xu hướng dân chủ tư sản (Đông Du của Phan Bội Châu, Duy Tân của Phan Châu Trinh) tuy diễn ra sôi nổi nhưng đều lần lượt thất bại." },
      { type: 'quote', content: "Cách mạng Việt Nam rơi vào khủng hoảng sâu sắc về đường lối cứu nước." },
      { type: 'image', src: 'https://placehold.co/800x500/e2e8f0/1e293b?text=Phong+Trao+Can+Vuong', caption: "Hình ảnh minh họa phong trào Cần Vương" },
      { type: 'heading', content: "Tác động quốc tế" },
      { type: 'text', content: "Chủ nghĩa tư bản chuyển sang giai đoạn đế quốc chủ nghĩa, tăng cường xâm lược và áp bức các dân tộc thuộc địa trên toàn thế giới." },
      { type: 'text', content: "Cách mạng Tháng Mười Nga (1917) thành công đã mở ra một thời đại mới, đưa lý luận Mác - Lênin vào hiện thực, đem lại ánh sáng hy vọng cho các dân tộc bị áp bức." }
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
      { type: 'text', content: "Cốt lõi là chủ nghĩa yêu nước nồng nàn, ý chí kiên cường bất khuất. Cùng với đó là tinh thần nhân ái, khoan dung, truyền thống hiếu học và đoàn kết cộng đồng đã ngấm sâu vào tâm hồn Người." },
      { type: 'heading', content: "Tinh hoa văn hóa nhân loại" },
      { type: 'text', content: "Phương Đông: Tiếp thu hạt nhân hợp lý của Nho giáo (triết lý nhân nghĩa, tu thân), đức hy sinh từ bi của Phật giáo, và tư tưởng hòa hợp với thiên nhiên của Lão giáo." },
      { type: 'text', content: "Phương Tây: Tiếp thu các giá trị phổ quát về Tự do - Bình đẳng - Bác ái từ Đại cách mạng Pháp (1789) và tinh thần dân chủ trong Tuyên ngôn Độc lập của Mỹ (1776)." },
      { type: 'heading', content: "Chủ nghĩa Mác - Lênin" },
      { type: 'text', content: "Là cơ sở lý luận quyết định nhất, là 'cẩm nang thần kỳ' giúp Người tìm ra con đường giải phóng dân tộc đúng đắn." },
      { type: 'image', src: 'https://placehold.co/800x500/e2e8f0/1e293b?text=Luan+Cuong+Lenin', caption: "Sơ thảo luận cương của Lênin" }
    ]
  },
  // --- 3. Nhân tố chủ quan ---
  {
    id: 3,
    year: "Nhân tố chủ quan",
    title: "3. Nhân tố chủ quan",
    description: "Phẩm chất cá nhân kiệt xuất và tài năng hoạt động thực tiễn của Người.",
    details: [
      { type: 'heading', content: "Phẩm chất cá nhân" },
      { type: 'text', content: "Người có tư duy độc lập, tự chủ, sáng tạo, không giáo điều rập khuôn. Đặc biệt là lòng yêu nước thương dân vô bờ bến và bản lĩnh chính trị kiên cường trước mọi thử thách." },
      { type: 'heading', content: "Tài năng hoạt động thực tiễn" },
      { type: 'text', content: "Thông qua hành trình bôn ba khắp 5 châu 4 biển, làm đủ mọi nghề (phụ bếp, cào tuyết, đốt lò, thợ ảnh...) để kiếm sống và hoạt động cách mạng. Người đã thấu hiểu sâu sắc bản chất tàn bạo của chủ nghĩa thực dân và nỗi thống khổ của nhân dân lao động trên toàn thế giới." },
      { type: 'image', src: 'https://placehold.co/800x500/e2e8f0/1e293b?text=Nguyen+Tat+Thanh', caption: "Nguyễn Tất Thành - Người thanh niên yêu nước" },
      { type: 'video', content: "https://www.youtube.com/embed/58HGVK6j-80", caption: "Phim tài liệu về Chủ tịch Hồ Chí Minh" },
      { type: 'link', content: "https://khoinghieptre.tuoitrethudo.vn/nhung-hinh-anh-quy-hiem-ve-cuoc-doi-hoat-dong-cach-mang-cua-bac-ho-26090.html", caption: "Xem thêm hình ảnh quý hiếm về Bác Hồ" }
    ]
  },
  
  // --- GIAI ĐOẠN 1 ---
  {
    id: 4,
    year: "Trước 5-6-1911",
    title: "4. Thời niên thiếu & Chí hướng cứu nước",
    description: "Giai đoạn hình thành tư tưởng yêu nước thương dân sâu sắc và xác định chí hướng tìm đường cứu nước mới.",
    details: [
      { type: 'heading', content: "Bối cảnh gia đình và quê hương" },
      { type: 'text', content: "Sinh ngày 19-5-1890 tại làng Hoàng Trù (quê ngoại) và lớn lên ở làng Sen (quê nội), Nam Đàn, Nghệ An. Tên khai sinh là Nguyễn Sinh Cung, tự là Tất Thành." },
      { type: 'text', content: "Gia đình nhà nho yêu nước: Cha là Phó bảng Nguyễn Sinh Sắc, mẹ là bà Hoàng Thị Loan, chị là Nguyễn Thị Thanh, anh là Nguyễn Sinh Khiêm." },
      { type: 'quote', content: "Quan trường là nô lệ trong những người nô lệ." },

      { type: 'heading', content: "Giáo dục & Nhận thức" },
      { type: 'text', content: "Tháng 8/1908, vào học tại Trường Quốc học Huế nhưng bị đuổi học vì tham gia phong trào chống thuế (1908)." },
      { type: 'text', content: "Năm 1910, vào Phan Thiết dạy chữ Hán và chữ Quốc ngữ tại trường Dục Thanh. Tại đây, Người tiếp cận tư tưởng tiến bộ của các nhà khai sáng Pháp (Rousseau, Montesquieu)." },
      { type: 'image', src: 'https://placehold.co/800x500/e2e8f0/1e293b?text=Truong+Duc+Thanh', caption: "Trường Dục Thanh (Phan Thiết) - Nơi thầy giáo Nguyễn Tất Thành dạy học (1910)" },

      { type: 'heading', content: "Quyết định lịch sử" },
      { type: 'text', content: "Không tán thành con đường của các bậc tiền bối: Phan Bội Châu muốn dựa vào Nhật (chẳng khác nào 'đuổi hổ cửa trước, rước beo cửa sau'), Phan Châu Trinh muốn dựa vào Pháp để cải cách (chẳng khác nào 'xin giặc rủ lòng thương')." },
      { type: 'text', content: "Người quyết định sang phương Tây để tìm hiểu 'những gì ẩn giấu sau sức mạnh của kẻ thù' và văn minh nhân loại." },
      { type: 'quote', content: "Muốn đánh Pháp thì phải hiểu Pháp." },
    ]
  },

  // --- GIAI ĐOẠN 2 ---
  {
    id: 5,
    year: "1911 - 1920",
    title: "5. Hành trình vạn dặm & Con đường giải phóng",
    description: "Hành trình bôn ba tìm đường cứu nước và bước ngoặt đến với Chủ nghĩa Mác - Lênin.",
    details: [
      { type: 'heading', content: "Hành trình bôn ba (1911-1917)" },
      { type: 'text', content: "Ngày 5-6-1911, lấy tên Văn Ba, xin làm phụ bếp trên tàu Đô đốc Latouche-Tréville rời bến Nhà Rồng." },
      { type: 'image', src: 'https://placehold.co/800x500/e2e8f0/1e293b?text=Tau+Latouche+Treville', caption: "Con tàu Đô đốc Latouche-Tréville" },
      { type: 'text', content: "Hành trình qua 3 đại dương, 4 châu lục: Từ Pháp (Marseille, Le Havre), sang Mỹ (New York, Boston - làm thuê ở Harlem), đến Anh (London - làm cào tuyết, đốt lò khách sạn Carlton)." },
      { type: 'quote', content: "Tình hữu ái vô sản là tình cảm chân thật nhất." },

      { type: 'heading', content: "Hoạt động tại Pháp (1917-1919)" },
      { type: 'text', content: "Năm 1919, gia nhập Đảng Xã hội Pháp. Ngày 18/6/1919, thay mặt Hội những người An Nam yêu nước, gửi bản 'Yêu sách của nhân dân An Nam' (ký tên Nguyễn Ái Quốc) tới Hội nghị Vécxây." },
      { type: 'text', content: "Bản yêu sách đòi quyền tự do, dân chủ, ân xá tù chính trị... Tuy bị bác bỏ, nhưng đã gây tiếng vang lớn: 'Như tiếng sét đánh vào bàn Hội nghị'." },

      { type: 'heading', content: "Bước ngoặt Lênin (1920)" },
      { type: 'text', content: "Tháng 7-1920: Đọc 'Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và vấn đề thuộc địa' của Lênin trên báo L'Humanité." },
      { type: 'text', content: "Người cảm động đến phát khóc: 'Hỡi đồng bào bị đọa đày đau khổ! Đây là cái cần thiết cho chúng ta, đây là con đường giải phóng chúng ta!'." },
      { type: 'text', content: "Tháng 12-1920: Tại Đại hội Tours, bỏ phiếu tán thành Quốc tế III, trở thành một trong những người sáng lập Đảng Cộng sản Pháp." },
      { type: 'image', src: 'https://placehold.co/800x500/e2e8f0/1e293b?text=Dai+Hoi+Tours', caption: "Nguyễn Ái Quốc phát biểu tại Đại hội Tours (12/1920)" }
    ]
  },

  // --- GIAI ĐOẠN 3 ---
  {
    id: 6,
    year: "1921 - 1930",
    title: "6. Chuẩn bị ra đời Đảng kiểu mới",
    description: "Giai đoạn truyền bá lý luận và chuẩn bị toàn diện lực lượng cho sự ra đời của Đảng Cộng sản.",
    details: [
      { type: 'heading', content: "Hoạt động tại Pháp (1921-1923)" },
      { type: 'text', content: "Thành lập Hội Liên hiệp Thuộc địa (1921). Chủ nhiệm kiêm chủ bút báo 'Người Cùng Khổ' (Le Paria). Viết nhiều bài báo sắc sảo tố cáo chế độ thực dân." },

      { type: 'heading', content: "Hoạt động tại Liên Xô (1923-1924)" },
      { type: 'text', content: "Học tại Đại học Phương Đông (KUTV) ở Moscow. Dự Đại hội V Quốc tế Cộng sản. Viết tác phẩm 'Bản án chế độ thực dân Pháp' (1925)." },
      { type: 'image', src: 'https://placehold.co/800x500/e2e8f0/1e293b?text=Ban+An+Che+Do+Thuc+Dan', caption: "Tác phẩm Bản án chế độ thực dân Pháp" },

      { type: 'heading', content: "Quảng Châu & Xiêm (1924-1929)" },
      { type: 'text', content: "Năm 1924, về Quảng Châu (Trung Quốc) với tên Lý Thụy. Thành lập 'Hội Việt Nam Cách mạng Thanh niên' (1925), ra báo 'Thanh Niên'." },
      { type: 'text', content: "Xuất bản 'Đường Kách mệnh' (1927) - cuốn sách gối đầu giường của các chiến sĩ cách mạng tiền bối." },
      { type: 'text', content: "Năm 1928, hoạt động tại Xiêm (Thái Lan) với bí danh Thầu Chín, tuyên truyền yêu nước trong Việt kiều." },

      { type: 'heading', content: "Thành lập Đảng (1930)" },
      { type: 'text', content: "Ngày 3-2-1930: Chủ trì Hội nghị hợp nhất tại Hương Cảng (Hồng Kông). Hợp nhất Đông Dương Cộng sản Đảng và An Nam Cộng sản Đảng thành Đảng Cộng sản Việt Nam." },
      { type: 'text', content: "Thông qua Cương lĩnh chính trị đầu tiên: 'Tư sản dân quyền cách mạng và thổ địa cách mạng để đi tới xã hội cộng sản'." },
      { type: 'image', src: 'https://placehold.co/800x500/e2e8f0/1e293b?text=Hoi+Nghi+Thanh+Lap+Dang', caption: "Tranh vẽ Hội nghị thành lập Đảng" }
    ]
  },

  // --- GIAI ĐOẠN 4 ---
  {
    id: 7,
    year: "1930 - 1941",
    title: "7. Vượt qua thử thách & Kiên trì con đường",
    description: "Giai đoạn đầy sóng gió, thử thách bản lĩnh chính trị của người chiến sĩ cộng sản.",
    details: [
      { type: 'heading', content: "Vụ án Tống Văn Sơ (1931)" },
      { type: 'text', content: "Tháng 6/1931, bị cảnh sát Anh bắt tại Hồng Kông với tên Tống Văn Sơ (Sung Man Cho). Nhờ sự giúp đỡ của luật sư Loseby, Người được thả năm 1932." },
      { type: 'image', src: 'https://placehold.co/800x500/e2e8f0/1e293b?text=Tong+Van+So', caption: "Vụ án Tống Văn Sơ tại Hồng Kông" },

      { type: 'heading', content: "Những năm tháng ở Liên Xô (1934-1938)" },
      { type: 'text', content: "Sống tại Moscow với tên Lin. Theo học Trường Quốc tế Lênin. Đây là giai đoạn khó khăn khi Người bị Quốc tế Cộng sản phê phán là 'người dân tộc chủ nghĩa' và đánh giá thấp." },
      { type: 'text', content: "Dù vậy, Người vẫn kiên định quan điểm: Giải phóng dân tộc là nhiệm vụ hàng đầu của cách mạng thuộc địa." },

      { type: 'heading', content: "Trở về phương Đông" },
      { type: 'text', content: "Năm 1938, rời Liên Xô về Trung Quốc, làm việc tại Bát Lộ Quân." },
      { type: 'text', content: "Năm 1941, viết tác phẩm 'Con đường giải phóng', chuẩn bị thực lực để về nước trực tiếp lãnh đạo phong trào." }
    ]
  },

  // --- GIAI ĐOẠN 5 ---
  {
    id: 8,
    year: "1941 - 1969",
    title: "8. Hoàn thiện tư tưởng & Lãnh đạo thắng lợi",
    description: "Tư tưởng Hồ Chí Minh tỏa sáng rực rỡ, trở thành hiện thực sinh động qua các mốc son lịch sử.",
    details: [
      { type: 'heading', content: "Pác Bó & Độc lập (1941-1945)" },
      { type: 'text', content: "Ngày 28/1/1941, vượt cột mốc 108 về nước, sống và làm việc tại hang Cốc Bó (Cao Bằng). Đặt tên núi Các Mác, suối Lênin." },
      { type: 'text', content: "Tháng 8/1942, bị chính quyền Tưởng Giới Thạch bắt giam ở Trung Quốc, viết tập thơ 'Nhật ký trong tù' (Ngục trung nhật ký)." },
      { type: 'text', content: "Ngày 2/9/1945, tại Quảng trường Ba Đình, đọc Tuyên ngôn Độc lập, khai sinh nước VNDCCH." },
      { type: 'image', src: 'https://placehold.co/800x500/e2e8f0/1e293b?text=Tuyen+Ngon+Doc+Lap', caption: "Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập" },

      { type: 'heading', content: "Chủ tịch nước & Ngoại giao" },
      { type: 'text', content: "Lãnh đạo kháng chiến chống Pháp với phương châm 'Dĩ bất biến, ứng vạn biến'. Chiến thắng Điện Biên Phủ 1954 chấn động địa cầu." },
      { type: 'text', content: "Từ 1954, sống tại Nhà sàn, từ chối ở Phủ Chủ tịch. Nêu gương đạo đức 'Cần, Kiệm, Liêm, Chính'." },

      { type: 'heading', content: "Di sản cuối cùng" },
      { type: 'text', content: "Từ 1965, bắt đầu viết Di chúc. Ngày 2/9/1969, Người qua đời, hưởng thọ 79 tuổi. Di chúc để lại muôn vàn tình thân yêu cho toàn dân, toàn Đảng." }
    ]
  },

  // --- 9. Giá trị CMVN ---
  {
    id: 9,
    year: "Giá trị 1",
    title: "9. Giá trị đối với CM Việt Nam",
    description: "Tài sản tinh thần vô giá, kim chỉ nam cho mọi hành động của Đảng và dân tộc.",
    details: [
      { type: 'heading', content: "Ngọn đuốc soi đường" },
      { type: 'text', content: "Tư tưởng Hồ Chí Minh đưa cách mạng Việt Nam đi từ thắng lợi này đến thắng lợi khác (Cách mạng Tháng Tám, chiến thắng hai đế quốc to, thống nhất đất nước)." },
      { type: 'image', src: 'https://placehold.co/800x500/e2e8f0/1e293b?text=Ngay+Thong+Nhat', caption: "Niềm vui chiến thắng ngày thống nhất đất nước" },
      { type: 'heading', content: "Lấy dân làm gốc" },
      { type: 'text', content: "Tư tưởng 'Nước lấy dân làm gốc', 'Gốc có vững cây mới bền'. Xây dựng nhà nước của dân, do dân, vì dân." }
    ]
  },
  // --- 10. Giá trị Nhân loại ---
  {
    id: 10,
    year: "Giá trị 2",
    title: "10. Giá trị đối với Nhân loại",
    description: "Đóng góp to lớn vào sự nghiệp đấu tranh vì hòa bình, độc lập dân tộc, dân chủ và tiến bộ xã hội.",
    details: [
      { type: 'heading', content: "Anh hùng giải phóng dân tộc" },
      { type: 'text', content: "Năm 1987, UNESCO vinh danh Hồ Chí Minh là 'Anh hùng giải phóng dân tộc và Nhà văn hóa kiệt xuất của Việt Nam'." },
      { type: 'text', content: "Người đã chứng minh chân lý: 'Không có gì quý hơn độc lập, tự do'." },
      { type: 'image', src: 'https://placehold.co/800x500/e2e8f0/1e293b?text=UNESCO+Vinh+Danh', caption: "Nghị quyết UNESCO vinh danh Chủ tịch Hồ Chí Minh (1987)" }
    ]
  }
];