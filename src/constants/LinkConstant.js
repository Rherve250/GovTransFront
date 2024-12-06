import { CiHome } from 'react-icons/ci';
import { MdOutlineMarkEmailUnread } from 'react-icons/md';
import { CiFileOn, CiFolderOn } from 'react-icons/ci';
import { PiNotificationLight } from 'react-icons/pi';


const links = [
	{
		name: 'Home',
		path: '/',
		icon: CiHome,
	},
	{
		name: 'Profile',
		path: '/profile',
		icon: MdOutlineMarkEmailUnread,
	},
	{
		name: 'Documents',
		path: '/Documents',
		icon: CiFileOn,
	},
	{
		name: 'Folders',
		path: '/Folders',
		icon: CiFolderOn,
	},
	{
		name: 'Notification',
		path: '/Notifications',
		icon: PiNotificationLight,
	},
];



export { links };
