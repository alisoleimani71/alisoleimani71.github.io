library(readr)
df_readr <- read_csv("data.csv")
df_readr

library(data.table)
df_fread <- fread("bigdata.csv")
df_fread

library(readxl)
df_excel <- read_excel("file.xlsx")
df_excel

library(haven)
# Import SPSS file
df_spss <- read_sav("survey_data.sav")
# Import Stata file
df_stata <- read_dta("economic_data.dta")
# Preview imported data
head(df_spss)
head(df_stata)

library(DBI)
library(RSQLite)
# Connect to SQLite database
con <- dbConnect(RSQLite::SQLite(), "company.db")
# Read table
df_db <- dbGetQuery(con, "SELECT * FROM employees")
# Show data
df_db
# Disconnect
dbDisconnect(con)


library(sf)
# Read shapefile
spatial_data <- st_read("sample_shapefile.shp")
# Preview spatial object
print(spatial_data)


# Import fixed-width file
df_fwf <- read.fwf(
  "legacy_data.fwf",
  widths = c(3, 6, 5),
  col.names = c("ID", "Name", "Score")
  
  
  # Import fixed-width file
  df_fwf <- read.fwf(
    "legacy_data.fwf",
    widths = c(3, 6, 5),
    col.names = c("ID", "Name", "Score")
  )
  
  df_fwf
  
  
  library(lightr)
  
  # Import spectral data
  spec_data <- lr_get_spec("spectrum.jdx")
  
  # Show spectral data
  head(spec_data)
  
  
  # Import Google Sheet
  gs4_deauth()
  sheet_data <- read_sheet(
    "https://docs.google.com/spreadsheets/d/19Z6SowrQtCS_NsIAZ9ZcaZeb532cSlOOTPCSqfKKsSw/edit?usp=sharing"
  )
  
  sheet_data
  
  
  
  library(jsonlite)
  df_json <- fromJSON("data.json")
  df_json