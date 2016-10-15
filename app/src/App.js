import React, { Component } from 'react';
import TitleBar from './application/components/TitleBar';
import AcquireUserView from './acquireUser/presentation/view/AcquireUserView';
import ConfigService from './application/domain/ConfigService'
import config from './application/config/Config'
import GetConfig from './application/domain/GetConfig'
import ConfigRepository from './application/data/repository/ConfigRepository'
import ConfigStoreFactory from './application/data/repository/dataSource/ConfigStoreFactory'

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      configLoaded: false
    };
  }

  componentDidMount(){
    this.createConfigService();
    this.loadConfig();
  }
  
  createConfigService(){
    const configStoreFactory = new ConfigStoreFactory();
    const configRepository = new ConfigRepository(configStoreFactory);
    const getConfigUseCase = new GetConfig(configRepository);
    this.configService = new ConfigService(config, getConfigUseCase);
  }

  loadConfig(){
    this.configService.loadConfig()
      .then(() => this.setState({ configLoaded: true }));
  }

  render() {
    if(this.state.configLoaded){
      return (
        <div className="App">
          <TitleBar color={config.primaryColor} title={config.appTitle}/>
          <AcquireUserView/>
        </div>
      );
    } else {
      return (
        <div className="App">
          Loading...
        </div>
      );
    }

  }
}

export default App;