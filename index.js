var myModal = document.getElementById('myModal')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})


function addQuestionnaires(dataJson) {
  let questionnaries = document.getElementById("questionnaries");
  for (let i in dataJson) {
    let div = document.createElement('div');
    div.id = dataJson[i].Ref_Key;
    div.innerHTML = `<tr>
                        <td>${dataJson[i].ДатаСоздания}</td>
                        <th class="vl">&nbsp;</th>
                        <td>${dataJson[i].Description}</td>
                    </tr>`
    questionnaries.append(div);
  }
}