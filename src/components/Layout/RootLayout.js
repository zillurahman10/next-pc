import { Button, Layout, Menu, theme } from 'antd';
import Link from 'next/link';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
const { Header, Content, Footer } = Layout;
import { Dropdown, Space } from 'antd';
import { } from 'react-icons/fa';

const RootLayout = ({ children }) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const items = [
        {
            key: '1',
            label: (
                <Link href={'/'}>CPU / Processor</Link>
            ),
        },
        {
            key: '2',
            label: (
                <Link href={'/'}>Motherboard</Link>
            ),
        },
        {
            key: '3',
            label: (
                <Link href={'/'}>RAM</Link>
            ),
        },
        {
            key: '4',
            label: (
                <Link href={'/'}>Power Supply Unit</Link>
            ),
        },
        {
            key: '5',
            label: (
                <Link href={'/'}>Storage Device</Link>
            ),
        },
        {
            key: '6',
            label: (
                <Link href={'/'}>Monitort</Link>
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
                        <Button type="primary" className='mt-4 ml-2'>PC Builder</Button>
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