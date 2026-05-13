library(haven)

df <- read.csv("survey_data.csv")

write_sav(df, "survey_data.sav")



library(haven)

# sample dataset
economic_data <- data.frame(
  year = 2015:2025,
  gdp_billion_usd = c(34000,34800,35500,36500,37000,
                      36000,38000,39500,41000,42000,43500),
  inflation_rate = c(0.7,1.2,2.1,1.9,1.5,
                     0.5,3.5,6.0,4.8,3.2,2.5),
  unemployment_rate = c(5.3,5.1,4.9,4.7,4.5,
                        6.2,5.8,5.2,4.9,4.6,4.3)
)

# save as old compatible Stata version
write_dta(
  economic_data,
  "economic_data.dta",
  version = 14
)




library(sf)

# Create sample spatial data
sample_data <- data.frame(
  id = 1:3,
  city = c("Cologne", "Berlin", "Hamburg"),
  lon = c(6.96, 13.40, 9.99),
  lat = c(50.94, 52.52, 53.55)
)

# Convert to spatial object
sample_sf <- st_as_sf(
  sample_data,
  coords = c("lon", "lat"),
  crs = 4326
)

# Write shapefile
st_write(
  sample_sf,
  "sample_shapefile.shp",
  delete_layer = TRUE
)




sample_sheet <- data.frame(
  Country = c("Germany", "France", "Italy"),
  GDP = c(4.5, 3.1, 2.3),
  Inflation = c(2.5, 2.1, 1.9)
)

write.csv(sample_sheet, "sample_sheet.csv", row.names = FALSE)
