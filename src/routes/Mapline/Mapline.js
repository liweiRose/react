import React from 'react';
import MapExtent from './MapExtent';
import UIMarker from './UIMarker';

class UIpath extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      center: [120.349157,30.300772],
      lines:[{color:"rgb(84 85 230)",
        monitorTypeId:1,
        monitorTypeName:"东部线",
        path:[["120.370003", "30.302"],["120.368657", "30.288853"],["120.368684", "30.287991"],["120.367996", "30.288"],["120.360922", "30.28801"],["120.360001", "30.277"],["120.339996", "30.278"]
        ,["120.326831", "30.290704"],["120.316826", "30.294497"],["120.308922  ", "30.297628"]]
      }]
    }
  }

  render() {
    return <div style={{width:'1120px',height:'600px',border:'1px solid #000'}}>
            <MapExtent
            useAMapUI={true}
            amapkey="198a9fa51560875189379291424d6c21"
            mapStyle="amap://styles/9e2bf709b20d1ea65dbeee6610ebc039"
            center={this.state.center}
            zoom={13}
            >
              <UIMarker lines={this.state.lines} />
            </MapExtent>
    </div>;
  }
}


export default UIpath;