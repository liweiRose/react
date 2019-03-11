import React from 'react';
import { Router, Route ,Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import FormDamo from './routes/FormDamo/FormDamo';
import Drawcanvas from './routes/Drawcanvas/Drawcanvas';
import Mapline from './routes/Mapline/Mapline';
import ChinaBeauty from './routes/ChinaBeauty/ChinaBeauty';
import Speech from './routes/Speech/Speech';
import IEcompatible from './routes/IEcompatible/IEcompatible';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route path="/" exact component={IndexPage} />
        </Switch>
        <Route path="/formdamo"  component={FormDamo} />
        <Route path="/drawcanvas" component={Drawcanvas} />
        <Route path="/mapline" component={Mapline} />
        <Route path="/chinabeauty" component={ChinaBeauty} />
        <Route path="/speech" component={Speech} />
        <Route path="/iecompatible" component={IEcompatible} />
      </div>
    </Router>
  );
}

export default RouterConfig;
