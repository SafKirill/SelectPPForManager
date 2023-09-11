const questionnairesRequstURL = "https://rarus-dfis.corp.rarus-cloud.ru/quize_1c_products/odata/standard.odata/Catalog_%D0%90%D0%BD%D0%BA%D0%B5%D1%82%D1%8B?$format=json"

let body = {}
let GUID = ''


function CheckConnection(method, url, quid, body = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        url += quid
        xhr.open(method, url)
        xhr.responseType = 'json'
        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response)
            } else {
                resolve(xhr.response)
            }
        }

        xhr.onerror = () => {
            reject(xhr.response)
        }
        if (body == null) {
            xhr.send()
        } else {
            xhr.send(JSON.stringify(body))
        }

    })

}

$.ajax({
    url: questionnairesRequstURL,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    type: "GET", /* or type:"GET" or type:"PUT" */
    dataType: "json",
    data: {
    },
    success: function (result) {
        console.log(result);
    },
    error: function () {
        console.log("error");
    }
});

function getQuestionnaires() {
    CheckConnection('GET', questionnairesRequstURL, GUID)
        .then(function (response) {
            addQuestionnaires(response.value);
        })
        .catch(err => console.log(err));
}

//getQuestionnaires()