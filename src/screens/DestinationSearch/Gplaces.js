import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const GooglePlacesInput = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      onFail={error => console.error(error)}
      fetchDetails={true}
      query={{
        key: 'AIzaSyDFhFUaYpyAjNE4Eq-sWCGWjrr6kyGnhbQ',
        language: 'en',
      }}
    />
  );
};

export default GooglePlacesInput;


apiKeyMe = "AIzaSyBiJBPl66rMgwawpUw7bfQrfqx-SkckL4w";

apiKeyYoutube = 'AIzaSyDFhFUaYpyAjNE4Eq-sWCGWjrr6kyGnhbQ';

anotherKeyYoutube =  'AIzaSyB1KoK7KQe0yzwScTNjc7lHRSi7my056bk',


setellentsoft: key: 'AIzaSyB431V9E4LR66p8PGLvN2iOXaBb7_g-Kz4',