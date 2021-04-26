import { Component, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loader } from '@googlemaps/js-api-loader';
import { Observable, Subscription } from 'rxjs';
import { UpdateSelectedStateService } from 'src/app/service/update-selected-state.service';
import * as pindata from '../../../../../assets/json/pindata.json';

@Component({
  selector: 'app-country-map',
  templateUrl: './country-map.component.html',
  styleUrls: ['./country-map.component.css'],
})
export class CountryMapComponent implements OnInit, OnDestroy, AfterViewInit {
  private stateObservable: Observable<any>;
  private stateSubscription: Subscription;
  data: any[] = [];
  selectedPinData: string;

  getGoogleMaps() {
    const loader = new Loader({
      apiKey: 'AIzaSyDBni9tz-L2yelz2xzzkIYHX6M5im_zhlA',
      version: 'daily',
    });
    let map: google.maps.Map;
    let heatmapData: any[] = [];
    let heatmap: google.maps.visualization.HeatmapLayer;

    loader.load().then(() => {
      map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: this.data[0].lat, lng: this.data[0].lng },
        zoom: 10,
        mapTypeId: "satellite",
      });

      this.data.forEach((pin) => {
        let marker: google.maps.Marker;
        let location = { lat: pin.lat, lng: pin.lng };
        heatmapData.push({
          location: new google.maps.LatLng(pin.lat, pin.lng)
        });

        marker = new google.maps.Marker({
          position: location,
          map: map,
        });

        marker.addListener('click', () => {
          this.selectedPinData = pin.issueText;
        });
      });

      heatmap = new google.maps.visualization.HeatmapLayer({
        data: heatmapData,
      });

      heatmap.setMap(map);
    });
  }

  constructor(
    private updateSelectedStateService: UpdateSelectedStateService,
    public router: Router
  ) {
    this.data = (pindata as any).default;
    this.getGoogleMaps();
  }

  ngAfterViewInit(): void {}

  setSelectedState(event: any) {
    let selectedState: string = event.target.textContent.trim().toLowerCase();
    this.updateSelectedStateService.setSelectedState(selectedState);
    console.log(selectedState);

    this.stateObservable = this.updateSelectedStateService.getSelectedState();
    this.stateSubscription = this.stateObservable.subscribe((subjectState) => {
      console.log(this.stateSubscription);
      this.router.navigate([subjectState.selectedState]);
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    if (this.stateSubscription) {
      this.stateSubscription.unsubscribe();
    }
  }

  onMarkerClick() {}
}
