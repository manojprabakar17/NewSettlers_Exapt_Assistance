import { IconDashboard } from '@tabler/icons';

const icons = { IconDashboard };
const homePage = {
  id: 'home',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Home',
      type: 'item',
      url: '/home',
      icon: icons.IconDashboard,
      breadcrumbs: false
    }
  ]
};

export default homePage;
