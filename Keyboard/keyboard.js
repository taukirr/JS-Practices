const insert = document.getElementById('insert')

window.addEventListener('keydown', function(e){
    insert.innerHTML = `<div class=color>
    <table style="width:100%; border: 2px solid white;">
  <tr>
    <th>key</th>
    <th>key code</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key === " " ? "space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
    </div>`
})