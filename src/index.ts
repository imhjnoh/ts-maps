// /// <reference types="@types/google.maps" />
import { User } from './User'
import { CustomMap } from "./CustomMap";
import { Company } from './Company';

// 아래와 같이 작성하면 누구나 Map객체를 사용해 다른 메소드를 사용할 수 있고,
// 그럴 경우 앱이 정상적으로 작동하지 않게 될 수 있다.
// 이러한 잠재적인 위험요소를 제거해보자.
// const mapDiv = document.getElementById('map');
// if (mapDiv) {
//   new google.maps.Map(mapDiv, {
//     zoom: 1,
//     center: {
//       lat: 0,
//       lng: 0
//     }
//   });
// }

const user = new User();
const company = new Company();
const customMap = new CustomMap('map');
customMap.addMarker(user);
customMap.addMarker(company);