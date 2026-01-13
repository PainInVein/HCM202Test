
// Định nghĩa kiểu dữ liệu cho nội dung chi tiết
export type DetailItem = {
  type: 'text' | 'image' | 'heading' | 'quote' | 'video' | 'link';
  content?: string;
  src?: string; // Chỉ dùng cho loại 'image' hoặc 'link' thumbnail
  caption?: string; // Chú thích ảnh hoặc tiêu đề link
  narrative?: string; // Nội dung thuyết trình riêng cho mục này
};

export type TimelineItemType = {
  id: number;
  year: string;
  title: string;
  description: string; // Mô tả ngắn hiện ở thẻ bên ngoài
  narrative: string; // Lời dẫn nhập đầu chương
  details: DetailItem[]; // Nội dung chi tiết bên trong (gồm cả diễn biến và hiện vật)
};

export const timelineData: TimelineItemType[] = [
  // --- 1. Thực tiễn thời đại ---
  {
    id: 1,
    year: "Cuối XIX - Đầu XX",
    title: "1. Thực tiễn thời đại",
    description: "Bối cảnh lịch sử Việt Nam và thế giới tác động đến sự hình thành tư tưởng Hồ Chí Minh.",
    narrative: "Kính thưa quý vị, chúng ta đang ngược dòng thời gian trở về Việt Nam những năm cuối thế kỷ 19. Một bức tranh lịch sử nhuốm màu bi thương. Đất nước ta khi ấy chìm đắm trong đêm trường nô lệ dưới gót giày thực dân Pháp. Cái giá lạnh của xiềng xích nô lệ và nỗi nhục mất nước đã bao trùm lên khắp non sông.",
    details: [
      { 
        type: 'heading', 
        content: "Bối cảnh xã hội Việt Nam",
        narrative: "Xã hội Việt Nam lúc bấy giờ chịu hai tầng áp bức: thực dân và phong kiến. Nhân dân lầm than, khốn cùng. Hàng loạt cuộc khởi nghĩa đã nổ ra, thể hiện tinh thần quật cường của dân tộc." 
      },
      { 
        type: 'text', 
        content: "Cuối thế kỷ XIX, Việt Nam bị thực dân Pháp đô hộ, chuyển từ xã hội phong kiến độc lập sang nước thuộc địa nửa phong kiến.",
        narrative: "Tuy nhiên, bi kịch lớn nhất lúc bấy giờ không chỉ là sự đàn áp dã man của kẻ thù, mà là sự bế tắc về đường lối."
      },
      { 
        type: 'text', 
        content: "Các phong trào yêu nước theo hệ tư tưởng phong kiến (như Cần Vương với vua Hàm Nghi) hay xu hướng dân chủ tư sản (Đông Du của Phan Bội Châu, Duy Tân của Phan Châu Trinh) tuy diễn ra sôi nổi nhưng đều lần lượt thất bại.", 
        narrative: "Tiếng súng Cần Vương của vua Hàm Nghi vang dội núi rừng, hay phong trào Đông Du đầy nhiệt huyết của cụ Phan Bội Châu, phong trào Duy Tân của cụ Phan Châu Trinh... tất cả, tất cả đều lần lượt thất bại và bị dìm trong biển máu."
      },
      { 
        type: 'quote', 
        content: "Cách mạng Việt Nam rơi vào khủng hoảng sâu sắc về đường lối cứu nước.",
        narrative: "Cách mạng Việt Nam như con thuyền tròng trành giữa biển khơi bão tố mà không có la bàn chỉ lối. Đi về đâu để cứu lấy giống nòi? Câu hỏi ấy day dứt tâm can bao người con yêu nước."
      },
      { 
        type: 'image', 
        src: 'https://i.ex-cdn.com/nhadautu.vn/files/content/2020/01/22/photo-1-15556437769231863753100-crop-15556440326491395197402-1132.jpg', 
        caption: "Hình ảnh minh họa phong trào Cần Vương",
        narrative: "Nhìn lại những hình ảnh bi tráng của phong trào Cần Vương, chúng ta càng thấm thía nỗi đau của những anh hùng ngã xuống khi chí lớn chưa thành."
      },
      { 
        type: 'heading', 
        content: "Tác động quốc tế",
        narrative: "Trong khi đó, trên thế giới, chủ nghĩa tư bản đã chuyển sang giai đoạn đế quốc chủ nghĩa, gieo rắc đau thương cho các dân tộc thuộc địa khắp năm châu."
      },
      { 
        type: 'text', 
        content: "Chủ nghĩa tư bản chuyển sang giai đoạn đế quốc chủ nghĩa, tăng cường xâm lược và áp bức các dân tộc thuộc địa trên toàn thế giới.",
      },
      { 
        type: 'text', 
        content: "Cách mạng Tháng Mười Nga (1917) thành công đã mở ra một thời đại mới, đưa lý luận Mác - Lênin vào hiện thực, đem lại ánh sáng hy vọng cho các dân tộc bị áp bức.",
        narrative: "Nhưng rồi, như ánh mặt trời xua tan bóng đêm, Cách mạng Tháng Mười Nga năm 1917 bùng nổ và thành công rực rỡ. Tiếng súng rạng đông ấy đã thức tỉnh các dân tộc bị áp bức, báo hiệu một kỷ nguyên mới đang đến gần." 
      }
    ]
  },
  // --- 2. Tiền đề Lý luận ---
  {
    id: 2,
    year: "Nguồn gốc", 
    title: "2. Tiền đề Lý luận",
    description: "Những giá trị và học thuyết là nguồn gốc hình thành nên tư tưởng Hồ Chí Minh.",
    narrative: "Tư tưởng Hồ Chí Minh vĩ đại không phải ngẫu nhiên mà có. Đó là sự kết tinh diệu kỳ, là dòng chảy hội tụ của tinh hoa văn hóa nhân loại và truyền thống dân tộc sâu sắc.",
    details: [
      { 
        type: 'heading', 
        content: "Giá trị truyền thống dân tộc",
        narrative: "Cội nguồn sâu xa nhất, bền vững nhất chính là Chủ nghĩa yêu nước Việt Nam. Dòng máu Lạc Hồng chảy trong huyết quản Người, mang theo tinh thần nhân ái, khoan dung và ý chí kiên cường bất khuất ngàn năm."
      },
      { type: 'text', content: "Cốt lõi là chủ nghĩa yêu nước nồng nàn, ý chí kiên cường bất khuất. Cùng với đó là tinh thần nhân ái, khoan dung, truyền thống hiếu học và đoàn kết cộng đồng đã ngấm sâu vào tâm hồn Người." },
      
      { 
        type: 'heading', 
        content: "Tinh hoa văn hóa nhân loại",
        narrative: "Với tư duy rộng mở, Người đã tiếp thu tinh hoa của cả phương Đông và phương Tây." 
      },
      { 
        type: 'text', 
        content: "Phương Đông: Tiếp thu hạt nhân hợp lý của Nho giáo (triết lý nhân nghĩa, tu thân), đức hy sinh từ bi của Phật giáo, và tư tưởng hòa hợp với thiên nhiên của Lão giáo.", 
        narrative: "Từ phương Đông, Người chắt lọc triết lý nhân nghĩa, tu thân của Nho giáo; đức từ bi hỉ xả của Phật giáo."
      },
      { 
        type: 'text', 
        content: "Phương Tây: Tiếp thu các giá trị phổ quát về Tự do - Bình đẳng - Bác ái từ Đại cách mạng Pháp (1789) và tinh thần dân chủ trong Tuyên ngôn Độc lập của Mỹ (1776).",
        narrative: "Từ phương Tây, Người hấp thu lý tưởng Tự do - Bình đẳng - Bác ái của Cách mạng Pháp, và tinh thần dân chủ tiến bộ của Tuyên ngôn Độc lập Mỹ."
      },
      
      { 
        type: 'heading', 
        content: "Chủ nghĩa Mác - Lênin",
        narrative: "Nhưng yếu tố quyết định nhất, bước ngoặt vĩ đại nhất, chính là việc Người tiếp thu Chủ nghĩa Mác - Lênin."
      },
      { 
        type: 'text', 
        content: "Là cơ sở lý luận quyết định nhất, là 'cẩm nang thần kỳ' giúp Người tìm ra con đường giải phóng dân tộc đúng đắn.",
        narrative: "Chính lý luận Mác - Lênin đã trao cho Người chiếc chìa khóa vàng, chiếc 'cẩm nang thần kỳ' để giải mã bài toán giải phóng dân tộc mà các bậc tiền bối còn để ngỏ."
      },
      { 
        type: 'image', 
        src: 'https://tulieuvankien.dangcongsan.vn/upload/3000006/20251024/f2334d113505b423c42325de5514d633B%C3%A1o-nh%C3%A2n-%C4%91%E1%BA%A1o.jpg', 
        caption: "Sơ thảo luận cương của Lênin",
        narrative: "Đây chính là tác phẩm Sơ thảo Luận cương của Lênin, văn kiện đã khiến Người cảm động đến rơi nước mắt khi tìm thấy con đường cứu nước."
      }
    ]
  },
  // --- 3. Nhân tố chủ quan ---
  {
    id: 3,
    year: "Nhân tố chủ quan",
    title: "3. Nhân tố chủ quan",
    description: "Phẩm chất cá nhân kiệt xuất và tài năng hoạt động thực tiễn của Người.",
    narrative: "Hoàn cảnh lịch sử tạo nên thời thế, nhưng chính con người mới tạo nên lịch sử. Tư tưởng Hồ Chí Minh tỏa sáng rực rỡ chính nhờ những phẩm chất thiên tài của Người.",
    details: [
      { 
        type: 'heading', 
        content: "Phẩm chất cá nhân",
        narrative: "Người sở hữu một tư duy độc lập, tự chủ và sáng tạo phi thường. Không giáo điều, không rập khuôn, Người luôn nhìn nhận vấn đề bằng con mắt biện chứng sắc sảo."
      },
      { type: 'text', content: "Người có tư duy độc lập, tự chủ, sáng tạo, không giáo điều rập khuôn. Đặc biệt là lòng yêu nước thương dân vô bờ bến và bản lĩnh chính trị kiên cường trước mọi thử thách." },
      
      { 
        type: 'heading', 
        content: "Tài năng hoạt động thực tiễn",
        narrative: "Cuộc đời Người là một pho sách sống động về thực tiễn cách mạng."
      },
      { 
        type: 'text', 
        content: "Thông qua hành trình bôn ba khắp 5 châu 4 biển, làm đủ mọi nghề (phụ bếp, cào tuyết, đốt lò, thợ ảnh...) để kiếm sống và hoạt động cách mạng. Người đã thấu hiểu sâu sắc bản chất tàn bạo của chủ nghĩa thực dân và nỗi thống khổ của nhân dân lao động trên toàn thế giới.",
        narrative: "Suốt 30 năm bôn ba nơi đất khách quê người, làm đủ nghề từ phụ bếp, cào tuyết đến thợ ảnh... Người đã nếm trải mọi gian khổ, đắng cay. Chính trường đời khắc nghiệt ấy đã tôi luyện nên một Hồ Chí Minh bản lĩnh, thấu hiểu tột cùng nỗi đau của nhân loại cần lao."
      },
      { 
        type: 'image', 
        src: 'https://nguoikesu.com/images/wiki/nguyen-tat-thanh/d3a5e419e2c5f36772c83d77a4eb7203.jpg', 
        caption: "Nguyễn Tất Thành - Người thanh niên yêu nước",
        narrative: "Hình ảnh người thanh niên Nguyễn Tất Thành với đôi mắt sáng ngời ý chí và nghị lực phi thường."
      },
      { 
        type: 'video', 
        content: "https://www.youtube.com/embed/58HGVK6j-80", 
        caption: "Phim tài liệu về Chủ tịch Hồ Chí Minh",
        narrative: "Mời quý vị cùng xem những thước phim tư liệu quý giá này để cảm nhận rõ hơn về vóc dáng và thần thái của Người."
      },
      { type: 'link', content: "https://khoinghieptre.tuoitrethudo.vn/nhung-hinh-anh-quy-hiem-ve-cuoc-doi-hoat-dong-cach-mang-cua-bac-ho-26090.html", caption: "Xem thêm hình ảnh quý hiếm về Bác Hồ" }
    ]
  },
  
  // --- GIAI ĐOẠN 1 ---
  {
    id: 4,
    year: "Trước 5-6-1911",
    title: "4. Thời niên thiếu & Chí hướng cứu nước",
    description: "Giai đoạn hình thành tư tưởng yêu nước thương dân sâu sắc và xác định chí hướng tìm đường cứu nước mới.",
    narrative: "Chúng ta hãy cùng trở về làng Sen quê Bác, nơi nuôi dưỡng tâm hồn của cậu bé Nguyễn Sinh Cung.",
    details: [
      { 
        type: 'heading', 
        content: "Bối cảnh gia đình và quê hương" 
      },
      { 
        type: 'text', 
        content: "Sinh ngày 19-5-1890 tại làng Hoàng Trù (quê ngoại) và lớn lên ở làng Sen (quê nội), Nam Đàn, Nghệ An. Tên khai sinh là Nguyễn Sinh Cung, tự là Tất Thành.",
        narrative: "Sinh ra trong một gia đình nhà nho yêu nước tại mảnh đất Nghệ An địa linh nhân kiệt. Cha là cụ Phó bảng Nguyễn Sinh Sắc, người đã dạy cho con bài học làm người đầu tiên: 'Quan trường là nô lệ trong những người nô lệ'."
      },
      { type: 'text', content: "Gia đình nhà nho yêu nước: Cha là Phó bảng Nguyễn Sinh Sắc, mẹ là bà Hoàng Thị Loan, chị là Nguyễn Thị Thanh, anh là Nguyễn Sinh Khiêm." },
      { type: 'quote', content: "Quan trường là nô lệ trong những người nô lệ." },

      { 
        type: 'heading', 
        content: "Giáo dục & Nhận thức",
        narrative: "Từ nhỏ, Người đã sớm bộc lộ tư chất thông minh và tinh thần phản kháng bất công." 
      },
      { 
        type: 'text', 
        content: "Tháng 8/1908, vào học tại Trường Quốc học Huế nhưng bị đuổi học vì tham gia phong trào chống thuế (1908).",
        narrative: "Người bị đuổi khỏi trường Quốc học Huế vì dám đứng lên tham gia phong trào chống thuế, bênh vực dân nghèo."
      },
      { 
        type: 'text', 
        content: "Năm 1910, vào Phan Thiết dạy chữ Hán và chữ Quốc ngữ tại trường Dục Thanh. Tại đây, Người tiếp cận tư tưởng tiến bộ của các nhà khai sáng Pháp (Rousseau, Montesquieu).",
        narrative: "Năm 1910, tại trường Dục Thanh - Phan Thiết, thầy giáo Nguyễn Tất Thành đã gieo những hạt giống tri thức và lòng yêu nước đầu tiên cho học trò. Cũng tại đây, Người tiếp cận với những tư tưởng Tự do - Bình đẳng - Bác ái."
      },
      { 
        type: 'image', 
        src: 'https://bbt.1cdn.vn/2025/05/17/dsc_9711.jpg', 
        caption: "Tháng 5, về Dục Thanh nhớ Bác",
        narrative: "Mái trường Dục Thanh rêu phong cổ kính, nơi còn in dấu chân của thầy giáo trẻ Nguyễn Tất Thành năm xưa."
      },
      { type: 'image', src: 'https://cdn.giaoducthoidai.vn/images/e68bd0ae7e0a4d2e84e451c6db68f2d45be2b050ff45bf09a5d1c9455ddc29def0fddb9c0c8e2ec1f6638996dfc55f5fac791c2099f5008f0d1d7f33d2927c25962d82620f07efe821a518f5e8a6d8aa511532ae5f34316d6ea27d15a4bece62ab202722b43cbea5f405b2dfc8f3c5c7/noi-luu-dau-cua-thay-giao-nguyen-tat-thanh-1-7180.jpeg.webp', caption: "Trường Dục Thanh (Phan Thiết) - Nơi thầy giáo Nguyễn Tất Thành dạy học (1910)" },

      { 
        type: 'heading', 
        content: "Quyết định lịch sử",
        narrative: "Trước cảnh nước mất nhà tan, Người đau đáu một quyết tâm ra đi tìm đường cứu nước." 
      },
      { 
        type: 'text', 
        content: "Không tán thành con đường của các bậc tiền bối: Phan Bội Châu muốn dựa vào Nhật (chẳng khác nào 'đuổi hổ cửa trước, rước beo cửa sau'), Phan Châu Trinh muốn dựa vào Pháp để cải cách (chẳng khác nào 'xin giặc rủ lòng thương').",
        narrative: "Người không đi theo lối mòn của các bậc tiền bối. Cụ Phan Bội Châu dựa vào Nhật thì chẳng khác nào 'đuổi hổ cửa trước, rước beo cửa sau'. Cụ Phan Châu Trinh hy vọng Pháp cải cách thì chẳng khác gì 'xin giặc rủ lòng thương'."
      },
      { 
        type: 'text', 
        content: "Người quyết định sang phương Tây để tìm hiểu 'những gì ẩn giấu sau sức mạnh của kẻ thù' và văn minh nhân loại.",
        narrative: "Với tầm nhìn xa trông rộng, Người quyết định phải sang phương Tây, vào tận hang ổ của kẻ thù để xem họ làm thế nào, rồi trở về giúp đồng bào mình."
      },
      { 
        type: 'quote', 
        content: "Muốn đánh Pháp thì phải hiểu Pháp.",
        narrative: "Một quyết định táo bạo và đầy bản lĩnh: Muốn đánh bại kẻ thù, phải hiểu rõ kẻ thù."
      },
      { 
        type: 'image', 
        src: 'https://ussh.vnu.edu.vn/uploads/ussh/news/2022_05/4.jpg', 
        caption: "Nguyễn Tất Thành - Người thanh niên yêu nước",
        narrative: "Ánh mắt cương nghị của người thanh niên 21 tuổi trước khi bước lên con tàu định mệnh, thay đổi vận mệnh của cả một dân tộc."
      },
    ]
  },

  // --- GIAI ĐOẠN 2 ---
  {
    id: 5,
    year: "1911 - 1920",
    title: "5. Hành trình vạn dặm & Con đường giải phóng",
    description: "Hành trình bôn ba tìm đường cứu nước và bước ngoặt đến với Chủ nghĩa Mác - Lênin.",
    narrative: "Ngày 5 tháng 6 năm 1911. Bến cảng Nhà Rồng. Con tàu Amiral Latouche-Tréville rúc lên hồi còi dài, mang theo người thanh niên Văn Ba rời xa Tổ quốc.",
    details: [
      { 
        type: 'heading', 
        content: "Hành trình bôn ba (1911-1917)",
        narrative: "Từ đây bắt đầu cuộc hành trình vạn dặm đầy sóng gió của người trai chí lớn."
      },
      { type: 'text', content: "Ngày 5-6-1911, lấy tên Văn Ba, xin làm phụ bếp trên tàu Đô đốc Latouche-Tréville rời bến Nhà Rồng." },
      { 
        type: 'image', 
        src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiFmO5IALW2Wtr24ZswRqjoNGyaFUiwhrXNdiaYSO5krxA_YepbM8mgkMjlCMuRonXGVu1fRW943tAT463BDRtJymJlW_-hYyz02qgQEcMuKhbTfSjqEoksbDUQztzzNxQPFdAVkHIfFZw/s1600/AMIRAL_LATOUCHE_TREVILLE_CR_2.jpg', 
        caption: "Con tàu Đô đốc Latouche-Tréville" 
      },
      { 
        type: 'image', 
        src: 'https://www.fahasa.com/blog/wp-content/uploads/2025/05/bac-ra-di-tim-duong.jpeg', 
        caption: "Bác Hồ lên tàu Amiral Latouche Tréville ra đi tìm đường cứu nước",
        narrative: "Hai bàn tay trắng, nhưng trái tim Người chứa đựng cả một bầu trời khát vọng tự do cho dân tộc."
      },
      { 
        type: 'text', 
        content: "Hành trình qua 3 đại dương, 4 châu lục: Từ Pháp (Marseille, Le Havre), sang Mỹ (New York, Boston - làm thuê ở Harlem), đến Anh (London - làm cào tuyết, đốt lò khách sạn Carlton).",
        narrative: "Người đã đi qua 3 đại dương, 4 châu lục. Từ bến cảng Marseille sầm uất, đến khu Harlem nghèo khổ ở New York, hay những đêm đông giá rét cào tuyết ở London. Ở đâu Người cũng thấy: nhân dân lao động đều khổ như nhau, và bọn đế quốc đều tàn ác như nhau."
      },
      { type: 'quote', content: "Tình hữu ái vô sản là tình cảm chân thật nhất." },

      { 
        type: 'heading', 
        content: "Hoạt động tại Pháp (1917-1919)",
        narrative: "Năm 1917, Người trở lại Pháp, hòa mình vào phong trào công nhân." 
      },
      { 
        type: 'text', 
        content: "Năm 1919, gia nhập Đảng Xã hội Pháp. Ngày 18/6/1919, thay mặt Hội những người An Nam yêu nước, gửi bản 'Yêu sách của nhân dân An Nam' (ký tên Nguyễn Ái Quốc) tới Hội nghị Vécxây.", 
        narrative: "Năm 1919, một sự kiện chấn động Paris: bản 'Yêu sách của nhân dân An Nam' do Nguyễn Ái Quốc ký tên, gửi tới Hội nghị Versailles. Lần đầu tiên, tiếng nói đòi quyền sống của dân tộc Việt Nam vang lên đanh thép giữa sào huyệt kẻ thù."
      },
      { type: 'text', content: "Bản yêu sách đòi quyền tự do, dân chủ, ân xá tù chính trị... Tuy bị bác bỏ, nhưng đã gây tiếng vang lớn: 'Như tiếng sét đánh vào bàn Hội nghị'." },

      { 
        type: 'heading', 
        content: "Bước ngoặt Lênin (1920)",
        narrative: "Và rồi, giây phút lịch sử trọng đại nhất đã đến vào tháng 7 năm 1920."
      },
      { 
        type: 'text', 
        content: "Tháng 7-1920: Đọc 'Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và vấn đề thuộc địa' của Lênin trên báo L'Humanité.",
        narrative: "Trên tờ báo L'Humanité, Người bắt gặp Sơ thảo luận cương của Lênin. Từng câu, từng chữ như thấm vào tim gan, soi sáng tâm trí Người."
      },
      { 
        type: 'text', 
        content: "Người cảm động đến phát khóc: 'Hỡi đồng bào bị đọa đày đau khổ! Đây là cái cần thiết cho chúng ta, đây là con đường giải phóng chúng ta!'.",
        narrative: "Ngồi một mình trong phòng, mà Người nói to lên như đang nói trước đông đảo quần chúng: 'Hỡi đồng bào bị đọa đày đau khổ! Đây là cái cần thiết cho chúng ta, đây là con đường giải phóng chúng ta!'."
      },
      { type: 'text', content: "Tháng 12-1920: Tại Đại hội Tours, bỏ phiếu tán thành Quốc tế III, trở thành một trong những người sáng lập Đảng Cộng sản Pháp." },
      { 
        type: 'image', 
        src: 'https://daknong.1cdn.vn/2020/12/23/baolamdong.vn-file-e7837c02845ffd04018473e6df282e92-dataimages-202012-original-_images2335718_t2.jpg', 
        caption: "Nguyễn Ái Quốc phát biểu tại Đại hội Tours (12/1920)",
        narrative: "Tại Đại hội Tours tháng 12/1920, tấm thẻ biểu quyết giơ cao. Nguyễn Ái Quốc trở thành một trong những người sáng lập Đảng Cộng sản Pháp, đánh dấu bước chuyển mình từ chủ nghĩa yêu nước sang chủ nghĩa cộng sản."
      }
    ]
  },

  // --- GIAI ĐOẠN 3 ---
  {
    id: 6,
    year: "1921 - 1930",
    title: "6. Chuẩn bị ra đời Đảng kiểu mới",
    description: "Giai đoạn truyền bá lý luận và chuẩn bị toàn diện lực lượng cho sự ra đời của Đảng Cộng sản.",
    narrative: "Tìm thấy con đường là một chuyện, nhưng làm sao để biến lý luận ấy thành thắng lợi cách mạng ở Việt Nam? Người đã dành trọn một thập kỷ để chuẩn bị công phu.",
    details: [
      { 
        type: 'heading', 
        content: "Hoạt động tại Pháp (1921-1923)",
        narrative: "Những năm tháng sôi nổi tại Pháp." 
      },
      { 
        type: 'text', 
        content: "Thành lập Hội Liên hiệp Thuộc địa (1921). Chủ nhiệm kiêm chủ bút báo 'Người Cùng Khổ' (Le Paria). Viết nhiều bài báo sắc sảo tố cáo chế độ thực dân.",
        narrative: "Tờ báo 'Người Cùng Khổ' (Le Paria) ra đời. Cây bút Nguyễn Ái Quốc sắc bén như dao bầu, vạch trần tội ác thực dân, thức tỉnh lương tri nhân loại."
      },

      { 
        type: 'heading', 
        content: "Hoạt động tại Liên Xô (1923-1924)",
        narrative: "Sau đó, Người đến Liên Xô, quê hương của Cách mạng Tháng Mười."
      },
      { type: 'text', content: "Học tại Đại học Phương Đông (KUTV) ở Moscow. Dự Đại hội V Quốc tế Cộng sản. Viết tác phẩm 'Bản án chế độ thực dân Pháp' (1925)." },
      { 
        type: 'image', 
        src: 'https://imgnvsk.vnanet.vn/MediaUpload/Org/2023/08/16/ban-an-che-do-thuc-dan-phap-12-59-35-49916-16-26-12.jpg', 
        caption: "Tác phẩm Bản án chế độ thực dân Pháp",
        narrative: "Tác phẩm 'Bản án chế độ thực dân Pháp' - một bản cáo trạng đanh thép, lay động hàng triệu trái tim."
      },

      { 
        type: 'heading', 
        content: "Quảng Châu & Xiêm (1924-1929)",
        narrative: "Rời Liên Xô, Người về Quảng Châu - Trung Quốc, để được gần Tổ quốc hơn." 
      },
      { 
        type: 'text', 
        content: "Năm 1924, về Quảng Châu (Trung Quốc) với tên Lý Thụy. Thành lập 'Hội Việt Nam Cách mạng Thanh niên' (1925), ra báo 'Thanh Niên'.",
        narrative: "Tại đây, Hội Việt Nam Cách mạng Thanh niên được thành lập. Những hạt giống đỏ đầu tiên được ươm mầm."
      },
      { 
        type: 'text', 
        content: "Xuất bản 'Đường Kách mệnh' (1927) - cuốn sách gối đầu giường của các chiến sĩ cách mạng tiền bối.",
        narrative: "Cuốn 'Đường Kách mệnh' năm 1927 trở thành sách gối đầu giường, kim chỉ nam hành động cho lớp lớp thanh niên yêu nước."
      },
      { 
        type: 'text', 
        content: "Năm 1928, hoạt động tại Xiêm (Thái Lan) với bí danh Thầu Chín, tuyên truyền yêu nước trong Việt kiều.",
        narrative: "Với bí danh Thầu Chín, Người hòa mình vào đời sống bà con Việt kiều tại Xiêm, Thái Lan, khơi dậy lòng yêu nước hướng về quê hương."
      },
      { type: 'image', src: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Duongkachmenh.jpg', caption: "'Đường Kách mệnh' (1927)" },

      { 
        type: 'heading', 
        content: "Thành lập Đảng (1930)",
        narrative: "Và mùa xuân lịch sử ấy đã đến."
      },
      { 
        type: 'text', 
        content: "Ngày 3-2-1930: Chủ trì Hội nghị hợp nhất tại Hương Cảng (Hồng Kông). Hợp nhất Đông Dương Cộng sản Đảng và An Nam Cộng sản Đảng thành Đảng Cộng sản Việt Nam.",
        narrative: "Ngày 3 tháng 2 năm 1930, tại Hương Cảng. Với uy tín tuyệt đối, Người đã thống nhất các tổ chức cộng sản, khai sinh ra Đảng Cộng sản Việt Nam. Từ đây, ngọn cờ cách mạng đã được trao vào tay đội tiên phong vững mạnh."
      },
      { type: 'text', content: "Thông qua Cương lĩnh chính trị đầu tiên: 'Tư sản dân quyền cách mạng và thổ địa cách mạng để đi tới xã hội cộng sản'." },
      { 
        type: 'image', 
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpHoM2SvCyl-I0XMxJyEt2Cenwk6JkOElr1g&s', 
        caption: "Tranh vẽ Hội nghị thành lập Đảng",
        narrative: "Bức tranh tái hiện Hội nghị thành lập Đảng, giản dị nhưng trang nghiêm, mở đầu kỷ nguyên mới cho dân tộc."
      }
    ]
  },

  // --- GIAI ĐOẠN 4 ---
  {
    id: 7,
    year: "1930 - 1941",
    title: "7. Vượt qua thử thách & Kiên trì con đường",
    description: "Giai đoạn đầy sóng gió, thử thách bản lĩnh chính trị của người chiến sĩ cộng sản.",
    narrative: "Con đường cách mạng chưa bao giờ bằng phẳng. Ngay sau khi thành lập Đảng, Người đã phải đối mặt với muôn vàn thử thách sinh tử.",
    details: [
      { 
        type: 'heading', 
        content: "Vụ án Tống Văn Sơ (1931)",
        narrative: "Thử thách đầu tiên đến từ nhà tù đế quốc."
      },
      { 
        type: 'text', 
        content: "Tháng 6/1931, bị cảnh sát Anh bắt tại Hồng Kông với tên Tống Văn Sơ (Sung Man Cho). Nhờ sự giúp đỡ của luật sư Loseby, Người được thả năm 1932.",
        narrative: "Bị bắt giam ở Hồng Kông với cái tên Tống Văn Sơ, đối mặt với án tử hình. Nhưng bằng trí tuệ tuyệt vời và sự giúp đỡ của luật sư Loseby, Người đã thoát hiểm một cách thần kỳ."
      },
      { 
        type: 'image', 
        src: 'https://lh6.googleusercontent.com/proxy/e82snq_sN7zDISS4842A2dguhCojOD-gnd_Pvm8YRqOj8bh1M5hRv2KEIFxhzW0LNSRxZ7mfNDIWFiP7VwD78qgKobthGxgElSoWE65Q1A', 
        caption: "Vụ án Tống Văn Sơ tại Hồng Kông" 
      },

      { 
        type: 'heading', 
        content: "Những năm tháng ở Liên Xô (1934-1938)",
        narrative: "Thoát khỏi nhà tù đế quốc, Người lại phải đối mặt với nỗi cô đơn chính trị tại Liên Xô."
      },
      { 
        type: 'text', 
        content: "Sống tại Moscow với tên Lin. Theo học Trường Quốc tế Lênin. Đây là giai đoạn khó khăn khi Người bị Quốc tế Cộng sản phê phán là 'người dân tộc chủ nghĩa' và đánh giá thấp.",
        narrative: "Những bất đồng về quan điểm, sự hiểu lầm của Quốc tế Cộng sản khiến Người phải sống những ngày tháng 'ngồi chơi xơi nước'. Nhưng vàng càng luyện càng trong."
      },
      { 
        type: 'text', 
        content: "Dù vậy, Người vẫn kiên định quan điểm: Giải phóng dân tộc là nhiệm vụ hàng đầu của cách mạng thuộc địa.",
        narrative: "Người vẫn kiên định con đường của mình: Độc lập dân tộc phải là ưu tiên hàng đầu. Niềm tin sắt đá ấy chưa bao giờ lung lay." 
      },

      { 
        type: 'heading', 
        content: "Trở về phương Đông",
        narrative: "Năm 1938, gió đã đổi chiều. Người rời Liên Xô trở về phương Đông, chuẩn bị cho ngày về nước."
      },
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
    narrative: "Mùa xuân năm 1941, sau 30 năm xa cách, Bác đã về! Khoảnh khắc Người đặt chân lên cột mốc 108, hôn lên hòn đất Tổ quốc, là giây phút thiêng liêng nhất đời người cách mạng.",
    details: [
      { 
        type: 'heading', 
        content: "Pác Bó & Độc lập (1941-1945)",
        narrative: "Từ hang Pác Bó gió lộng, ngọn lửa cách mạng bùng cháy dữ dội."
      },
      { 
        type: 'text', 
        content: "Ngày 28/1/1941, vượt cột mốc 108 về nước, sống và làm việc tại hang Cốc Bó (Cao Bằng). Đặt tên núi Các Mác, suối Lênin.",
        narrative: "Bác chọn hang Cốc Bó làm nơi ở. Rau cháo qua ngày, sương hàn lạnh buốt, nhưng 'Sáng ra bờ suối, tối vào hang / Cháo bẹ rau măng vẫn sẵn sàng'."
      },
      { type: 'text', content: "Tháng 8/1942, bị chính quyền Tưởng Giới Thạch bắt giam ở Trung Quốc, viết tập thơ 'Nhật ký trong tù' (Ngục trung nhật ký)." },
      { 
        type: 'text', 
        content: "Ngày 2/9/1945, tại Quảng trường Ba Đình, đọc Tuyên ngôn Độc lập, khai sinh nước VNDCCH.", 
        narrative: "Và rồi, ngày 2 tháng 9 năm 1945, tại Quảng trường Ba Đình lịch sử. Giọng Người ấm áp vang vọng non sông: 'Tôi nói đồng bào nghe rõ không?'."
      },
      { 
        type: 'image', 
        src: 'https://hdll.vn/FileUpload/Images/images_64.jpg', 
        caption: "Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập",
        narrative: "Hình ảnh vị cha già dân tộc đọc Tuyên ngôn Độc lập, khai sinh ra nước Việt Nam Dân chủ Cộng hòa, chấm dứt ngàn năm phong kiến, trăm năm nô lệ."
      },

      { 
        type: 'heading', 
        content: "Chủ tịch nước & Ngoại giao",
        narrative: "Ở cương vị Chủ tịch nước, Người vẫn giữ lối sống thanh cao, giản dị đến kinh ngạc." 
      },
      { type: 'text', content: "Lãnh đạo kháng chiến chống Pháp với phương châm 'Dĩ bất biến, ứng vạn biến'. Chiến thắng Điện Biên Phủ 1954 chấn động địa cầu." },
      { 
        type: 'text', 
        content: "Từ 1954, sống tại Nhà sàn, từ chối ở Phủ Chủ tịch. Nêu gương đạo đức 'Cần, Kiệm, Liêm, Chính'.",
        narrative: "Người từ chối ở Phủ Chủ tịch nguy nga, chọn về ở ngôi nhà sàn đơn sơ, làm bạn với ao cá, vườn cây. Một tấm gương đạo đức Cần Kiệm Liêm Chính vĩ đại." 
      },

      { 
        type: 'heading', 
        content: "Di sản cuối cùng",
        narrative: "Trước lúc đi xa, Người để lại muôn vàn tình thân yêu." 
      },
      { 
        type: 'text', 
        content: "Từ 1965, bắt đầu viết Di chúc. Ngày 2/9/1969, Người qua đời, hưởng thọ 79 tuổi. Di chúc để lại muôn vàn tình thân yêu cho toàn dân, toàn Đảng.",
        narrative: "Ngày 2/9/1969, trái tim lớn ngừng đập. Cả dân tộc khóc thương tiễn biệt Người. Di chúc Bác để lại là lời dặn dò ân cần, là kim chỉ nam cho thế hệ mai sau."
      }
    ]
  },

  // --- 9. Giá trị CMVN ---
  {
    id: 9,
    year: "Giá trị 1",
    title: "9. Giá trị đối với CM Việt Nam",
    description: "Tài sản tinh thần vô giá, kim chỉ nam cho mọi hành động của Đảng và dân tộc.",
    narrative: "Chủ tịch Hồ Chí Minh đã đi xa, nhưng tư tưởng của Người vẫn sống mãi, soi đường cho chúng ta đi.",
    details: [
      { 
        type: 'heading', 
        content: "Ngọn đuốc soi đường",
        narrative: "Đối với cách mạng Việt Nam, tư tưởng Hồ Chí Minh là ngọn đuốc thiêng liêng."
      },
      { type: 'text', content: "Tư tưởng Hồ Chí Minh đưa cách mạng Việt Nam đi từ thắng lợi này đến thắng lợi khác (Cách mạng Tháng Tám, chiến thắng hai đế quốc to, thống nhất đất nước)." },
      { 
        type: 'image', 
        src: 'https://dienbientv.vn/dataimages/202204/original/images3144530_1.jpg', 
        caption: "Niềm vui chiến thắng ngày thống nhất đất nước",
        narrative: "Nhờ ánh sáng ấy, chúng ta đã đánh thắng hai đế quốc to, thống nhất non sông, đưa cả nước đi lên chủ nghĩa xã hội."
      },
      { 
        type: 'heading', 
        content: "Lấy dân làm gốc" 
      },
      { 
        type: 'text', 
        content: "Tư tưởng 'Nước lấy dân làm gốc', 'Gốc có vững cây mới bền'. Xây dựng nhà nước của dân, do dân, vì dân.",
        narrative: "Bài học lớn nhất Người để lại là bài học 'Lấy dân làm gốc'. Gốc có vững cây mới bền. Xây lầu thắng lợi trên nền nhân dân."
      }
    ]
  },
  // --- 10. Giá trị Nhân loại ---
  {
    id: 10,
    year: "Giá trị 2",
    title: "10. Giá trị đối với Nhân loại",
    description: "Đóng góp to lớn vào sự nghiệp đấu tranh vì hòa bình, độc lập dân tộc, dân chủ và tiến bộ xã hội.",
    narrative: "Không chỉ là của Việt Nam, Hồ Chí Minh còn là người bạn lớn của nhân dân lao động thế giới.",
    details: [
      { 
        type: 'heading', 
        content: "Anh hùng giải phóng dân tộc",
        narrative: "Thế giới tôn vinh Người là Anh hùng giải phóng dân tộc, Nhà văn hóa kiệt xuất."
      },
      { type: 'text', content: "Năm 1987, UNESCO vinh danh Hồ Chí Minh là 'Anh hùng giải phóng dân tộc và Nhà văn hóa kiệt xuất của Việt Nam'." },
      { 
        type: 'text', 
        content: "Người đã chứng minh chân lý: 'Không có gì quý hơn độc lập, tự do'.",
        narrative: "Người đã chứng minh một chân lý bất hủ: 'Không có gì quý hơn độc lập, tự do'. Chân lý ấy đã, đang và sẽ tiếp tục cổ vũ các dân tộc bị áp bức vùng lên đấu tranh làm chủ vận mệnh của mình."
      },
      { 
        type: 'image', 
        src: 'https://cdn.nhandan.vn/images/1ef398c4e2fb4bf07980a2ded785b3ef1eea1c7bcc924892efcb6f50ccf84c0a488afa73adea295e10f3f7c96f49a2a663a899dc0d598a8828a44264337440e8/152-6082.jpg', 
        caption: "Nghị quyết UNESCO vinh danh Chủ tịch Hồ Chí Minh (1987)",
        narrative: "Hồ Chí Minh - Một cái tên, một huyền thoại, một niềm tin tất thắng. Xin đời đời nhớ ơn Chủ tịch Hồ Chí Minh vĩ đại!"
      }
    ]
  }
];