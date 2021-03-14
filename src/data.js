import {v4 as uuidv4} from "uuid";

const data = [
    {
        id: uuidv4(),
        name: 'Samsung Galaxy S21 Ultra 5G',
        image: 'https://cdn.tgdd.vn/Products/Images/42/226316/samsung-galaxy-s21-ultra-bac-600x600-1-600x600.jpg',
        price: 100,
        star: 4,
        inventory: 10,
        description: 'Đón năm mới rộn ràng cùng với series Galaxy S21 đến từ Samsung. Phiên bản tiêu chuẩn cho series lần này là Samsung Galaxy S21 5G, nổi bật với thiết kế tràn viền, cụm camera ấn tượng cho đến hiệu năng mạnh mẽ hàng đầu.',
        quantity: 1,
    },
    {
        id: uuidv4(),
        name: 'iPhone 12 64GB',
        image: 'https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-duong-new-600x600-600x600.jpg',
        price: 110,
        star: 5,
        inventory: 5,
        description: 'Trong những tháng cuối năm 2020 Apple đã chính thức giới thiệu đến người dùng cũng như iFan thế hệ iPhone 12 series mới với hàng loạt tính năng bức phá, thiết kế được lột xác hoàn toàn, hiệu năng đầy mạnh mẽ và một trong số đó chính là iPhone 12 64GB.',
        quantity: 1,
    },
    {
        id: uuidv4(),
        name: 'Samsung Galaxy Note 20 Ultra',
        image: 'https://cdn.tgdd.vn/Products/Images/42/220522/samsung-galaxy-note-20-ultra-vangdong-600x600-600x600.jpg',
        price: 90,
        star: 4,
        inventory: 15,
        description: 'Sau Galaxy Note 20 thì Galaxy Note 20 Ultra là phiên bản tiếp theo cao cấp hơn thuộc dòng Note 20 Series của Samsung, với nhiều thay đổi, từ cụm camera hỗ trợ lấy nét laser AF cùng ống kính góc rộng mới, màn hình tràn viền lên đến 6.9 inch.',
        quantity: 1,
    },
]
export default data;