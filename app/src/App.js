import React, { Component } from 'react';
import AcquireUserView from './acquireUser/presentation/view/AcquireUserView';
import ConfigService from './application/domain/ConfigService'
import config from './application/config/Config'
import GetConfig from './application/domain/GetConfig'
import ConfigRepository from './application/data/repository/ConfigRepository'
import ConfigStoreFactory from './application/data/repository/dataSource/ConfigStoreFactory'

import './App.css';

class App extends Component {


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