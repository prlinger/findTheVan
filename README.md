# findTheVan
A site that will scrape kijiji for newly posted VW vans.

## Motivation:
I occasionally amuse myself by browsing kijiji and thesamba and entertaining the idea of one day being the proud owner of a volkswagen camper.

## Notes:
- Use request to get the html of a page: https://github.com/request/request
- Use cheerio to parse the response: https://github.com/cheeriojs/cheerio
- Refer to kijiji scraper for how kijiji works: https://github.com/mwpenny/kijiji-scraper
- I am first going to use just the plain scraper, not the bot.
	- I may still use the configs from the bot for the scraper.

Values for locationId and categoryId can be found by performing a search and looking at the POST request parameters or the URL Kijiji redirects to. For example, after setting the location to Ottawa and selecting the "cars & vehicles" category, Kijiji redirects to http://www.kijiji.ca/b-cars-vehicles/ottawa/c27l1700185. The last part of the URL (c27l1700185) is formatted as c[categoryId]l[locationId]. So in this case, categoryId is 27 and locationId is 1700185.

