
Exercice 2 
A list of events is provided in JSON through an API endpoint.

    {
        start: "2018-10-01T10:00:00Z"
        end: "2018-10-01T15:00:00Z"
        label: "Event one"
        category: "blue"
    }
TODO
TASK : Write a web client consuming this API and displaying a calendar of the current week with the events.

Design is up to you
You may use any library or framework you may find appropriate. This is highly encouraged.
If you have time, feel free to improve the calendar and add more features :

Navigation between weeks
Use category as a color for the events
Display calendar in client timezone rather than UTC
Caching / prefetching data
Week / Month view
Toggle to display overlapping events
CSS transitions when navigating
Responsiveness
etc.
Specs
The date/times are in ISO 8601 format.

You can access the data at the following URI : https://assessments.bzzhr.net/calendar

The endpoint accepts these extra querystring parameters:

QS parameter	Description
since=DDD	returns only events starting after DDD (ISO 8601 datetime)
before=DDD	returns only events starting before DDD (ISO 8601 datetime)
overlaps=1	include extra events which overlaps others
page=1	sets the page number if there are too many events
paginate_by=50	sets the number of elements returned per page (default 20, max 500)
format=json	overrides Accept header preference and renders output in raw JSON instead of web-api HTML