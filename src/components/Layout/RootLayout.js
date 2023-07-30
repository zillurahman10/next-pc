import { Button, Layout, Menu, theme } from 'antd';
import Link from 'next/link';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
const { Header, Content, Footer } = Layout;
import { Dropdown, Space } from 'antd';
import { } from 'react-icons/fa';
import { useSession } from 'next-auth/react';

const RootLayout = ({ children }) => {
    // const { data: session } = useSession()
    // console.log(session);
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
        <Layout className="layout">
            <Header style={{ display: 'flex', alignItems: 'center' }}>
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    className='flex justify-between'
                >
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
                        <Link href={'/login'}>
                            <Button className='mt-4 ml-2' type='primary'>Login</Button>
                        </Link>
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
                    height: '100vh'
                }}>
                    {children}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
        </Layout>
    );
};

export default RootLayout;