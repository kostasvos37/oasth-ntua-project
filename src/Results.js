import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
import Loader from 'react-loader-spinner'
import "./Home.css"

class Results extends Component{

    constructor(props) {
        super(props);
        this.state = {
            coords : [],
            lat: 40.631003384366842,
            lng: 22.953261341104508,
            zoom: 13,
            loading : false
        }
    }
    
    componentDidMount(){
      this.setState({loading:true})
      const testStr = "22.952922857060457,40.6264585000591 22.952928775463079,40.626486107152 22.952983469328728,40.6267218571603 22.953063411045036,40.6273510178454 22.953196763806318,40.62838 22.953224810433539,40.6285940713061 22.953282128224373,40.6290120356403 22.953317492642441,40.629278982184 22.953482798776577,40.6304910177976 22.953487857060395,40.6305839073073 22.95347615153787,40.6308416797424 22.953479824860096,40.6309801778863 22.953360116567637,40.6311059536042 22.953230174851569,40.6311962845912 22.95291810491085,40.6313583201209 22.952507434358608,40.6315693378444 22.952390174851416,40.6315869711985 22.952183469328929,40.63168882892 22.951650787119888,40.631963408832156 22.951558163194704,40.632007302168127 22.951464081597351,40.632052391026846 22.95135274049278,40.632108828801591 22.950891399388297,40.632342899814255 22.949824752149652,40.6329034085026 22.949614752149614,40.633000355189658 22.949239446015326,40.6332057752229 22.9486834693289,40.633534757393754 22.948400116567655,40.6336717041156 22.948100787119756,40.633815266205339 22.947580116567678,40.6340688282489 22.946966093254105,40.634342721737028 22.94691670552254,40.634363739471752 22.94665408159733,40.634507810388463 22.946320000000014,40.63467 22.945820000000026,40.63492 22.945680000000038,40.63503 22.94556,40.6351 22.945389999999975,40.63518 22.945330000000013,40.63522 22.945240000000013,40.63527 22.944759999999974,40.63553 22.944449999999961,40.6357 22.944380000000024,40.63573 22.944349999999986,40.63575 22.944169999999986,40.63585 22.943960000000061,40.63597 22.943919999999935,40.63599 22.943520000000035,40.6362 22.942999999999984,40.63647 22.941969999999969,40.63699 22.94186000000002,40.63703 22.941759999999931,40.63709 22.941680000000019,40.63716 22.941599999999994,40.63725 22.941530000000057,40.63731 22.941429999999968,40.63736 22.940920000000006,40.6376 22.940209999999979,40.63793 22.940079999999966,40.63799 22.939679999999953,40.63819 22.93889999999999,40.63858 22.938760000000002,40.63865 22.938599999999951,40.63873 22.938409999999976,40.63882 22.937249999999949,40.63942 22.936929999999961,40.63958 22.936410000000024,40.63986 22.936400000000049,40.63991 22.936169999999947,40.64006 22.93592000000001,40.64018 22.935839999999985,40.64023 22.935640000000035,40.64032 22.935449999999946,40.6404 22.935249999999996,40.64049 22.935119999999984,40.64054 22.935029999999983,40.64057 22.934939999999983,40.64061 22.934790000000021,40.64068 22.934079999999994,40.64101 22.933549999999968,40.64129 22.932720000000018,40.64171 22.932569999999942,40.64179 22.931870000000004,40.64216 22.931620000000066,40.6423 22.931129999999939,40.64258 22.930299999999988,40.64295 22.929719999999975,40.64324 22.929629999999975,40.64329 22.929139999999961,40.64353 22.929010000000062,40.6436 22.928499999999985,40.64389 22.928369999999973,40.64396 22.927410000000009,40.64448 22.926619999999957,40.64489 22.926299999999969,40.64504 22.925920000000019,40.64522 22.925790000000006,40.64529 22.925439999999981,40.64551 22.924849999999992,40.64585 22.924589999999966,40.64599 22.923859999999991,40.64637 22.923660000000041,40.64648 22.922850000000039,40.64691 22.922180000000026,40.64728 22.920780000000036,40.64803 22.92026999999996,40.64831 22.920119999999997,40.64839 22.919759999999997,40.64859 22.919039999999995,40.64897 22.917619999999943,40.64973 22.917230000000018,40.64995 22.916420000000016,40.65036 22.916010000000028,40.65059 22.91579999999999,40.65071 22.91533000000004,40.65095 22.914930000000027,40.65115 22.914549999999963,40.65136 22.914060000000063,40.6516 22.913659999999936,40.65179 22.913310000000024,40.65193 22.912669999999935,40.65218 22.91226000000006,40.65234 22.911769999999933,40.65254 22.911249999999995,40.65274 22.91107999999997,40.65281"
      var returnedCoords = []
      testStr.split(" ").map(x => x.split(",")).forEach(pos => {
        returnedCoords.push([parseFloat(pos[1]), parseFloat(pos[0])])
      })
      console.log(returnedCoords)
      this.setState({coords:returnedCoords})
      this.setState({lat:returnedCoords[0][0]})
      this.setState({lng:returnedCoords[0][1]})
      this.setState({loading:false})
    }


    render() {
        const position = [this.state.lat, this.state.lng]
        if (this.state.loading){
          return (
            <div className="box-about">
                <Loader type="Oval"
                        color="#00BFFF"
                        height={100}
                        width={100}
                />
            </div>
          )  
      }else{
          return (
              <div className="box-about">
                  <h1>Fluffals best deck</h1>
                  <Map className="map" center={position} zoom={this.state.zoom}>
                      <TileLayer
                      attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                      <Polyline key={1} positions = {this.state.coords} color={'blue'}/>
                  </Map>
              </div>
          )
        }

    }
}

export default Results;