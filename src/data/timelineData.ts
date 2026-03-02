
// Định nghĩa kiểu dữ liệu cho nhân vật lịch sử
export type FigureData = {
  name: string;
  role: string;
  image: string;
  info: string;
};

// Định nghĩa kiểu dữ liệu cho nội dung chi tiết
export type DetailItem = {
  type: 'text' | 'image' | 'heading' | 'quote' | 'video' | 'link' | 'figures';
  content?: string;
  src?: string;
  caption?: string;
  narrative?: string;
  figures?: FigureData[];
};

export type TimelineItemType = {
  id: number;
  year: string;
  title: string;
  description: string;
  narrative: string;
  details: DetailItem[];
};

export const timelineData: TimelineItemType[] = [
  // --- 1. Bối cảnh (không có nhân vật) ---
  {
    id: 1,
    year: "1945 - 1950",
    title: "1. Bối cảnh Địa chính trị và Tình thế Lịch sử",
    description: "Giai đoạn 1945 - 1950 là thời kỳ quyết định đến sự sống còn của nước Việt Nam mới thành lập.",
    narrative: "Kính thưa quý vị, chúng ta đang bước vào giai đoạn 1945 - 1950, thời kỳ quyết định đến sự sống còn của nước Việt Nam mới thành lập và cả lịch sử dân tộc trong thế kỷ 20.",
    details: [
      {
        type: 'heading',
        content: "Thành quả Cách mạng Tháng Tám",
        narrative: "Sau Cách mạng Tháng Tám 1945, nhà nước công nông đầu tiên ở Đông Nam Á đã ra đời, giáng một đòn mạnh vào hệ thống thuộc địa của đế quốc."
      },
      {
        type: 'text',
        content: "Sau Cách mạng Tháng Tám 1945, nhà nước công nông đầu tiên ở Đông Nam Á ra đời, giáng một đòn mạnh vào hệ thống thuộc địa của đế quốc.",
        narrative: "Đây là thành quả vĩ đại, mở ra kỷ nguyên mới cho dân tộc Việt Nam - kỷ nguyên độc lập, tự do."
      },
      {
        type: 'heading',
        content: "Thách thức và nguy cơ",
        narrative: "Tuy nhiên, nền độc lập non trẻ lập tức phải đối mặt với vô vàn khó khăn nguy hiểm."
      },
      {
        type: 'text',
        content: "Nền độc lập non trẻ lập tức phải đối mặt với vô vàn khó khăn nguy hiểm. Chiến tranh Lạnh nhanh chóng lan đến Đông Dương sau Thế chiến thứ hai, biến nơi đây thành điểm nóng và chiến trường cạnh tranh gay gắt nhất thế giới.",
        narrative: "Chiến tranh Lạnh nhanh chóng lan đến Đông Dương, biến nơi đây thành điểm nóng và chiến trường cạnh tranh gay gắt nhất thế giới. Thù trong giặc ngoài bủa vây, cùng sự hoành hành khốc liệt của nạn đói và nạn dốt."
      },
      {
        type: 'quote',
        content: "Nước Việt Nam Dân chủ Cộng hòa đối mặt với tình thế 'ngàn cân treo sợi tóc' do thù trong giặc ngoài bủa vây.",
        narrative: "Tình thế đất nước lúc bấy giờ thật sự như 'ngàn cân treo sợi tóc'. Nhưng chính trong gian nguy ấy, bản lĩnh và trí tuệ của Đảng ta đã tỏa sáng rực rỡ."
      },
      {
        type: 'image',
        src: 'https://file3.qdnd.vn/data/images/0/2022/09/01/tvkimgiang/bac%20ho%20doc%20tuyen%20ngon.jpg',
        caption: "Chủ tịch Hồ Chí Minh tại Quảng trường Ba Đình, 2/9/1945",
        narrative: "Hình ảnh lịch sử tại Quảng trường Ba Đình ngày 2 tháng 9 năm 1945, khi Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập khai sinh nước Việt Nam Dân chủ Cộng hòa."
      }
    ]
  },

  // --- 2. Xây dựng và bảo vệ chính quyền (1945-1946) + Nhân vật ---
  {
    id: 2,
    year: "1945 - 1946",
    title: "2. Xây dựng và bảo vệ chính quyền cách mạng",
    description: "Các sự kiện và nhân vật tiêu biểu trong giai đoạn xây dựng, bảo vệ chính quyền non trẻ (1945-1946).",
    narrative: "Sau Cách mạng Tháng Tám, nước Việt Nam Dân chủ Cộng hòa đối mặt với tình thế 'ngàn cân treo sợi tóc' do thù trong giặc ngoài bủa vây, cùng sự hoành hành khốc liệt của nạn đói và nạn dốt. Hãy cùng nhìn lại các sự kiện và nhân vật tiêu biểu.",
    details: [
      {
        type: 'image',
        src: 'https://images.hcmcpv.org.vn//Uploads/Image/1709202114292DCD/17-09-2021Baucu.jpg',
        caption: "Xây dựng và bảo vệ chính quyền cách mạng (1945-1946)"
      },
      // --- Sự kiện ---
      {
        type: 'heading',
        content: "2/9/1945 - Khai sinh nước Việt Nam Dân chủ Cộng hòa",
        narrative: "Ngày 2 tháng 9 năm 1945, tại Quảng trường Ba Đình lịch sử, Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập."
      },
      {
        type: 'text',
        content: "Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình, chính thức xóa bỏ triệt để hệ thống luật pháp của chế độ thực dân, phong kiến. Văn kiện pháp lý quốc tế vô giá này phủ nhận hoàn toàn tính chính danh của Pháp và Nhật tại Đông Dương, đặt nền móng cho thể chế dân chủ cộng hòa.",
        narrative: "Đây là văn kiện pháp lý quốc tế vô giá, phủ nhận hoàn toàn tính chính danh của Pháp và Nhật tại Đông Dương, đặt nền móng vững chắc cho thể chế dân chủ cộng hòa."
      },
      {
        type: 'text',
        content: "Cách mạng tháng Tám thành công, ngày 2/9/1945 tại Quảng trường Ba Đình (Hà Nội), Chủ tịch Hồ Chí Minh đọc Bản Tuyên Ngôn Độc lập khai sinh ra nước Việt Nam Dân chủ Cộng Hòa, chấm dứt gần 100 năm ách đô hộ của Thực dân Pháp tại Việt Nam.",
        narrative: "Đánh dấu chấm dứt gần 100 năm ách đô hộ của Thực dân Pháp."
      },
      {
        type: 'image',
        src: 'https://photo-cms-vovworld.zadn.vn/w500/uploaded/vovworld/jcqpivou/2021_08_31/4_ecat.jpg',
        caption: "Quang cảnh Lễ Độc lập tại Quảng trường Ba Đình ngày 2/9/1945"
      },
      {
        type: 'image',
        src: 'https://th.bing.com/th/id/R.b85062a24004370d22945ab7f9908505?rik=JzLthFrCjlN81Q&riu=http%3a%2f%2fredsvn.net%2fwp-content%2fuploads%2f2019%2f09%2f01-14248488642466.jpg&ehk=6Q2wthgEeEP77r1BLVzwZublXksl%2bYl3sMbpHK%2fT5vI%3d&risl=&pid=ImgRaw&r=0',
        caption: "Lễ mừng Độc Lập tại Sài Gòn chiều ngày 2/9/1945"
      },
      {
        type: 'heading',
        content: "23/9/1945 - Pháp xâm lược lần thứ hai"
      },
      {
        type: 'text',
        content: "Dựa vào sự dung túng và thả vũ khí của quân đội Anh (lực lượng vào miền Nam giải giáp quân Nhật), thực dân Pháp nổ súng đánh chiếm trụ sở Ủy ban Hành chính Kháng chiến Nam Bộ tại Sài Gòn - Chợ Lớn. Nam Bộ buộc phải đi tiên phong trong kháng chiến vũ trang, trở thành 'Thành đồng Tổ quốc'.",
        narrative: "Nam Bộ buộc phải đi tiên phong trong kháng chiến vũ trang, trở thành 'Thành đồng Tổ quốc', mở đầu cuộc kháng chiến trường kỳ của dân tộc."
      },
      {
        type: 'text',
        content: "Chính quyền thực dân Pháp âm mưu tái lập sự thống trị ở Việt Nam. Đô đốc Thierry d’Argenlieu được bổ nhiệm làm Cao ủy Đông Dương và tướng Philippe Leclerc được bổ nhiệm làm Tổng tư lệnh lực lượng viễn chinh Pháp ở Viễn Đông với chỉ thị “Khôi phục chủ quyền của Pháp trên toàn lãnh thổ Đông Dương”.",
        narrative: "Pháp quyết tâm dập tắt nền độc lập non trẻ của nước ta."
      },
      {
        type: 'image',
        src: 'https://media.gettyimages.com/id/106501494/photo/thierry-dargenlieu-and-general-leclerc-around-1945.jpg?s=1024x1024&w=gi&k=20&c=cXWfNjxgbigcAvH4c0PnIKyffHj4ihEnfcsFCdIWSkY=',
        caption: "Đô đốc Thierry d’Argenlieu và tướng Philippe Leclerc"
      },
      {
        type: 'image',
        src: 'https://hcmc-museum.edu.vn/wp-content/uploads/2023/09/TLKHP-1322-90.jpg',
        caption: "Thanh niên Tiền phong Nam Bộ nô nức tham gia kháng chiến"
      },
      {
        type: 'heading',
        content: "25/11/1945 - Chỉ thị 'Kháng chiến kiến quốc'"
      },
      {
        type: 'text',
        content: "Trung ương Đảng ban hành cương lĩnh hành động chiến lược, xác định kẻ thù chính là thực dân Pháp. Văn kiện đề ra 4 nhiệm vụ sinh tử: củng cố chính quyền, chống Pháp, bài trừ nội phản, và cải thiện đời sống nhân dân. Sách lược vạch ra là ngoại giao mềm dẻo với quân Tưởng ở miền Bắc để tập trung hỏa lực vào miền Nam.",
        narrative: "Chỉ thị đề ra 4 nhiệm vụ sinh tử và sách lược ngoại giao mềm dẻo: hòa hoãn với quân Tưởng ở miền Bắc để tập trung lực lượng chống Pháp ở miền Nam."
      },
      {
        type: 'heading',
        content: "6/1/1946 - Tổng tuyển cử đầu tiên"
      },
      {
        type: 'text',
        content: "Bất chấp sự chống phá bằng vũ lực của Việt Quốc, Việt Cách ở miền Bắc và bom đạn Pháp ở miền Nam, cuộc bầu cử Quốc hội của nước Việt Nam thống nhất đạt tỷ lệ đi bầu cực cao. Đây là cuộc cách mạng dân quyền vĩ đại, xác lập tính chính danh hợp pháp trên trường quốc tế.",
        narrative: "Đây là cuộc cách mạng dân quyền vĩ đại, xác lập tính chính danh hợp pháp cho nước Việt Nam Dân chủ Cộng hòa trên trường quốc tế."
      },
      {
        type: 'heading',
        content: "2/3/1946 - Thành lập Chính phủ chính thức"
      },
      {
        type: 'text',
        content: "Quốc hội khóa I họp phiên đầu tiên, bầu Ban Thường trực và phê chuẩn Chính phủ Liên hiệp kháng chiến. Việc đưa nhiều nhân sĩ ngoài Đảng tham gia bộ máy thể hiện tư tưởng đại đoàn kết dân tộc và vô hiệu hóa luận điệu 'chính phủ phe phái'.",
        narrative: "Việc đưa nhiều nhân sĩ, trí thức ngoài Đảng tham gia bộ máy nhà nước thể hiện tư tưởng đại đoàn kết dân tộc vĩ đại."
      },
      {
        type: 'text',
        content: "Ngày 2/3/1946, Quốc hội khóa I nước Việt Nam Dân chủ Cộng Hòa họp kì thứ nhất tại nhà Hát Lớn Hà Nội, Chính Phủ Liên Hiệp kháng chiến do Chủ tịch Hồ Chí Minh đứng đầu đã ra mắt Quốc Hội.",
        narrative: "Chính phủ Liên hiệp kháng chiến chính thức ra mắt, tập hợp sức mạnh của toàn dân tộc."
      },
      {
        type: 'image',
        src: 'https://th.bing.com/th/id/R.4979d3d80ec72e3901b0e3fb6251a772?rik=C1XNX4IsMmH8SQ&pid=ImgRaw&r=0',
        caption: "Chính phủ Liên hiệp kháng chiến do Chủ tịch Hồ Chí Minh đứng đầu ra mắt Quốc hội khóa I"
      },
      {
        type: 'heading',
        content: "6/3/1946 - Hiệp định sơ bộ Việt - Pháp"
      },
      {
        type: 'text',
        content: "Tránh viễn cảnh đối đầu cả 2 kẻ thù khi Pháp và Tưởng ký Hiệp ước Hoa - Pháp (tháng 2/1946), ta dùng sách lược 'hòa để tiến'. Ta cho phép quân Pháp vào miền Bắc để mượn tay đuổi 20 vạn quân Tưởng cùng tay sai; đổi lại, Pháp công nhận Việt Nam Dân chủ Cộng hòa là một quốc gia tự do.",
        narrative: "Sách lược 'hòa để tiến' thể hiện trí tuệ ngoại giao sắc sảo: mượn tay Pháp đuổi 20 vạn quân Tưởng, đổi lại Pháp phải công nhận Việt Nam là quốc gia tự do."
      },
      {
        type: 'heading',
        content: "14/9/1946 - Tạm ước 14-9"
      },
      {
        type: 'text',
        content: "Hội nghị Fontainebleau tại Pháp bế tắc, nguy cơ chiến tranh cận kề. Chủ tịch Hồ Chí Minh ký Tạm ước, nhượng bộ thêm cho Pháp một số quyền lợi kinh tế, văn hóa nhằm kéo dài thời gian hòa bình, tranh thủ vài tháng quý báu để ráo riết chuẩn bị lực lượng.",
        narrative: "Chủ tịch Hồ Chí Minh ký Tạm ước trong tình thế cận kề chiến tranh, nhượng bộ có tính toán để tranh thủ thời gian chuẩn bị lực lượng."
      },
      {
        type: 'heading',
        content: "3/11/1946 - Thành lập Chính phủ Liên hiệp Quốc dân"
      },
      {
        type: 'text',
        content: "Ngày 3/11/1946, tại kỳ họp thứ hai Quốc hội khóa I, Chính phủ Liên hiệp Quốc dân do Chủ tịch Hồ Chí Minh đứng đầu ra mắt đồng bào.",
        narrative: "Một chính phủ phản ánh sức mạnh đại đoàn kết toàn dân tộc nhằm đối phó với những thử thách mới."
      },
      {
        type: 'image',
        src: 'https://baohagiang.vn/file/dataimages/202111/original/images1498088_106d5225644t27412l0.jpg',
        caption: "Chính phủ Liên hiệp Quốc dân ra mắt đồng bào (3/11/1946)"
      },
      {
        type: 'heading',
        content: "9/11/1946 - Thông qua Hiến pháp đầu tiên"
      },
      {
        type: 'text',
        content: "Bản Hiến pháp đặt nền móng pháp lý vững chắc cho thể chế dân chủ cộng hòa, quy định quyền tự do cơ bản của công dân. Khẳng định với thế giới Việt Nam là quốc gia có chủ quyền, có hiến pháp và đầy đủ năng lực tự quản.",
        narrative: "Hiến pháp 1946 khẳng định với thế giới: Việt Nam là quốc gia có chủ quyền, có hiến pháp và đầy đủ năng lực tự quản."
      },
      // --- Nhân vật trọng yếu giai đoạn 1945-1946 ---
      {
        type: 'figures',
        content: "Nhân vật lịch sử trọng yếu",
        narrative: "Đằng sau mỗi quyết sách lịch sử là những con người kiệt xuất, với trí tuệ và bản lĩnh phi thường. Hãy bấm vào từng nhân vật để tìm hiểu!",
        figures: [
          {
            name: "Hồ Chí Minh",
            role: "Chủ tịch Chính phủ",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Ho_Chi_Minh_-_1946_Portrait.jpg/960px-Ho_Chi_Minh_-_1946_Portrait.jpg",
            info: "Kiến trúc sư tối cao của các sách lược ngoại giao 'dĩ bất biến ứng vạn biến'. Người trực tiếp ký Hiệp định Sơ bộ và Tạm ước, đồng thời quy tụ mạnh mẽ tinh thần đại đoàn kết toàn dân tộc."
          },
          {
            name: "Huỳnh Thúc Kháng",
            role: "Quyền Chủ tịch Chính phủ",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Huynh_Thuc_Khang.jpg/500px-Huynh_Thuc_Khang.jpg",
            info: "Đảm nhiệm trọng trách khi Hồ Chủ tịch sang thăm Pháp (tháng 5 - 10/1946). Dù không phải đảng viên, cụ điều hành đất nước cương quyết, chỉ đạo dẹp loạn nội phản và giữ mối quan hệ hòa hoãn khôn khéo với quân Pháp ở miền Bắc."
          },
          {
            name: "Nguyễn Văn Tố",
            role: "Chủ tịch Quốc hội khóa I",
            image: "https://upload.wikimedia.org/wikipedia/commons/7/75/Mr._Nguyen_Van_To.jpg",
            info: "Trên cương vị Bộ trưởng Bộ Cứu tế xã hội, học giả uyên bác này đã phát động phong trào 'Tấc đất tấc vàng' đánh lùi giặc đói và lập Nha Bình dân học vụ diệt giặc dốt. Cụ anh dũng hy sinh năm 1947 tại Bắc Kạn."
          },
          {
            name: "Phạm Văn Đồng",
            role: "Trưởng phái đoàn Fontainebleau",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Ph%E1%BA%A1m_V%C4%83n_%C4%90%E1%BB%93ng_1972.jpg/500px-Ph%E1%BA%A1m_V%C4%83n_%C4%90%E1%BB%93ng_1972.jpg",
            info: "Với tư duy ngoại giao nhạy bén, đồng chí kiên quyết bảo vệ sự toàn vẹn lãnh thổ (đặc biệt là vấn đề Nam Bộ) và đòi hỏi Pháp phải công nhận nền độc lập hoàn toàn của Việt Nam."
          }
        ]
      }
    ]
  },

  // --- 3. Đường lối kháng chiến toàn quốc (1946-1950) + Nhân vật ---
  {
    id: 3,
    year: "1946 - 1950",
    title: "3. Đường lối kháng chiến toàn quốc",
    description: "Khi Pháp liên tục bội ước, Đảng chủ động phát động cuộc kháng chiến toàn dân, toàn diện, trường kỳ và tự lực cánh sinh.",
    narrative: "Khi thực dân Pháp liên tục bội ước, lấn tới và tấn công ở nhiều nơi, Đảng đã chủ động phát động cuộc kháng chiến toàn dân, toàn diện, trường kỳ và tự lực cánh sinh.",
    details: [
      {
        type: 'image',
        src: 'https://cdn.nbtv.vn/upload/news/12_2023/1_14304619122023.jpg',
        caption: "Toàn quốc kháng chiến (1946-1950)"
      },
      // --- Sự kiện ---
      {
        type: 'heading',
        content: "Cuối năm 1946 - Đỉnh điểm của những hành động khiêu khích",
        narrative: "Trong khi ta hết sức nhượng bộ, thực dân Pháp ngày càng lấn tới."
      },
      {
        type: 'text',
        content: "Thực dân Pháp không ngừng gây hấn, khiêu khích chính quyền Việt Nam, tăng cường đánh phá Nam Bộ, Nam Trung Bộ, lập chính phủ “Nam kỳ tự trị” (1/6/1946), đưa ra tàu chiến đánh chiếm thành phố Hải Phòng ngày 23/11/1946, mở rộng chiến tranh xâm lược ở Bắc Bộ.",
        narrative: "Những hành động ngang ngược này đã đẩy dân tộc ta đến giới hạn chịu đựng cuối cùng."
      },
      {
        type: 'image',
        src: 'https://tse3.mm.bing.net/th/id/OIP.E4EybAtoNCP4DfI7MBtdDwHaE4?rs=1&pid=ImgDetMain&o=7&rm=3',
        caption: "Tàu chiến Pháp đánh chiếm thành phố Hải Phòng (23/11/1946)"
      },
      {
        type: 'heading',
        content: "19/12/1946 - Lời kêu gọi toàn quốc kháng chiến",
        narrative: "Đêm 19 tháng 12 năm 1946, sau tối hậu thư của Pháp đòi tước vũ khí tự vệ thủ đô, Lời kêu gọi toàn quốc kháng chiến vang dội."
      },
      {
        type: 'text',
        content: "Sau tối hậu thư đòi tước vũ khí tự vệ thủ đô của Pháp (18/12), đêm 19/12, Lời kêu gọi vang dội: 'Chúng ta thà hy sinh tất cả...'. Quyết định này kịp thời chuyển toàn bộ hệ thống hành chính, xã hội sang trạng thái thời chiến, triển khai thế trận chiến tranh nhân dân.",
        narrative: "'Chúng ta thà hy sinh tất cả chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ!' - Lời hiệu triệu thiêng liêng ấy đã truyền lửa cho cả dân tộc."
      },
      {
        type: 'quote',
        content: "Chúng ta thà hy sinh tất cả chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ!",
        narrative: "Câu nói bất hủ này đã trở thành biểu tượng cho ý chí kiên cường bất khuất của dân tộc Việt Nam."
      },
      {
        type: 'heading',
        content: "Thu Đông 1947 - Chiến thắng Việt Bắc"
      },
      {
        type: 'text',
        content: "Pháp mở kế hoạch Léa dùng lính dù, không quân và bộ binh cơ giới tấn công gọng kìm hòng tiêu diệt đầu não kháng chiến của ta. Quân ta bình tĩnh phân tán lực lượng, đánh du kích và phục kích (đèo Bông Lau, sông Khe Lau), làm phá sản hoàn toàn chiến lược 'đánh nhanh thắng nhanh', buộc Pháp chuyển sang 'đánh kéo dài'.",
        narrative: "Chiến thắng Việt Bắc Thu Đông 1947 đã làm phá sản hoàn toàn chiến lược 'đánh nhanh thắng nhanh' của Pháp, buộc chúng phải chuyển sang 'đánh kéo dài'."
      },
      {
        type: 'heading',
        content: "11/6/1948 - Lời kêu gọi Thi đua ái quốc"
      },
      {
        type: 'text',
        content: "Sáng kiến chính trị kiệt xuất của Hồ Chủ tịch nhằm đối phó chiến lược 'đánh kéo dài'. Phong trào khơi dậy sức mạnh quần chúng trên mọi mặt trận (quân sự, kinh tế, chính trị, văn hóa) để kiến tạo hậu phương vững chắc và xây dựng lực lượng vũ trang ba thứ quân.",
        narrative: "Phong trào Thi đua ái quốc khơi dậy sức mạnh quần chúng trên mọi mặt trận, kiến tạo hậu phương vững chắc cho cuộc kháng chiến trường kỳ."
      },
      {
        type: 'heading',
        content: "Thu Đông 1950 - Chiến dịch Biên giới"
      },
      {
        type: 'text',
        content: "Năm 1949, Cách mạng Trung Quốc thành công, Trung Quốc và Liên Xô công nhận ngoại giao nước ta. Pháp lo sợ, thực hiện Kế hoạch Rơ-ve phong tỏa biên giới Việt - Trung. Ta chủ động mở chiến dịch với phương châm 'đánh điểm, diệt viện' (đột phá đồn Đông Khê). Thắng lợi này đập tan vòng vây, khai thông biên giới nhận viện trợ, đánh dấu bước chuyển hướng chiến lược từ phòng ngự sang chủ động tiến công.",
        narrative: "Chiến dịch Biên giới Thu Đông 1950 đánh dấu bước chuyển hướng chiến lược vĩ đại: từ phòng ngự sang chủ động tiến công, khai thông biên giới nhận viện trợ quốc tế."
      },
      {
        type: 'text',
        content: "Lực lượng viễn chinh Pháp bị thất bại nặng nề trong chiến dịch Biên Giới (tháng 9/1950) 8.300 lính Pháp trong đó nhiều sĩ quan chỉ huy chết và bị bắt làm tù binh.",
        narrative: "Đây là thất bại cay đắng và nặng nề nhất của Pháp kể từ đầu cuộc chiến."
      },
      {
        type: 'image',
        src: 'https://www.watson.ch/imgdb/1901/Qx,A,0,0,1300,874,541,364,216,145/5760894603343937',
        caption: "Lực lượng viễn chinh Pháp bị bắt làm tù binh trong Chiến dịch Biên Giới"
      },
      // --- Nhân vật trọng yếu giai đoạn 1946-1950 ---
      {
        type: 'figures',
        content: "Nhân vật lịch sử trọng yếu",
        narrative: "Trong giai đoạn kháng chiến toàn quốc đầy cam go, nhiều nhân vật lịch sử đã có những đóng góp to lớn.",
        figures: [
          {
            name: "Trường Chinh",
            role: "Tổng Bí thư",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/TruongChinh1955_%28cropped%29.jpg/500px-TruongChinh1955_%28cropped%29.jpg",
            info: "Tác giả của tác phẩm lý luận kinh điển 'Kháng chiến nhất định thắng lợi' (1947). Tác phẩm đúc kết đường lối quân sự thành 4 trụ cột cốt lõi: kháng chiến toàn dân, toàn diện, trường kỳ và tự lực cánh sinh."
          },
          {
            name: "Võ Nguyên Giáp",
            role: "Tổng Chỉ huy Quân đội",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Mr._Vo_Nguyen_Giap.jpg/500px-Mr._Vo_Nguyen_Giap.jpg",
            info: "Đại tướng đầu tiên của QĐNDVN (đầu năm 1948). Trực tiếp vạch kế hoạch bẻ gãy gọng kìm địch trong chiến dịch Việt Bắc 1947. Năm 1950, chỉ huy chiến dịch Biên giới áp dụng xuất sắc nghệ thuật 'đánh điểm, diệt viện'."
          }
        ]
      }
    ]
  },

  // --- 4. Đại hội II & Đẩy mạnh kháng chiến (1951-1953) + Nhân vật ---
  {
    id: 4,
    year: "1951 - 1953",
    title: "4. Đại hội II & Đẩy mạnh kháng chiến",
    description: "Đảng ra hoạt động công khai, đẩy mạnh kháng chiến toàn diện và thực hiện cải cách ruộng đất.",
    narrative: "Bước sang giai đoạn 1951 - 1953, Đảng ta đã trưởng thành vượt bậc, chủ động tấn công và phát triển thực lực cách mạng về mọi mặt.",
    details: [
      {
        type: 'image',
        src: 'https://images.baodantoc.vn/uploads/2021/Th%C3%A1ng%201/%C4%90%E1%BA%A1i%20h%E1%BB%99i%20%C4%90%E1%BA%A3ng/2/2.jpeg',
        caption: "Đại hội II và đẩy mạnh kháng chiến (1951-1953)"
      },
      {
        type: 'heading',
        content: "Đầu năm 1951 - Chiến trường Bắc Bộ",
        narrative: "Cuộc chiến tranh ở Bắc Bộ diễn ra ngày một khốc liệt với sự can thiệp của viện trợ từ nước ngoài."
      },
      {
        type: 'text',
        content: "Tháng 1/1951, lính “lê dương” của quân viễn chinh Pháp liên tục đi càn ở mặt trận Vĩnh Yên (Bắc Bộ) với vũ khí do Mỹ viện trợ, hòng tìm lại lợi thế trên chiến trường.",
        narrative: "Pháp gia tăng các cuộc hành quân càn quét hòng lấy lại thế chủ động."
      },
      {
        type: 'image',
        src: 'https://divulgadoresdelmisterio.net/wp-content/uploads/2022/07/Batalla-de-Vinh-Yen.jpg',
        caption: "Lính 'lê dương' đi càn ở mặt trận Vĩnh Yên (1/1951)"
      },
      {
        type: 'heading',
        content: "Đại hội đại biểu toàn quốc lần thứ II (2/1951)",
        narrative: "Đây là sự kiện chính trị bản lề, đánh dấu bước trưởng thành vượt bậc của Đảng trong lãnh đạo kháng chiến."
      },
      {
        type: 'text',
        content: "Đại hội diễn ra từ ngày 11 đến 19/2/1951 tại xã Vinh Quang (Chiêm Hóa, Tuyên Quang). Đại hội quyết định Đảng ra hoạt động công khai và lấy tên là Đảng Lao động Việt Nam. Đồng chí Hồ Chí Minh được bầu làm Chủ tịch Đảng, đồng chí Trường Chinh được bầu lại làm Tổng Bí thư.",
        narrative: "Đại hội quyết định Đảng ra hoạt động công khai với tên gọi Đảng Lao động Việt Nam, đánh dấu bước trưởng thành quan trọng."
      },
      {
        type: 'text',
        content: "Chính cương xác định: Tính chất xã hội là dân chủ nhân dân; nhiệm vụ trọng tâm gồm đánh đuổi đế quốc, xóa bỏ tàn tích phong kiến ('người cày có ruộng'), phát triển chế độ dân chủ nhân dân; động lực cách mạng gồm công nhân, nông dân, tiểu tư sản, tư sản dân tộc và thân sĩ yêu nước.",
        narrative: "Chính cương của Đảng đã xác định rõ tính chất xã hội, nhiệm vụ trọng tâm và động lực cách mạng, làm kim chỉ nam cho cuộc kháng chiến."
      },
      {
        type: 'heading',
        content: "Đẩy mạnh kháng chiến toàn diện"
      },
      {
        type: 'text',
        content: "Về quân sự: Đảng chủ trương mở các chiến dịch quy mô tương đối lớn (Hòa Bình, Tây Bắc, Thượng Lào) nhằm tiêu diệt sinh lực địch, giải phóng đất đai và phát triển chiến tranh du kích.",
        narrative: "Trên mặt trận quân sự, ta liên tiếp mở các chiến dịch lớn tại Hòa Bình, Tây Bắc, Thượng Lào, tiêu diệt sinh lực địch."
      },
      {
        type: 'heading',
        content: "Chiến dịch Hòa Bình (1952)"
      },
      {
        type: 'text',
        content: "Năm 1952, ta mở chiến dịch tại Hòa Bình nhằm tiêu diệt sinh lực địch, đánh bại âm mưu chia cắt và bình định của thực dân Pháp.",
        narrative: "Chiến dịch Hòa Bình 1952 đã giáng một đòn mạnh mẽ vào ý đồ chiến lược của địch."
      },
      {
        type: 'video',
        src: 'https://youtu.be/l5LDo4V0P50?si=k3d4dsbPhjo6soPX',
        caption: "Tư liệu về Chiến dịch Hòa Bình 1952"
      },
      {
        type: 'text',
        content: "Về hậu phương và kinh tế: Đẩy mạnh phong trào tăng gia sản xuất, thực hành tiết kiệm, tự cấp tự túc lương thực, đảm bảo quân trang, quân dụng cho bộ đội.",
        narrative: "Hậu phương được xây dựng vững chắc với phong trào tăng gia sản xuất, tự cấp tự túc lương thực phục vụ tiền tuyến."
      },
      {
        type: 'heading',
        content: "Cải cách ruộng đất (1953)"
      },
      {
        type: 'text',
        content: "Nhằm bồi dưỡng sức dân và hiện thực hóa mục tiêu 'người cày có ruộng', tháng 11/1953, Hội nghị Trung ương Đảng lần thứ 5 thông qua Cương lĩnh ruộng đất. Ngày 19/12/1953, Chủ tịch Hồ Chí Minh ký ban hành Sắc lệnh Luật cải cách ruộng đất. Hàng ngàn hécta ruộng đất, nông cụ, trâu bò đã được chia cho nông dân nghèo.",
        narrative: "Cải cách ruộng đất đã nức lòng bộ đội nơi tiền tuyến và huy động sức người, sức của to lớn cho Chiến dịch Điện Biên Phủ sắp tới."
      },
      // --- Nhân vật trọng yếu giai đoạn 1951-1953 ---
      {
        type: 'figures',
        content: "Nhân vật lịch sử trọng yếu",
        narrative: "Giai đoạn này ghi dấu vai trò lãnh đạo của nhiều nhân vật kiệt xuất trong Đại hội II.",
        figures: [
          {
            name: "Hồ Chí Minh",
            role: "Chủ tịch Đảng",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Ho_Chi_Minh_-_1946_Portrait.jpg/960px-Ho_Chi_Minh_-_1946_Portrait.jpg",
            info: "Được bầu làm Chủ tịch Đảng tại Đại hội II. Người trực tiếp ký ban hành Sắc lệnh Luật cải cách ruộng đất (19/12/1953), hiện thực hóa mục tiêu 'người cày có ruộng'."
          },
          {
            name: "Trường Chinh",
            role: "Tổng Bí thư",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/TruongChinh1955_%28cropped%29.jpg/500px-TruongChinh1955_%28cropped%29.jpg",
            info: "Được bầu lại làm Tổng Bí thư tại Đại hội II. Trình bày Báo cáo 'Hoàn thành giải phóng dân tộc, phát triển dân chủ nhân dân, tiến tới chủ nghĩa xã hội', xác định rõ đường lối cách mạng."
          },
          {
            name: "Tôn Đức Thắng",
            role: "Phó Chủ tịch nước",
            image: "https://upload.wikimedia.org/wikipedia/vi/7/73/Tonducthang.jpg",
            info: "Đọc diễn văn khai mạc Đại hội đại biểu toàn quốc lần thứ II, thể hiện sự đoàn kết và quyết tâm của toàn Đảng trong sự nghiệp kháng chiến."
          }
        ]
      }
    ]
  },

  // --- 5. Chiến dịch Điện Biên Phủ (1953-1954) + Nhân vật ---
  {
    id: 5,
    year: "1953 - 1954",
    title: "5. Đỉnh cao quân sự: Chiến dịch Điện Biên Phủ",
    description: "Đòn quyết định đập tan ý chí xâm lược của thực dân Pháp, lừng lẫy năm châu, chấn động địa cầu.",
    narrative: "Đây là đòn quyết định, trận đánh đỉnh cao đập tan ý chí xâm lược của thực dân Pháp, mà tiếng vang của nó lừng lẫy năm châu, chấn động địa cầu.",
    details: [
      {
        type: 'heading',
        content: "Kế hoạch Nava của Pháp",
        narrative: "Tháng 5/1953, tướng H. Navarre vạch ra kế hoạch hòng 'chuyển bại thành thắng' trong 18 tháng."
      },
      {
        type: 'text',
        content: "Tháng 5/1953, tướng Henri Navarre, tổng tham mưu trưởng lục quân khối Bắc Đại Tây Dương, được bổ nhiệm làm tổng chỉ huy quân viễn chinh Pháp ở Đông Dương. “Kế hoạch Navarre” được vạch ra với tham vọng “giành thế chủ động để đánh bại Việt Minh trong vòng 18 tháng”.",
        narrative: "Thực dân Pháp tự hào với cái gọi là Kế hoạch Navarre, nhằm xoay chuyển tình thế cuộc chiến tranh Đông Dương."
      },
      {
        type: 'image',
        src: 'https://ordi.vn/wp-content/uploads/2023/05/T%C6%B0%E1%BB%9Bng-Gilles-%C4%90%E1%BA%A1i-t%C6%B0%E1%BB%9Bng-Navarre-Trung-t%C6%B0%E1%BB%9Bng-Cogny-t%E1%BA%A1i-%C4%90i%E1%BB%87n-Bi%C3%AAn-Ph%E1%BB%A7-ng%C3%A0y-29-11-1953.-Ngu%E1%BB%93n-Gamma-Keystone.jpg',
        caption: "Tướng Navarre và các sĩ quan cao cấp tại Điện Biên Phủ"
      },
      {
        type: 'heading',
        content: "Xây dựng tập đoàn cứ điểm Điện Biên Phủ"
      },
      {
        type: 'text',
        content: "Tháng 11/1953, Navarre xây dựng tập đoàn căn cứ điểm Điện Biên Phủ với ý đồ thu hút và tiêu diệt các lực lượng chủ lực của quân kháng chiến để giành thắng lợi quyết định trên chiến trường Đông Dương.",
        narrative: "Pháp tin rằng Điện Biên Phủ sẽ là 'cỗ máy xay thịt' nghiền nát bộ đội chủ lực của ta."
      },
      {
        type: 'image',
        src: 'https://cdn-i.vtcnews.vn/resize/th/upload/2024/05/04/dien-bien-phu-4-01295081.jpg',
        caption: "Toàn cảnh tập đoàn cứ điểm Điện Biên Phủ"
      },
      {
        type: 'quote',
        content: "Tháng 2/1954 tướng John W.O’Daniel (nguyên tư lệnh quân đội Mỹ ở Thái Bình Dương, chỉ huy Phái bộ cố vấn quân sự Mỹ ở Đông Dương) thăm lực lượng Pháp ở Điện Biên Phủ đã tuyên bố “rất phấn khởi về triển vọng của cuộc chiến”.",
        narrative: "Sự kiêu ngạo của các nhà quân sự phương Tây trước sức mạnh hỏa lực ở Điện Biên Phủ."
      },
      {
        type: 'heading',
        content: "Chủ trương chiến lược của Đảng"
      },
      {
        type: 'text',
        content: "Tháng 9/1953, Bộ Chính trị thông qua chủ trương tác chiến Đông Xuân 1953-1954 nhằm phân tán lực lượng địch. Ngày 6/12/1953, Bộ Chính trị quyết định mở Chiến dịch Điện Biên Phủ, giao Đại tướng Võ Nguyên Giáp làm Tư lệnh kiêm Bí thư Đảng ủy chiến dịch.",
        narrative: "Bộ Chính trị giao trọng trách cho Đại tướng Võ Nguyên Giáp làm Tư lệnh kiêm Bí thư Đảng ủy chiến dịch. Cả nước dồn toàn lực chi viện cho mặt trận."
      },
      {
        type: 'image',
        src: 'https://media.baosonla.org.vn/public/linhlv/2024-04-30-oi/dai-tuong-vo-nguyen-giap-tham,-kiem-tra-dai-doan-cong-phao-351-trong-chien-dich-dien-bien-phu_.jpg',
        caption: "Đại tướng Võ Nguyên Giáp thăm và kiểm tra đại đoàn Công pháo 351."
      },
      {
        type: 'text',
        content: "Cả nước đã dồn toàn lực, huy động hàng vạn ngày công, hàng vạn tấn lương thực, vũ khí chi viện cho mặt trận.",
        narrative: "Hàng vạn dân công với đôi vai trần và những chiếc xe đạp thồ đã vượt đèo, lội suối, đưa hàng vạn tấn lương thực, vũ khí ra tiền tuyến."
      },
      {
        type: 'heading',
        content: "Chiến thắng lịch sử 7/5/1954"
      },
      {
        type: 'text',
        content: "Với phương châm 'đánh chắc, tiến chắc', chiến dịch mở màn ngày 13/3/1954. Sau 56 ngày đêm chiến đấu với 3 đợt tiến công, đúng 17h30 ngày 7/5/1954, bộ đội ta đã đánh chiếm hầm chỉ huy, bắt sống tướng De Castries và toàn bộ Bộ chỉ huy địch, kết thúc thắng lợi rực rỡ.",
        narrative: "56 ngày đêm 'khoét núi, ngủ hầm, mưa dầm, cơm vắt'. Đúng 17h30 ngày 7/5/1954, lá cờ quyết chiến quyết thắng tung bay trên nóc hầm De Castries. Điện Biên Phủ toàn thắng!"
      },
      {
        type: 'quote',
        content: "Chiến thắng Điện Biên Phủ - Lừng lẫy năm châu, chấn động địa cầu!",
        narrative: "Chiến thắng vĩ đại này đã chấm dứt hoàn toàn ách thống trị của thực dân Pháp trên đất nước Việt Nam."
      },
      {
        type: 'image',
        src: 'https://dienbientv.vn/dataimages/201604/original/images1139304_6810aa9d609525dimages941103_media_thumb1382169701.jpg',
        caption: "Chiến thắng Điện Biên Phủ 7/5/1954",
        narrative: "Hình ảnh lá cờ chiến thắng tung bay trên cứ điểm Điện Biên Phủ, biểu tượng cho ý chí bất khuất của dân tộc Việt Nam."
      },
      // --- Nhân vật trọng yếu ---
      {
        type: 'figures',
        content: "Nhân vật lịch sử trọng yếu",
        narrative: "Chiến thắng Điện Biên Phủ gắn liền với tên tuổi của những vị tướng và lãnh đạo kiệt xuất.",
        figures: [
          {
            name: "Võ Nguyên Giáp",
            role: "Tư lệnh chiến dịch ĐBP",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Mr._Vo_Nguyen_Giap.jpg/500px-Mr._Vo_Nguyen_Giap.jpg",
            info: "Tư lệnh kiêm Bí thư Đảng ủy chiến dịch Điện Biên Phủ. Đại tướng đã đưa ra quyết định lịch sử chuyển phương châm từ 'đánh nhanh, thắng nhanh' sang 'đánh chắc, tiến chắc', quyết định mang tính bước ngoặt dẫn đến chiến thắng vĩ đại."
          },
          {
            name: "Hồ Chí Minh",
            role: "Chủ tịch Đảng & Chủ tịch nước",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Ho_Chi_Minh_-_1946_Portrait.jpg/960px-Ho_Chi_Minh_-_1946_Portrait.jpg",
            info: "Người trực tiếp chỉ đạo chiến lược toàn cục, động viên tinh thần chiến đấu của quân và dân. Người căn dặn Đại tướng Võ Nguyên Giáp: 'Trận này rất quan trọng, phải đánh cho thắng. Chắc thắng mới đánh, không chắc thắng không đánh.'"
          }
        ]
      }
    ]
  },

  // --- 6. Hiệp định Giơ-ne-vơ (1954) + Nhân vật ---
  {
    id: 6,
    year: "1954",
    title: "6. Thắng lợi ngoại giao: Hiệp định Giơ-ne-vơ",
    description: "Chiến thắng quân sự tạo đà cho thắng lợi quyết định trên bàn đàm phán quốc tế, kết thúc cuộc kháng chiến chống Pháp.",
    narrative: "Chiến thắng quân sự Điện Biên Phủ đã tạo đà cho thắng lợi quyết định trên bàn đàm phán quốc tế, mở ra trang sử mới cho dân tộc.",
    details: [
      {
        type: 'image',
        src: 'https://cdn.nhandan.vn/images/1ef398c4e2fb4bf07980a2ded785b3ef6021e059f517507b53744dab1a4565d1be37be1204d502339672214b68c96aa82ace49b9814a4cec641c4986d4637c3fb7ae13cda333b1a658a4aa09dbd85477/kyket-hiepdinh-2409.jpg',
        caption: "Hội nghị Giơ-ne-vơ 1954"
      },
      {
        type: 'heading',
        content: "Hội nghị Giơ-ne-vơ khai mạc",
        narrative: "Ngày 8/5/1954, chỉ một ngày sau chiến thắng Điện Biên Phủ, Hội nghị Giơ-ne-vơ bàn về Đông Dương khai mạc."
      },
      {
        type: 'text',
        content: "Hội nghị khai mạc ngày 8/5/1954. Phái đoàn Chính phủ Việt Nam Dân chủ Cộng hòa do Phó Thủ tướng Phạm Văn Đồng dẫn đầu bước vào hội nghị với tư thế của một dân tộc chiến thắng.",
        narrative: "Phái đoàn do Phó Thủ tướng Phạm Văn Đồng dẫn đầu bước vào hội trường với tư thế hiên ngang của một dân tộc vừa chiến thắng oanh liệt."
      },
      {
        type: 'heading',
        content: "Ký kết Hiệp định Giơ-ne-vơ"
      },
      {
        type: 'text',
        content: "Ngày 20/7/1954, các bên tham dự hội nghị Giơ - ne - vơ đã ký Hiệp định đình chỉ chiến tranh ở Đông Dương, tuyên bố công nhận độc lập, thống nhất và toàn vẹn lãnh thổ của Việt Nam.",
        narrative: "Ngày 20/7/1954, các bên tham dự hội nghị đã ký Hiệp định, kết thúc hoàn toàn cuộc kháng chiến chống Pháp oanh liệt của dân tộc."
      },
      {
        type: 'image',
        src: 'https://photo-baomoi.bmcdn.me/w700_r1/2021_07_20_450_39573907/f79f2fbc54febda0e4ef.jpg',
        caption: "Lễ ký kết Hiệp định Giơ-ne-vơ tháng 7 năm 1954"
      },
      {
        type: 'heading',
        content: "Ý nghĩa lịch sử"
      },
      {
        type: 'text',
        content: "Bản Tuyên bố cuối cùng của Hội nghị buộc Pháp và các nước tham dự phải cam kết tôn trọng các quyền dân tộc cơ bản của Việt Nam, Lào, Campuchia là độc lập, chủ quyền, thống nhất và toàn vẹn lãnh thổ.",
        narrative: "Đây là văn bản pháp lý quốc tế đầu tiên công nhận quyền dân tộc cơ bản của Việt Nam."
      },
      {
        type: 'quote',
        content: "Đây là văn bản pháp lý quốc tế đầu tiên công nhận quyền dân tộc cơ bản của Việt Nam, đánh dấu kết thúc thắng lợi cuộc kháng chiến chống Pháp, mở ra trang sử mới cho dân tộc.",
        narrative: "Hiệp định Giơ-ne-vơ đánh dấu kết thúc thắng lợi cuộc kháng chiến chống Pháp, mở ra trang sử mới cho dân tộc Việt Nam."
      },
      // --- Nhân vật trọng yếu ---
      {
        type: 'figures',
        content: "Nhân vật lịch sử trọng yếu",
        narrative: "Các nhân vật lịch sử liên quan đến giai đoạn thắng lợi cuối cùng và ký kết Hiệp định Giơ-ne-vơ.",
        figures: [
          {
            name: "Phạm Văn Đồng",
            role: "Trưởng phái đoàn Giơ-ne-vơ",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Ph%E1%BA%A1m_V%C4%83n_%C4%90%E1%BB%93ng_1972.jpg/500px-Ph%E1%BA%A1m_V%C4%83n_%C4%90%E1%BB%93ng_1972.jpg",
            info: "Trưởng phái đoàn Chính phủ Việt Nam Dân chủ Cộng hòa tại Hội nghị Giơ-ne-vơ. Với tư thế hiên ngang của dân tộc chiến thắng, đồng chí đã đấu tranh kiên quyết bảo vệ quyền dân tộc cơ bản của Việt Nam."
          },
          {
            name: "Tôn Đức Thắng",
            role: "Phó Chủ tịch nước",
            image: "https://upload.wikimedia.org/wikipedia/vi/7/73/Tonducthang.jpg",
            info: "Giữ vai trò quan trọng trong việc củng cố khối đại đoàn kết dân tộc, là biểu tượng cho tinh thần cách mạng kiên trung."
          },
          {
            name: "Trần Phú",
            role: "Tổng Bí thư đầu tiên",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Tr%E1%BA%A7n_Ph%C3%BA.jpg/500px-Tr%E1%BA%A7n_Ph%C3%BA.jpg",
            info: "Tuy đã hy sinh năm 1931, nhưng tinh thần và tấm gương bất khuất 'Hãy giữ vững chí khí chiến đấu!' của Tổng Bí thư đầu tiên vẫn được nhắc lại như nguồn động lực mạnh mẽ trong công tác xây dựng Đảng thời kỳ này."
          }
        ]
      }
    ]
  }
];