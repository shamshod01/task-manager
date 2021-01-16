import React from 'react'
import 'antd/dist/antd.css';
import {Provider} from "react-redux";
import store from "./redux/store";
import MainPage from "./components/mainPage/mainPage";
import './App.css'
function App() {

  return (
      <div>
          <Provider store={store}>
              <MainPage/>
          </Provider>
      </div>
  );
}

export default App;
