# API-tasks
This repository is meant to display some of the class tasks assigned in-line with API handling. Python and React were used to build two separate implementations.

The API of choice was SPotify. 
In order to obtain acces to the Spotify API, the following requirements are needed;
    1. The user must have an account with the platform whether be it free or a paid account.
    2. The user will have to login into the developer account using the running account (paid or free).
    3. The user then must create an application of the developer dashboard specifying the name of the application, the redirect URI, the description of the     
       application.
    4. Once all those requirements are met, then the user's application is created and given acces to the "Client_id" and "Client_ secret".

Implementation One: 
    Two python scripts were written;
    1. One that creates the an HTML file from the track names of the playlist songs and displays the word cloud on a browser.
    2. The second creates a wordcloud using the matplotlib.pyplot library.

Implementation Two:
    To enable the react app run, the command "npm install" is run in the integrated terminal of visual studio code. All the dependencies will be installed basing on the dependencies listed in the package.json file in the src folder.
    The second implementation was a spotify searcher. The user can search for the name of the artist on the search bar and then the artist's respective albums are returned in a card format having having the ablum picture and the album name.
    Src folder in addition contains a screenshot of the result of the search.
    
