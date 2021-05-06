import 'antd/dist/antd.css';
import React, {useState} from 'react';
import { AutoComplete, Input, Layout, Menu} from 'antd';
const { Header} = Layout;

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

function Nav({isLoggedIn}) {
    const [options, setOptions] = useState([]);

  const handleSearch = (value) => {
    setOptions(value ? searchResult(value) : []);
  };

  const onSelect = (value) => {
    console.log('onSelect', value);
  };
    if(isLoggedIn){
        return (
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
                  <Input.Search placeholder="Search for artists..." enterButton />
              </AutoComplete>
            <Menu theme="dark" mode="horizontal">
              <Menu.Item key="1">Login</Menu.Item>
              <Menu.Item key="2">Register</Menu.Item>
            </Menu>
          </Header>
        )
    }
    else {
        return (
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
                  <Input.Search placeholder="Search for artists..." enterButton />
              </AutoComplete>
            <Menu theme="dark" mode="horizontal">
              <Menu.Item key="1">Songs</Menu.Item>
              <Menu.Item key="2">Artists</Menu.Item>
              <Menu.Item key="3">Playlists</Menu.Item>
            </Menu>
          </Header>
        )
    }
}

export default Nav;
