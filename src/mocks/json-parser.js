const jsonData = `{
  "id": "bbb06a0e-3f92-446d-9a68-cb64b5d38e2b",
  "title": "Wood and stone place",
  "type": "apartment",
  "price": 370,
  "previewImage": "https://13.design.pages.academy/static/hotel/11.jpg",
  "city": {
    "name": "Paris",
    "location": {
      "latitude": 48.85661,
      "longitude": 2.351499,
      "zoom": 13
    }
  },
  "location": {
    "latitude": 48.868610000000004,
    "longitude": 2.342499,
    "zoom": 16
  },
  "isFavorite": false,
  "isPremium": false,
  "rating": 4.9
}`;

console.log(JSON.parse(jsonData));
