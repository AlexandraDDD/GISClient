using GISClient.Data.Model;
using GISClient.Pages;
using System.Linq;

namespace GISClient.Data.Service
{
    public class TestData
    {
        public List<GeoObjectDTO> GetGeoObjects()
        {
            List<GeoObjectDTO> geoObjects = new List<GeoObjectDTO>();

            GeoNamesFeatureDTO bldg = new GeoNamesFeatureDTO()
            {
                GeoNamesFeatureCode = "BLDG"
            };

            //Адмиралтейский р-н
            GeoObjectDTO admiral = new GeoObjectDTO()
            {
                Name = "Адмиралтейский р-н",
                Geometry = new GeometryVersionDTO()
                {
                    BorderGeocodes = "[[59.896540, 30.318789], [59.896335, 30.295108], [59.902682, 30.297150], [59.904013, 30.280206], [59.900942, 30.275511], [59.902478, 30.266529], [59.899304, 30.263262], [59.901352, 30.250402], [59.915886, 30.262242],[59.930004, 30.276327], [59.940568, 30.309235], [59.937644, 30.313355], [59.936268, 30.310265], [59.925087, 30.327431], [59.926291, 30.330693], [59.916828, 30.342709], [59.908824, 30.318162]]"
                },
                GeoNameFeature = new GeoNamesFeatureDTO()
                {
                    GeoNamesFeatureCode = "ADM3-admiral"
                }
            };
            //Центральный р-н
            GeoObjectDTO center = new GeoObjectDTO()
            {
                Name = "Центральный р-н",
                Geometry = new GeometryVersionDTO()
                {
                    BorderGeocodes = "[[59.940568, 30.309235], [59.937644, 30.313355], [59.936268, 30.310265], [59.925087, 30.327431], [59.926291, 30.330693], [59.916828, 30.342709], [59.913946, 30.363013], [59.920097, 30.397946], [59.929829, 30.394700], [59.953071, 30.401266], [59.957336, 30.386831], [59.950759, 30.365900], [59.950759, 30.343959]]"
                },
                GeoNameFeature = new GeoNamesFeatureDTO()
                {
                    GeoNamesFeatureCode = "ADM3-center"
                }
            };
            //Московский р-н
            GeoObjectDTO mos = new GeoObjectDTO()
            {
                Name = "Московский р-н",
                Geometry = new GeometryVersionDTO()
                {
                    BorderGeocodes = "[[59.896540, 30.318789], [59.908824, 30.318162], [59.916828, 30.342709], [59.819209, 30.381734], [59.804725, 30.324280], [59.771306, 30.334082], [59.744895, 30.309796], [59.767104, 30.248553], [59.788067, 30.282849], [59.801829, 30.198743], [59.803985, 30.200580], [59.801931, 30.217728], [59.813430, 30.225281], [59.813224, 30.240388], [59.822796, 30.247583], [59.849880, 30.287408], [59.879002, 30.293681], [59.881358, 30.299805], [59.882690, 30.300213], [59.882588, 30.293885], [59.896311, 30.297559]]"
                },
                GeoNameFeature = new GeoNamesFeatureDTO()
                {
                    GeoNamesFeatureCode = "ADM3-mos"
                }
            };
            //Фрунзенский р-н
            GeoObjectDTO frunz = new GeoObjectDTO()
            {
                Name = "Фрунзенский р-н",
                Geometry = new GeometryVersionDTO()
                {
                    BorderGeocodes = "[[59.819209, 30.381734], [59.816890, 30.383369], [59.829661, 30.441047], [59.834147, 30.474006], [59.913946, 30.363013], [59.913946, 30.363013], [59.916828, 30.342709]]"
                },
                GeoNameFeature = new GeoNamesFeatureDTO()
                {
                    GeoNamesFeatureCode = "ADM3-frunz"
                }
            };
            geoObjects.Add(admiral);
            geoObjects.Add(center);
            geoObjects.Add(mos);
            geoObjects.Add(frunz);
            // geoObjects.Add(vasil);
            // geoObjects.Add(petrograd);
            // geoObjects.Add(prim);
            // geoObjects.Add(vyborg);
            // geoObjects.Add(nevsky);
            // geoObjects.Add(krasnosel);
            // geoObjects.Add(kirov);
            // geoObjects.Add(krasnogvar);
            // geoObjects.Add(petrodvor);
            // geoObjects.Add(kalin);
            return geoObjects;
        }
    }
}
