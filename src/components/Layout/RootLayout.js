import { Button, Layout, Menu, theme } from 'antd';
import Link from 'next/link';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
const { Header, Content, Footer } = Layout;
import { Dropdown, Space } from 'antd';
import { } from 'react-icons/fa';
import { useSession, signOut, SessionProvider } from 'next-auth/react';

const RootLayout = ({ children }) => {
    const { data: session } = useSession()

    const {
        token: { colorBgContainer },
    } = theme.useToken();


    const items = [
        {
            key: '1',
            label: (
                <Link href={'/cpu'}>CPU / Processor</Link>
            ),
        },
        {
            key: '2',
            label: (
                <Link href={'/motherboard'}>Motherboard</Link>
            ),
        },
        {
            key: '3',
            label: (
                <Link href={'/ram'}>RAM</Link>
            ),
        },
        {
            key: '4',
            label: (
                <Link href={'/powerSupply'}>Power Supply Unit</Link>
            ),
        },
        {
            key: '5',
            label: (
                <Link href={'/storage'}>Storage Device</Link>
            ),
        },
        {
            key: '6',
            label: (
                <Link href={'/monitor'}>Monitor</Link>
            ),
        },
        {
            key: '7',
            label: (
                <Link href={'/'}>Others...</Link>
            ),
        },
    ];
    return (
        <Layout className="layout" style={{
            height: '100%'
        }}>
            <Header style={{ display: 'flex', alignItems: 'center' }}>
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    className='flex justify-between'
                >
                    <div className='mx-5'>
                        <Link className='flex justify-center items-center' href="/">
                            <p>NEXT-PC</p>
                        </Link>
                    </div>
                    <div>
                        <Dropdown
                            menu={{
                                items,
                            }}
                        >
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    Categories
                                    <DownOutlined />
                                </Space>
                            </a>
                        </Dropdown>
                    </div>
                    <div>
                        {
                            session && session.user ? <p className='pl-5 text-blue-500'>{session.user.name}</p>
                                :
                                <Link href={'/login'}>
                                    <Button className='mt-4 ml-2' type='primary'>Login</Button>
                                </Link>
                        }
                    </div>
                    <div>
                        <Link href={'/pcBuilder'}>
                            <Button type="primary" className='mt-4 ml-2'>PC Builder</Button>
                        </Link>
                    </div>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <div className="site-layout-content" style={{
                    background: colorBgContainer,
                    height: '100%'
                }}>
                    {children}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>NEXT-PC ©2023 Created by ZILLUR RAHMAN</Footer>
        </Layout>
    );
};

export default RootLayout;