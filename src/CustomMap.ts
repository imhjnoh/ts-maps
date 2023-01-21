import { Company } from './Company';
import { User } from './User'

// Instruction to every other class
// on how they can be an argument to 'addMarker'
export interface Mappable {
    location: {
        lat: number;
        lng: number;
    }
    markerContent(): string;
    color: string;
}

export class CustomMap {
    private googleMap: google.maps.Map;
    private element: HTMLElement | null;
    constructor(divId: string) {
        this.element = document.getElementById(divId)
        if(this.element){
        this.googleMap = new google.maps.Map(this.element, {
        zoom: 1,
        center: {
            lat: 0,
            lng: 0
        }
        });}
    }

    // mappable은 TS가 자동으로 User와 Company모두가 가진 프로퍼티만 가지게 된다.
    addMarker(mappable: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        })
        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent()
            });
            
            infoWindow.open(this.googleMap, marker);
        })
    }

    // addUserMarker(user: User): void {
    //     new google.maps.Marker({
    //         map: this.googleMap,
    //         position: {
    //             lat: user.location.lat,
    //             lng: user.location.lng
    //         }
    //     })
    // }

    // addCompanyMarker(company: Company): void {
    //     new google.maps.Marker({
    //         map: this.googleMap,
    //         position: {
    //             lat: company.location.lat,
    //             lng: company.location.lng
    //         }
    //     })
    // }
}