import { WelComeSlider } from '@/types/index';

const welcomeList: WelComeSlider[] = [
  {
    id: '1',
    title: 'Chào Mừng Người Chơi',
    subtitle: 'Rèn luyện trí não, thử thách bạn bè và chinh phục mọi câu đố.',
    image: require('@/assets/images/welcome/welcome-illustration.png'),
  },
  {
    id: '2',
    title: 'Cách Chơi',
    subtitle: 'Đấu trí mọi lúc, mọi nơi.Trả lời nhanh các câu đố IQ, tích điểm và leo lên bảng xếp hạng.',
    image: require('@/assets/images/welcome/play-tip.png'),
  },
  {
    id: '3',
    title: 'Kết Nối Bạn Bè',
    subtitle: 'Mời bạn bè tham gia, so tài trí tuệ và xem ai là người giỏi nhất!',
    image: require('@/assets/images/welcome/friend.png'),
  },
];

export {
  welcomeList,
};
