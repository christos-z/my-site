import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 0,  name: 'Zero' },
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];

    //Put sorting on this, so can filter via technologies, alphabetical etc.
    const skills = [
      { name: 'Javascript', img: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIzMjVweCIgaGVpZ2h0PSI0NTBweCIgdmlld0JveD0iMCAwIDMyNSA0NTAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyNSA0NTAiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwb2x5Z29uIGZpbGw9IiNFRkM3MjUiIHBvaW50cz0iNDAuODQ1LDQwMS4yNTQgMTMuNzc1LDk3LjYzMiAzMTEuMjI1LDk3LjYzMiAyODQuMTI3LDQwMS4yMDUgMTYyLjMxOCw0MzQuOTc1ICIvPjxwb2x5Z29uIGZpbGw9IiNGQkRFMzQiIHBvaW50cz0iMTYyLjI1LDQwOC43ODcgMjYwLjY3OCwzODEuNSAyODMuODM2LDEyMi4wODMgMTYyLjI1LDEyMi4wODMgIi8+PHBvbHlnb24gZmlsbD0iI0VCRUJFQiIgcG9pbnRzPSIxNjIuMTkzLDMzMS40MjYgMTYyLjAzMSwzMzEuNDczIDEyMC41NTksMzIwLjI3MiAxMTcuOTA2LDI5MC41NzUgOTcuNzU2LDI5MC41NzUgODAuNTI3LDI5MC41NzUgODUuNzQ0LDM0OS4wNDMgMTYyLjAyMSwzNzAuMjE5IDE2Mi4xOTMsMzcwLjE3ICIvPjxwb2x5Z29uIGZpbGw9IiNFQkVCRUIiIHBvaW50cz0iMTY3LjIwOSwyNzEuOTM3IDE2Ny4yMDksMjM0LjcgMTIxLjM1NSwyMzQuNyAxMjYuNzMyLDE3Ni4yNTggMTY3LjMxMiwxNzUuMTc3IDE2Ny4yMDksMTM2LjQ1NCA5My4wNjUsMTM2LjQ1NCA5MC4zMTEsMTYzLjkwMyA4MS41NTksMjYxLjkzOCA4MC42NTEsMjcxLjkzNyA5MC42ODYsMjcxLjkzNyAiLz48cG9seWdvbiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjE2Ni45NTcsMTc1LjIyOSAxNjcuMTIsMTc1LjE4MyAyMDcuNzkxLDE3Ny42MzIgMjExLjI0MiwyMTYuMDc5IDIzMS4zOTMsMjE2LjA3OSAyNDguNjIzLDIxNi4wNzkgMjQyLjEwOSwxNDQuMTMzIDE2Ny4xMjksMTM2LjQzNyAxNjYuOTU3LDEzNi40ODUgIi8+PHBvbHlsaW5lIGZpbGw9IiNGRkZGRkYiIHBvaW50cz0iMjQ0Ljc4NCwxNzUuMzQzIDI0MS41OTMsMTM2LjQ1NCAxNjIuOTksMTM2LjQ1NCAxNjIuOTksMTYwLjYwNiAxNjIuOTksMTc1LjI0NiAxNjIuOTksMTc1LjM0MyAyNDQuNzg0LDE3NS4zNDMgIi8+PHBvbHlnb24gZmlsbD0iI0ZGRkZGRiIgcG9pbnRzPSIxNjIuMDY0LDIzNC43MTggMTYyLjA2NCwyNzEuOTU0IDIwNy45MTgsMjcxLjk1NCAyMDMuNTk2LDMyMC4yNDcgMTYyLjA2NCwzMzEuNDU5IDE2Mi4wNjQsMzcwLjIwMSAyMzguNDA0LDM0OS4wNDMgMjM4Ljk2MywzNDIuNzUyIDI0Ny43MTUsMjQ0LjcxNyAyNDguNjIzLDIzNC43MTggMjM4LjU4OCwyMzQuNzE4ICIvPjxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0yNDAsMTczLjY5MyIvPjxnPjxwb2x5Z29uIGZpbGw9IiMxNTE1MTUiIHBvaW50cz0iMjE0Ljk0NSwzMC41NzEgMTkwLjI1NiwzMC41NzEgMjE1LjkzMiw1OC40MzEgMjE1LjkzMiw3MS42OTEgMTYzLjA0OSw3MS42OTEgMTYzLjA0OSw1Ni4xNjUgMTg4LjcxOSw1Ni4xNjUgMTYzLjA0OSwyOC4zMDYgMTYzLjA0OSwxNS4wMjUgMjE0Ljk0NSwxNS4wMjUgMjE0Ljk0NSwzMC41NzEgIi8+PHBhdGggZmlsbD0iIzAyMDIwMiIgZD0iTTE1My42MzEsMTUuMDV2NTYuNjE3aC00NS41NDNWNTIuOTUzaDI2LjYxM1YxNS4wNWgxOC45MjhIMTUzLjYzMXoiLz48L2c+PHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTIzOS41MSwxNzMuNjkzIi8+PC9nPjwvc3ZnPg==' },
      { name: 'AngularJS' },
      { name: 'Angular 2' },
      { name: 'HammerJS ' },
      { name: 'CSS' },
      { name: 'Git' },
      { name: 'HTML' },
      { name: 'HTML5' },
      { name: 'Jade' },
      { name: 'jQuery' },
      { name: 'MySQL' }
    ];
    return {heroes, skills};
  }
}
