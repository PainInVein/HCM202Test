// Định nghĩa kiểu dữ liệu cho nội dung chi tiết
export type DetailItem = {
  type: 'text' | 'image' | 'heading';
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
  {
    id: 1,
    year: "Trước 1911",
    title: "Hình thành tư tưởng yêu nước",
    description: "Giai đoạn Nguyễn Tất Thành lớn lên trong cảnh nước mất nhà tan, tiếp thu truyền thống quê hương và quyết tâm ra đi tìm đường cứu nước.",
    details: [
      { type: 'heading', content: "Bối cảnh & Diễn biến" },
      { type: 'text', content: "Sinh ngày 19-5-1890 tại Nam Đàn, Nghệ An trong một gia đình nhà Nho yêu nước. Người lớn lên tại vùng quê giàu truyền thống hiếu học và bất khuất." },
      { type: 'text', content: "Chứng kiến sự thống trị của Pháp và sự bất lực của triều đình Huế, Người sớm hình thành ý chí đánh đuổi thực dân. Năm 1908, Người tham gia phong trào chống thuế ở Trung Kỳ." },
      { type: 'text', content: "Dạy học tại trường Dục Thanh (Phan Thiết), tiếp cận tư tưởng tiến bộ trước khi vào Sài Gòn." },
      { type: 'heading', content: "Không gian trưng bày" },
      { type: 'image', src: "https://placehold.co/800x500/e2e8f0/1e293b?text=Mo+Hinh+Lang+Sen", caption: "Mô hình 3D Làng Sen - Quê nội Bác Hồ" },
      { type: 'image', src: "https://placehold.co/800x500/e2e8f0/1e293b?text=Mo+Hinh+Lang+Hoang+Tru", caption: "Mô hình Làng Hoàng Trù - Quê ngoại" },
      { type: 'image', src: "https://placehold.co/800x500/e2e8f0/1e293b?text=Truong+Duc+Thanh", caption: "Trường Dục Thanh - Nơi Bác dạy học" }
    ]
  },
  {
    id: 2,
    year: "1911 - 1920",
    title: "Tìm đường cứu nước",
    description: "Hành trình bôn ba qua nhiều châu lục, từ chủ nghĩa yêu nước đến với ánh sáng của chủ nghĩa Mác - Lênin.",
    details: [
      { type: 'heading', content: "Hành trình chân lý" },
      { type: 'text', content: "Ngày 5-6-1911: Tại bến Nhà Rồng, Người lấy tên Văn Ba, lên tàu Latouche-Tréville sang phương Tây." },
      { type: 'text', content: "Năm 1919: Gửi 'Bản Yêu sách của nhân dân An Nam' tới Hội nghị Vécxây đòi quyền tự quyết cho dân tộc." },
      { type: 'text', content: "Tháng 7-1920: Đọc 'Sơ thảo lần thứ nhất Những Luận cương về vấn đề dân tộc và thuộc địa' của Lênin. Người cảm động thốt lên: 'Đây là cái cần thiết cho chúng ta, đây là con đường giải phóng chúng ta!'." },
      { type: 'text', content: "Tháng 12-1920: Bỏ phiếu tán thành Quốc tế III, tham gia sáng lập Đảng Cộng sản Pháp." },
      { type: 'heading', content: "Hiện vật trưng bày" },
      { type: 'image', src: "https://placehold.co/800x500/e2e8f0/1e293b?text=Tau+Latouche+Treville", caption: "Mô hình tàu Đô đốc Latouche-Tréville" },
      { type: 'image', src: "https://placehold.co/800x500/e2e8f0/1e293b?text=Luan+Cuong+Lenin", caption: "Sơ thảo Luận cương của Lênin" }
    ]
  },
  {
    id: 3,
    year: "1920 - 1930",
    title: "Thành lập Đảng",
    description: "Giai đoạn chuẩn bị toàn diện về chính trị, tư tưởng và tổ chức cho sự ra đời của Đảng Cộng sản Việt Nam.",
    details: [
      { type: 'heading', content: "Truyền bá lý luận" },
      { type: 'text', content: "1921: Thành lập Hội Liên hiệp Thuộc địa tại Pháp, chủ nhiệm báo 'Người Cùng Khổ' (Le Paria)." },
      { type: 'text', content: "1925: Thành lập Hội Việt Nam Cách mạng Thanh niên tại Quảng Châu (Trung Quốc), đào tạo cán bộ cốt cán." },
      { type: 'text', content: "1927: Xuất bản tác phẩm 'Đường Kách Mệnh' - cuốn sách gối đầu giường của các thế hệ cách mạng đầu tiên." },
      { type: 'text', content: "3-2-1930: Chủ trì Hội nghị hợp nhất các tổ chức cộng sản, thành lập Đảng Cộng sản Việt Nam." },
      { type: 'heading', content: "Tác phẩm lịch sử" },
      { type: 'image', src: "https://placehold.co/800x500/e2e8f0/1e293b?text=Ban+An+Che+Do+Thuc+Dan", caption: "Tác phẩm: Bản án chế độ thực dân Pháp (1925)" },
      { type: 'image', src: "https://placehold.co/800x500/e2e8f0/1e293b?text=Duong+Kach+Menh", caption: "Tác phẩm: Đường Kách Mệnh (1927)" }
    ]
  },
  {
    id: 4,
    year: "1930 - 1941",
    title: "Vượt qua thử thách",
    description: "Kiên định giữ vững đường lối cách mạng đúng đắn trước những quan điểm sai trái và sự đàn áp của kẻ thù.",
    details: [
      { type: 'heading', content: "Bản lĩnh chính trị" },
      { type: 'text', content: "1931: Bị thực dân Anh bắt giam trái phép tại Hồng Kông (Vụ án Tống Văn Sơ)." },
      { type: 'text', content: "1934-1938: Học tập tại Quốc tế Cộng sản (Liên Xô). Đây là giai đoạn Người phải đấu tranh để bảo vệ quan điểm 'Giải phóng dân tộc' trước những luồng tư tưởng giáo điều." },
      { type: 'text', content: "1938: Gửi thư cho Quốc tế Cộng sản bày tỏ nguyện vọng trở về nước hoạt động." },
      { type: 'heading', content: "Tư liệu trưng bày" },
      { type: 'image', src: "https://placehold.co/800x500/e2e8f0/1e293b?text=Ho+So+Vu+An", caption: "Hồ sơ vụ án Tống Văn Sơ tại Hồng Kông" },
      { type: 'image', src: "https://placehold.co/800x500/e2e8f0/1e293b?text=Thu+Gui+Quoc+Te+Cong+San", caption: "Bức thư gửi Quốc tế Cộng sản (1938)" }
    ]
  },
  {
    id: 5,
    year: "1941 - 1969",
    title: "Soi đường & Lãnh đạo",
    description: "Trực tiếp lãnh đạo cách mạng Việt Nam đi từ thắng lợi này đến thắng lợi khác, hoàn thiện hệ thống tư tưởng.",
    details: [
      { type: 'heading', content: "Lãnh đạo cách mạng" },
      { type: 'text', content: "1941: Về nước sau 30 năm xa cách, chọn hang Pác Bó làm nơi hoạt động, thành lập Mặt trận Việt Minh." },
      { type: 'text', content: "2-9-1945: Đọc Tuyên ngôn Độc lập tại quảng trường Ba Đình, khai sinh nước Việt Nam Dân chủ Cộng hòa." },
      { type: 'text', content: "1954: Lãnh đạo chiến thắng Điện Biên Phủ 'lừng lẫy năm châu, chấn động địa cầu'." },
      { type: 'text', content: "1969: Trước khi đi xa, Người để lại bản Di chúc lịch sử - kết tinh tinh hoa tư tưởng và đạo đức." },
      { type: 'heading', content: "Di sản vô giá" },
      { type: 'image', src: "https://placehold.co/800x500/e2e8f0/1e293b?text=Hang+Pac+Bo", caption: "Mô hình Hang Pác Bó (Cao Bằng)" },
      { type: 'image', src: "https://placehold.co/800x500/e2e8f0/1e293b?text=Tuyen+Ngon+Doc+Lap", caption: "Bản thảo Tuyên ngôn Độc lập" },
      { type: 'image', src: "https://placehold.co/800x500/e2e8f0/1e293b?text=Di+Chuc", caption: "Bản Di chúc viết tay của Người" }
    ]
  }
];