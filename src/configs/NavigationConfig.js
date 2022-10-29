import { 
  DashboardOutlined,
  ShoppingCartOutlined,
  ShopOutlined,
  ShoppingOutlined,
  UserOutlined,
  PictureOutlined,
  GiftOutlined,
  UsergroupAddOutlined,
  MailOutlined,
  SettingOutlined,
  MobileOutlined,
  FileTextOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const dashBoardNavTree = [
	{
	key: 'main',
	path: `${APP_PREFIX_PATH}/main`,
	title: 'sidenav.main',
	icon: DashboardOutlined,
	breadcrumb: false,
	submenu: [
		{
			key: 'main-dashboard',
			path: `${APP_PREFIX_PATH}/main/dashboard`,
			title: 'sidenav.main.dashboard',
			icon: DashboardOutlined,
			breadcrumb: false,
			submenu: []
		},
		{
			key: 'main-catalog',
			path: `${APP_PREFIX_PATH}/main/catalog`,
			title: 'sidenav.main.catalog',
			icon: ShoppingCartOutlined,
			breadcrumb: false,
			submenu: [
				{
					key: 'main-catalog-products',
					path: `${APP_PREFIX_PATH}/main/catalog/products`,
					title: 'sidenav.main.catalog.products',
					icon: '',
					breadcrumb: true,
					submenu: []
				},
				{
					key: 'main-catalog-categories',
					path: `${APP_PREFIX_PATH}/main/catalog/categories`,
					title: 'sidenav.main.catalog.categories',
					icon: '',
					breadcrumb: true,
					submenu: []
				},
				{
					key: 'main-catalog-collections',
					path: `${APP_PREFIX_PATH}/main/catalog/collections`,
					title: 'sidenav.main.catalog.collections',
					icon: '',
					breadcrumb: true,
					submenu: []
				},
				{
					key: 'main-catalog-combo',
					path: `${APP_PREFIX_PATH}/main/catalog/combo`,
					title: 'sidenav.main.catalog.combo',
					icon: '',
					breadcrumb: true,
					submenu: []
				},
			]
		},
		{
			key: 'main-oders',
			path: `${APP_PREFIX_PATH}/main/oders`,
			title: 'sidenav.main.oders',
			icon: ShoppingOutlined,
			breadcrumb: false,
			submenu: []
		},
		{
			key: 'main-clients',
			path: `${APP_PREFIX_PATH}/main/clients`,
			title: 'sidenav.main.clients',
			icon: UserOutlined,
			breadcrumb: false,
			submenu: [
				{
					key: 'main-clients-list',
					path: `${APP_PREFIX_PATH}/main/clients/list`,
					title: 'sidenav.main.clients.list',
					icon: '',
					breadcrumb: true,
					submenu: []
				},
				{
					key: 'main-clients-groups',
					path: `${APP_PREFIX_PATH}/main/clients/groups`,
					title: 'sidenav.main.clients.groups',
					icon: '',
					breadcrumb: true,
					submenu: []
				}
			]
		},
		{
			key: 'main-banners',
			path: `${APP_PREFIX_PATH}/main/banners`,
			title: 'sidenav.main.banners',
			icon: PictureOutlined,
			breadcrumb: false,
			submenu: []
		},
		{
			key: 'main-promocodes',
			path: `${APP_PREFIX_PATH}/main/promocodes`,
			title: 'sidenav.main.promocodes',
			icon: GiftOutlined,
			breadcrumb: false,
			submenu: []
		},
		{
			key: 'main-offline',
			path: `${APP_PREFIX_PATH}/main/offline`,
			title: 'sidenav.main.offline',
			icon: ShopOutlined,
			breadcrumb: false,
			submenu: [
				{
					key: 'main-offline-adresses',
					path: `${APP_PREFIX_PATH}/main/offline/adresses`,
					title: 'sidenav.main.offline.adresses',
					icon: '',
					breadcrumb: true,
					submenu: []
				},
				{
					key: 'main-offline-geofences',
					path: `${APP_PREFIX_PATH}/main/offline/geofences`,
					title: 'sidenav.main.offline.geofences',
					icon: '',
					breadcrumb: true,
					submenu: []
				},
			]
		},
		{
			key: 'main-staff',
			path: `${APP_PREFIX_PATH}/main/staff`,
			title: 'sidenav.main.staff',
			icon: UsergroupAddOutlined,
			breadcrumb: false,
			submenu: []
		},
		{
			key: 'main-mailings',
			path: `${APP_PREFIX_PATH}/main/mailings`,
			title: 'sidenav.main.mailings',
			icon: MailOutlined,
			breadcrumb: false,
			submenu: []
		},
	]
}]

const systemNavTree = [
	{
		key: 'system',
		path: `${APP_PREFIX_PATH}/system`,
		title: 'sidenav.system',
		icon: SettingOutlined,
		breadcrumb: false,
		submenu: [
			{
				key: 'system-settings',
				path: `${APP_PREFIX_PATH}/system/settings`,
				title: 'sidenav.system.settings',
				icon: SettingOutlined,
				breadcrumb: false,
				submenu: []
			},
			{
				key: 'system-mobile-apps',
				path: `${APP_PREFIX_PATH}/system/mobile-app`,
				title: 'sidenav.system.mobile-app',
				icon: MobileOutlined,
				breadcrumb: false,
				submenu: []
			},
			{
				key: 'system-logs',
				path: `${APP_PREFIX_PATH}/system/logs`,
				title: 'sidenav.system.logs',
				icon: FileTextOutlined,
				breadcrumb: false,
				submenu: []
			}
		]
	}
]

const navigationConfig = [
  ...dashBoardNavTree,
  ...systemNavTree
]

export default navigationConfig;
