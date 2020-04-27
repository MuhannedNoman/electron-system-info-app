// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
console.log(process)
let output = `
    <h2 class="page-header">App Version Data</h2>
    <ul class="list-group">
      <li class="list-group-item">Node: ${process.versions.node} </li>
      <li class="list-group-item">Chrome: ${process.versions.chrome} </li>
      <li class="list-group-item">Electron: ${process.versions.electron} </li>

    </ul>
    `

    document.getElementById('output').innerHTML = output