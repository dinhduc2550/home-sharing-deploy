import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.prod";
import * as mapboxgl from 'mapbox-gl'
import {API_MAP_GEO} from "../constant/api.constant";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  title = 'My first AGM project';
  lat = 21.0073258;
  lng = 105.515703;
constructor(private http:HttpClient) {
}
  mapa:mapboxgl.Map
  ngOnInit(): void {
    (mapboxgl as any).accessToken = environment.mapboxKey;
    this.mapa = new mapboxgl.Map({
      container: 'mapa-mapbox',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-77.04, 38.907],
      zoom: 11.15
    });
    this.createMarker(-77.04, 38.907)
    this.getLocation()
  }
   createMarker(lang:number,lat:number){
    const marker = new mapboxgl.Marker({
      draggable:true
    }).setLngLat([lang,lat]).addTo(this.mapa)
     marker.on('drag',()=>{
     })
   }
  getGeoLocation() {
  console.log(API_MAP_GEO+this.lat+","+this.lng+".json?access_token="+environment.mapboxKey)
    return this.http.get<any>(API_MAP_GEO+this.lng+","+this.lat+".json?access_token="+environment.mapboxKey)
  }
   getLocation(){
        console.log(this.getGeoLocation())
   }
}
