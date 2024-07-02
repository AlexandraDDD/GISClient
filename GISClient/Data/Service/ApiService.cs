using GISClient.Data.Model;

namespace GISClient.Data.Service
{
    public class ApiService
    {
        private readonly HttpClient _httpClient;
        public ApiService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }
        public async Task<List<GeoObjectDTO>?> GetGeoObjects()
        {
            return await _httpClient.GetFromJsonAsync<List<GeoObjectDTO>>("api/GeoObject");
        }
        public async Task<GeoObjectDTO?> GetGeoObject(Guid id)
        {
            return await _httpClient.GetFromJsonAsync<GeoObjectDTO>($"api/GeoObject/{id}");
        }
        public async Task PostGeoObject(GeoObjectDTO geoObject)
        {
            await _httpClient.PostAsJsonAsync("api/GeoObject", geoObject);
        }
        public async Task DeleteGeoObject(Guid id)
        {
            await _httpClient.DeleteAsync($"api/GeoObject/{id}");
        }
        public async Task PutGeoObject(Guid id, GeoObjectDTO geoObject)
        {
            await _httpClient.PutAsJsonAsync($"api/GeoObject/{id}", geoObject);
        }
    }


}
