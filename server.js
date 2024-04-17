/*** Express setup & start ***/

// 1. Opzetten van de webserver

// Importeer de zelfgemaakte functie fetchJson uit de ./helpers map
import fetchJson from './helpers/fetch-json.js'

// Importeer het npm pakket express uit de node_modules map
import express from 'express'

// Stel het basis endpoint in
const apiUrl = 'https://fdnd-agency.directus.app/items'

// Maak een nieuwe express app aan
const app = express()

// Stel ejs in als template engine
// View engine zorgt ervoor dat data die je ophaalt uit de api , waar je in je code dingen mee doet, daar html van maakt
app.set('view engine', 'ejs')

// Stel de map met ejs templates in
app.set('views', './views')

// Gebruik de map 'public' voor statische resources, zoals stylesheets, afbeeldingen en client-side JavaScript
app.use(express.static('public'))

// Zorg dat werken met request data makkelijker wordt
app.use(express.urlencoded({ extended: true }));

let favorites = {}

/*** Routes & data ***/

// 2. Routes die HTTP Request and Responses afhandelen

// Maak een GET route voor de index

app.get('/', function (request, response) {
    response.render('index')
})

// Maak een GET route voor de testing pagina

app.get('/testing', function (request, response) {
  response.render('testing')
})

// Maak een GET route voor de lessons pagina

app.get('/lessons', function (request, response) {

  Promise.all([ // Fetch data from all endpoints concurrently using Promise.all()
    fetchJson(apiUrl + '/tm_story'), // Fetch data from the tm_story endpoint
    fetchJson(apiUrl + '/tm_language'), // Fetch data from the tm_language endpoint
    fetchJson(apiUrl + '/tm_playlist'), // Fetch data from the tm_playlist endpoint
    fetchJson(apiUrl + '/tm_audio') // Fetch data from the tm_audio endpoint
  ]).then(([storyData, languageData, playlistData, audioData]) => {
// After all promises are resolved, this function will be executed with the fetched data

// Render the 'index.ejs' template and pass all fetched data to the view   
 response.render('lessons', {
      favorites: favorites,
      stories: storyData.data, // Pass fetched story data to the view under the 'stories' key
      languages: languageData.data, // Pass fetched language data to the view under the 'languages' key
      playlists: playlistData.data, // Pass fetched playlist data to the view under the 'playlists' key
      audio: audioData.data, // Pass fetched audio data to the view under the 'audio' key
      justUpdated: request.query.justUpdated,
      whatHappened: request.query.whatHappened})
    });
})

// Maak een GET route voor de stories pagina

app.get('/lessons/stories', function(request, response) {
  Promise.all([
    fetchJson(apiUrl + '/tm_story'),
    fetchJson(apiUrl + '/tm_language'),
    fetchJson(apiUrl + '/tm_playlist'),
    fetchJson(apiUrl + '/tm_audio')
  ]).then(([storyData, languageData, playlistData, audioData]) => {
    
    response.render('stories', {
      stories: storyData.data,
      languages: languageData.data,
      playlists: playlistData.data,
      audio: audioData.data})
  })
})

// Maak een GET route voor de playlist pagina

app.get('/lessons/playlist/:slug', function (request, response) {
  Promise.all([
    fetchJson(apiUrl + '/tm_story'),
    fetchJson(apiUrl + '/tm_language'),
    fetchJson(apiUrl + '/tm_playlist/?filter={"slug":"' + request.params.slug + '"}'),
    fetchJson(apiUrl + '/tm_audio')
  ]).then(([storyData, languageData, playlistData, audioData]) => {
    response.render('playlist', {
      stories: storyData.data,
      languages: languageData.data,
      playlists: playlistData.data,
      audio: audioData.data})
  })
})

// Maak een GET route voor de statistics pagina

app.get('/statistics', function (request, response) {
  response.render('statistics')
})

// Maak een GET route voor de profile pagina

app.get('/profile', function (request, response) {
  response.render('profile')
})

// Maak een POST route voor de lessons pagina

app.post('/:playlistId/like-or-unlike', function(request, response) {
  const playlistId = Number(request.params.playlistId);
  const action = request.body.action; // Retrieve the value of the 'actie' parameter from the form
  let whatHappened = ''

  // Implement the logic to handle liking or unliking the playlist
  if (action === 'like') {
    // Handle 'like' action
    favorites[playlistId] = true
    whatHappened = 'liked'

  } else if (action === 'unlike') {
    favorites[playlistId] = false
    whatHappened = 'unliked'

  } 
  response.redirect(303, '/lessons?justUpdated=' + playlistId + '&whatHappened=' + whatHappened)
  })

// 3. Start de webserver

// Stel het poortnummer in waar express op moet gaan luisteren
app.set('port', process.env.PORT || 8000)

// Start express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})
