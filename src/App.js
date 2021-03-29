import './App.css';
import 'antd/dist/antd.css';
import React, {useState} from 'react'
import { AutoComplete, Input, Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

const getRandomInt = (max, min = 0) => {return Math.floor(Math.random() * (max - min + 1)) + min;} // eslint-disable-line no-mixed-operators

const searchResult = (query) =>
  new Array(getRandomInt(5))
    .join('.')
    .split('.')
    .map((_, idx) => {
      const category = `${query}${idx}`;
      return {
        value: category,
        label: (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span>
              Found {query} on{' '}
              <a
                href={`https://s.taobao.com/search?q=${query}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {category}
              </a>
            </span>
            <span>{getRandomInt(200, 100)} results</span>
          </div>
        ),
      };
    });

function App() {
  const [options, setOptions] = useState([]);

  const handleSearch = (value) => {
    setOptions(value ? searchResult(value) : []);
  };

  const onSelect = (value) => {
    console.log('onSelect', value);
  };

  return (
    <div className="App">
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%', display: 'flex', justifyContent: 'space-between' }}>
          <div className="logo" />
          <AutoComplete
              dropdownMatchSelectWidth={252}
              style={{
                width: 300,
                display: 'flex',
                alignItems: 'center'
              }}
              options={options}
              onSelect={onSelect}
              onSearch={handleSearch}
            >
                <Input.Search size="large" placeholder="input here" enterButton />
            </AutoComplete>
          <Menu theme="dark" mode="horizontal">
          {/* <Menu.Item key="0">
              <AutoComplete
              dropdownMatchSelectWidth={252}
              style={{
                width: 300,
                display: 'flex',
              }}
              options={options}
              onSelect={onSelect}
              onSearch={handleSearch}
            >
                <Input.Search size="large" placeholder="input here" enterButton />
            </AutoComplete>
            </Menu.Item> */}
            <Menu.Item key="1">Songs</Menu.Item>
            <Menu.Item key="2">Artists</Menu.Item>
            <Menu.Item key="3">Playlists</Menu.Item>
          </Menu>
        </Header>
        <Content className="site-layout"style={{ padding: '0 50px'}}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 640, height: '100%'}}>
            Content
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>African Artists ©2021 Created by King Code</Footer>
      </Layout>
    </div>
  );
}

export default App;
