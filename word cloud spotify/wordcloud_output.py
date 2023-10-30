""" #The code in this file is meant to display a wordcloud by accessing a playlist "me" through the spotify API and returning track nnames """

import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
from wordcloud import WordCloud
import matplotlib.pyplot as plt

# Spotify API credentials // obtained from the spotify developer page after creating 
CLIENT_ID = "4656788a4330aa14b26aa5103670483668a"
CLIENT_SECRET = "ae443452d65b8fa4538bb6ab92531bf5ad8"

# Playlist ID
playlist_id = '6Wc2THamjv092cevwohMyt'

# Authenticate with the Spotify API
client_credentials_manager = SpotifyClientCredentials(client_id=CLIENT_ID, client_secret=CLIENT_SECRET)
sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager)

# Get the track titles from the specified playlist
results = sp.playlist_tracks(playlist_id)
print(results)
track_titles = [track['track']['name'] for track in results['items']]
print(track_titles)

# Combine track titles into a single string
text = ' '.join(track_titles)

# Generate a word cloud
stop_words = ["feat", "I", "a","To","IT","U","T",]

wordcloud = WordCloud(stopwords = stop_words, width=800, height=400, background_color='white').generate(text)

# Display the word cloud
plt.figure(figsize=(10, 5))
plt.imshow(wordcloud, interpolation='bilinear')
plt.axis('off')
plt.show()
