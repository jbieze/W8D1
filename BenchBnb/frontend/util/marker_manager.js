/* global google:false */

class MarkerManager {
  constructor(map, handleClick){
    this.map = map;
    this.handleClick = handleClick;
    this.markers = {};
  }

  updateMarkers(benches){
    benches.forEach(bench => benchesObj[bench.id] = bench);
  }

  createMarkerFromBench(bench) {
    const position = new google.maps.LatLng(bench.lat, bench.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      benchId: bench.id
    });

    marker.addListener('click', () => this.handleClick(bench));
    this.markers[marker.benchId] = marker;
  }

}

export default MarkerManager;
