import { Avatar } from 'primereact/avatar';
import { SlideMenu } from 'primereact/slidemenu';
import { useContext, useRef } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const ProfileButton = () => {
    const { auth, logout }: { auth: any, logout: any } = useContext(AuthContext);

    const menu = useRef<SlideMenu>(null);

    if (!auth) return <></>;

    const items = [
        {
            label: 'Logout',
            command: () => {
                logout();
            }
        }
    ];

    return <>
        <SlideMenu ref={menu} model={items} popup menuWidth={175} />
        <Avatar
            size='large'
            shape='circle'
            image={auth.avatarURL}
            onClick={(e) => menu.current?.toggle(e)}
        />
    </>;
};

export default ProfileButton;