import React, { Component } from 'react';
import logo from './logo.svg';
import AcquireUserView from './acquireUser/presentation/view/AcquireUserView';
import ConfigService from './application/domain/ConfigService'
import Config from './application/config/Config'
import GetConfig from './application/domain/GetConfig'
import ConfigRepository from './application/data/repository/ConfigRepository'
import ConfigStoreFactory from './application/data/repository/dataSource/ConfigStoreFactory'

import './App.css';

class App extends Component {


  componentDidMount(){
    createConfigService();
    launchConfigService();
  }
  
  createConfigService(){
    const configStoreFactory = new ConfigStoreFactory();
    const configRepository = new ConfigRepository(configStoreFactory);
    const getConfigUseCase = new GetConfig(configRepository);
    this.configService = new ConfigService(config, getConfig);
  }

  loadConfig(){
    this.configService.loadConfig();
  }

  render() {
    return (
      <div className="App">
        <AcquireUserView/>
      </div>
    );
  }
}

export default App;
