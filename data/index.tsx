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
    title: 'Thử Thách Trí Tuệ',
    subtitle: 'Mỗi câu đố là một bước tiến mới.',
    image: require('@/assets/images/welcome/play-tip.png'),
  },
  {
    id: '3',
    title: 'Chơi Cùng Bạn Bè',
    subtitle: 'Gắn kết và chiến thắng cùng nhau!',
    image: require('@/assets/images/welcome/friend.png'),
  },
];

export {
  welcomeList,
};
