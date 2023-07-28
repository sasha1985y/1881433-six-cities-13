const jsonData = `{
  "id": "35c70a76-3e30-4e5a-b261-8d187029155d",
    "title": "House in countryside",
    "type": "hotel",
    "price": 344,
    "previewImage": "https://13.design.pages.academy/static/hotel/12.jpg",
    "city": {
      "name": "Amsterdam",
      "location": {
        "latitude": 52.37454,
        "longitude": 4.897976,
        "zoom": 13
      }
    },
    "location": {
      "latitude": 52.36354,
      "longitude": 4.889976,
      "zoom": 16
    },
    "isFavorite": false,
    "isPremium": false,
    "rating": 4
}`;

console.log(JSON.parse(jsonData));
