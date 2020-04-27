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

    <h2 class="page-header">System Specs</h2>
    <ul class="list-group">
      <li class="list-group-item">System Architecture: ${process.arch} </li>
      <li class="list-group-item">Processor Identifier: ${process.env.PROCESSOR_IDENTIFIER} </li>
      <li class="list-group-item">Printer: ${process.env.PRINTER} </li>
    </ul>

    <h2 class="page-header">System Memroy</h2>
    <ul class="list-group">
      <li class="list-group-item">Total: ${process.getSystemMemoryInfo().total} </li>
      <li class="list-group-item">Free: ${process.getSystemMemoryInfo().free} </li>
      <li class="list-group-item">Swap Total: ${process.getSystemMemoryInfo().swapTotal} </li>
      <li class="list-group-item">Swap Free: ${process.getSystemMemoryInfo().swapFree} </li>
    </ul>

    <h2 class="page-header">Computer Info</h2>
    <ul class="list-group">
      <li class="list-group-item">Computer Name: ${process.env.USERDOMAIN} </li>
      <li class="list-group-item">Username: ${process.env.USERNAME} </li>
      <li class="list-group-item">User Home Path: ${process.env.HOME} </li>
      <li class="list-group-item">System Drive: ${process.env.SYSTEMDRIVE} </li>
      <li class="list-group-item">System Root: ${process.env.SYSTEMROOT} </li>
    </ul>
    `

    document.getElementById('output').innerHTML = output