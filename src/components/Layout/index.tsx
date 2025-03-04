import { Login } from '@mui/icons-material';
import { Icon } from '@mui/material';
import { Theme } from '@mui/system';
import { makeStyles } from '@mui/styles';

import {
	AppBar,
	AppBarProps,
	Button,
	Layout,
	LayoutProps,
	Logout,
	useAuthState,
	useRedirect,
	UserMenu,
	UserMenuProps,
} from 'react-admin';
import { SideMenus } from './SideMenus';

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		width: '100%',
		height: '36px',
		padding: '6px 16px',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		'& span': {
			height: 'auto',
			width: 'auto',
			lineHeight: 1,
		},
	},
	startIcon: {
		margin: 0,
		minWidth: '40px',
	},
}));

const MyUserMenu = (props: UserMenuProps) => {
	const styles = useStyles();
	const { authenticated } = useAuthState();
	const redirect = useRedirect();

	const handleLogin = () => {
		redirect('/login');
	};

	return (
		<UserMenu {...props}>
			{!authenticated && (
				<Button
					onClick={handleLogin}
					classes={{ root: styles.root, startIcon: styles.startIcon }}
					startIcon={
						<Icon>
							<Login />
						</Icon>
					}
					label="Login"
				/>
			)}
			<Logout />
		</UserMenu>
	);
};

const MyAppBar = (props: AppBarProps) => (
	<AppBar {...props} userMenu={<MyUserMenu />} />
);

const MyLayout = (props: LayoutProps) => (
	<Layout {...props} appBar={MyAppBar} menu={SideMenus} />
);

export default MyLayout;
