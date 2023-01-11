const listElement = document.querySelector("#list");
const searchResultTitle = document.querySelector("#categoryDisplay");
function getApiResult(keyword, category) {
	var requestUrl = "https://www.loc.gov/" + category + "/?q=" + keyword + "&fo=json";
	// requesting api result
	return fetch(requestUrl).then(function (response) {
		return response.json();
	});
}

function renderResults(query, category) {
	// get the data from the api
	getApiResult(query, category).then((data) => {
		console.log({ data });
		searchResultTitle.innerText = query;
		listElement.innerHTML = "";
		data.results.forEach((result) => {
			const root = document.createElement("div");
			const header = document.createElement("h2");
			header.appendChild(document.createTextNode(result.title));
			root.appendChild(header);
			const date = document.createElement("p");
			date.appendChild(document.createTextNode("Date: " + result.date));
			if (result.subject) {
				const subjects = document.createElement("p");
				subjects.appendChild(
					document.createTextNode("Subjects: " + result.subject.join(", "))
				);
				root.appendChild(subjects);
			}
			result.description.forEach((line) => {
				const description = document.createElement("p");
				description.appendChild(document.createTextNode(line));
				root.appendChild(description);
			});
			const button = document.createElement("BUTTON");
			button.appendChild(document.createTextNode("Read More"));
			button.addEventListener("click", () => {
				window.location = result.url;
			});
			root.appendChild(button);
			listElement.appendChild(root);
		});
	});
}

// we use this to more easily query specific parameters from the url
const search = new URLSearchParams(location.search);

const query = search.get("q");

const category = search.get("format");

renderResults(query, category);

document.querySelector("#submitButton").addEventListener("click", (e) => {
	e.preventDefault();
	renderResults(
		document.querySelector("#searchKeyWord").value,
		document.querySelector("#format").value
	);
});