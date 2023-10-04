import styled from "styled-components";

const menuItems = [
  {
    id: "001",
    title: "Home",
    url: "/",
  },
  {
    id: "002",
    title: "About",
    url: "/about",
  },
  {
    id: "003",
    title: "Home",
    url: "/",
  },
];

function DropDown() {
  return (
    <Container>
      <Header>
        <div className="left">
          <nav>
            <ul className="menu">
              <li>
                <a href="#menu1">MENU 1</a>
                <ul className="depth_1">
                  <li>
                    <a href="#menu1_1">MENU 1_1</a>
                  </li>
                  <li>
                    <a href="#menu1_2">MENU 1_2</a>
                  </li>
                  <li>
                    <a href="#menu1_3">MENU 1_3</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">MENU 2</a>
              </li>
              <li>
                <a href="#menu3">MENU 3</a>
                <ul className="depth_1">
                  <li>
                    <a href="#menu3_1">MENU 3_1</a>
                  </li>
                  <li>
                    <a href="#menu3_2">MENU 3_2</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div className="center">center</div>
        <div className="right">right</div>
      </Header>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  background: skyblue;

  .left {
    display: flex;
  }

  .center {
    display: flex;
  }

  .right {
    display: flex;
  }

  .menu {
    margin-right: 20px;

    :after {
      display: block;
      content: "";
      clear: both;
    }

    a {
      display: block;
      padding: 0 15px;
      background: #333;
      height: 40px;
      line-height: 40px;
      color: #fff;
    }

    .depth_1 {
      display: none;
      position: absolute;
      left: 0;
      right: 0;
      text-align: center;

      a {
        display: block;
        padding: 5px;
        background: #666;
        color: #fff;
      }
    }

    li:hover .depth_1 {
      display: block;
    }
  }
  .menu > li {
    position: relative;
    float: left;
    margin-right: 5px;
  }
`;

export default DropDown;
